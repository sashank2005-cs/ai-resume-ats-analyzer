import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";

function NeuralCore() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center lg:h-[520px]">

      {/* Large background aura */}
      <motion.div
        className="
          absolute
          h-[330px]
          w-[330px]
          rounded-full
          bg-blue-500/20
          blur-[90px]
          lg:h-[400px]
          lg:w-[400px]
        "
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer rotating ring */}
      <motion.div
        className="
          absolute
          h-[310px]
          w-[310px]
          rounded-full
          border
          border-blue-400/20
          lg:h-[380px]
          lg:w-[380px]
        "
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="
            absolute
            left-1/2
            top-[-5px]
            h-3
            w-3
            -translate-x-1/2
            rounded-full
            bg-cyan-400
            shadow-[0_0_22px_rgba(34,211,238,1)]
          "
        />

        <div
          className="
            absolute
            bottom-[30px]
            right-[25px]
            h-2
            w-2
            rounded-full
            bg-violet-400
            shadow-[0_0_18px_rgba(167,139,250,1)]
          "
        />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="
          absolute
          h-[245px]
          w-[245px]
          rounded-full
          border
          border-dashed
          border-indigo-400/30
          lg:h-[300px]
          lg:w-[300px]
        "
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Inner ring */}
      <motion.div
        className="
          absolute
          h-[190px]
          w-[190px]
          rounded-full
          border
          border-cyan-300/20
          lg:h-[220px]
          lg:w-[220px]
        "
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Core */}
      <motion.div
        className="
          relative
          z-20
          flex
          h-[145px]
          w-[145px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/10
          shadow-[0_0_70px_rgba(59,130,246,0.35)]
          backdrop-blur-2xl
          lg:h-[175px]
          lg:w-[175px]
        "
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            "0 0 50px rgba(59,130,246,0.25)",
            "0 0 90px rgba(99,102,241,0.50)",
            "0 0 50px rgba(59,130,246,0.25)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <BrainCircuit
            size={54}
            strokeWidth={1.5}
            className="text-cyan-300"
          />
        </motion.div>

        <span className="mt-2 text-xs font-semibold tracking-[0.22em] text-blue-200">
          AI CORE
        </span>

        <div className="mt-2 flex items-center gap-1 text-[10px] text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          ONLINE
        </div>
      </motion.div>

      {/* Orbiting icon 1 */}
      <motion.div
        className="
          absolute
          left-[10%]
          top-[24%]
          z-30
          rounded-2xl
          border
          border-white/10
          bg-white/10
          p-3
          shadow-xl
          backdrop-blur-xl
          sm:left-[16%]
        "
        animate={{
          y: [0, -12, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <CheckCircle2
          size={22}
          className="text-emerald-300"
        />
      </motion.div>

      {/* Orbiting icon 2 */}
      <motion.div
        className="
          absolute
          right-[10%]
          top-[28%]
          z-30
          rounded-2xl
          border
          border-white/10
          bg-white/10
          p-3
          shadow-xl
          backdrop-blur-xl
          sm:right-[16%]
        "
        animate={{
          y: [0, 12, 0],
          rotate: [2, -2, 2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles
          size={22}
          className="text-violet-300"
        />
      </motion.div>

      {/* Orbiting icon 3 */}
      <motion.div
        className="
          absolute
          bottom-[15%]
          right-[22%]
          z-30
          rounded-2xl
          border
          border-white/10
          bg-white/10
          p-3
          shadow-xl
          backdrop-blur-xl
        "
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Zap
          size={21}
          className="text-yellow-300"
        />
      </motion.div>

      {/* Decorative particles */}
      <motion.span
        className="absolute left-[25%] top-[18%] h-1.5 w-1.5 rounded-full bg-cyan-300"
        animate={{
          opacity: [0.2, 1, 0.2],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="absolute bottom-[25%] left-[20%] h-1 w-1 rounded-full bg-violet-300"
        animate={{
          opacity: [1, 0.2, 1],
          scale: [1, 2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      <motion.span
        className="absolute right-[25%] top-[15%] h-1 w-1 rounded-full bg-blue-300"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default NeuralCore;