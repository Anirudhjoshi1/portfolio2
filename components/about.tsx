"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function AnimatedParagraph({ children, className = "" }: { children: string; className?: string }) {
  const words = children.split(" ");
  return (
    <motion.p
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      {/* Glassmorphism Card */}
      <motion.div
        className="glass-card p-8 neon-glow text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-gray-700 dark:text-gray-300 leading-8 space-y-4">
          <p>
            With <span className="font-bold gradient-text">1 year of specialized experience</span>,
            I have transitioned from a coding enthusiast to a professional building{" "}
            <span className="font-bold">production-level applications</span>. I
            have successfully collaborated with{" "}
            <span className="font-bold relative">
              foreign clients
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-neon-blue to-transparent" />
            </span>{" "}
            and businesses to deliver scalable solutions, ranging from robust{" "}
            <span className="font-bold">Learning Management Systems (LMS)</span>{" "}
            to intelligent <span className="font-bold">AI-powered tools</span>.
          </p>

          <p>
            My freelance journey has been defined by solving real-world problems. I
            specialize in{" "}
            <span className="font-bold italic text-neon-purple dark:text-neon-purple">integrating AI solutions</span> into
            business infrastructures, transforming static platforms into dynamic,
            intelligent ecosystems using{" "}
            <span className="font-bold">React, Next.js, and Node.js</span>.
            Whether it's a complex dashboard or a customer-facing site, I focus on
            performance and user experience.
          </p>

          <p>
            My core stack is{" "}
            <span className="font-medium">MERN (MongoDB, Express, React, Node.js)</span>.
            I am also proficient in{" "}
            <span className="font-medium">TypeScript, Redux, and Firebase</span>. I
            am constantly upskilling to stay ahead of the curve, currently exploring
            advanced <span className="font-medium gradient-text">Generative AI</span> workflows. I
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
      </motion.div>
    </motion.section>
  );
}