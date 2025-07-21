"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-xl mx-auto px-4 py-20 text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400"
      >
        Contact
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-gray-700 dark:text-gray-300 text-lg mb-8"
      >
        I'd love to hear from you! Feel free to reach out through this form or
        via social media.
      </motion.p>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        variants={itemVariants}
        className="space-y-4 mb-8"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
        <input type="hidden" name="to_email" value="natashajones963854@.com" />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full p-3 rounded border border-gray-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {success && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-green-600 dark:text-green-400 text-sm font-medium mb-6"
        >
          ✅ Message sent successfully!
        </motion.div>
      )}

      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-6 text-2xl text-blue-600 dark:text-blue-400"
      >
        <a
          href="https://github.com/Jay963-sys"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/ogbekhilu-osaro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/jedediah_xo?s=21&t=vSVbjHCHW_QG5tU6-96n8g"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-800 transition"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </motion.div>
  );
}
