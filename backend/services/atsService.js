const calculateATS = (resumeText) => {
  const text = resumeText.toLowerCase();

  let score = 0;
  const strengths = [];
  const weaknesses = [];

  // Contact Information
  if (/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/.test(text)) {
    score += 5;
    strengths.push("Email found");
  } else {
    weaknesses.push("Missing email address");
  }

  if (/(\+?\d{1,3}[- ]?)?\d{10}/.test(text)) {
    score += 5;
    strengths.push("Phone number found");
  } else {
    weaknesses.push("Missing phone number");
  }

  // Resume Sections
  if (text.includes("skills")) {
    score += 20;
    strengths.push("Skills section present");
  } else {
    weaknesses.push("Missing skills section");
  }

  if (text.includes("education")) {
    score += 15;
    strengths.push("Education section present");
  } else {
    weaknesses.push("Missing education section");
  }

  if (text.includes("experience")) {
    score += 20;
    strengths.push("Experience section present");
  } else {
    weaknesses.push("Missing experience section");
  }

  if (text.includes("projects")) {
    score += 15;
    strengths.push("Projects section present");
  } else {
    weaknesses.push("Missing projects section");
  }

  if (text.includes("certifications")) {
    score += 5;
    strengths.push("Certifications included");
  } else {
    weaknesses.push("Consider adding certifications");
  }

  // Resume Length
  if (resumeText.length > 1000) {
    score += 10;
    strengths.push("Good resume content length");
  } else {
    weaknesses.push("Resume content is too short");
  }

  // Prevent score from exceeding 100
  score = Math.min(score, 100);

  let remarks = "";

  if (score >= 90) {
    remarks = "Excellent ATS Score";
  } else if (score >= 75) {
    remarks = "Strong Resume";
  } else if (score >= 60) {
    remarks = "Average Resume";
  } else if (score >= 40) {
    remarks = "Needs Significant Improvement";
  } else {
    remarks = "High Chances of Rejection";
  }

  return {
    score,
    remarks,
    strengths,
    weaknesses,
  };
};

module.exports = calculateATS;