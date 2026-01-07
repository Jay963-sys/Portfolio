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
    title: "Toye Studios",
    description:
      "Simple portfolio web-app for a creative studio to showcase their work.",
    imageSrc: "/images/toye.png",
    link: "https://toyestudios.co.uk/",
    techStack: ["Next.js(App Router)", "Typescript", "Framer Motion"],
  },
  {
    id: 3,
    title: "BrazzPR Agency Platform",
    description:
      "A bold, editorial-style corporate website engineered for a leading African PR agency.",
    imageSrc: "/images/brazz.png",
    link: "https://brazzprandcomms.com/",
    techStack: [
      "Next.js (App Router)",
      "TypeScript",
      "Framer Motion",
      "Sanity.io (Headless CMS)",
      "Tailwind CSS",
    ],
  },
  {
    id: 4,
    title: "Videographer Portfolio Platform",
    description:
      "A full-stack video showcase platform built with performance, flexibility, and style. Designed for filmmakers, content creators, and videographers to easily upload, manage, and present their work online — securely and beautifully.",
    imageSrc: "/images/bhoye.png",
    link: "https://bhoyevisuals.com/",
    techStack: [
      "Next.js(App Router)",
      "Typescript",
      "Framer Motion",
      "PostgreSQL(Neon)",
      "Cloudinary",
      "Clerk",
    ],
  },
  {
    id: 5,
    title: "Portfolio Site",
    description:
      "A sleek, responsive portfolio site built with Next.js, Tailwind, and Framer Motion.",
    imageSrc: "/images/jay.png",
    link: "https://jay-dev-portfolio.vercel.app/",
    techStack: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    id: 6,
    title: "Weatherify",
    description:
      "A Simple Light-weight Weather web application that relies on simple API calls to fetch weather of different cities.",
    imageSrc: "/images/weather.png",
    link: "https://weatherlify.vercel.app/",
    techStack: ["Python", "HTML + CSS", "Vercel"],
  },
  {
    id: 7,
    title: "🎵Mood Play",
    description:
      "AI-powered Spotify playlist generator that automatically creates playlists based on User prompts or Questionnaire responses",
    imageSrc: "/images/mood-play.png",
    link: "https://mood-play.vercel.app/",
    techStack: [
      "Next.js(App Router)",
      "Typescript",
      "Framer Motion",
      "NextAuth",
      "Spotify API",
    ],
  },
  {
    id: 8,
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
        A Few of My Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.div>
  );
}
