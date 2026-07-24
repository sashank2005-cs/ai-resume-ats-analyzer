import { motion } from "framer-motion";

function Aurora() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main indigo aurora */}
      <motion.div
        className="
          absolute
          -top-[20%]
          left-[5%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-indigo-500/20
          blur-[130px]
        "
        animate={{
          x: [0, 90, -40, 0],
          y: [0, 60, 110, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.35, 0.55, 0.4, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet aurora */}
      <motion.div
        className="
          absolute
          top-[5%]
          right-[-10%]
          h-[42rem]
          w-[42rem]
          rounded-full
          bg-violet-500/20
          blur-[145px]
        "
        animate={{
          x: [0, -100, -40, 0],
          y: [0, 80, -40, 0],
          scale: [1, 0.9, 1.15, 1],
          opacity: [0.3, 0.5, 0.35, 0.3],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Cyan illumination */}
      <motion.div
        className="
          absolute
          top-[35%]
          left-[35%]
          h-[32rem]
          w-[32rem]
          rounded-full
          bg-cyan-400/15
          blur-[140px]
        "
        animate={{
          x: [-60, 100, 30, -60],
          y: [50, -30, 90, 50],
          scale: [0.9, 1.15, 1, 0.9],
          opacity: [0.2, 0.4, 0.3, 0.2],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lower blue glow */}
      <motion.div
        className="
          absolute
          bottom-[-20%]
          left-[-10%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-blue-500/15
          blur-[150px]
        "
        animate={{
          x: [0, 100, 40, 0],
          y: [0, -60, 20, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Emerald accent */}
      <motion.div
        className="
          absolute
          bottom-[5%]
          right-[5%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-emerald-400/10
          blur-[130px]
        "
        animate={{
          x: [0, -80, 20, 0],
          y: [0, -40, -100, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.15, 0.3, 0.2, 0.15],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Wide aurora ribbon */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[8%]
          h-[18rem]
          w-[80rem]
          -translate-x-1/2
          rotate-[-8deg]
          rounded-[100%]
          bg-gradient-to-r
          from-transparent
          via-violet-400/10
          to-transparent
          blur-[80px]
        "
        animate={{
          rotate: [-8, -3, -10, -8],
          scaleX: [1, 1.12, 0.96, 1],
          opacity: [0.3, 0.55, 0.35, 0.3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Premium top lighting */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-[32rem]
          bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,0.16),transparent_65%)]
        "
      />

      {/* Center atmosphere */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_50%_40%,rgba(34,211,238,0.05),transparent_35%)]
        "
      />
    </div>
  );
}

export default Aurora;