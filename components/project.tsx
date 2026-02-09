"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { BsArrowUpRightSquare, BsBriefcaseFill } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isClientProject = tags.includes("Client Project") || tags.includes("Production");

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
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        // CHANGE HERE: Changed sm:h-[24rem] to sm:h-[30rem] to fit more content
        className="block bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 shadow-md hover:shadow-xl"
      >
        {isClientProject && (
           <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-amber-400 text-amber-950 text-[0.7rem] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
              <BsBriefcaseFill /> Professional Work
           </div>
        )}

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
          
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
            {description}
          </p>
          
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className={`px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full shadow-sm ${
                    tag === "Client Project" || tag === "Production"
                    ? "bg-amber-500 text-white font-bold" 
                    : "bg-black/[0.7] dark:text-white/70"
                }`}
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-4 sm:mt-6 items-center">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-900 underline decoration-gray-500/50 dark:text-white">
               Live Demo <BsArrowUpRightSquare />
            </span>

            {githubUrl && (
                <div 
                    onClick={(e) => {
                        e.preventDefault(); 
                        e.stopPropagation(); 
                        window.open(githubUrl, '_blank');
                    }}
                    className="flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition cursor-pointer z-20 dark:bg-white/10 dark:text-white dark:border-white/10"
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
          transition 
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