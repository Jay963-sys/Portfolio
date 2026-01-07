"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react"; // Ensure you have lucide-react installed

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-slate-50 dark:bg-slate-950 overflow-hidden selection:bg-blue-500/30">
        {/* --- BACKGROUND EFFECTS --- */}
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Central Glow/Spotlight */}
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px] dark:bg-blue-500/30"></div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Badge */}
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-xs font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new projects
          </m.div>

          {/* Headline */}
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Hi, I&#39;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
              Jay
            </span>
            <br />
            Software Engineer.
          </m.h1>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl leading-relaxed"
          >
            I architect and build modern, scalable digital solutions with a
            focus on
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {" "}
              user experience
            </span>{" "}
            and
            <span className="text-slate-900 dark:text-slate-200 font-medium">
              {" "}
              performance
            </span>
            .
          </m.p>

          {/* Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-16"
          >
            <Link
              href="/projects"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span className="mr-2">View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-4">
              {/* Social Icons - Replace hrefs with your actual links */}
              <Link
                href="https://github.com"
                target="_blank"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-black dark:hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-110 duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </m.div>

          {/* Illustration/Image with Floating Animation */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full max-w-[400px] aspect-square"
          >
            {/* Decorative blob behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>

            <m.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/illustration.svg"
                alt="Developer Illustration"
                width={400}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </m.div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
