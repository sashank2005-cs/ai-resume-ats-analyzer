require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/mongo");
const resumeRoutes = require("./routes/resumeRoutes");

console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY ? "Loaded ✅" : "Not Loaded ❌");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Serve uploaded resumes
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/resume", resumeRoutes);

app.get("/", (req, res) => {
  res.send("Resume ATS Analyzer Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});