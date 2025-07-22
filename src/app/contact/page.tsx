"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_d8antsk",
        "template_4lhtklp",
        formRef.current!,
        "FIhcQW6JdpwRhdToI"
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl mx-auto px-4 py-20 text-center"
      >
        <m.h1
          variants={itemVariants}
          className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
        >
          Contact
        </m.h1>

        <m.p
          variants={itemVariants}
          className="text-gray-700 dark:text-gray-300 text-lg mb-8"
        >
          I would love to hear from you! Reach out via the form below or through
          social media.
        </m.p>

        <m.form
          ref={formRef}
          onSubmit={sendEmail}
          variants={itemVariants}
          className="space-y-4 mb-8 text-left"
          noValidate
        >
          <div>
            <label
              htmlFor="from_name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Your Name"
              required
              autoComplete="name"
              className="w-full mt-1 p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="from_email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="your@email.com"
              required
              autoComplete="email"
              className="w-full mt-1 p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full mt-1 p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </m.form>

        {success && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-600 dark:text-green-400 text-sm font-medium mb-6"
          >
            ✅ Message sent successfully!
          </m.div>
        )}

        <m.div
          variants={itemVariants}
          className="flex justify-center space-x-6 text-2xl text-blue-600 dark:text-blue-400"
        >
          <a
            href="https://github.com/Jay963-sys"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-800 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ogbekhilu-osaro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-800 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/jedediah_xo?s=21&t=vSVbjHCHW_QG5tU6-96n8g"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-800 transition"
          >
            <FaTwitter />
          </a>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}
