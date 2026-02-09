"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      type: "spring", // Added spring physics for a "bouncy" feel
      stiffness: 100,
      damping: 10,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 shadow-sm border border-black/5 dark:border-white/5 cursor-pointer relative overflow-hidden"
            key={index}
            
            // Entrance Animation
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}

            // The "Special" Interactions
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Gradient Glow effect on hover */}
            <motion.div 
              className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0"
              whileHover={{ opacity: 1 }}
            />
            
            <span className="relative z-10 font-medium">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}