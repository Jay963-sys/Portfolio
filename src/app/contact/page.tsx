"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { Mail, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- EMAIL JS LOGIC ---
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_d8antsk", // Keep your ID
        "template_4lhtklp", // Keep your ID
        formRef.current!,
        "FIhcQW6JdpwRhdToI" // Keep your ID
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
          // Reset success state after 5 seconds if you want
          // setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden bg-slate-50 dark:bg-[#0a0a0a]">
        {/* --- 1. BACKGROUND ATMOSPHERE (Shared) --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        {/* --- 2. MAIN CONTAINER --- */}
        <div className="relative z-10 container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* --- LEFT: INFO & SOCIALS --- */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Get in Touch
                </m.div>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                  Let&#39;s build something <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                    exceptional.
                  </span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                  Have a project in mind? Looking to collaborate? Or just want
                  to talk tech? I&#39;m always open to discussing new ideas.
                </p>
              </div>

              {/* Social Cards */}
              <div className="grid gap-4">
                <SocialCard
                  href="mailto:ogbekhiluosaro@gmail.com"
                  icon={<Mail size={20} />}
                  label="Email Me"
                  value="ogbekhiluosaro@gmail.com"
                />
                <SocialCard
                  href="https://github.com/Jay963-sys"
                  icon={<FaGithub size={20} />}
                  label="Github"
                  value="@Jay963-sys"
                />
                <SocialCard
                  href="https://x.com/Jedediah_xo"
                  icon={<FaTwitter size={20} />}
                  label="Twitter"
                  value="@Jay_Dev"
                />
              </div>
            </m.div>

            {/* --- RIGHT: THE FORM (Glass Panel) --- */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative blob behind form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 dark:opacity-40" />

              <div className="relative bg-white dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-8 shadow-2xl">
                <AnimatePresence mode="wait">
                  {!success ? (
                    <m.form
                      key="contact-form"
                      ref={formRef}
                      onSubmit={sendEmail}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                        Send a Message
                      </h3>

                      <div className="space-y-4">
                        <InputGroup
                          id="from_name"
                          label="Your Name"
                          placeholder="John Doe"
                          type="text"
                        />
                        <InputGroup
                          id="from_email"
                          label="Email Address"
                          placeholder="john@example.com"
                          type="email"
                        />
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            placeholder="Tell me about your project..."
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 resize-none"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="group relative w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </span>
                        ) : (
                          <>
                            Send Message
                            <Send
                              size={18}
                              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </>
                        )}

                        {/* Shimmer Effect on Button */}
                        {!loading && (
                          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                        )}
                      </button>
                    </m.form>
                  ) : (
                    // --- SUCCESS STATE ---
                    <m.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                    >
                      <div className="h-20 w-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 mb-4">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Message Sent!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 max-w-xs mx-auto">
                        Thanks for reaching out. I&apos;ll get back to you as
                        soon as possible.
                      </p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="mt-6 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Send another message
                      </button>
                    </m.div>
                  )}
                </AnimatePresence>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

// --- SUBCOMPONENTS ---

function InputGroup({
  id,
  label,
  type,
  placeholder,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600"
      />
    </div>
  );
}

function SocialCard({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-blue-500 dark:hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
    >
      <div className="p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
          {label}
        </p>
        <p className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {value}
        </p>
      </div>
      <ArrowRight className="ml-auto w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors" />
    </a>
  );
}
