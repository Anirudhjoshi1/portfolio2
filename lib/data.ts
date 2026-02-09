import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";



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
    name: "Projects",
    hash: "#projects",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "InstaDataHelp, Bangalore",
    location: "AI & Frontend Developer Intern",
    description: [
      "Serving as a key AI full-stack developer delivering production-grade software for diverse international clients.",
      "Engineered the Horizon Digital Ecosystem (Logistics), the FleetSync Telematics Dashboard, and AI-Based LMS For Pharma.",
      "My role spans the entire SDLC—from architecting scalable React/Node.js solutions to integrating Generative AI agents and managing live cloud deployments."
    ],
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
  {
    title: "Q Spiders, Noida",
    location: "MERN Stack Trainee",
    description: [
      "Completed intensive internship and certifications in Full Stack Web Development.",
      "Upskilled in the MERN Stack ecosystem, mentored directly by industry experts from leading IT companies."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "JUL 2024 - DEC 2024",
  },
  {
    title: "Danstring Technologies, Delhi",
    location: "React.js Intern",
    description: [
      "Designed interactive dashboards using React and Material UI.",
      "Implemented complex SPA components, dynamic tables, and forms using React Router.",
      "Enhanced UI accessibility (WCAG) and optimized performance for mobile devices."
    ],
    icon: React.createElement(FaReact),
    date: "JUL 2023 - SEP 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Bid Management System (ANPCPMC)",
    description: [
      "Engineered a production-grade Bid Management Tool for ANPCPMC, a Bangalore-based PMC firm.",
      "Automated multi-vendor BOQ comparisons to generate audit-ready Excel comparative statements.",
      "Streamlined high-value construction procurement workflows, reducing manual error rates by 90%."
    ],
    tags: ["React", "SheetJS", "Tailwind CSS", "Production"],
    imageUrl: "/bidapppro.jpg",
    url: "https://bidapppro.netlify.app/",
  },
  {
    title: "Horizon Group Digital Ecosystem",
    description: [
      "Architected a scalable multi-platform web ecosystem for Horizon Group, a leading Zambian conglomerate.",
      "Integrated distinct business verticals (Logistics & Energy) under a unified React architecture.",
      "Developed a custom Admin Dashboard for real-time content control and service management."
    ],
    tags: ["React", "Tailwind", "Admin Panel", "Client Project"],
    imageUrl: "/horizon.jpg",
    url: "https://horizon.co.zm/",
  },
  {
    title: "FleetSync: Modern Telematics Dashboard",
    description: [
      "Designed a cutting-edge React.js fleet management interface for Technauto, a premier Dubai-based telematics firm.",
      "Implemented a high-performance modern UI with real-time Google Maps integration.",
      "Provided clients with a seamless, futuristic way to track assets across the UAE."
    ],
    tags: ["React", "Tailwind CSS", "Google Maps API", "Client Project"],
    imageUrl: "/fleetsync.jpg", 
    url: "https://fleetsyncc.netlify.app/",
  },
  {
    title: "Pharma LMS (Preswrite Pro)",
    description: [
      "Developed a specialized LMS for InstaDataHelp to train pharmaceutical students and medical representatives.",
      "Gamified the learning process for the 'Preswrite Pro' tool with interactive video modules.",
      "Integrated role-play assessments and real-time performance analytics."
    ],
    tags: ["React", "Tailwind", "EdTech", "LMS", "Client Project"],
    imageUrl: "/Lms.jpg",
    url: "https://lms-demo0.netlify.app/",
  },
] as const;


export const skillsData = [
  // Core Full Stack
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind",
  "Framer Motion", // Crucial for "cool" UI
  
  // The AI Stack (2026 Essentials)
  "Python",          // The language of AI
  "LangChain",       // Standard for building AI Apps
  "RAG Architecture",// Retrieval-Augmented Generation (Hot skill)
  "OpenAI API",
  "Hugging Face",    // For open-source models
  "Vector Databases",// (Pinecone/Chroma) - Memory for AI
  "AI Agents",       // Building autonomous bots
  
  // Backend & Ops
  "Prisma",
  "MongoDB",
  "PostgreSQL",      // Better than MySQL for Vector search
  "Docker",          // Essential for deploying AI services
  "Git",
  "Express",
] as const;
