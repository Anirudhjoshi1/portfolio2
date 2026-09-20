"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[46rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      {/* Glassmorphism Card */}
      <motion.div
        className="glass-card p-8 sm:p-10 neon-glow text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-gray-700 dark:text-gray-300 leading-8 space-y-4 sm:space-y-5 text-[0.95rem] sm:text-base">
          <p>
            I’m a <span className="font-bold text-gray-900 dark:text-white">Software Development Engineer</span> with{" "}
            <span className="font-bold gradient-text">2+ years of professional experience</span> building and delivering{" "}
            <span className="font-bold relative inline-block">
              production-level applications
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue to-transparent" />
            </span>.
          </p>

          <p>
            My primary focus is{" "}
            <span className="font-bold italic text-neon-purple dark:text-neon-purple">
              frontend engineering with React.js and JavaScript
            </span>, with experience building responsive interfaces, reusable components, administrative dashboards, and API-integrated workflows.
          </p>

          <p>
            I’ve worked on real-world applications across{" "}
            <span className="font-bold">logistics, fleet telematics, construction, energy, and automotive</span>, collaborating on products used by international businesses and end users. During my work at InstaDataHelp, I have also integrated AI-assisted development workflows and smart UI features into client applications.
          </p>

          <p>
            I enjoy turning complex business requirements into practical, intuitive interfaces and taking products from development through testing, deployment, and production maintenance.
          </p>

          <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, and exploring new technologies. I also have a keen interest in{" "}
            <span className="font-medium text-gray-900 dark:text-white">psychology and human behavior</span>, which helps me design more intuitive user experiences.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}