"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import image from "../public/image.jpeg";
import AiTerminal from "./ai-terminal";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-24 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 0.6,
            }}
          >
            {/* Animated gradient glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full -z-10"
              style={{
                background:
                  "conic-gradient(from 0deg, #00d4ff, #a855f7, #ec4899, #00d4ff)",
                filter: "blur(15px)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              initial={{ scale: 1.2, opacity: 0.6 }}
            />

            <Image
              src={image}
              alt="Anirudh portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-2xl dark:border-gray-800"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Floating Status Badges */}
      <motion.div
        className="flex items-center justify-center gap-3 mt-5 flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-300 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20 shadow-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
          SDE-1 @ InstaDataHelp
        </motion.span>
        <motion.span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-300 dark:bg-neon-blue/10 dark:text-neon-blue dark:border-neon-blue/20 shadow-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-neon-blue animate-pulse" />
          React.js & Modern Web
        </motion.span>
        <motion.span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-300 dark:bg-neon-purple/10 dark:text-neon-purple dark:border-neon-purple/20 shadow-sm"
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 dark:bg-neon-purple animate-pulse" />
          2+ Years Exp · Open to Work
        </motion.span>
      </motion.div>

      {/* Main Heading with gradient text & underline effects */}
      <motion.h1
        className="mb-8 mt-6 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="font-bold">Hello, I'm </span>
        <span className="font-bold gradient-text text-3xl sm:text-5xl">
          Anirudh.
        </span>{" "}
        I engineer{" "}
        <span className="font-bold">production-ready web solutions.</span>
        <br />
        I specialize in{" "}
        <motion.span
          className="font-bold relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          Software Development Engineering
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.span>{" "}
        and{" "}
        <motion.span
          className="font-bold relative inline-block"
          whileHover={{ scale: 1.05 }}
        >
          React.js Frontend Architecture
          <motion.span
            className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neon-purple to-neon-pink"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.span>
        . With 2+ years of professional experience, I build scalable applications for{" "}
        <span className="italic text-neon-purple dark:text-neon-purple">
          logistics, fleet telematics, construction, energy, and automotive businesses
        </span>
        .
      </motion.h1>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <AiTerminal />
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium mt-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all shadow-lg hover:shadow-neon-strong"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 dark:border-white/10 dark:bg-white/10 dark:text-white shadow-sm hover:shadow-neon"
          href="/CV.pdf"
          download="Anirudh_Joshi_Resume.pdf"
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
          <a
            className="bg-white p-4 text-gray-700 hover:text-neon-blue flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:border-white/10 shadow-sm hover:shadow-neon"
            href="https://linkedin.com/in/anirudhjoshi1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60 dark:border-white/10 shadow-sm hover:shadow-neon"
            href="https://github.com/Anirudhjoshi1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}