const Resume = require("../models/Resume");
const parseResume = require("../utils/resumeParser");
const calculateATS = require("../services/atsService");
const analyzeResume = require("../services/aiService");

const uploadResume = async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a PDF resume.",
      });
    }

    const filePath = req.file.path;

    // Extract text from PDF
    const resumeText = await parseResume(filePath);

    // Rule-based ATS analysis
    const atsResult = calculateATS(resumeText);

    // AI analysis
    const aiAnalysis = await analyzeResume(resumeText);

    // Merge strengths and remove duplicates
    const strengths = [
      ...new Set([
        ...(atsResult.strengths || []),
        ...(aiAnalysis.strengths || []),
      ]),
    ];

    // Merge weaknesses and remove duplicates
    const weaknesses = [
      ...new Set([
        ...(atsResult.weaknesses || []),
        ...(aiAnalysis.weaknesses || []),
      ]),
    ];

    // Save analysis to MongoDB
    const resume = await Resume.create({
      candidateName: aiAnalysis.candidateName,
      email: aiAnalysis.email,
      phone: aiAnalysis.phone,

      resumeFile: filePath,

      domain: aiAnalysis.domain,

      atsScore: atsResult.score,
      atsRemarks: atsResult.remarks,

      summary: aiAnalysis.summary,

      skills: aiAnalysis.skills || [],

      strengths,

      weaknesses,

      suggestions: aiAnalysis.suggestions || [],
    });

    // Send response
    return res.status(201).json({
      success: true,
      message: "Resume analyzed successfully.",

      analysis: {
        candidateName: aiAnalysis.candidateName,
        email: aiAnalysis.email,
        phone: aiAnalysis.phone,

        domain: aiAnalysis.domain,

        atsScore: atsResult.score,
        atsRemarks: atsResult.remarks,

        summary: aiAnalysis.summary,

        skills: aiAnalysis.skills || [],

        strengths,

        weaknesses,

        suggestions: aiAnalysis.suggestions || [],
      },

      data: resume,
    });
  } catch (error) {
    console.error("Resume Upload Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = {
  uploadResume,
};