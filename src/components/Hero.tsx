"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Github,
  Linkedin,
  Code2,
  Terminal,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen pt-20 flex flex-col justify-center items-center overflow-hidden bg-slate-50 dark:bg-[#0a0a0a] selection:bg-blue-500/30">
        {/* --- 1. AMBIENT BACKGROUND (Fixed to Screen) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Grid Pattern 
             - Removed the [mask-image] so it covers corner-to-corner 
             - Added 'fixed' so it stays as a background while you scroll
          */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

          {/* Moving Orbs */}
          <m.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"
          />
          <m.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"
          />
        </div>

        {/* --- 2. MAIN CONTENT --- */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* LEFT: TEXT CONTENT */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Headline */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 dark:text-white mb-6"
            >
              Building <br className="hidden md:block" />
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
                Digital Experiences
                {/* Underline Squiggle */}
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-50"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed"
            >
              Hi, I&#39;m{" "}
              <span className="font-bold text-slate-900 dark:text-white">
                Jay
              </span>
              . I engineer scalable software with a focus on buttery smooth
              interactions and pixel-perfect design.
            </m.p>

            {/* Actions */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              {/* Shimmer Button */}
              <Link
                href="/projects"
                className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 w-full sm:w-auto justify-center"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors hover:bg-slate-900">
                  View Projects <ArrowRight className="ml-2 w-4 h-4" />
                </span>
              </Link>

              {/* Socials */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://github.com"
                  className="p-3 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:scale-110 transition-transform text-slate-700 dark:text-white"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="p-3 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 hover:scale-110 transition-transform text-slate-700 dark:text-white"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </m.div>
          </div>

          {/* RIGHT: ILLUSTRATION & FLOATING ELEMENTS */}
          <div className="flex-1 w-full relative flex justify-center md:justify-end mt-12 md:mt-0">
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]"
            >
              {/* Floating Orbit Icons */}
              <FloatingIcon
                icon={<Code2 size={24} />}
                delay={0}
                x={-120}
                y={-80}
              />
              <FloatingIcon
                icon={<Terminal size={24} />}
                delay={2}
                x={140}
                y={-40}
              />
              <FloatingIcon
                icon={<Cpu size={24} />}
                delay={4}
                x={100}
                y={120}
              />

              {/* Glass Card Background for Illustration */}
              <div className="absolute inset-4 bg-gradient-to-tr from-white/20 to-transparent dark:from-white/5 dark:to-transparent backdrop-blur-md rounded-[2rem] border border-white/20 shadow-2xl rotate-3" />

              {/* Illustration */}
              <m.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="relative z-10 w-full h-full p-8"
              >
                <Image
                  src="/illustration.svg"
                  alt="Jay - Software Engineer"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain drop-shadow-2xl"
                  priority
                />
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

// Helper Component for Floating Icons
function FloatingIcon({
  icon,
  delay,
  x,
  y,
}: {
  icon: React.ReactNode;
  delay: number;
  x: number;
  y: number;
}) {
  return (
    <m.div
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        x: [x, x + 10, x],
        y: [y, y - 10, y],
      }}
      transition={{
        opacity: { delay: 0.5 + delay, duration: 0.5 },
        default: {
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: delay,
        }, // Floating effect
      }}
      className="absolute top-1/2 left-1/2 z-20 p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 text-blue-600 dark:text-blue-400"
    >
      {icon}
    </m.div>
  );
}
