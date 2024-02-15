import React from "react";
import { CgGhost,CgDetailsMore } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import calculator from "@/public/calculator.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduating ..",
    location: "Sillod, Maharashtra",
    description:
      "I at my second year college",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "",
    description:
      "I build some front-end projects for last 6 months in 2nd year of college.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
  {
    title: "Starving Full-Stack Developer",
    location: "",
    description:
      "I'm now creating full stack application My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(CgGhost),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Calculator",
    description:
      "In this calculator I personally resolved some complex issues that we have any first time created that type of calculator.",
    tags: ["React", "Node.js", "Tailwind"],
    imageUrl: calculator,
    link: 'https://originalscalculator.netlify.app/'
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Framer Motion",
  "Java",
  "Python",
] as const;

export const learnSkillsData = [
  "TypeScript",
  "Next.js",
  "MongoDB",
  "Express",
] as const;
