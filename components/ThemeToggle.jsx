"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "./icons.jsx";

export default function ThemeToggle({ className = "theme-toggle" }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    let stored = null;
    try { stored = localStorage.getItem("theme"); } catch {}
    const initial = stored || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      style={theme === null ? { visibility: "hidden" } : undefined}
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
