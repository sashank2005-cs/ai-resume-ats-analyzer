import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import NeuralCore from "./NeuralCore";
import FloatingAICards from "./FloatingAICards";

function Hero() {
  const scrollToUpload = () => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-76px)]
        items-center
        overflow-hidden
        px-6
        pb-16
        pt-20
        lg:px-8
        lg:pb-20
        lg:pt-24
      "
    >
      {/* Hero-only atmospheric glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[18%]
          h-[28rem]
          w-[28rem]
          rounded-full
          bg-indigo-500/10
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[5%]
          top-[20%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-400/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* ================================
              LEFT CONTENT
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: "easeOut",
            }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Premium badge */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.15,
              }}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-indigo-400/20
                bg-white/10
                px-4
                py-2
                shadow-[0_8px_35px_rgba(79,70,229,0.12)]
                backdrop-blur-xl
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-indigo-500
                  to-violet-600
                  shadow-[0_0_18px_rgba(99,102,241,0.45)]
                "
              >
                <Sparkles
                  size={14}
                  className="text-white"
                />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--text)] sm:text-sm">
                AI Powered Resume Intelligence
              </span>

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                mt-7
                max-w-4xl
                text-5xl
                font-black
                leading-[0.98]
                tracking-[-0.045em]
                text-[var(--text)]
                sm:text-6xl
                lg:text-[4.5rem]
                xl:text-[5rem]
              "
            >
              Build a Resume
              <br />

              <span
                className="
                  relative
                  inline-block
                  bg-gradient-to-r
                  from-indigo-500
                  via-violet-500
                  to-cyan-400
                  bg-clip-text
                  pb-2
                  text-transparent
                "
              >
                Recruiters Notice
              </span>
            </motion.h1>

            {/* Animated intelligence line */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="
                mt-5
                flex
                min-h-[36px]
                items-center
                gap-2
                text-lg
                font-semibold
                text-[var(--secondary)]
                sm:text-xl
              "
            >
              <Zap
                size={20}
                className="shrink-0 text-cyan-400"
              />

              <span>Powered by</span>

              <span className="font-bold text-violet-400">
                <TypeAnimation
                  sequence={[
                    "ATS Intelligence",
                    1800,
                    "Skill Detection",
                    1800,
                    "Resume Optimization",
                    1800,
                    "Recruiter-Level Insights",
                    1800,
                    "AI Career Analysis",
                    1800,
                  ]}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.45,
              }}
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-[var(--secondary)]
                sm:text-lg
              "
            >
              Turn your resume into a stronger career asset with intelligent
              ATS scoring, skill detection, professional insights, and
              actionable AI recommendations in seconds.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.55,
              }}
              className="
                mt-9
                flex
                w-full
                flex-col
                items-center
                gap-4
                sm:w-auto
                sm:flex-row
                lg:items-start
              "
            >
              <motion.button
                type="button"
                onClick={scrollToUpload}
                whileHover={{
                  y: -3,
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  overflow-hidden
                  rounded-2xl
                  bg-gradient-to-r
                  from-indigo-600
                  via-violet-600
                  to-indigo-600
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_50px_rgba(79,70,229,0.32)]
                  sm:w-auto
                  sm:text-base
                "
              >
                {/* Shine */}
                <span
                  className="
                    absolute
                    inset-0
                    -translate-x-[130%]
                    skew-x-[-20deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    transition-transform
                    duration-700
                    group-hover:translate-x-[130%]
                  "
                />

                <Sparkles
                  size={19}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  Analyze My Resume
                </span>

                <ArrowRight
                  size={18}
                  className="
                    relative
                    z-10
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>

              <motion.button
                type="button"
                onClick={scrollToFeatures}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  border
                  border-slate-400/20
                  bg-white/10
                  px-7
                  py-4
                  text-sm
                  font-bold
                  text-[var(--text)]
                  shadow-[0_12px_40px_rgba(15,23,42,0.08)]
                  backdrop-blur-xl
                  transition
                  duration-300
                  hover:border-indigo-400/30
                  hover:bg-white/15
                  sm:w-auto
                  sm:text-base
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-indigo-500/10
                    transition
                    group-hover:bg-indigo-500/20
                  "
                >
                  <Play
                    size={13}
                    className="translate-x-[1px] text-indigo-400"
                    fill="currentColor"
                  />
                </span>

                Explore Features
              </motion.button>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="
                mt-9
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                text-xs
                font-semibold
                text-[var(--secondary)]
                sm:text-sm
                lg:justify-start
              "
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  className="text-emerald-400"
                />

                <span>Instant Analysis</span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-cyan-400"
                />

                <span>Secure Processing</span>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="text-violet-400"
                />

                <span>AI Insights</span>
              </div>
            </motion.div>

            {/* Mini product stats */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.85,
              }}
              className="
                mt-10
                grid
                w-full
                max-w-xl
                grid-cols-3
                divide-x
                divide-slate-400/15
                rounded-2xl
                border
                border-slate-400/10
                bg-white/[0.06]
                px-3
                py-4
                shadow-[0_15px_50px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
              "
            >
              <div className="px-2 text-center lg:text-left">
                <p className="text-lg font-black text-[var(--text)] sm:text-xl">
                  100
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--secondary)] sm:text-xs">
                  ATS Points
                </p>
              </div>

              <div className="px-2 text-center">
                <p className="text-lg font-black text-[var(--text)] sm:text-xl">
                  AI
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--secondary)] sm:text-xs">
                  Intelligence
                </p>
              </div>

              <div className="px-2 text-center lg:text-right">
                <p className="text-lg font-black text-[var(--text)] sm:text-xl">
                  &lt; 1m
                </p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--secondary)] sm:text-xs">
                  Analysis
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ================================
              RIGHT AI VISUAL
          ================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              relative
              mx-auto
              w-full
              max-w-[620px]
            "
          >
            {/* Glass visual container */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2.5rem]
                border
                border-white/10
                bg-white/[0.035]
                shadow-[0_30px_100px_rgba(15,23,42,0.22)]
                backdrop-blur-[2px]
              "
            >
              {/* Internal glow */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-1/2
                  h-[22rem]
                  w-[22rem]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-indigo-500/10
                  blur-[90px]
                "
              />

              {/* Top status */}
              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-5
                  z-50
                  flex
                  items-center
                  justify-between
                "
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--secondary)] sm:text-xs">
                    Intelligence Engine
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-indigo-400/15
                    bg-indigo-400/5
                    px-3
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-indigo-300
                    sm:text-[10px]
                  "
                >
                  Live
                </span>
              </div>

              <NeuralCore />

              <FloatingAICards />

              {/* Bottom scanner */}
              <motion.div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-8
                  left-[15%]
                  right-[15%]
                  h-px
                  bg-gradient-to-r
                  from-transparent
                  via-cyan-300/70
                  to-transparent
                  shadow-[0_0_14px_rgba(103,232,249,0.5)]
                "
                animate={{
                  opacity: [0.2, 0.9, 0.2],
                  scaleX: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Outer decorative glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -inset-8
                -z-10
                rounded-[3rem]
                bg-gradient-to-br
                from-indigo-500/10
                via-transparent
                to-cyan-400/10
                blur-3xl
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.25, 0.8, 0.25],
          y: [0, 6, 0],
        }}
        transition={{
          opacity: {
            duration: 2,
            repeat: Infinity,
          },
          y: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        className="
          absolute
          bottom-5
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          xl:flex
        "
      >
        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[var(--secondary)]">
          Discover
        </span>

        <div className="flex h-8 w-5 justify-center rounded-full border border-slate-400/20 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-indigo-400"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.25, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;