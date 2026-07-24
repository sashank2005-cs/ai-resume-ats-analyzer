import { motion } from "framer-motion";
import {
  Target,
  SearchCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

function FloatingAICards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-40">

      {/* ATS Score Card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          x: { duration: 0.6, delay: 0.4 },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          left-[1%]
          top-[15%]
          hidden
          min-w-[155px]
          rounded-2xl
          border
          border-white/15
          bg-slate-950/45
          p-4
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          sm:block
          lg:left-[2%]
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10">
            <Target
              size={20}
              className="text-emerald-300"
            />
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              ATS Match
            </p>

            <p className="text-xl font-bold text-white">
              94%
            </p>
          </div>
        </div>

        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{
              duration: 1.4,
              delay: 1,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400"
          />
        </div>
      </motion.div>

      {/* Skills Detected Card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 9, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          x: { duration: 0.6, delay: 0.7 },
          y: {
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          right-[1%]
          top-[18%]
          hidden
          min-w-[165px]
          rounded-2xl
          border
          border-white/15
          bg-slate-950/45
          p-4
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          sm:block
          lg:right-[2%]
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
            <SearchCheck
              size={20}
              className="text-blue-300"
            />
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Skills Detected
            </p>

            <p className="text-xl font-bold text-white">
              18+
            </p>
          </div>
        </div>

        <p className="mt-2 text-xs text-emerald-300">
          +6 relevant keywords
        </p>
      </motion.div>

      {/* AI Analysis Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: -25,
          y: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, 7, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1 },
          x: { duration: 0.6, delay: 1 },
          y: {
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-[12%]
          left-[3%]
          hidden
          min-w-[180px]
          rounded-2xl
          border
          border-white/15
          bg-slate-950/45
          p-4
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          md:block
        "
      >
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-violet-400/10">
            <Sparkles
              size={20}
              className="text-violet-300"
            />

            <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-emerald-400">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400" />
            </span>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400">
              AI Analysis
            </p>

            <p className="text-sm font-semibold text-white">
              Complete
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Resume intelligence ready
        </div>
      </motion.div>

      {/* Optimization Card */}
      <motion.div
        initial={{
          opacity: 0,
          x: 25,
          y: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay: 1.2 },
          x: { duration: 0.6, delay: 1.2 },
          y: {
            duration: 4.3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="
          absolute
          bottom-[10%]
          right-[3%]
          hidden
          min-w-[175px]
          rounded-2xl
          border
          border-white/15
          bg-slate-950/45
          p-4
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          md:block
        "
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
            <TrendingUp
              size={20}
              className="text-cyan-300"
            />
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-wider text-slate-400">
              Optimization
            </p>

            <p className="text-sm font-semibold text-white">
              High Potential
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Improvement
          </span>

          <span className="font-semibold text-cyan-300">
            +27%
          </span>
        </div>
      </motion.div>

    </div>
  );
}

export default FloatingAICards;