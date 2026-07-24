const fs = require("fs");
const pdfParse = require("pdf-parse");

const parseResume = async (filePath) => {
  try {
    // Read uploaded PDF from disk
    const pdfBuffer = fs.readFileSync(filePath);

    // Extract text from PDF
    const pdfData = await pdfParse(pdfBuffer);

    // Return only the extracted text
    return pdfData.text;
  } catch (error) {
    console.error("Resume parsing error:", error.message);
    throw new Error("Failed to parse resume PDF.");
  }
};

module.exports = parseResume;