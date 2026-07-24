import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

const themes = ["light", "dark", "midnight"];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ats-theme");

    return themes.includes(savedTheme)
      ? savedTheme
      : "midnight";
  });

  useEffect(() => {
    const root = document.documentElement;

    root.setAttribute("data-theme", theme);

    localStorage.setItem("ats-theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  const cycleTheme = () => {
    setTheme((currentTheme) => {
      const currentIndex = themes.indexOf(currentTheme);

      const nextIndex =
        (currentIndex + 1) % themes.length;

      return themes[nextIndex];
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        cycleTheme,
        themes,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider"
    );
  }

  return context;
}