"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Incident Manager",
    description:
      "An internal web app for managing telecom fault logs, escalations, and Inter-department collaboration.",
    imageSrc: "/images/noc-fault-logger.png",
    link: "https://github.com/Jay963-sys/NOC-INCIDENT-TRACKER",
    techStack: ["Node", "ExpressJs", "React", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Portfolio Site",
    description:
      "A sleek, responsive portfolio site built with Next.js, Tailwind, and Framer Motion.",
    imageSrc: "/images/portfolio-preview.png",
    link: "https://jay-dev-portfolio.vercel.app/",
    techStack: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    id: 3,
    title: "Weatherify",
    description:
      "A Simple Light-weight Weather web application that relies on simple API calls to fetch weather of different cities.",
    imageSrc: "/images/weather.png",
    link: "https://weatherlify.vercel.app/",
    techStack: ["Python", "HTML + CSS", "Vercel"],
  },
  {
    id: 4,
    title: "Tranzl8",
    description:
      "A Simple Light-weight Language translation web application that relies on simple API calls to translate between over 100+ languages.",
    imageSrc: "/images/translate.png",
    link: "https://tranzl8.vercel.app/",
    techStack: ["Python", "HTML + CSS", "Vercel"],
  },
];

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <h1 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
        My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
