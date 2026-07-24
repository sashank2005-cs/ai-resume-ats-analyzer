import { useRef, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import LoadingOverlay from "./LoadingOverlay";

import {
  UploadCloud,
  FileText,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function UploadBox({ setAnalysis }) {
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (file.type !== "application/pdf") {
      setSelectedFile(null);
      setError("Only PDF resumes are supported.");
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please choose a resume first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const formData = new FormData();
      formData.append("resume", selectedFile);

      const response = await axios.post(
    "https://ai-resume-ats-analyzer-7p3g.onrender.com/api/resume/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.analysis) {
        setAnalysis(response.data.analysis);

        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }, 400);
      }
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
          "Unable to analyze the resume."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingOverlay />}

      <section
        id="upload"
        className="py-24 bg-gradient-to-b from-white to-slate-50 px-6"
      >
        <div className="max-w-5xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >

            <span className="inline-block bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full font-semibold">
              AI Resume Analysis
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Upload Your Resume
            </h2>

            <p className="mt-5 text-lg text-slate-600 max-w-2xl mx-auto">
              Upload your latest resume and receive an ATS compatibility
              report, AI-powered suggestions, strengths, weaknesses and
              professional feedback in seconds.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            viewport={{ once: true }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            className={`rounded-3xl border-2 transition-all duration-300 p-12 shadow-xl

            ${
              dragging
                ? "border-indigo-600 bg-indigo-50"
                : "border-dashed border-slate-300 bg-white"
            }`}
          >

            <input
              ref={inputRef}
              type="file"
              hidden
              accept=".pdf"
              onChange={(e) => handleFile(e.target.files[0])}
            />

            <div className="flex flex-col items-center">

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center"
              >

                <UploadCloud
                  size={50}
                  className="text-indigo-600"
                />

              </motion.div>

              <h3 className="mt-8 text-3xl font-bold text-slate-900">
                Drag & Drop Resume
              </h3>

              <p className="mt-4 text-slate-500 text-center max-w-lg leading-7">
                Supports PDF files only. Our AI securely analyzes your
                resume and generates recruiter-level ATS insights.
              </p>

              <button
                onClick={() => inputRef.current.click()}
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 transition text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Browse Resume
              </button>

              {selectedFile && (

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-10 w-full max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center justify-between"
                >

                  <div className="flex items-center gap-4">

                    <FileText
                      size={38}
                      className="text-indigo-600"
                    />

                    <div>

                      <h4 className="font-semibold text-slate-800">
                        {selectedFile.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>

                    </div>

                  </div>

                  <CheckCircle2
                    size={30}
                    className="text-green-500"
                  />

                </motion.div>

              )}

              {error && (

                <div className="mt-8 w-full max-w-xl rounded-xl border border-red-200 bg-red-50 px-5 py-4 flex items-center gap-3">

                  <AlertCircle
                    className="text-red-600"
                    size={22}
                  />

                  <span className="text-red-600 font-medium">
                    {error}
                  </span>

                </div>

              )}
                            <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                onClick={handleUpload}
                className={`mt-10 w-full max-w-xl rounded-2xl py-4 text-lg font-semibold transition-all duration-300 shadow-lg ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                }`}
              >
                Analyze Resume
              </motion.button>

              <p className="mt-6 text-sm text-slate-500 text-center max-w-xl leading-7">
                Your resume is processed securely for AI analysis. Uploaded
                files are not permanently stored on our servers.
              </p>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">

              <div className="text-4xl mb-4">⚡</div>

              <h3 className="text-xl font-bold text-slate-900">
                Instant Analysis
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Receive a detailed ATS report within seconds after uploading
                your resume.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">

              <div className="text-4xl mb-4">🤖</div>

              <h3 className="text-xl font-bold text-slate-900">
                AI Powered
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Powered by Groq AI to provide recruiter-level insights and
                actionable recommendations.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100">

              <div className="text-4xl mb-4">🌍</div>

              <h3 className="text-xl font-bold text-slate-900">
                Multi-Domain Support
              </h3>

              <p className="mt-3 text-slate-600 leading-7">
                Supports Software, Finance, Medical, Civil, Mechanical,
                Electronics, HR, MBA, Law, Marketing and many other
                professional domains.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

    </>
  );
}

export default UploadBox;