"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 sm:mb-36">
      <SectionHeading>Featured Projects</SectionHeading>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-xl mx-auto -mt-6 mb-12 text-sm sm:text-base">
        Production web applications and client solutions delivered with React.js, modern frontend architecture, and measurable business impact.
      </p>

      <div className="flex flex-col gap-6 sm:gap-8">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}