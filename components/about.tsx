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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

<p className="mb-3">
  As a Innovative front-end developer with hands-on experience in{" "}
  <span className="font-medium">React.js, Node.js</span>, and the{" "}
  <span className="font-medium">MERN stack</span>, I specialize in crafting clean, responsive, and user-focused web applications. I bring a passion for performance, scalability, and intuitive design, with projects ranging from AI dashboards to real-time admin portals.
</p>

<p className="mb-3">
  My journey into development began after completing my{" "}
  <span className="font-medium">BCA degree</span>. Initially curious about technology, I pursued a MERN stack bootcamp and started building full-stack applications. What started as curiosity soon became a driving passion—especially the{" "}
  <span className="italic">problem-solving and creative aspects</span> of coding. From integrating complex authentication systems to deploying apps using{" "}
  <span className="font-medium">PM2</span>, I thrive on turning ideas into robust digital experiences.
</p>

<p className="mb-3">
  My core stack is{" "}
  <span className="font-medium">React, Node.js, and MongoDB</span>. I am also familiar with{" "}
  <span className="font-medium">TypeScript, Redux</span>, and{" "}
  <span className="font-medium">Firebase</span>. I am constantly exploring new tools and technologies, and I'm currently looking for a{" "}
  <span className="font-medium">full-time position</span> as a software developer.
</p>

<p>
  <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching movies, Exploring New Technologies. I also enjoy{" "}

  <span className="font-medium"> learning about psychology and human behavior..</span> 
</p>

    </motion.section>
  );
}
