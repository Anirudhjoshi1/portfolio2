"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-white/60 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full dark:bg-gray-950/60 dark:border-white/[0.08] dark:shadow-neon/20"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition-all dark:text-gray-400 dark:hover:text-gray-200",
                  {
                    "text-gray-950 dark:text-gray-100":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="rounded-full absolute inset-0 -z-10 
                      bg-gradient-to-r from-blue-100/80 to-purple-100/80
                      dark:from-neon-blue/20 dark:to-neon-purple/20
                      border border-blue-200/50 dark:border-neon-blue/30
                      shadow-sm dark:shadow-[0_0_20px_rgba(0,212,255,0.25)]
                      backdrop-blur-md"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 150,
                      damping: 20,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}