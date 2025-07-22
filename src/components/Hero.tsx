"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-900 dark:to-slate-800 overflow-hidden">
        {/* Main content */}
        <m.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white"
        >
          Hi, I'm Osaro 👋
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
        >
          I am a Software Engineer, I enjoy developing and building modern,
          scalable, and user-focused digital solutions.
        </m.p>

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg transition duration-300"
          >
            View Projects
          </Link>
        </m.div>

        {/* Illustration */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full max-w-[500px] mx-auto"
        >
          <Image
            src="/illustration.svg"
            alt="Developer Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </m.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute bottom-0 left-0 w-full h-64 text-blue-200 dark:text-blue-900"
            preserveAspectRatio="none"
            viewBox="0 0 1440 320"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,112C672,128,768,128,864,117.3C960,107,1056,85,1152,96C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
          </svg>
        </div>
      </section>
    </LazyMotion>
  );
}
