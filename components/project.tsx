"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquare, BsBriefcaseFill } from "react-icons/bs";

type ProjectProps = {
  title: string;
  description: readonly string[];
  tags: readonly string[];
  imageUrl: string;
  url: string;
  githubUrl?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isClientProject =
    tags.includes("Client Project") || tags.includes("Production");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a
        ref={cardRef}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-[42rem] rounded-2xl overflow-hidden sm:pr-8 relative sm:h-[32rem] transition-all duration-300 sm:group-even:pl-8 
          bg-white/70 dark:bg-white/[0.03] 
          border border-black/5 dark:border-white/[0.08]
          backdrop-blur-sm
          hover:shadow-neon-strong dark:hover:shadow-neon
          holo-tilt"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Spotlight follow cursor */}
        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.06), transparent 60%)`,
          }}
        />

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
          transition={{ duration: 0.3 }}
        />

        {isClientProject && (
          <motion.div
            className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 text-[0.7rem] font-bold px-3 py-1 rounded-full shadow-lg uppercase tracking-wider"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <BsBriefcaseFill /> Professional Work
          </motion.div>
        )}

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] relative z-10">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>

          <ul className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm list-disc ml-4 space-y-1">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <motion.li
                className={`px-3 py-1 text-[0.7rem] uppercase tracking-wider rounded-full shadow-sm ${tag === "Client Project" || tag === "Production"
                    ? "bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 font-bold"
                    : "bg-gray-900/80 text-white/80 dark:bg-white/10 dark:text-white/70 border border-white/5"
                  }`}
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.li>
            ))}
          </ul>

          <div className="flex gap-3 mt-4 sm:mt-6 items-center">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-neon-blue/50 dark:text-white">
              Live Demo <BsArrowUpRightSquare />
            </span>

            {githubUrl && (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  window.open(githubUrl, "_blank");
                }}
                className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 hover:shadow-neon transition cursor-pointer z-20 dark:bg-white/10 dark:text-white dark:border-white/10"
              >
                Code <FaGithubSquare />
              </div>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={500}
          height={300}
          className="absolute hidden sm:block top-10 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition-all duration-500
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      </a>
    </motion.div>
  );
}