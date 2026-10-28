"use client";

import React from "react";
import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Ehab! I am interested in collaborating with you.");
    window.open(`https://wa.me/201000000000?text=${text}`, "_blank");
  };

  return (
    <footer className="relative bg-[#08090d] pt-24 pb-12 px-6 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Call to Action */}
        <div className="text-center flex flex-col items-center py-12 border-b border-white/10">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1] max-w-3xl">
            Let&apos;s build something <br />
            <span className="italic text-slate-300">
              impactful together.
            </span>
          </h2>

          <p className="text-base text-slate-300 max-w-lg mt-6 leading-relaxed font-light">
            Have a project, system, or web platform you want to bring to life? I am currently open to freelance opportunities and internships.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="magnetic-btn bg-white text-black font-semibold text-sm px-8 py-3.5 hover:bg-slate-200 shadow-lg shadow-white/10"
            >
              <span>Send a Message</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsApp}
              className="magnetic-btn bg-white/[0.04] text-white border border-white/15 hover:border-white/35 px-6 py-3.5"
            >
              <MessageCircle className="w-4 h-4 text-slate-300" />
              <span>Direct WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Ehab's Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-white/10 text-sm">
          <div>
            <div className="text-white font-serif text-base font-medium">Education</div>
            <div className="text-slate-300 mt-1 font-light">Helwan International Technology University</div>
            <div className="text-slate-500 text-xs mt-0.5">Faculty of Technological Engineering · Cairo</div>
          </div>
          <div>
            <div className="text-white font-serif text-base font-medium">Core Stack</div>
            <div className="text-slate-300 mt-1 font-light">JavaScript · Java · Python</div>
            <div className="text-slate-500 text-xs mt-0.5">React, Next.js, Algorithms & Systems</div>
          </div>
          <div>
            <div className="text-white font-serif text-base font-medium">Availability</div>
            <div className="text-slate-300 mt-1 font-light">Open for Remote & Local Roles</div>
            <div className="text-slate-500 text-xs mt-0.5">Cairo, Egypt · Remote Worldwide</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div>
            © 2026 Ehab Hussien. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-slate-300 transition-colors pl-4 border-l border-white/10"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
