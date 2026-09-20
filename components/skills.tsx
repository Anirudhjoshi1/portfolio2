"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.025 * index,
      type: "spring",
      stiffness: 150,
      damping: 14,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Technical Skills</SectionHeading>

      <div className="space-y-10">
        {skillsCategories.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
            className="glass-card p-6 sm:p-7 rounded-2xl"
          >
            {/* Category Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-700" />
              <span
                className={`text-sm sm:text-base font-semibold font-mono uppercase tracking-wider ${group.titleColor}`}
              >
                {group.category}
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-700" />
            </div>

            {/* Skills Grid */}
            <ul className="flex flex-wrap justify-center gap-2.5 sm:gap-3 text-base text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  variants={fadeInVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{
                    scale: 1.06,
                    y: -3,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.96 }}
                  className={`
                    relative overflow-hidden rounded-xl px-4 py-2 sm:px-5 sm:py-2.5 cursor-default select-none
                    bg-gradient-to-br ${group.color}
                    border ${group.border}
                    backdrop-blur-sm
                    transition-all duration-300
                    text-gray-800 dark:text-white/90
                    font-medium text-sm sm:text-[0.95rem]
                    shadow-sm
                  `}
                >
                  <span className="relative z-10">{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}