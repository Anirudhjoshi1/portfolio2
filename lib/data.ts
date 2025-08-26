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
    title: "InstaDataHelp , Banglore",
    location: "AI & Frontend Developer Intern ",
    description:
      "Developed a full-stack AI product management platform with role-based authentication. Deployed the project using Pm2, managed version control with Git, and collaborated with AI teams to align features with product goals.",
    icon: React.createElement(FaReact),
    date: "2025 - present",
  },
  {
    title: "Q spiders , Noida",
    location: "Mern Stack Trainee",
    description:
      "Internship and Certifications at Qspiders , Upskilled in MERN Stack, mentored by industry experts from leading IT companies.",
    icon: React.createElement(CgWorkAlt),
    date: " JUL 2024 - DEC 2024 ",
  },
  {
    title: "Danstring Technologies , Delhi",
    location: "React Js Intern",
    description:
      "Designed interactive dashboards with React and Material UI Implemented SPA components, tables, forms using React RouterEnhanced UI accessibility and optimized for mobile",
    icon: React.createElement(FaReact),
    date: "JUL 2023 - SEP 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Bid Comparison & Excel Exporter AI",
    description:
      "I built a production-grade web app used in actual construction procurement workflows to compare multi-vendor BOQ quotes against a baseline estimate and generate a polished Excel comparative statement. .",
    tags: ["React", "Sheet Js", "Tailwind Css"],
    imageUrl: "/bidapppro.jpg",
    url: "https://bidapppro.netlify.app/",
  },
   {
    title: "MedXpert AI",
    description:
      "Developed a web application Dashboard designed for pharmaceutical professionals to assist in the review, validation, and improvement of medical formulations. ",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    imageUrl: "/medexo.jpg",
    url: "https://medexpertdemo.netlify.app/",
  },
  {
    title: "AcePitch AI",
    description:
      "Built a full-stack, role-based web dashboard for a RAG-powered AI platform that trains automotive salespeople.",
    tags: ["React", "Node.js", "Express", "MongoDB", "CSS3"],
    imageUrl: "/acepitch.jpg",
    url: "http://101.53.149.101:5174/login",
  },
  {
    title: "Dashboard with Material UI",
    description:
      "Built a real-time admin dashboard with product management and Firebase Firestore CRUD operations.",
    tags: ["React", "Firebase", "Material UI"],
    imageUrl: "/dashboard.jpg",
    url: "https://dashboardwithmui.netlify.app/home?",
  },
  {
    title: "Quiz Game",
    description:
      "Interactive quiz game with a countdown timer, score tracking, smooth UI transitions, and randomized questions.",
    tags: ["React", "JavaScript", "CSS", "Rest Api"],
    imageUrl: "/gamify.jpg",
    url: "https://gameifyquiz.netlify.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "Responsive e-commerce site with product browsing and cart features, designed mobile-first for cross-device compatibility.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    imageUrl: "/Ecommerce.jpg",
    url: "https://vougecloset.netlify.app/",
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "MySql",
  "Pm2",
  "Material UI",
  "Canva"
 
] as const;
