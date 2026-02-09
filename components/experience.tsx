"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 relative">
      <SectionHeading>My Experience</SectionHeading>
      
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          const isDark = theme === "dark";
          
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: isDark ? "rgba(255, 255, 255, 0.03)" : "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: isDark 
                    ? "0.4rem solid rgba(255, 255, 255, 0.5)" 
                    : "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: isDark ? "rgba(255, 255, 255, 0.15)" : "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                
                {/* UPDATED: Render List Items */}
                <ul className="!mt-4 list-disc ml-5 space-y-2">
                    {item.description.map((desc, i) => (
                        <li key={i} className="!font-normal text-gray-700 dark:text-white/75">
                            {desc}
                        </li>
                    ))}
                </ul>

              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}