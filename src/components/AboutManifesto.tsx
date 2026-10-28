"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { STUDIO_STATS } from "@/data/projects";
import { Code2, Terminal, Cpu, GraduationCap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function AboutManifesto() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(".manifesto-text", {
        opacity: 0.2,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".manifesto-container",
          start: "top 75%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.from(".stat-box", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: About Ehab */}
        <div className="manifesto-container lg:col-span-7 space-y-8">
          <h2 className="manifesto-text text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-white leading-[1.15]">
            Engineering software with <br />
            <span className="italic text-slate-300">
              curiosity, logic, and precision.
            </span>
          </h2>

          <div className="space-y-4">
            <p className="manifesto-text text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              My name is <strong>Ehab Hussien</strong>. I am an 18-year-old software engineer currently pursuing my degree at <strong>Helwan International Technology University</strong>. I love turning complex ideas into clean, functional code and usable applications.
            </p>

            <p className="manifesto-text text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              I am highly proficient in <strong>JavaScript</strong>, <strong>Java</strong>, and <strong>Python</strong>. Whether developing responsive modern web frontends, designing structured object-oriented backend systems, or automating workflows with Python scripts, I focus on delivering clean code and pleasant user experiences.
            </p>

            <p className="manifesto-text text-sm sm:text-base text-slate-400 leading-relaxed" dir="rtl">
              أنا إيهاب حسين، أدرس في جامعة حلوان التكنولوجية الدولية وأمتلك شغفاً كبيراً في هندسة البرمجيات وتطوير المنظومات والمواقع المتطورة باستخدام جافا سكريبت، بايثون وجافا.
            </p>
          </div>

          {/* Technical Pillars */}
          <div id="skills" className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Code2,
                title: "JavaScript & Modern Web",
                desc: "Expertise in React, Next.js, Vite, and interactive responsive UI design.",
              },
              {
                icon: Terminal,
                title: "Python Development",
                desc: "Scripting, algorithmic computation, backend services, and automation.",
              },
              {
                icon: Cpu,
                title: "Java & Systems Architecture",
                desc: "Object-oriented programming, data structures, and robust application logic.",
              },
              {
                icon: GraduationCap,
                title: "Helwan International Tech. Univ.",
                desc: "Deep academic grounding in software engineering and technology foundations.",
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/25 transition-colors"
                >
                  <Icon className="w-5 h-5 text-slate-200 mb-3" />
                  <div className="text-sm font-semibold text-white">
                    {pillar.title}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pillar.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Highlights */}
        <div className="stats-grid lg:col-span-5 space-y-4">
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
            Profile Snapshot
          </div>

          {STUDIO_STATS.map((stat, i) => (
            <div
              key={i}
              className="stat-box tactile-card p-6 rounded-xl flex items-center justify-between"
            >
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-semibold text-white flex items-baseline">
                  <span>{stat.value}</span>
                  <span className="text-slate-300 text-xl ml-1">{stat.suffix}</span>
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  {stat.label}
                </div>
              </div>
              <div className="text-xs text-slate-400 text-right" dir="rtl">
                {stat.arabicLabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
