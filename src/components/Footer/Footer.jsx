import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-xl">
                ✨
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  ATS Analyzer
                </h2>

                <p className="text-slate-400 text-sm">
                  AI Resume Review Platform
                </p>
              </div>
            </div>

            <p className="mt-6 leading-8 text-slate-400">
              Analyze resumes using AI and improve ATS compatibility with
              recruiter-level insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">
              <a href="#" className="text-slate-400 hover:text-white">
                Home
              </a>

              <a href="#features" className="text-slate-400 hover:text-white">
                Features
              </a>

              <a href="#upload" className="text-slate-400 hover:text-white">
                Upload Resume
              </a>

              <a
                href="#testimonials"
                className="text-slate-400 hover:text-white"
              >
                Testimonials
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4">
              <p>📧 your@email.com</p>
              <p>💻 github.com/yourusername</p>
              <p>💼 linkedin.com/in/yourusername</p>
            </div>
          </motion.div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          © {year} ATS Analyzer • Built with React, Node.js, Express, MongoDB & Groq AI.
        </div>
      </div>
    </footer>
  );
}

export default Footer;