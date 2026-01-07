"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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

  // --- 2. LOCK BODY SCROLL WHEN MENU IS OPEN ---
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
          {/* --- LOGO (z-50 to stay under menu, or z-[70] if you want it visible on top) --- */}
          {/* We keep it z-auto so it gets covered by the menu for a clean "New Page" look, 
              but the toggle button will stay visible. */}
          <Link
            href="/"
            className="flex items-center gap-3 group relative z-[70]" // Z-70 keeps logo visible if you want
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

          {/* --- DESKTOP NAV --- */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <m.span
                      layoutId="active-dot"
                      className="absolute -bottom-2 left-0 right-0 h-1.5 w-1.5 mx-auto bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* --- MOBILE MENU TOGGLE (Z-INDEX 70) --- */}
          {/* This places the button ON TOP of the sliding menu (which is Z-60) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors relative z-[70]"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* --- FULL SCREEN MOBILE MENU (Z-INDEX 60) --- */}
        <AnimatePresence>
          {menuOpen && (
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              // z-[60] ensures it covers the header (z-50)
              className="fixed inset-0 z-[60] bg-[#0a0a0a] md:hidden flex flex-col justify-center items-center"
            >
              {/* Background Glows */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

              <nav className="flex flex-col space-y-8 text-center relative z-10">
                {navItems.map((item, idx) => {
                  const isActive = pathname === item.href;
                  return (
                    <m.div
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`text-5xl font-bold tracking-tighter transition-colors ${
                          isActive
                            ? "text-blue-500"
                            : "text-white/50 hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </m.div>
                  );
                })}
              </nav>

              {/* Footer Text */}
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-12 text-white/30 text-sm font-medium tracking-widest uppercase"
              >
                Jay.dev © {new Date().getFullYear()}
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  );
}
