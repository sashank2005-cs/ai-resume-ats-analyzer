import { motion } from "framer-motion";

function FloatingOrbs() {
  const particles = [
    {
      left: "8%",
      top: "18%",
      size: 5,
      duration: 8,
      delay: 0,
    },
    {
      left: "18%",
      top: "62%",
      size: 4,
      duration: 10,
      delay: 1.5,
    },
    {
      left: "29%",
      top: "30%",
      size: 3,
      duration: 9,
      delay: 0.8,
    },
    {
      left: "42%",
      top: "72%",
      size: 5,
      duration: 11,
      delay: 2,
    },
    {
      left: "58%",
      top: "20%",
      size: 4,
      duration: 8,
      delay: 1,
    },
    {
      left: "68%",
      top: "58%",
      size: 3,
      duration: 12,
      delay: 2.5,
    },
    {
      left: "78%",
      top: "27%",
      size: 5,
      duration: 10,
      delay: 0.5,
    },
    {
      left: "89%",
      top: "70%",
      size: 4,
      duration: 9,
      delay: 1.8,
    },
    {
      left: "93%",
      top: "39%",
      size: 3,
      duration: 11,
      delay: 3,
    },
    {
      left: "12%",
      top: "83%",
      size: 3,
      duration: 10,
      delay: 2.2,
    },
  ];

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Large left ambient orb */}
      <motion.div
        className="
          absolute
          left-[-10rem]
          top-[18%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-gradient-to-br
          from-indigo-500/20
          via-violet-500/10
          to-transparent
          blur-[90px]
        "
        animate={{
          x: [0, 70, 25, 0],
          y: [0, -35, 55, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large right cyan orb */}
      <motion.div
        className="
          absolute
          right-[-11rem]
          top-[30%]
          h-[34rem]
          w-[34rem]
          rounded-full
          bg-gradient-to-bl
          from-cyan-400/15
          via-blue-500/10
          to-transparent
          blur-[100px]
        "
        animate={{
          x: [0, -80, -20, 0],
          y: [0, 50, -30, 0],
          scale: [0.95, 1.1, 1, 0.95],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Upper violet orb */}
      <motion.div
        className="
          absolute
          left-[55%]
          top-[-8rem]
          h-[22rem]
          w-[22rem]
          rounded-full
          bg-violet-500/15
          blur-[95px]
        "
        animate={{
          x: [-30, 60, -30],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Lower emerald accent */}
      <motion.div
        className="
          absolute
          bottom-[-8rem]
          left-[28%]
          h-[24rem]
          w-[24rem]
          rounded-full
          bg-emerald-400/10
          blur-[100px]
        "
        animate={{
          x: [0, 80, 20, 0],
          y: [0, -50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative orbital ring - left */}
      <motion.div
        className="
          absolute
          left-[7%]
          top-[22%]
          h-40
          w-40
          rounded-full
          border
          border-indigo-400/10
        "
        animate={{
          rotate: [0, 360],
          scale: [1, 1.08, 1],
        }}
        transition={{
          rotate: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div
          className="
            absolute
            left-1/2
            top-[-4px]
            h-2
            w-2
            -translate-x-1/2
            rounded-full
            bg-indigo-400
            shadow-[0_0_18px_rgba(129,140,248,0.9)]
          "
        />
      </motion.div>

      {/* Decorative orbital ring - right */}
      <motion.div
        className="
          absolute
          right-[9%]
          top-[58%]
          h-28
          w-28
          rounded-full
          border
          border-cyan-400/10
        "
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="
            absolute
            right-[-3px]
            top-1/2
            h-1.5
            w-1.5
            -translate-y-1/2
            rounded-full
            bg-cyan-300
            shadow-[0_0_16px_rgba(103,232,249,0.9)]
          "
        />
      </motion.div>

      {/* Floating energy particles */}
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="
            absolute
            rounded-full
            bg-indigo-300/70
            shadow-[0_0_14px_rgba(165,180,252,0.75)]
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -22, 8, 0],
            x: [0, 8, -5, 0],
            opacity: [0.15, 0.85, 0.35, 0.15],
            scale: [0.8, 1.3, 0.9, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Soft hero halo */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[28%]
          h-[24rem]
          w-[24rem]
          -translate-x-1/2
          rounded-full
          border
          border-violet-400/10
        "
        animate={{
          scale: [0.85, 1.15, 0.85],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          absolute
          left-1/2
          top-[28%]
          h-[18rem]
          w-[18rem]
          -translate-x-1/2
          rounded-full
          border
          border-cyan-300/10
        "
        animate={{
          scale: [1.1, 0.9, 1.1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle foreground light wash */}
      <div
        className="
          absolute
          inset-x-0
          top-[10%]
          h-[45rem]
          bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.035),transparent_65%)]
        "
      />
    </div>
  );
}

export default FloatingOrbs;