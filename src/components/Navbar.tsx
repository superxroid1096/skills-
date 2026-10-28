"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => scrollTo("hero")}
          className="group text-left"
        >
          <div className="flex items-center gap-2.5">
            <span className="font-serif text-xl tracking-wide font-semibold text-white group-hover:text-slate-300 transition-colors">
              Ehab Hussien
            </span>
            <span className="text-xs text-slate-400 italic hidden sm:inline">
              · Software Engineer
            </span>
          </div>
          <div className="text-[11px] text-slate-400 tracking-wide hidden md:block">
            Helwan International Technology University · Cairo, Egypt
          </div>
        </button>

        {/* Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-10">
          {[
            { id: "works", label: "Projects" },
            { id: "about", label: "About Me" },
            { id: "skills", label: "Skills & Stack" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium tracking-wide text-slate-400 hover:text-white transition-colors py-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-xs font-semibold tracking-wide hover:bg-slate-200 transition-all duration-300 shadow-md shadow-white/5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </header>
  );
}
