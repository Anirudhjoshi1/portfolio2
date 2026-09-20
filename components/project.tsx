"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquare, BsBriefcaseFill, BsStarFill } from "react-icons/bs";

type ProjectProps = {
  title: string;
  subtitle?: string;
  description: readonly string[];
  tags: readonly string[];
  imageUrl: string;
  url?: string;
  secondaryUrl?: string;
  secondaryLabel?: string;
  featuredBadge?: string;
  githubUrl?: string;
};

export default function Project({
  title,
  subtitle,
  description,
  tags,
  imageUrl,
  url,
  secondaryUrl,
  secondaryLabel,
  featuredBadge,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const isGitHubPrimary = Boolean(url && url.includes("github.com"));
  const hasActions = Boolean(url || secondaryUrl || githubUrl);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <div
        ref={cardRef}
        className="block max-w-[46rem] rounded-2xl overflow-hidden relative sm:min-h-[30rem] transition-all duration-300 
          bg-white/70 dark:bg-white/[0.03] 
          border border-black/10 dark:border-white/[0.08]
          backdrop-blur-md
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
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.08), transparent 60%)`,
          }}
        />

        {/* Animated border on hover */}
        <motion.div
          className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(168,85,247,0.25), rgba(236,72,153,0.25))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "xor",
            WebkitMaskComposite: "xor",
            padding: "1px",
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="pt-6 pb-7 px-6 sm:pl-9 sm:pr-4 sm:pt-8 sm:max-w-[54%] flex flex-col h-full sm:group-even:ml-[20rem] relative z-10">
          <div>
            {/* Header row with subtitle and badge side-by-side, no overlapping! */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              {subtitle && (
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                  {subtitle}
                </span>
              )}
              {featuredBadge && (
                <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 text-[0.7rem] font-bold px-2.5 py-0.5 rounded-full shadow-sm uppercase tracking-wider">
                  {featuredBadge.includes("Featured") ? (
                    <BsStarFill size={10} />
                  ) : (
                    <BsBriefcaseFill size={10} />
                  )}
                  {featuredBadge}
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
              {title}
            </h3>
          </div>

          <ul className="mt-3 leading-relaxed text-gray-700 dark:text-white/75 text-sm list-disc ml-4 space-y-1.5">
            {description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>

          <ul className="flex flex-wrap mt-4 gap-1.5 sm:mt-6">
            {tags.map((tag, index) => (
              <motion.li
                className={`px-2.5 py-1 text-[0.68rem] uppercase font-medium tracking-wider rounded-md ${
                  tag === "Production" || tag === "Client Project" || tag === "Patented Invention"
                    ? "bg-cyan-100 text-cyan-900 dark:bg-cyan-950/60 dark:text-cyan-300 border border-cyan-300/40 dark:border-cyan-500/30 font-semibold"
                    : "bg-gray-100 text-gray-700 dark:bg-white/10 dark:text-white/75 border border-black/5 dark:border-white/5"
                }`}
                key={index}
                whileHover={{ scale: 1.05, y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.li>
            ))}
          </ul>

          {/* Action Links (only rendered if links exist) */}
          {hasActions && (
            <div className="flex flex-wrap gap-3 mt-5 sm:mt-auto pt-4 items-center">
              {url &&
                (isGitHubPrimary ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-950 transition-all shadow-sm hover:shadow-neon"
                  >
                    <FaGithub size={16} /> View Code
                  </a>
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-neon"
                  >
                    Live Demo <BsArrowUpRightSquare size={13} />
                  </a>
                ))}

              {secondaryUrl && (
                <a
                  href={secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-gray-800 border border-gray-200 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-all dark:bg-white/10 dark:text-white dark:border-white/10 hover:shadow-sm"
                >
                  {secondaryLabel || "Secondary Link"} <BsArrowUpRightSquare size={12} />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white text-gray-800 border border-gray-200 px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-all dark:bg-white/10 dark:text-white dark:border-white/10"
                >
                  Code <FaGithub size={14} />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Project Image Showcase */}
        <div className="hidden sm:block absolute top-12 -right-36 w-[27rem] rounded-xl shadow-2xl overflow-hidden border border-black/10 dark:border-white/10 transition-all duration-500 group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-2 group-hover:-rotate-1 group-even:right-[initial] group-even:-left-36 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-1">
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={520}
            height={320}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}