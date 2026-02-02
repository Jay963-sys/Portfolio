"use client";

import { useRef } from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// --- PROJECT DATA ---
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
    link: "https://www.toyestudios.co.uk/",
    techStack: ["Next.js", "Typescript", "Framer Motion"],
  },
  {
    id: 3,
    title: "BrazzPR Agency",
    description:
      "A bold, editorial-style corporate website engineered for a leading African PR agency.",
    imageSrc: "/images/brazz.png",
    link: "https://www.brazzprandcomms.com/",
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "RCCG Victory House Chicago",
    description:
      "A high-performance Next.js application featuring real-time sermon streaming, a custom RAG-based AI chatbot, and dynamic content management via Sanity.",
    imageSrc: "/images/vch.png",
    link: "https://www.victoryalltheway.org/",
    techStack: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel AI SDK"],
  },
  {
    id: 5,
    title: "Videographer Portfolio",
    description:
      "A full-stack video showcase platform built with performance, flexibility, and style.",
    imageSrc: "/images/kweku.png",
    link: "https://www.bhoyevisuals.com/",
    techStack: ["Next.js", "PostgreSQL", "Cloudinary", "Clerk"],
  },
  {
    id: 6,
    title: "EventHorizon",
    description:
      "A modern ticketing platform featuring real-time seat reservation, organizer dashboards, secure payments via Paystack, and instant PDF ticket generation.",
    imageSrc: "/images/event.png",
    link: "https://event-horizonn.vercel.app",
    techStack: ["Next.js", "Prisma", "Clerk", "Paystack", "PostgreSQL"],
  },
  {
    id: 7,
    title: "SubTrack",
    description:
      "A comprehensive subscription analytics dashboard allowing users to track recurring expenses, visualize spending by category, and receive renewal alerts via a secure, mobile-responsive interface.",
    imageSrc: "/images/subtrackk.png",
    link: "https://subtrackk.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "Clerk", "Recharts"],
  },
  {
    id: 8,
    title: "Portfolio Site",
    description:
      "A sleek, responsive portfolio site built with Next.js, Tailwind, and Framer Motion.",
    imageSrc: "/images/jay.png",
    link: "https://jay-dev-portfolio.vercel.app/",
    techStack: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    id: 9,
    title: "Weatherify",
    description:
      "A Simple Light-weight Weather web application that relies on simple API calls.",
    imageSrc: "/images/weather.png",
    link: "https://weatherlify.vercel.app/",
    techStack: ["Python", "HTML + CSS", "Vercel"],
  },
  {
    id: 10,
    title: "🎵 Mood Play",
    description:
      "AI-powered Spotify playlist generator based on User prompts or Questionnaire responses.",
    imageSrc: "/images/mood-play.png",
    link: "https://mood-play.vercel.app/",
    techStack: ["Next.js", "NextAuth", "Spotify API"],
  },
  {
    id: 11,
    title: "Tranzl8",
    description:
      "A Simple Light-weight Language translation web application supporting 100+ languages.",
    imageSrc: "/images/translate.png",
    link: "https://tranzl8.vercel.app/",
    techStack: ["Python", "HTML + CSS", "Vercel"],
  },
];

// --- COMPONENT: 3D TILT CARD ---
const ProjectCard = ({ data }: { data: (typeof projects)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  // Mouse position logic for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20);
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full rounded-2xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
        style={{ transform: "translateZ(50px)" }} // Pop effect
      >
        {/* Image Container */}
        <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-300" />
          <Image
            src={data.imageSrc}
            alt={data.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* External Link Icon Overlay */}
          <div className="absolute top-4 right-4 z-20 p-2 bg-white/90 dark:bg-black/80 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ExternalLink className="w-4 h-4 text-slate-900 dark:text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative z-20 bg-white/40 dark:bg-slate-900/40 rounded-b-2xl backdrop-blur-md">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {data.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
            {data.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </a>
    </m.div>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function ProjectsPage() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen pt-32 pb-24 overflow-hidden bg-slate-50 dark:bg-[#0a0a0a]">
        {/* --- BACKGROUND (Matches Hero) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest"
            >
              My Work
            </m.div>
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Projects
              </span>
            </m.h1>
            <m.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg"
            >
              A collection of web applications, commercial sites, and
              experiments.
            </m.p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 perspective-1000">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
