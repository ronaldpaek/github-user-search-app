import { useState, useEffect } from "react";

import { Moon, Sun } from "./icons";

const AppHeader = () => {
  const initialTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.error("Could not set theme in localStorage", e);
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <header className="app-header">
      <h1 className="app-title">
        <a href="/">devfinder</a>
      </h1>
      <button
        className="theme-toggle"
        aria-label={`Toggle ${theme === "light" ? "dark" : "light"} theme`}
        onClick={toggleTheme}
        role="button"
      >
        <p className="theme-label">{theme === "light" ? "dark" : "light"}</p>
        {theme === "light" ? (
          <Moon aria-hidden="true" />
        ) : (
          <Sun aria-hidden="true" />
        )}
      </button>
    </header>
  );
};

export default AppHeader;
