# 🚀 AI Resume ATS Analyzer

An intelligent **AI-powered Resume ATS Analyzer** built using the **MERN Stack and Generative AI** that evaluates resumes, generates ATS compatibility insights, detects skills, identifies strengths and weaknesses, and provides actionable recommendations through an interactive analytics dashboard.

## 🌐 Live Application

👉 https://ai-resume-ats-analyzer-1-jy9o.onrender.com

---

## 📌 Project Overview

Modern recruitment systems frequently use **Applicant Tracking Systems (ATS)** to screen resumes before they reach recruiters.

Many candidates, however, have limited visibility into how effectively their resume communicates their skills, experience, projects, education, and overall professional profile.

The **AI Resume ATS Analyzer** addresses this problem by combining full-stack web development with **Generative AI-based resume intelligence**.

Users can upload a resume in PDF format and receive a structured analysis containing an ATS score, detected professional domain, candidate information, skills, strengths, weaknesses, professional summary, and personalized improvement recommendations.

The application also allows users to generate and download a professionally structured **ATS Analysis Report in PDF format**.

---

## ✨ Key Features

- 📄 **PDF Resume Upload**
  - Upload resumes directly through a responsive drag-and-drop interface.

- 🤖 **AI-Powered Resume Analysis**
  - Uses Generative AI to perform contextual analysis of resume content.

- 🎯 **ATS Compatibility Score**
  - Generates an overall ATS-oriented resume score and performance assessment.

- 🧠 **Professional Domain Detection**
  - Automatically identifies the candidate's likely professional/technical domain.

- 👤 **Candidate Information Extraction**
  - Extracts relevant candidate information from uploaded resumes.

- 🛠️ **Skill Detection**
  - Identifies technical and professional skills present in the resume.

- 💪 **Strength Analysis**
  - Highlights strong aspects of the candidate's resume and profile.

- ⚠️ **Weakness Detection**
  - Detects areas that may reduce resume quality or effectiveness.

- 💡 **AI Recommendations**
  - Generates actionable suggestions for improving the resume.

- 📝 **Professional Summary**
  - Produces an AI-generated overview of the candidate's professional profile.

- 📊 **Interactive Analysis Dashboard**
  - Presents resume intelligence through a modern, visually structured interface.

- 📥 **ATS Report Generation**
  - Generates a multi-section downloadable PDF containing the resume analysis.

- 📱 **Responsive UI**
  - Designed to work across desktop and mobile screen sizes.

- ☁️ **Cloud Deployment**
  - Frontend and backend are deployed using Render with MongoDB Atlas for cloud database services.

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Axios
- jsPDF
- jsPDF AutoTable

### Backend

- Node.js
- Express.js
- REST API
- Multer
- PDF Parsing

### Artificial Intelligence

- Groq API
- Large Language Model based resume analysis
- Prompt-based structured resume evaluation

### Database

- MongoDB Atlas
- Mongoose ODM

### Deployment & Development

- Render
- Git
- GitHub
- npm

---

## 🏗️ System Architecture

```text
                    ┌───────────────────────┐
                    │        USER           │
                    │   Uploads Resume PDF  │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │    React + Vite UI    │
                    │   Resume Upload Form  │
                    └───────────┬───────────┘
                                │
                           Axios / HTTP
                                │
                                ▼
                    ┌───────────────────────┐
                    │ Node.js + Express API │
                    │   /api/resume/upload  │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     PDF Processing    │
                    │ Resume Text Extraction│
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │      Groq AI API      │
                    │  Resume Intelligence  │
                    └───────────┬───────────┘
                                │
              ┌─────────────────┴─────────────────┐
              │                                   │
              ▼                                   ▼
    ┌─────────────────────┐            ┌─────────────────────┐
    │    MongoDB Atlas    │            │ Structured Analysis │
    │  Persistent Storage │            │     JSON Response   │
    └─────────────────────┘            └──────────┬──────────┘
                                                 │
                                                 ▼
                                      ┌─────────────────────┐
                                      │ Analysis Dashboard  │
                                      │ Score • Skills • AI │
                                      └──────────┬──────────┘
                                                 │
                                                 ▼
                                      ┌─────────────────────┐
                                      │ Downloadable ATS PDF│
                                      └─────────────────────┘