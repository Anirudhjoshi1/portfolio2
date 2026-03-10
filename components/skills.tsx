"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// AI-focused skills have a special neon treatment
const aiSkills = new Set([
  "Python", "LangChain", "RAG Architecture", "OpenAI API",
  "Hugging Face", "Vector Databases", "AI Agents",
]);

const frontendSkills = new Set([
  "React", "Next.js", "TypeScript", "Tailwind", "Framer Motion",
]);

function getSkillCategory(skill: string) {
  if (aiSkills.has(skill)) return "ai";
  if (frontendSkills.has(skill)) return "frontend";
  return "backend";
}

function getSkillGradient(category: string) {
  switch (category) {
    case "ai":
      return "from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10";
    case "frontend":
      return "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10";
    default:
      return "from-green-500/20 to-emerald-500/20 dark:from-green-500/10 dark:to-emerald-500/10";
  }
}

function getSkillBorder(category: string) {
  switch (category) {
    case "ai":
      return "border-purple-400/30 hover:border-purple-400/60 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]";
    case "frontend":
      return "border-blue-400/30 hover:border-blue-400/60 hover:shadow-[0_0_15px_rgba(0,212,255,0.3)]";
    default:
      return "border-green-400/30 hover:border-green-400/60 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]";
  }
}

const fadeInVariants = {
  initial: { opacity: 0, y: 30, scale: 0.9 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.03 * index,
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  // Group skills by category
  const categories = [
    { name: "Frontend & UI", color: "text-neon-blue", filter: "frontend" },
    { name: "AI & ML Stack", color: "text-neon-purple", filter: "ai" },
    { name: "Backend & DevOps", color: "text-neon-green", filter: "backend" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      <div className="space-y-8">
        {categories.map((cat) => {
          const skills = skillsData.filter(
            (s) => getSkillCategory(s) === cat.filter
          );
          if (skills.length === 0) return null;

          return (
            <motion.div
              key={cat.filter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Category Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
                <span className={`text-sm font-mono uppercase tracking-wider ${cat.color}`}>
                  {cat.name}
                </span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
              </div>

              {/* Skills Grid */}
              <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
                {skills.map((skill, index) => {
                  const category = getSkillCategory(skill);
                  return (
                    <motion.li
                      className={`
                        relative overflow-hidden rounded-xl px-5 py-3 cursor-pointer
                        bg-gradient-to-br ${getSkillGradient(category)}
                        border ${getSkillBorder(category)}
                        backdrop-blur-sm
                        transition-all duration-300
                        dark:text-white/90
                      `}
                      key={index}
                      variants={fadeInVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      custom={index}
                      whileHover={{
                        scale: 1.08,
                        y: -4,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        perspective: "1000px",
                      }}
                    >
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute inset-0 -z-1 opacity-0"
                        style={{
                          background:
                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                        }}
                        whileHover={{
                          opacity: 1,
                          x: ["-100%", "100%"],
                          transition: { duration: 0.6 },
                        }}
                      />

                      <span className="relative z-10 font-medium text-[0.95rem]">
                        {category === "ai" && "🤖 "}
                        {skill}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}