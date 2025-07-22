"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  techStack?: string[];
  link: string;
};

export default function ProjectCard({
  title,
  description,
  imageSrc,
  techStack = [],
  link,
}: ProjectCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className="block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 max-w-md mx-auto"
        aria-label={`View project: ${title}`}
      >
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc || "/placeholder.png"}
            alt={title || "Project Image"}
            fill
            className="rounded-t-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
          />
        </div>

        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="bg-slate-200 dark:bg-slate-700 text-xs px-2 py-1 rounded-full text-slate-800 dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </m.a>
    </LazyMotion>
  );
}
