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

      <div className="text-gray-700 dark:text-gray-300">
        <p className="mb-3">
          With <span className="font-bold">1 year of specialized experience</span>
          , I have transitioned from a coding enthusiast to a professional building{" "}
          <span className="font-bold">production-level applications</span>. I
          have successfully collaborated with{" "}
          <span className="font-bold underline decoration-blue-500/30">
            foreign clients
          </span>{" "}
          and businesses to deliver scalable solutions, ranging from robust{" "}
          <span className="font-bold">Learning Management Systems (LMS)</span>{" "}
          to intelligent <span className="font-bold">AI-powered tools</span>.
        </p>

        <p className="mb-3">
          My freelance journey has been defined by solving real-world problems. I
          specialize in{" "}
          <span className="font-bold italic">integrating AI solutions</span> into
          business infrastructures, transforming static platforms into dynamic,
          intelligent ecosystems using{" "}
          <span className="font-bold">React, Next.js, and Node.js</span>.
          Whether it's a complex dashboard or a customer-facing site, I focus on
          performance and user experience.
        </p>

        <p className="mb-3">
          My core stack is{" "}
          <span className="font-medium">MERN (MongoDB, Express, React, Node.js)</span>
          . I am also proficient in{" "}
          <span className="font-medium">TypeScript, Redux, and Firebase</span>. I
          am constantly upskilling to stay ahead of the curve, currently exploring
          advanced <span className="font-medium">Generative AI</span> workflows. I
          am now looking for a <span className="font-bold">full-time position</span>{" "}
          where I can leverage my skills to build the future of tech.
        </p>

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and exploring new technologies. I also
          have a keen interest in{" "}
          <span className="font-medium">
            psychology and human behavior
          </span>
          , which helps me design more intuitive user experiences.
        </p>
      </div>
    </motion.section>
  );
}