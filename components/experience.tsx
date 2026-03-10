"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 relative"
    >
      <SectionHeading>My Experience</SectionHeading>

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
                      : "rgba(255, 255, 255, 0.7)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: isDark
                      ? "0 0 15px rgba(0, 212, 255, 0.05)"
                      : "0 4px 20px rgba(0, 0, 0, 0.05)",
                    border: isDark
                      ? "1px solid rgba(255, 255, 255, 0.08)"
                      : "1px solid rgba(0, 0, 0, 0.05)",
                    textAlign: "left",
                    padding: "1.3rem 2rem",
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
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(168, 85, 247, 0.2))"
                      : "white",
                    fontSize: "1.5rem",
                    boxShadow: isDark
                      ? "0 0 15px rgba(0, 212, 255, 0.3)"
                      : "0 2px 10px rgba(0, 0, 0, 0.1)",
                    border: isDark
                      ? "2px solid rgba(0, 212, 255, 0.3)"
                      : "2px solid #e5e7eb",
                  }}
                >
                  <h3 className="font-bold capitalize bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="font-normal !mt-0 text-neon-purple dark:text-neon-blue text-sm">
                    {item.location}
                  </p>

                  <ul className="!mt-4 list-disc ml-5 space-y-2">
                    {item.description.map((desc, i) => (
                      <li
                        key={i}
                        className="!font-normal text-gray-700 dark:text-white/75 text-sm"
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
    </section>
  );
}