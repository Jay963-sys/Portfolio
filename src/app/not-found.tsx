"use client";

import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Image from "next/image";

export default function NotFound() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white dark:bg-gray-900"
      >
        <Image
          src="/images/404-illustration.svg"
          alt="404 Illustration"
          width={500}
          height={500}
          className="mb-8 max-w-full h-auto"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Oops! Page Not Found
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </m.div>
    </LazyMotion>
  );
}
