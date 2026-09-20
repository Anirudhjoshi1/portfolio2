"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData, educationData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative max-w-[62rem]"
    >
      <SectionHeading>Work Experience</SectionHeading>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto -mt-6 mb-12 text-sm sm:text-base">
        2+ years of professional experience building, deploying, and maintaining production applications for international businesses.
      </p>

      {/* Timeline Container */}
      <div className="relative">
        {/* Glowing animated vertical line overlay */}
        <div className="absolute left-1/2 top-8 bottom-0 w-1 -translate-x-1/2 overflow-hidden pointer-events-none hidden sm:block z-0 rounded-full">
          <motion.div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, transparent, #00d4ff, #a855f7, #ec4899, transparent)",
              backgroundSize: "100% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%", "0% 0%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <VerticalTimeline lineColor="transparent">
          {experiencesData.map((item, index) => {
            const isDark = theme === "dark";

            return (
              <React.Fragment key={index}>
                <VerticalTimelineElement
                  contentStyle={{
                    background: isDark
                      ? "rgba(255, 255, 255, 0.03)"
                      : "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: isDark
                      ? "0 0 15px rgba(0, 212, 255, 0.08)"
                      : "0 4px 20px rgba(0, 0, 0, 0.06)",
                    border: isDark
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid rgba(0, 0, 0, 0.08)",
                    textAlign: "left",
                    padding: "1.5rem 2rem",
                    borderRadius: "1rem",
                  }}
                  contentArrowStyle={{
                    borderRight: isDark
                      ? "0.4rem solid rgba(0, 212, 255, 0.5)"
                      : "0.4rem solid #9ca3af",
                  }}
                  date={item.date}
                  icon={item.icon}
                  iconStyle={{
                    background: isDark ? "#0a0a0f" : "white",
                    backgroundImage: isDark
                      ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))"
                      : "none",
                    fontSize: "1.5rem",
                    boxShadow: isDark
                      ? "0 0 15px rgba(0, 212, 255, 0.3)"
                      : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    border: isDark
                      ? "2px solid rgba(0, 212, 255, 0.3)"
                      : "2px solid #e5e7eb",
                    color: isDark ? "#00d4ff" : "#2563eb",
                  }}
                >
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="font-semibold !mt-1 text-cyan-600 dark:text-cyan-400 text-sm">
                    {item.location}
                  </p>

                  <ul className="!mt-4 list-disc ml-5 space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="!font-normal text-gray-700 dark:text-white/80 text-sm leading-relaxed"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              </React.Fragment>
            );
          })}
        </VerticalTimeline>
      </div>

      {/* Education & Credentials - Premium Neon Glassmorphism Theme */}
      <div className="mt-20 sm:mt-24 text-center">
        {/* Styled Section Subheading */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-[1px] w-14 bg-gradient-to-r from-transparent to-cyan-500/70" />
          <span className="text-sm sm:text-base font-semibold font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
            <FaGraduationCap size={18} /> Education & Credentials
          </span>
          <div className="h-[1px] w-14 bg-gradient-to-l from-transparent to-cyan-500/70" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto px-4">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{
                scale: 1.02,
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden group 
                bg-white/80 dark:bg-white/[0.03] 
                border border-black/10 dark:border-white/[0.08]
                hover:shadow-neon-strong dark:hover:shadow-neon
                transition-all duration-300 text-left flex flex-col justify-between"
            >
              {/* Corner ambient neon glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-cyan-500/25 border border-blue-400/30 dark:border-cyan-400/30 flex items-center justify-center text-blue-600 dark:text-cyan-400 shadow-sm group-hover:scale-110 transition-transform">
                    <FaGraduationCap size={24} />
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-700 border border-blue-200 dark:bg-cyan-500/10 dark:text-cyan-300 dark:border-cyan-500/30 shadow-sm">
                    {edu.date}
                  </span>
                </div>

                <h5 className="font-bold text-gray-900 dark:text-white text-lg leading-snug group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {edu.title}
                </h5>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 leading-relaxed">
                  {edu.institution}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>{edu.location.split("|")[0].trim()}</span>
                {edu.location.includes("CGPA") ? (
                  <span className="font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-500/20">
                    CGPA: 7.21
                  </span>
                ) : (
                  <span className="font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    Master's Degree
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}