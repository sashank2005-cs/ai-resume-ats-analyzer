import { motion } from "framer-motion";
import { BrainCircuit } from "lucide-react";

function LoadingOverlay() {
  const steps = [
    "Reading Resume...",
    "Extracting Information...",
    "Detecting Candidate Domain...",
    "Analyzing ATS Compatibility...",
    "Evaluating Skills...",
    "Generating AI Suggestions...",
    "Preparing Dashboard...",
  ];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-3xl shadow-2xl p-10 w-[92%] max-w-lg"
      >

        <div className="flex justify-center mb-6">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center"
          >

            <BrainCircuit
              size={42}
              className="text-indigo-600"
            />

          </motion.div>

        </div>

        <h2 className="text-3xl font-bold text-center text-slate-900">
          AI is Analyzing...
        </h2>

        <p className="text-center text-slate-500 mt-2">
          Please wait while we generate your ATS report.
        </p>

        <div className="mt-8 space-y-4">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -25 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.45,
              }}
              className="flex items-center gap-4"
            >

              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: index * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-indigo-600"
              />

              <p className="text-slate-700">
                {step}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </div>
  );
}

export default LoadingOverlay;