import { motion } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const themeOptions = [
  {
    id: "light",
    label: "Light",
    icon: Sun,
  },
  {
    id: "dark",
    label: "Dark",
    icon: Moon,
  },
  {
    id: "midnight",
    label: "Midnight",
    icon: Sparkles,
  },
];

function ThemeToggle() {
  const { theme, changeTheme } = useTheme();

  return (
    <div
      className="
        relative
        flex
        items-center
        gap-1
        rounded-2xl
        border
        border-white/10
        bg-white/[0.07]
        p-1
        shadow-lg
        backdrop-blur-xl
      "
    >
      {themeOptions.map((option) => {
        const Icon = option.icon;
        const active = theme === option.id;

        return (
          <motion.button
            key={option.id}
            type="button"
            onClick={() => changeTheme(option.id)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.92 }}
            title={`${option.label} theme`}
            aria-label={`Switch to ${option.label} theme`}
            className={`
              relative
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              transition-colors
              duration-300

              ${
                active
                  ? "text-white"
                  : "text-[var(--secondary)] hover:text-[var(--text)]"
              }
            `}
          >
            {active && (
              <motion.span
                layoutId="active-theme"
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 30,
                }}
                className="
                  absolute
                  inset-0
                  rounded-xl
                  bg-gradient-to-br
                  from-indigo-500
                  via-violet-500
                  to-cyan-500
                  shadow-[0_0_20px_rgba(99,102,241,0.35)]
                "
              />
            )}

            <Icon
              size={17}
              strokeWidth={2}
              className="relative z-10"
            />
          </motion.button>
        );
      })}
    </div>
  );
}

export default ThemeToggle;