"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HorizontalGalleryProps {
  onSelectProject: (project: Project) => void;
}

export default function HorizontalGallery({ onSelectProject }: HorizontalGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1.2,
          end: () => `+=${track.scrollWidth - window.innerWidth + 300}`,
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative min-h-screen py-24 flex flex-col justify-center overflow-hidden border-t border-b border-white/10"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white">
            Featured Projects <span className="italic text-slate-300">& Built Systems</span>
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Explore the flagship web applications and platforms engineered by Ehab Hussien.
          </p>
        </div>

        <div className="text-xs text-slate-400">
          2 Flagship Implementations
        </div>
      </div>

      {/* Track Container */}
      <div className="horizontal-track-container w-full overflow-hidden">
        <div
          ref={trackRef}
          className="horizontal-track flex items-stretch gap-8 px-6 sm:px-12 w-max"
        >
          {PROJECTS.map((project, index) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="tactile-card group relative w-[90vw] sm:w-[620px] md:w-[680px] flex-shrink-0 cursor-pointer overflow-hidden p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-base text-slate-300">
                    Project 0{index + 1}
                  </span>
                  <span className="text-xs text-slate-500">·</span>
                  <span className="text-xs text-slate-400 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs text-slate-400">
                  {project.year}
                </span>
              </div>

              {/* Showcase Image Frame */}
              <div className="relative w-full h-[300px] sm:h-[360px] my-6 rounded-xl overflow-hidden bg-[#13151f] border border-white/10">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 680px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/85 via-transparent to-black/10" />

                {/* Inspect Action */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-lg">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Footer / Narrative */}
              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.deliverables.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono text-slate-200 bg-white/[0.06] px-2.5 py-1 rounded border border-white/10"
                    >
                      {tag}#
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white group-hover:text-slate-200 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <span className="text-xs text-slate-400 font-sans font-normal hidden sm:inline">
                    {project.client}
                  </span>
                </h3>

                <p className="text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics Bar */}
                <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-3">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.06]">
                      <div className="text-[11px] text-slate-400">
                        {m.label}
                      </div>
                      <div className="text-xs font-semibold text-white mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
