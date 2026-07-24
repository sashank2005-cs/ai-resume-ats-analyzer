import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  ArrowRight,
  BrainCircuit,
} from "lucide-react";

import ThemeToggle from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="sticky top-0 z-[100] px-3 pt-3 sm:px-5"
    >
      <nav
        className={`
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          backdrop-blur-2xl
          transition-all
          duration-500

          ${
            scrolled
              ? `
                border-white/10
                bg-[var(--nav-bg-strong)]
                shadow-[0_18px_60px_rgba(2,6,23,0.22)]
              `
              : `
                border-white/[0.08]
                bg-[var(--nav-bg)]
                shadow-[0_10px_40px_rgba(2,6,23,0.10)]
              `
          }
        `}
      >
        <div className="flex h-[72px] items-center justify-between px-4 sm:px-5 lg:px-6">

          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                rotate: 6,
                scale: 1.05,
              }}
              className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                bg-gradient-to-br
                from-indigo-500
                via-violet-600
                to-cyan-500
                shadow-[0_8px_30px_rgba(99,102,241,0.35)]
              "
            >
              <div className="absolute inset-[1px] rounded-[15px] bg-slate-950/20" />

              <BrainCircuit
                size={23}
                strokeWidth={1.8}
                className="relative z-10 text-white"
              />

              <motion.div
                className="
                  absolute
                  -left-full
                  top-0
                  h-full
                  w-1/2
                  skew-x-[-20deg]
                  bg-white/20
                "
                animate={{
                  left: ["-100%", "180%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-[-0.03em] text-[var(--text)] sm:text-xl">
                  ATS Analyzer
                </span>

                <Sparkles
                  size={13}
                  className="hidden text-violet-400 sm:block"
                />
              </div>

              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--secondary)] sm:block">
                AI Resume Intelligence
              </span>
            </div>
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {[
              ["Home", "home"],
              ["Upload", "upload"],
              ["Features", "features"],
              ["Reviews", "testimonials"],
            ].map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="
                  relative
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-[var(--secondary)]
                  transition
                  duration-300
                  hover:bg-white/[0.06]
                  hover:text-[var(--text)]
                "
              >
                {label}
              </button>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <motion.button
              type="button"
              onClick={() => scrollToSection("upload")}
              whileHover={{
                y: -2,
                scale: 1.015,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative
                flex
                items-center
                gap-2
                overflow-hidden
                rounded-xl
                bg-gradient-to-r
                from-indigo-600
                via-violet-600
                to-indigo-600
                px-5
                py-3
                text-sm
                font-bold
                text-white
                shadow-[0_10px_35px_rgba(79,70,229,0.30)]
              "
            >
              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <Sparkles
                size={16}
                className="relative z-10"
              />

              <span className="relative z-10">
                Analyze Resume
              </span>

              <ArrowRight
                size={16}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </motion.button>
          </div>

          {/* Tablet/mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Close navigation" : "Open navigation"}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-white/[0.06]
                text-[var(--text)]
                backdrop-blur-xl
              "
            >
              {open ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="border-t border-white/[0.08] px-4 pb-4 pt-3">
                <div className="flex flex-col gap-1">
                  {[
                    ["Home", "home"],
                    ["Upload Resume", "upload"],
                    ["Features", "features"],
                    ["Reviews", "testimonials"],
                  ].map(([label, id], index) => (
                    <motion.button
                      key={id}
                      type="button"
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                      onClick={() => scrollToSection(id)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        rounded-xl
                        px-4
                        py-3
                        text-left
                        text-sm
                        font-semibold
                        text-[var(--secondary)]
                        transition
                        hover:bg-white/[0.06]
                        hover:text-[var(--text)]
                      "
                    >
                      {label}

                      <ArrowRight
                        size={15}
                        className="opacity-50"
                      />
                    </motion.button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("upload")}
                  className="
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-indigo-600
                    via-violet-600
                    to-indigo-600
                    px-5
                    py-3.5
                    text-sm
                    font-bold
                    text-white
                    shadow-[0_10px_35px_rgba(79,70,229,0.25)]
                  "
                >
                  <Sparkles size={16} />

                  Analyze My Resume

                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

export default Navbar;