import { motion } from "framer-motion";

function Grid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Main futuristic grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.12]
          [background-image:linear-gradient(to_right,rgba(99,102,241,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.16)_1px,transparent_1px)]
          [background-size:64px_64px]
        "
      />

      {/* Smaller secondary grid for depth */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(to_right,rgba(56,189,248,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.18)_1px,transparent_1px)]
          [background-size:16px_16px]
        "
      />

      {/* Perspective grid near hero area */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[18%]
          h-[42rem]
          w-[90rem]
          max-w-[160vw]
          -translate-x-1/2
          opacity-[0.10]
          [background-image:linear-gradient(to_right,rgba(139,92,246,0.28)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.22)_1px,transparent_1px)]
          [background-size:80px_80px]
          [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]
        "
        animate={{
          y: [0, 18, 0],
          opacity: [0.07, 0.13, 0.07],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Central vertical energy line */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[38rem]
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-indigo-400/20
          to-transparent
        "
      />

      {/* Horizontal hero illumination */}
      <div
        className="
          absolute
          left-1/2
          top-[32%]
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-cyan-400/15
          to-transparent
        "
      />

      {/* Glowing grid intersection */}
      <motion.div
        className="
          absolute
          left-1/2
          top-[32%]
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/70
          shadow-[0_0_24px_rgba(34,211,238,0.7)]
        "
        animate={{
          opacity: [0.25, 0.9, 0.25],
          scale: [0.8, 1.4, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid visibility mask */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_5%,var(--bg)_82%)]
          opacity-70
        "
      />

      {/* Top fade */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-40
          bg-gradient-to-b
          from-[var(--bg)]
          via-transparent
          to-transparent
          opacity-40
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-72
          bg-gradient-to-t
          from-[var(--bg)]
          via-[var(--bg)]/50
          to-transparent
        "
      />
    </div>
  );
}

export default Grid;