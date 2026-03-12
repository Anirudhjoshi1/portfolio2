"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop Background Pill */}
      <motion.div
        className="hidden sm:block fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/20 bg-white/60 shadow-lg shadow-black/[0.03] backdrop-blur-xl sm:top-6 sm:h-[3.25rem] sm:w-[38rem] sm:rounded-full dark:bg-gray-950/60 dark:border-white/[0.08] dark:shadow-neon/20"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
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

      {/* Mobile Hamburger Button */}
      <motion.button
        className="sm:hidden fixed top-5 right-5 z-[1000] p-3 rounded-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-md flex items-center justify-center text-gray-950 dark:text-gray-200"
        onClick={toggleMenu}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="sm:hidden fixed inset-0 z-[998] bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={closeMenu}
          >
            <ul className="flex flex-col items-center gap-8 text-xl font-medium text-gray-600 dark:text-gray-300">
              {links.map((link, index) => (
                <motion.li
                  key={link.hash}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    className={clsx(
                      "relative flex w-full items-center justify-center px-4 py-2 hover:text-gray-950 hover:scale-105 transition-all dark:hover:text-gray-100",
                      {
                        "text-gray-950 dark:text-gray-100 font-semibold":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                      closeMenu();
                    }}
                  >
                    {link.name}
                    {link.name === activeSection && (
                      <motion.span
                        className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-neon-blue left-1/2 -translate-x-1/2"
                        layoutId="activeSectionMobile"
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}