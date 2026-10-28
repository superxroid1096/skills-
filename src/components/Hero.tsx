"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, MessageCircle, Code2 } from "lucide-react";

gsap.registerPlugin(useGSAP);

interface HeroProps {
  onExploreWorks: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreWorks, onOpenContact }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(
        ".hero-line",
        {
          opacity: 0,
          y: 40,
          stagger: 0.18,
          duration: 1.1,
        }
      )
        .from(
          ".hero-sub",
          {
            opacity: 0,
            y: 20,
            duration: 0.9,
          },
          "-=0.6"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          badgeRef.current,
          {
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        );
    },
    { scope: containerRef }
  );

  const handleWhatsApp = () => {
    const text = encodeURIComponent("Hello Ehab! I saw your portfolio and would like to discuss a project.");
    window.open(`https://wa.me/201000000000?text=${text}`, "_blank");
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-16 px-6 sm:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Human Editorial Headline */}
        <h1
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-[-0.015em] leading-[1.08] text-white max-w-4xl"
        >
          <span className="hero-line block">Ehab Hussien</span>
          <span className="hero-line block italic font-light text-slate-300">
            I build anything in programming.
          </span>
        </h1>

        {/* Narrative Subhead */}
        <div className="hero-sub mt-8 max-w-2xl text-center space-y-3">
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            I am an 18-year-old software engineer studying at <strong>Helwan International Technology University</strong>. I specialize in <strong>JavaScript</strong>, <strong>Java</strong>, and <strong>Python</strong>, building reliable systems, web applications, and interactive digital products.
          </p>
          <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed" dir="rtl">
            مهندس برمجيات عمري 18 عاماً وأدرس في جامعة حلوان التكنولوجية الدولية. متخصص في تطوير الويب والأنظمة باستخدام جافا سكريبت، بايثون، وجافا.
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <button
            onClick={onExploreWorks}
            className="magnetic-btn bg-white text-black font-semibold hover:bg-slate-200 shadow-lg shadow-white/10"
          >
            <span>View All Projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="magnetic-btn bg-white/[0.04] text-white border border-white/15 hover:border-white/35 hover:bg-white/[0.08]"
          >
            <MessageCircle className="w-4 h-4 text-slate-300" />
            <span className="text-xs tracking-wider font-medium">
              Direct WhatsApp
            </span>
          </button>

          <button
            onClick={onOpenContact}
            className="magnetic-btn bg-[#12141c] text-white border border-white/10 hover:border-white/30"
          >
            <Code2 className="w-4 h-4 text-slate-300" />
            <span className="text-xs tracking-wider font-medium">
              Get in Touch
            </span>
          </button>
        </div>

        {/* Ehab's Profile Highlights */}
        <div
          ref={badgeRef}
          className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 w-full max-w-3xl pt-8 border-t border-white/10"
        >
          {[
            { value: "18 Years Old", label: "Software Engineer" },
            { value: "Helwan ITU", label: "Technology University" },
            { value: "JS · Java · Python", label: "Core Specialization" },
            { value: "Cairo, Egypt", label: "Available for Remote Work" },
          ].map((item, i) => (
            <div key={i} className="text-center group">
              <div className="font-serif text-lg sm:text-xl font-semibold text-white group-hover:text-slate-300 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
