"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState("");

  const handleThemeChange = (newMode: string) => {
    if (newMode === "system") {
      localStorage.removeItem("theme");
      newMode = window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light";
    } else {
      localStorage.theme = newMode;
    }

    setMode(newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark"); // if dark is selected, it adds dark class, if light is selected it removes dark class.
  };

  useEffect(() => {
    const initialMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme:dark)").matches)
        ? "dark"
        : "light";
    handleThemeChange(initialMode);
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, setMode: handleThemeChange }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
