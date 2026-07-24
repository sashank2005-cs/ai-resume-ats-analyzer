import { motion } from "framer-motion";
import DownloadReport from "../DownloadReport/DownloadReport";
import {
  AlertTriangle,
  Award,
  BrainCircuit,
  CheckCircle2,
  FileText,
  Lightbulb,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  User,
  Zap,
} from "lucide-react";

function DashboardPreview({ analysis }) {
  if (!analysis) return null;

  const {
    atsScore = 0,
    atsRemarks = "Resume Analyzed",
    candidateName,
    email,
    phone,
    domain,
    summary,
    skills = [],
    strengths = [],
    weaknesses = [],
    suggestions = [],
  } = analysis;

  const safeScore = Math.min(
    100,
    Math.max(0, Number(atsScore) || 0)
  );

  const radius = 88;
  const circumference = 2 * Math.PI * radius;
  const offset =
    circumference - (safeScore / 100) * circumference;

  const getScoreTheme = () => {
    if (safeScore >= 85) {
      return {
        color: "#34d399",
        text: "text-emerald-400",
        bg: "bg-emerald-400/10",
        border: "border-emerald-400/20",
        label: "Excellent",
      };
    }

    if (safeScore >= 70) {
      return {
        color: "#fbbf24",
        text: "text-amber-400",
        bg: "bg-amber-400/10",
        border: "border-amber-400/20",
        label: "Strong",
      };
    }

    return {
      color: "#fb7185",
      text: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20",
      label: "Needs Improvement",
    };
  };

  const scoreTheme = getScoreTheme();

  const cardClass = `
    relative
    overflow-hidden
    rounded-[2rem]
    border
    border-[var(--border)]
    bg-[var(--card-bg)]
    shadow-[var(--shadow)]
    backdrop-blur-2xl
  `;

  const sectionTitleClass =
    "text-xl sm:text-2xl font-black tracking-[-0.025em] text-[var(--text)]";

  const labelClass =
    "text-xs font-bold uppercase tracking-[0.12em] text-[var(--secondary)]";

  const valueClass =
    "mt-2 break-words text-base font-semibold text-[var(--text)]";

  const containerAnimation = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="analysis"
      className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
    >
      {/* Dashboard background illumination */}
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
          bg-indigo-500/10
          blur-[130px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10rem]
          top-[35%]
          h-[30rem]
          w-[30rem]
          rounded-full
          bg-cyan-400/10
          blur-[140px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ==========================================
            DASHBOARD HEADER
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-400/20
              bg-indigo-400/[0.08]
              px-4
              py-2
              backdrop-blur-xl
            "
          >
            <Sparkles
              size={15}
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
              AI Resume Report
            </span>

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          </div>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              tracking-[-0.04em]
              text-[var(--text)]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Your Resume{" "}
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
              Intelligence Report
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-[var(--secondary)]
              sm:text-lg
            "
          >
            Your resume has been analyzed for ATS compatibility,
            skills, strengths, weaknesses, and opportunities for
            improvement.
          </p>
          <div className="mt-7 flex justify-center">
  <DownloadReport analysis={analysis} />
</div>
        </motion.div>

        {/* ==========================================
            TOP DASHBOARD
        =========================================== */}

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* ATS SCORE */}

          <motion.div
            variants={cardAnimation}
            className={`${cardClass} p-6 sm:p-8`}
          >
            <div
              className="
                absolute
                right-[-5rem]
                top-[-5rem]
                h-48
                w-48
                rounded-full
                bg-indigo-500/10
                blur-3xl
              "
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className={labelClass}>
                    Overall Performance
                  </p>

                  <h3 className={`${sectionTitleClass} mt-2`}>
                    ATS Score
                  </h3>
                </div>

                <div
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    ${scoreTheme.border}
                    ${scoreTheme.bg}
                  `}
                >
                  <Target
                    size={21}
                    className={scoreTheme.text}
                  />
                </div>
              </div>

              <div className="mt-7 flex justify-center">
                <div className="relative h-[230px] w-[230px]">
                  <svg
                    width="230"
                    height="230"
                    viewBox="0 0 230 230"
                    className="-rotate-90"
                  >
                    <circle
                      cx="115"
                      cy="115"
                      r={radius}
                      stroke="var(--border)"
                      strokeWidth="15"
                      fill="none"
                    />

                    <motion.circle
                      cx="115"
                      cy="115"
                      r={radius}
                      stroke={scoreTheme.color}
                      strokeWidth="15"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{
                        strokeDashoffset: circumference,
                      }}
                      whileInView={{
                        strokeDashoffset: offset,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.7,
                        ease: "easeOut",
                      }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${scoreTheme.color})`,
                      }}
                    />
                  </svg>

                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      items-center
                      justify-center
                    "
                  >
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5,
                      }}
                      className={`
                        text-5xl
                        font-black
                        tracking-[-0.05em]
                        ${scoreTheme.text}
                      `}
                    >
                      {safeScore}%
                    </motion.span>

                    <span
                      className="
                        mt-1
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[var(--secondary)]
                      "
                    >
                      ATS Compatibility
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span
                  className={`
                    inline-flex
                    rounded-full
                    border
                    px-4
                    py-1.5
                    text-xs
                    font-black
                    uppercase
                    tracking-[0.12em]
                    ${scoreTheme.border}
                    ${scoreTheme.bg}
                    ${scoreTheme.text}
                  `}
                >
                  {scoreTheme.label}
                </span>

                <h4
                  className="
                    mt-4
                    text-xl
                    font-black
                    text-[var(--text)]
                  "
                >
                  {atsRemarks}
                </h4>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-sm
                    text-sm
                    leading-6
                    text-[var(--secondary)]
                  "
                >
                  Evaluated using ATS compatibility, keyword
                  relevance, formatting, skills, and recruiter
                  readability.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CANDIDATE INFORMATION */}

          <motion.div
            variants={cardAnimation}
            className={`${cardClass} p-6 sm:p-8`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-500/20
                    to-violet-500/10
                    text-indigo-400
                  "
                >
                  <User size={23} />
                </div>

                <div>
                  <p className={labelClass}>
                    Resume Profile
                  </p>

                  <h3 className={`${sectionTitleClass} mt-1`}>
                    Candidate Details
                  </h3>
                </div>
              </div>

              <ShieldCheck
                size={22}
                className="hidden text-emerald-400 sm:block"
              />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {/* NAME */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface-soft)]
                  p-5
                "
              >
                <div className="flex items-center gap-2">
                  <User
                    size={17}
                    className="text-indigo-400"
                  />

                  <span className={labelClass}>
                    Full Name
                  </span>
                </div>

                <p className={valueClass}>
                  {candidateName || "Unknown"}
                </p>
              </div>

              {/* EMAIL */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface-soft)]
                  p-5
                "
              >
                <div className="flex items-center gap-2">
                  <Mail
                    size={17}
                    className="text-cyan-400"
                  />

                  <span className={labelClass}>
                    Email
                  </span>
                </div>

                <p className={valueClass}>
                  {email || "Not Found"}
                </p>
              </div>

              {/* PHONE */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface-soft)]
                  p-5
                "
              >
                <div className="flex items-center gap-2">
                  <Phone
                    size={17}
                    className="text-violet-400"
                  />

                  <span className={labelClass}>
                    Phone
                  </span>
                </div>

                <p className={valueClass}>
                  {phone || "Not Found"}
                </p>
              </div>

              {/* DOMAIN */}

              <div
                className="
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--surface-soft)]
                  p-5
                "
              >
                <div className="flex items-center gap-2">
                  <BrainCircuit
                    size={17}
                    className="text-emerald-400"
                  />

                  <span className={labelClass}>
                    Professional Domain
                  </span>
                </div>

                <p className={valueClass}>
                  {domain || "General"}
                </p>
              </div>
            </div>

            {/* SUMMARY */}

            <div
              className="
                mt-5
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface-soft)]
                p-5
                sm:p-6
              "
            >
              <div className="flex items-center gap-3">
                <FileText
                  size={19}
                  className="text-indigo-400"
                />

                <h4
                  className="
                    text-base
                    font-black
                    text-[var(--text)]
                  "
                >
                  Resume Summary
                </h4>
              </div>

              <p
                className="
                  mt-4
                  text-sm
                  leading-7
                  text-[var(--secondary)]
                  sm:text-base
                "
              >
                {summary ||
                  "No professional summary was generated by the AI."}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ==========================================
            SKILLS
        =========================================== */}

        <motion.div
          variants={cardAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${cardClass} mt-6 p-6 sm:p-8`}
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-indigo-500/10
                "
              >
                <Award
                  size={23}
                  className="text-indigo-400"
                />
              </div>

              <div>
                <p className={labelClass}>
                  Capability Analysis
                </p>

                <h3 className={`${sectionTitleClass} mt-1`}>
                  Skills Detected
                </h3>
              </div>
            </div>

            <div
              className="
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                border
                border-indigo-400/20
                bg-indigo-400/[0.08]
                px-4
                py-2
              "
            >
              <Zap
                size={14}
                className="text-indigo-400"
              />

              <span
                className="
                  text-xs
                  font-black
                  text-indigo-400
                "
              >
                {skills.length} IDENTIFIED
              </span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {skills.length > 0 ? (
              skills.map((skill, index) => (
                <motion.span
                  key={`${skill}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: Math.min(index * 0.04, 0.5),
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  className="
                    rounded-full
                    border
                    border-indigo-400/20
                    bg-indigo-400/[0.08]
                    px-4
                    py-2
                    text-sm
                    font-bold
                    text-indigo-400
                    shadow-[0_8px_25px_rgba(99,102,241,0.08)]
                  "
                >
                  {skill}
                </motion.span>
              ))
            ) : (
              <p className="text-sm text-[var(--secondary)]">
                No skills were detected in this resume.
              </p>
            )}
          </div>
        </motion.div>

        {/* ==========================================
            STRENGTHS + WEAKNESSES
        =========================================== */}

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="mt-6 grid gap-6 lg:grid-cols-2"
        >
          {/* STRENGTHS */}

          <motion.div
            variants={cardAnimation}
            className={`${cardClass} p-6 sm:p-8`}
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-emerald-400/10
                "
              >
                <Star
                  size={22}
                  className="text-emerald-400"
                />
              </div>

              <div>
                <p className={labelClass}>
                  Positive Signals
                </p>

                <h3 className={`${sectionTitleClass} mt-1`}>
                  Resume Strengths
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {strengths.length > 0 ? (
                strengths.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.min(index * 0.06, 0.5),
                    }}
                    className="
                      flex
                      gap-3
                      rounded-2xl
                      border
                      border-emerald-400/10
                      bg-emerald-400/[0.045]
                      p-4
                    "
                  >
                    <CheckCircle2
                      size={19}
                      className="
                        mt-0.5
                        shrink-0
                        text-emerald-400
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[var(--secondary)]
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-[var(--secondary)]">
                  No strengths were identified.
                </p>
              )}
            </div>
          </motion.div>

          {/* WEAKNESSES */}

          <motion.div
            variants={cardAnimation}
            className={`${cardClass} p-6 sm:p-8`}
          >
            <div className="flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-rose-400/10
                "
              >
                <AlertTriangle
                  size={22}
                  className="text-rose-400"
                />
              </div>

              <div>
                <p className={labelClass}>
                  Improvement Areas
                </p>

                <h3 className={`${sectionTitleClass} mt-1`}>
                  Resume Weaknesses
                </h3>
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {weaknesses.length > 0 ? (
                weaknesses.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.min(index * 0.06, 0.5),
                    }}
                    className="
                      flex
                      gap-3
                      rounded-2xl
                      border
                      border-rose-400/10
                      bg-rose-400/[0.045]
                      p-4
                    "
                  >
                    <AlertTriangle
                      size={19}
                      className="
                        mt-0.5
                        shrink-0
                        text-rose-400
                      "
                    />

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[var(--secondary)]
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))
              ) : (
                <div
                  className="
                    flex
                    gap-3
                    rounded-2xl
                    border
                    border-emerald-400/10
                    bg-emerald-400/[0.045]
                    p-4
                  "
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-400"
                  />

                  <p className="text-sm text-[var(--secondary)]">
                    No major weaknesses were detected.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* ==========================================
            AI RECOMMENDATIONS
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
          className={`${cardClass} mt-6 p-6 sm:p-8`}
        >
          <div
            className="
              absolute
              right-[-6rem]
              top-[-6rem]
              h-56
              w-56
              rounded-full
              bg-violet-500/10
              blur-[80px]
            "
          />

          <div className="relative z-10">
            <div
              className="
                flex
                flex-col
                gap-5
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div className="flex items-center gap-4">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-500/20
                    to-indigo-500/10
                  "
                >
                  <Lightbulb
                    size={23}
                    className="text-violet-400"
                  />
                </div>

                <div>
                  <p className={labelClass}>
                    AI Improvement Strategy
                  </p>

                  <h3 className={`${sectionTitleClass} mt-1`}>
                    AI Recommendations
                  </h3>
                </div>
              </div>

              <div
                className="
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-violet-400/20
                  bg-violet-400/[0.08]
                  px-4
                  py-2
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
                    tracking-[0.1em]
                    text-violet-400
                  "
                >
                  AI Generated
                </span>
              </div>
            </div>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {suggestions.length > 0 ? (
                suggestions.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.min(index * 0.06, 0.5),
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="
                      group
                      flex
                      gap-4
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--surface-soft)]
                      p-5
                      transition
                      duration-300
                      hover:border-violet-400/20
                    "
                  >
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-violet-400/10
                        text-xs
                        font-black
                        text-violet-400
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <p
                      className="
                        text-sm
                        leading-6
                        text-[var(--secondary)]
                      "
                    >
                      {item}
                    </p>
                  </motion.div>
                ))
              ) : (
                <div
                  className="
                    col-span-full
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--surface-soft)]
                    p-5
                  "
                >
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />

                  <p className="text-sm text-[var(--secondary)]">
                    No additional recommendations are currently
                    available.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            REPORT FOOTER
        =========================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--surface-soft)]
            px-5
            py-4
            text-center
            backdrop-blur-xl
            sm:flex-row
            sm:text-left
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-indigo-400/10
              "
            >
              <BrainCircuit
                size={18}
                className="text-indigo-400"
              />
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  text-[var(--text)]
                "
              >
                ATS Analyzer Intelligence Engine
              </p>

              <p
                className="
                  mt-0.5
                  text-xs
                  text-[var(--secondary)]
                "
              >
                AI-powered resume evaluation complete.
              </p>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              font-bold
              text-emerald-400
            "
          >
            <TrendingUp size={15} />
            Analysis Complete
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default DashboardPreview;