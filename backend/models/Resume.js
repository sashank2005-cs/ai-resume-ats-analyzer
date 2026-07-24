const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    candidateName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    domain: {
      type: String,
      default: "Unknown",
    },

    atsScore: {
      type: Number,
      default: 0,
    },

    atsRemarks: {
      type: String,
      default: "Not Evaluated",
    },

    summary: {
      type: String,
      default: "",
    },

    skills: {
      type: [String],
      default: [],
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    suggestions: {
      type: [String],
      default: [],
    },

    resumeFile: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);