const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const analyzeResume = async (resumeText) => {
  try {
    const prompt = `
You are an Expert ATS Recruiter, HR Manager, and Resume Reviewer.

The uploaded resume may belong to ANY profession.

Examples include:

- Software Engineering
- Data Science
- Artificial Intelligence
- Electronics
- Electrical
- Mechanical
- Civil
- Finance
- Accounting
- Banking
- Marketing
- HR
- MBA
- Medical
- Nursing
- Pharmacy
- Law
- Teaching
- Research
- Architecture
- Aviation
- Hospitality
- Government
- Any professional field

Instructions:

1. Detect the candidate's profession/domain.
2. Evaluate ONLY according to that profession.
3. Never compare every resume with Software Engineering.
4. Extract candidate information accurately.
5. Extract ALL technical skills, tools, programming languages, frameworks, databases, software, platforms, certifications, and technologies mentioned in the resume.
6. Generate ATS Score out of 100.
7. Generate ATS Remark.
8. Write a professional summary in 3-5 lines.
9. Mention strengths.
10. Mention weaknesses.
11. Give ATS improvement suggestions.

IMPORTANT:

- Return ONLY valid JSON.
- Do NOT use markdown.
- Do NOT wrap JSON inside \`\`\`.
- Do NOT write explanations.
- Every field is mandatory.
- If information is unavailable use empty string "" or [].

JSON Format:

{
  "candidateName": "",
  "email": "",
  "phone": "",
  "domain": "",
  "atsScore": 0,
  "atsRemarks": "",
  "summary": "",
  "skills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.3,
    });

    const response = completion.choices[0].message.content;

    console.log("\n========== RAW AI RESPONSE ==========\n");
    console.log(response);
    console.log("\n=====================================\n");

    const jsonStart = response.indexOf("{");
    const jsonEnd = response.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("No JSON object found in AI response.");
    }

    const cleanedResponse = response
      .substring(jsonStart, jsonEnd + 1)
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    console.log("\n========== CLEANED JSON ==========\n");
    console.log(cleanedResponse);
    console.log("\n==================================\n");

    const parsed = JSON.parse(cleanedResponse);

    console.log("\n========== PARSED OBJECT ==========\n");
    console.log(parsed);
    console.log("\n===================================\n");

    return parsed;
  } catch (error) {
    console.error("AI Analysis Error:", error);

    return {
      candidateName: "Unknown",
      email: "Not Found",
      phone: "Not Found",
      domain: "Unknown",
      atsScore: 0,
      atsRemarks: "Analysis Failed",
      summary: "",
      skills: [],
      strengths: [],
      weaknesses: [],
      suggestions: [
        "AI analysis could not be completed. Please try again.",
      ],
    };
  }
};

module.exports = analyzeResume;