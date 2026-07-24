import { motion } from "framer-motion";
import {
  Target,
  BrainCircuit,
  Award,
  SearchCheck,
  FileText,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Target,
    number: "01",
    title: "ATS Score Analysis",
    description:
      "Evaluate resume compatibility with a clear ATS score that highlights overall resume performance.",
    tag: "ATS Intelligence",
  },
  {
    icon: BrainCircuit,
    number: "02",
    title: "AI Resume Review",
    description:
      "AI analyzes resume quality, strengths, weaknesses, and overall presentation to provide structured feedback.",
    tag: "AI Analysis",
  },
  {
    icon: Award,
    number: "03",
    title: "Skill Detection",
    description:
      "Automatically identify technical and professional skills directly from the uploaded resume.",
    tag: "Skill Intelligence",
  },
  {
    icon: SearchCheck,
    number: "04",
    title: "Improvement Detection",
    description:
      "Discover weak areas, missing information, and opportunities that can strengthen ATS compatibility.",
    tag: "Gap Analysis",
  },
  {
    icon: FileText,
    number: "05",
    title: "Professional Summary",
    description:
      "Receive an AI-generated overview that captures the candidate's profile, experience, and professional direction.",
    tag: "Profile Insight",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "AI Recommendations",
    description:
      "Get actionable suggestions designed to improve resume quality, clarity, relevance, and recruiter readability.",
    tag: "Smart Guidance",
  },
];

function FeatureSection() {
  const scrollToUpload = () => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-12rem]
          top-[15%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-violet-500/[0.08]
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-12rem]
          bottom-[5%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-400/[0.07]
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-violet-400/[0.07]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <BrainCircuit
              size={15}
              className="text-violet-400"
            />

            <span
              className="
                text-xs
                font-black
                uppercase
                tracking-[0.16em]
                text-violet-400
              "
            >
              Resume Intelligence Suite
            </span>

            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-cyan-400
                  opacity-70
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-cyan-400
                "
              />
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-[var(--text)]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Everything Your Resume Needs,
            <br className="hidden sm:block" />

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
              Powered by AI
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-8
              text-[var(--secondary)]
              sm:text-lg
            "
          >
            Go beyond a basic resume score. Understand your skills,
            profile strengths, improvement areas, and the changes that
            can make your resume more effective.
          </p>
        </motion.div>

        {/* ========================================
            FEATURE GRID
        ========================================= */}

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-[var(--border)]
                  bg-[var(--card-bg)]
                  p-7
                  shadow-[var(--shadow)]
                  backdrop-blur-2xl
                  transition
                  duration-300
                  hover:border-indigo-400/25
                  sm:p-8
                "
              >
                {/* Internal glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    right-[-4rem]
                    top-[-4rem]
                    h-40
                    w-40
                    rounded-full
                    bg-indigo-500/[0.08]
                    blur-3xl
                    transition
                    duration-500
                    group-hover:bg-violet-500/[0.16]
                  "
                />

                {/* Top row */}
                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.07,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18,
                    }}
                    className="
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
                      via-violet-500/10
                      to-cyan-400/[0.07]
                      text-indigo-400
                      shadow-[0_12px_35px_rgba(99,102,241,0.12)]
                    "
                  >
                    <Icon size={25} strokeWidth={1.9} />
                  </motion.div>

                  <span
                    className="
                      text-sm
                      font-black
                      tracking-[0.08em]
                      text-[var(--muted)]
                      opacity-60
                    "
                  >
                    {feature.number}
                  </span>
                </div>

                {/* Feature tag */}
                <div
                  className="
                    relative
                    z-10
                    mt-7
                    flex
                    items-center
                    gap-2
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="text-emerald-400"
                  />

                  <span
                    className="
                      text-[10px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[var(--secondary)]
                    "
                  >
                    {feature.tag}
                  </span>
                </div>

                {/* Content */}
                <h3
                  className="
                    relative
                    z-10
                    mt-3
                    text-2xl
                    font-black
                    tracking-[-0.025em]
                    text-[var(--text)]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    relative
                    z-10
                    mt-4
                    text-sm
                    leading-7
                    text-[var(--secondary)]
                    sm:text-[15px]
                  "
                >
                  {feature.description}
                </p>

                {/* Bottom decoration */}
                <div
                  className="
                    absolute
                    bottom-6
                    left-7
                    right-7
                    flex
                    items-center
                    justify-between
                    sm:left-8
                    sm:right-8
                  "
                >
                  <div
                    className="
                      h-px
                      flex-1
                      bg-gradient-to-r
                      from-indigo-400/25
                      via-violet-400/10
                      to-transparent
                    "
                  />

                  <ArrowUpRight
                    size={17}
                    className="
                      ml-4
                      text-[var(--muted)]
                      transition
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                      group-hover:text-indigo-400
                    "
                  />
                </div>

                {/* Hover gradient line */}
                <div
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
                    transition-all
                    duration-500
                    group-hover:w-[65%]
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ========================================
            BOTTOM CTA
        ========================================= */}

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
            delay: 0.15,
          }}
          className="
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-[2rem]
            border
            border-[var(--border)]
            bg-[var(--surface-soft)]
            px-6
            py-6
            text-center
            shadow-[var(--shadow)]
            backdrop-blur-xl
            md:flex-row
            md:px-8
            md:text-left
          "
        >
          <div className="flex items-center gap-4">
            <div
              className="
                hidden
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-violet-400/10
                text-violet-400
                sm:flex
              "
            >
              <Sparkles size={20} />
            </div>

            <div>
              <p
                className="
                  text-base
                  font-black
                  text-[var(--text)]
                "
              >
                Ready to see what your resume is really saying?
              </p>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--secondary)]
                "
              >
                Upload your resume and generate your AI analysis.
              </p>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={scrollToUpload}
            whileHover={{
              y: -2,
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              group
              flex
              w-full
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-indigo-600
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-[0_12px_35px_rgba(79,70,229,0.25)]
              sm:w-auto
            "
          >
            Analyze Resume

            <ArrowUpRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default FeatureSection;