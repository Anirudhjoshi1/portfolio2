"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 w-[3rem] h-[3rem] bg-white/50 border border-gray-300 shadow-xl backdrop-blur-md rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950/60 dark:border-white/10 dark:shadow-neon/20 z-[999]"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun className="text-amber-500" /> : <BsMoon />}
    </button>
  );
}
