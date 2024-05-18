import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import amotionsinc from "@/public/amotionsinc.png";
import pythonlogo from "@/public/pythonlogo.jpg";
import event from "@/public/event.png";

import { IoIosCode } from "react-icons/io";

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
    title: "B.E in Computer Science",
    location: "PESIT, Bangalore",
    description:
      "GPA: 9.56/10.0",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Co-founder, Ed-tech Startup",
    location: "Bangalore, India",
    description:
      "I co-founded an ed-tech startup that provided an AI powered online learning platform for students. I led the tech team in development of recommendation systems for e-learning",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "PG Diploma in Data Science and Business Analytics",
    location: "Texas McCombs Business School",
    icon: React.createElement(IoIosCode),
    date: "2021 - 2022",
  },
  {
    title: "Software Engineer Intern",
    location: "Amotions Inc, San Francisco, USA",
    description:
      "Worked on a full-stack project for a startup. I developed a web app for tracking mental health of employees.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "MS in Computer Science",
    location: "University of Southern California, Los Angeles, USA",
    description:
      "GPA: 3.81/4.0",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2024",
  },
] as const;

export const projectsData = [
  {
    title: "Software Engineer Intern @ Amotions Inc",
    description:
      "Spearheaded front-end and back-end enhancements, Executed a comprehensive overhaul of the onboarding procedure.",
    tags: ["React", "Next.js", "MongoDB", "AWS", "Aasana"],
    imageUrl:amotionsinc ,
  },
  {
    title: "Natural language based Mock ND-JSON Database",
    description: 'Engineered a high-performance NoSQL JSON database system leveraging chunk-based processing.',
    tags: ["Python", "Docker", "Linux Programming", "SQL", "NLP"],
    imageUrl: pythonlogo,
  },
  {
    title: "Event Search - A Smart Event Discovery Web App",
    description:" Created a dynamic web app with Angular CLI and Express.js, integrating Ticketmaster and Spotify APIs for event details, artist albums, and enriched user experiences.",
    tags: ["Angular CLI", "API", "Express JS", "iOS app development"],
    imageUrl: event,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "JavaScript",
  "SQL",
  "Operating Systems",
  "Angular CLI",
  "React",
  "Next.js",
  "Node.js",
  "Flask",
  "Git",
  "Firebase",
  "MongoDB",
  "AWS",
  "Linux",
  "Express",
  "Postman",
  "Docker",
] as const;