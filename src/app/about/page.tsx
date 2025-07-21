"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const funFacts = [
  "💻 I write code every single day",
  "🌍 Based in Lagos, Nigeria",
  "🎧 Love building while listening to Music",
  "📚 Constantly learning something new",
  "⚽ When I'm not writing code i enjoy watching the best club in the world Liverpool F.C",
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

function FunFactsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mt-16 max-w-2xl mx-auto text-center"
    >
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
        Fun Facts
      </h2>
      <ul className="space-y-3">
        {funFacts.map((fact, idx) => (
          <motion.li
            key={idx}
            variants={itemVariants}
            className="text-gray-700 dark:text-gray-300 text-lg"
          >
            {fact}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 py-20 text-center"
      >
        <Image
          src="/images/profile.jpeg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mx-auto mb-6 border-4 border-blue-500"
        />

        <h1 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">
          About Me
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-2">
          I'm a passionate software engineer with a focus on full-stack
          developement. I have a strong background in building modern,
          responsive, and performant web applications using technologies like
          React, Next.js, TypeScript, and Node.js.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
          I love crafting clean, maintainable code and turning complex problems
          into elegant solutions. Currently, I'm focused on building scalable
          applications, learning backend architecture, and contributing to
          open-source.
        </p>

        {/* Resume Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>

        {/* Timeline Section */}
        <div className="mt-16 text-left">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
            Timeline
          </h2>
          <div className="relative border-l-2 border-blue-500 pl-6 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-1.5 w-3 h-3 bg-blue-600 rounded-full shadow"></div>
              <h3 className="text-lg font-semibold">Full-Stack Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                FreeLance Contractor · 2023 – Present
              </p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                Building accessible, responsive interfaces using Node,
                ExpressJs, PostgreSQL, Flask, React and Tailwind CSS.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-1.5 w-3 h-3 bg-blue-600 rounded-full shadow"></div>
              <h3 className="text-lg font-semibold">
                B.Sc. Systems Engineering
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                University of Lagos · 2020 – 2026
              </p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">
                Specialized in web development and software engineering.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"].map(
            (tech) => (
              <span
                key={tech}
                className="bg-slate-200 dark:bg-slate-700 text-sm px-3 py-1 rounded-full text-slate-800 dark:text-white"
              >
                {tech}
              </span>
            )
          )}
        </div>
      </motion.div>

      {/*Fun Facts*/}
      <FunFactsSection />
    </>
  );
}
