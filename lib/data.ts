import React from "react";
import { FaReact, FaGraduationCap } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "InstaDataHelp AI Services Private Limited",
    location: "Software Development Engineer 1 (SDE-1) | Remote",
    description: [
      "Engineered production web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS, developing responsive interfaces and reusable UI components.",
      "Developed user-facing features and integrated REST APIs into frontend workflows across multiple client-facing applications.",
      "Delivered frontend solutions for real-world client projects including ASAS Group, Technauto, and ANPCPMC, adapting interfaces to business requirements and deadlines.",
      "Implemented AI-assisted development workflows and contributed to frontend integration of AI-enabled application features.",
      "Performed testing, debugging, deployment, and production maintenance across client applications.",
    ],
    icon: React.createElement(FaReact),
    date: "Feb 2025 – Aug 2026",
  },
  {
    title: "InstaDataHelp AI Services Private Limited",
    location: "Software Developer Trainee | Remote",
    description: [
      "Developed web application interfaces using React.js, JavaScript, HTML, and CSS during a six-month software development training program.",
      "Contributed to UI implementation, debugging, testing, and modern frontend development workflows on live client projects.",
    ],
    icon: React.createElement(MdWorkOutline),
    date: "Aug 2024 – Feb 2025",
  },
] as const;

export const educationData = [
  {
    title: "Master of Computer Applications (MCA) — Computer Science",
    institution: "Indira Gandhi National Open University (IGNOU)",
    location: "Delhi, India",
    date: "Sep 2025 – Present",
    icon: React.createElement(FaGraduationCap),
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Jagannath Institute of Management Sciences (JIMS)",
    location: "Delhi, India | CGPA: 7.21",
    date: "2021 – 2024",
    icon: React.createElement(FaGraduationCap),
  },
] as const;

export const projectsData = [
  {
    title: "Bid Comparison & BOQ Validation Platform",
    subtitle: "ANPCPMC",
    description: [
      "Engineered a production BOQ comparison platform for a Bangalore-based construction/PMC client, automating validation and comparison of an estimate with up to 7 contractor bids across Civil and MEP workflows.",
      "Automated Excel parsing, BOQ mismatch detection, variance analysis, L1 bidder identification, and formatted comparative-statement generation, reducing manual error rates by 90%.",
    ],
    tags: ["React.js", "JavaScript", "Tailwind CSS", "SheetJS", "ExcelJS", "Production"],
    imageUrl: "/bidapppro.jpg",
    url: "https://bid-app-latest.vercel.app/",
    featuredBadge: "Featured · 90% Error Reduction",
  },
  {
    title: "Horizon Hauliers & Horizon Energies",
    subtitle: "ASAS Group",
    description: [
      "Architected and developed two production websites for ASAS Group’s logistics and energy businesses, with approximately 5–6 pages per website.",
      "Built the complete frontend and centralized Super Admin panel for managing galleries, job openings, and website content, and deployed the applications through cPanel.",
    ],
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Super Admin", "cPanel", "Client Project"],
    imageUrl: "/horizon.jpg",
    url: "https://horizon.co.zm/",
    secondaryUrl: "https://energies.horizon.co.zm/",
    secondaryLabel: "Horizon Energies",
    featuredBadge: "Client Project",
  },
  {
    title: "FleetSync — Fleet Telematics Platform",
    subtitle: "Technauto",
    description: [
      "Developed a React-based product platform for Technauto, a Dubai-based fleet telematics company, covering GPS/IoT products and fleet-management solutions.",
      "Built responsive product catalogs, detail pages, dashboards, and CMS-driven content workflows using React.js, Tailwind CSS, Framer Motion, and Sanity CMS.",
    ],
    tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Client Project"],
    imageUrl: "/Fleetsync.jpg",
    url: "https://fleet-sync-sage.vercel.app/",
    featuredBadge: "Client Project",
  },
  {
    title: "Car Buddy — Interactive Car Manual",
    subtitle: "Automotive Platform",
    description: [
      "Developed React-based interfaces for an interactive car-manual application, enabling users to browse vehicle information and interact with a conversational chatbot.",
      "Adapted and refined frontend workflows for web, tablet, and in-vehicle display environments, resolving React/UI issues and improving cross-platform usability.",
      "Contributed to the application associated with the patented invention 'A Method to Build an Interactive Car User Manual.'",
    ],
    tags: ["React.js", "JavaScript", "Responsive UI", "Web, Tablet & In-Vehicle", "Patented Invention"],
    imageUrl: "/carbuddy.jpg",
    featuredBadge: "Patented Invention",
  },
] as const;

export const skillsCategories = [
  {
    category: "Frontend",
    color: "from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10",
    border: "border-cyan-400/30 hover:border-cyan-400/70 hover:shadow-[0_0_20px_rgba(0,212,255,0.35)]",
    titleColor: "text-cyan-600 dark:text-cyan-400",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "JSX",
      "Next.js",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Framer Motion",
    ],
  },
  {
    category: "UI & Development",
    color: "from-purple-500/20 to-indigo-500/20 dark:from-purple-500/10 dark:to-indigo-500/10",
    border: "border-purple-400/30 hover:border-purple-400/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)]",
    titleColor: "text-purple-600 dark:text-neon-purple",
    skills: [
      "Responsive Design",
      "Reusable Components",
      "Dashboard Development",
      "Admin Panels",
      "REST API Integration",
      "Cross-platform UI",
    ],
  },
  {
    category: "Tools & Platforms",
    color: "from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10",
    border: "border-emerald-400/30 hover:border-emerald-400/70 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)]",
    titleColor: "text-emerald-600 dark:text-emerald-400",
    skills: [
      "Git / GitHub",
      "Firebase",
      "Sanity CMS",
      "cPanel",
      "PM2",
      "SheetJS",
      "ExcelJS",
    ],
  },
] as const;

// Flattened list for backwards compatibility
export const skillsData = skillsCategories.flatMap((c) => c.skills);
