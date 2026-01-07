"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  // --- 1. HANDLE SCROLL STATE ---
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  // --- 2. LOCK BODY SCROLL ---
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-white/10 py-4 shadow-lg"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* --- 1. LOGO --- */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
            onClick={() => setMenuOpen(false)}
          >
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105 duration-300">
              <Image
                src="/jay1.svg"
                alt="Jay.dev Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">
              Jay.dev
            </span>
          </Link>

          {/* --- 2. DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? "text-blue-500"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      layoutId="active-dot"
                      className="absolute -bottom-2 left-0 right-0 h-1 w-1 mx-auto bg-blue-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* --- 3. MOBILE HAMBURGER (Animated) --- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2 bg-blue-500" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2 bg-blue-500" : ""
              }`}
            />
          </button>
        </div>

        {/* --- 4. EDITORIAL MOBILE MENU --- */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center px-6 h-[100dvh]"
            >
              {/* Background Ambience */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

              <nav className="flex flex-col gap-6 relative z-10 max-w-lg mx-auto w-full">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <m.div
                      key={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-6 w-full border-b border-white/5 pb-4"
                      >
                        {/* Numbering (Mono font for tech feel) */}
                        <span className="text-xs font-bold font-mono text-blue-500">
                          0{index + 1}
                        </span>

                        {/* Label (Huge, Bold, Tracking Tight) */}
                        <span
                          className={`text-5xl font-bold tracking-tighter transition-all duration-300 ${
                            isActive
                              ? "text-white italic" // Active state
                              : "text-white/40 group-hover:text-white group-hover:translate-x-2" // Hover state
                          }`}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </m.div>
                  );
                })}

                {/* Footer Links (Staggered in last) */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 pt-4 flex flex-col gap-4"
                >
                  <a
                    href="mailto:ogbekhiluosaro@gmail.com"
                    className="text-xl font-medium text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-2"
                  >
                    Get in Touch <ArrowRight size={18} />
                  </a>
                  <p className="text-slate-600 text-sm mt-4">
                    Based in Andromeda.
                    <br />
                    Available for freelance.
                  </p>
                </m.div>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
