import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const safeText = (value, fallback = "Not available") => {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  return String(value);
};

const safeArray = (value) => {
  return Array.isArray(value) ? value : [];
};

const generateATSReport = (analysis) => {
  if (!analysis) {
    console.error("No analysis data available for PDF generation.");
    return;
  }

  const {
    atsScore = 0,
    atsRemarks = "Resume Analyzed",
    candidateName = "Candidate",
    email = "Not available",
    phone = "Not available",
    domain = "General",
    summary = "No professional summary available.",
    skills = [],
    strengths = [],
    weaknesses = [],
    suggestions = [],
  } = analysis;

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const margin = 18;
  const contentWidth = pageWidth - margin * 2;

  let y = 20;

  /* =====================================================
     HELPERS
  ===================================================== */

  const checkPageBreak = (requiredHeight = 25) => {
    if (y + requiredHeight > pageHeight - 18) {
      doc.addPage();
      y = 20;
      addPageHeader();
    }
  };

  const addPageHeader = () => {
    doc.setFillColor(79, 70, 229);
    doc.rect(0, 0, pageWidth, 4, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(79, 70, 229);
    doc.text("ATS ANALYZER", margin, 13);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(120, 120, 135);
    doc.text(
      "AI Resume Intelligence Report",
      pageWidth - margin,
      13,
      {
        align: "right",
      }
    );

    y = 21;
  };

  const addSectionTitle = (title, subtitle = "") => {
    checkPageBreak(25);

    doc.setFillColor(245, 247, 255);
    doc.roundedRect(
      margin,
      y,
      contentWidth,
      subtitle ? 18 : 14,
      3,
      3,
      "F"
    );

    doc.setFillColor(79, 70, 229);
    doc.roundedRect(
      margin,
      y,
      3,
      subtitle ? 18 : 14,
      1,
      1,
      "F"
    );

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(25, 30, 50);
    doc.text(title, margin + 8, y + 7);

    if (subtitle) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(105, 110, 125);
      doc.text(subtitle, margin + 8, y + 13);
    }

    y += subtitle ? 24 : 20;
  };

  const addParagraph = (text) => {
    checkPageBreak(25);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(70, 75, 90);

    const lines = doc.splitTextToSize(
      safeText(text),
      contentWidth
    );

    doc.text(lines, margin, y);

    y += lines.length * 5 + 5;
  };

  const addBulletList = (items, emptyMessage) => {
    const values = safeArray(items);

    if (values.length === 0) {
      addParagraph(emptyMessage);
      return;
    }

    values.forEach((item) => {
      const lines = doc.splitTextToSize(
        safeText(item),
        contentWidth - 10
      );

      const requiredHeight = lines.length * 5 + 5;

      checkPageBreak(requiredHeight);

      doc.setFillColor(99, 102, 241);
      doc.circle(margin + 2, y - 1.2, 1.1, "F");

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(65, 70, 85);

      doc.text(lines, margin + 7, y);

      y += requiredHeight;
    });

    y += 2;
  };

  /* =====================================================
     COVER / REPORT HEADER
  ===================================================== */

  doc.setFillColor(16, 20, 45);
  doc.rect(0, 0, pageWidth, 63, "F");

  doc.setFillColor(79, 70, 229);
  doc.circle(pageWidth - 23, 17, 24, "F");

  doc.setFillColor(124, 58, 237);
  doc.circle(pageWidth - 10, 38, 18, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(165, 180, 252);
  doc.text("ATS ANALYZER", margin, 17);

  doc.setFontSize(25);
  doc.setTextColor(255, 255, 255);
  doc.text("AI Resume", margin, 31);
  doc.text("Intelligence Report", margin, 42);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(200, 205, 220);

  doc.text(
    "ATS compatibility • skills • strengths • weaknesses • AI recommendations",
    margin,
    52
  );

  y = 75;

  /* =====================================================
     SCORE CARD
  ===================================================== */

  const numericScore = Math.min(
    100,
    Math.max(0, Number(atsScore) || 0)
  );

  doc.setFillColor(247, 248, 255);
  doc.roundedRect(
    margin,
    y,
    contentWidth,
    38,
    4,
    4,
    "F"
  );

  doc.setDrawColor(225, 228, 240);
  doc.roundedRect(
    margin,
    y,
    contentWidth,
    38,
    4,
    4,
    "S"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(100, 105, 120);
  doc.text("ATS COMPATIBILITY SCORE", margin + 8, y + 10);

  doc.setFontSize(26);

  if (numericScore >= 85) {
    doc.setTextColor(16, 185, 129);
  } else if (numericScore >= 70) {
    doc.setTextColor(217, 150, 20);
  } else {
    doc.setTextColor(225, 70, 95);
  }

  doc.text(`${numericScore}%`, margin + 8, y + 25);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(30, 35, 50);

  doc.text(
    safeText(atsRemarks, "Resume Analyzed"),
    margin + 48,
    y + 17
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(105, 110, 125);

  doc.text(
    "Overall AI evaluation of resume compatibility and quality.",
    margin + 48,
    y + 25
  );

  y += 49;

  /* =====================================================
     CANDIDATE INFORMATION
  ===================================================== */

  addSectionTitle(
    "Candidate Profile",
    "Information identified from the uploaded resume"
  );

  autoTable(doc, {
    startY: y,

    head: [
      [
        "Candidate",
        "Email",
        "Phone",
        "Professional Domain",
      ],
    ],

    body: [
      [
        safeText(candidateName, "Unknown"),
        safeText(email),
        safeText(phone),
        safeText(domain, "General"),
      ],
    ],

    theme: "grid",

    styles: {
      font: "helvetica",
      fontSize: 8.5,
      cellPadding: 4,
      overflow: "linebreak",
      valign: "middle",
      textColor: [55, 60, 75],
      lineColor: [225, 228, 238],
      lineWidth: 0.2,
    },

    headStyles: {
      fillColor: [79, 70, 229],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      fontSize: 8,
    },

    alternateRowStyles: {
      fillColor: [248, 249, 253],
    },

    margin: {
      left: margin,
      right: margin,
    },
  });

  y = doc.lastAutoTable.finalY + 12;

  /* =====================================================
     PROFESSIONAL SUMMARY
  ===================================================== */

  addSectionTitle(
    "Professional Summary",
    "AI-generated overview of the candidate profile"
  );

  addParagraph(summary);

  /* =====================================================
     SKILLS
  ===================================================== */

  addSectionTitle(
    "Skills Detected",
    "Technical and professional capabilities identified by AI"
  );

  const skillValues = safeArray(skills);

  if (skillValues.length > 0) {
    const skillText = skillValues.join("   •   ");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(79, 70, 229);

    const skillLines = doc.splitTextToSize(
      skillText,
      contentWidth - 12
    );

    const boxHeight = skillLines.length * 5 + 12;

    checkPageBreak(boxHeight + 5);

    doc.setFillColor(245, 245, 255);

    doc.roundedRect(
      margin,
      y,
      contentWidth,
      boxHeight,
      3,
      3,
      "F"
    );

    doc.text(
      skillLines,
      margin + 6,
      y + 8
    );

    y += boxHeight + 8;
  } else {
    addParagraph("No skills were detected.");
  }

  /* =====================================================
     STRENGTHS
  ===================================================== */

  addSectionTitle(
    "Resume Strengths",
    "Positive signals identified during resume analysis"
  );

  addBulletList(
    strengths,
    "No specific strengths were identified."
  );

  /* =====================================================
     WEAKNESSES
  ===================================================== */

  addSectionTitle(
    "Improvement Areas",
    "Areas that may reduce resume effectiveness or ATS performance"
  );

  addBulletList(
    weaknesses,
    "No major weaknesses were detected."
  );

  /* =====================================================
     AI RECOMMENDATIONS
  ===================================================== */

  addSectionTitle(
    "AI Recommendations",
    "Actionable improvements generated from the resume analysis"
  );

  const recommendationValues = safeArray(suggestions);

  if (recommendationValues.length === 0) {
    addParagraph(
      "No additional AI recommendations are currently available."
    );
  } else {
    recommendationValues.forEach((item, index) => {
      const number = String(index + 1).padStart(2, "0");

      const lines = doc.splitTextToSize(
        safeText(item),
        contentWidth - 19
      );

      const cardHeight = Math.max(
        17,
        lines.length * 5 + 9
      );

      checkPageBreak(cardHeight + 4);

      doc.setFillColor(248, 248, 253);

      doc.roundedRect(
        margin,
        y,
        contentWidth,
        cardHeight,
        3,
        3,
        "F"
      );

      doc.setFillColor(124, 58, 237);

      doc.roundedRect(
        margin + 5,
        y + 5,
        10,
        8,
        2,
        2,
        "F"
      );

      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.setTextColor(255, 255, 255);

      doc.text(
        number,
        margin + 10,
        y + 10.3,
        {
          align: "center",
        }
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(65, 70, 85);

      doc.text(
        lines,
        margin + 20,
        y + 8
      );

      y += cardHeight + 4;
    });
  }

  /* =====================================================
     FOOTERS
  ===================================================== */

  const totalPages =
    doc.internal.getNumberOfPages();

  for (
    let pageNumber = 1;
    pageNumber <= totalPages;
    pageNumber += 1
  ) {
    doc.setPage(pageNumber);

    doc.setDrawColor(225, 228, 238);

    doc.line(
      margin,
      pageHeight - 14,
      pageWidth - margin,
      pageHeight - 14
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(130, 135, 150);

    doc.text(
      "Generated by ATS Analyzer • AI Resume Intelligence",
      margin,
      pageHeight - 8
    );

    doc.text(
      `Page ${pageNumber} of ${totalPages}`,
      pageWidth - margin,
      pageHeight - 8,
      {
        align: "right",
      }
    );
  }

  /* =====================================================
     DOWNLOAD
  ===================================================== */

  const cleanCandidateName = safeText(
    candidateName,
    "Candidate"
  )
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "_");

  doc.save(
    `${cleanCandidateName || "Candidate"}_ATS_Report.pdf`
  );
};

export default generateATSReport;