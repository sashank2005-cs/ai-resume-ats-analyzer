import { motion } from "framer-motion";
import {
  Gauge,
  BrainCircuit,
  SearchCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: "100",
    label: "Point ATS Scoring",
    description: "Clear compatibility score",
  },
  {
    icon: SearchCheck,
    value: "Smart",
    label: "Skill Detection",
    description: "Extracts relevant resume skills",
  },
  {
    icon: BrainCircuit,
    value: "AI",
    label: "Resume Intelligence",
    description: "Strengths, gaps & recommendations",
  },
  {
    icon: Sparkles,
    value: "Instant",
    label: "AI Insights",
    description: "Actionable resume feedback",
  },
];

function Stats() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[28rem]
          w-[55rem]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-indigo-500/[0.07]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mb-12 text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-400/20
              bg-indigo-400/[0.07]
              px-4
              py-2
            "
          >
            <Sparkles
              size={14}
              className="text-violet-400"
            />

            <span
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-indigo-400
              "
            >
              Intelligent Analysis
            </span>
          </div>

          <h2
            className="
              mt-5
              text-3xl
              font-black
              tracking-[-0.035em]
              text-[var(--text)]
              sm:text-4xl
            "
          >
            Built to Understand Your{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-500
                via-violet-500
                to-cyan-400
                bg-clip-text
                text-transparent
              "
            >
              Resume
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-[var(--secondary)]
              sm:text-base
            "
          >
            From ATS compatibility to AI-powered career insights,
            every analysis focuses on information that can help
            strengthen your resume.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  border-[var(--border)]
                  bg-[var(--card-bg)]
                  p-7
                  text-center
                  shadow-[var(--shadow)]
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:border-indigo-400/25
                "
              >
                {/* Hover glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-32
                    w-32
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-indigo-500/10
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-violet-500/20
                  "
                />

                <motion.div
                  whileHover={{
                    rotate: 4,
                    scale: 1.06,
                  }}
                  className="
                    relative
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-indigo-400/15
                    bg-gradient-to-br
                    from-indigo-500/15
                    to-violet-500/10
                    text-indigo-400
                    shadow-[0_10px_30px_rgba(99,102,241,0.10)]
                  "
                >
                  <Icon size={25} />
                </motion.div>

                <h3
                  className="
                    relative
                    mt-6
                    text-3xl
                    font-black
                    tracking-[-0.035em]
                    text-[var(--text)]
                  "
                >
                  {item.value}
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    font-bold
                    text-[var(--text)]
                  "
                >
                  {item.label}
                </p>

                <p
                  className="
                    mt-2
                    text-xs
                    leading-5
                    text-[var(--secondary)]
                  "
                >
                  {item.description}
                </p>

                <motion.div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-indigo-500
                    via-violet-500
                    to-cyan-400
                  "
                  whileHover={{
                    width: "55%",
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;