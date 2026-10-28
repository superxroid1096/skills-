"use client";

import React, { useState } from "react";
import { AWARDS_LIST } from "@/data/projects";
import { Trophy, ArrowUpRight } from "lucide-react";

export default function AwardShowcase() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="awards" className="py-28 px-6 sm:px-8 max-w-7xl mx-auto border-b border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-white">
            Honors & Distinctions
          </h2>
        </div>
        <div className="text-xs text-slate-400 tracking-wide">
          Key Milestones & Engineering Projects
        </div>
      </div>

      <div className="divide-y divide-white/10">
        {AWARDS_LIST.map((award, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIdx(index)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group py-6 sm:py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 cursor-pointer hover:px-4 rounded-xl hover:bg-white/[0.02]"
          >
            <div className="flex items-center gap-6">
              <span className="font-serif italic text-sm text-slate-400 group-hover:text-white transition-colors">
                No. {index + 1}
              </span>
              <div>
                <h3 className="text-lg sm:text-2xl font-serif font-semibold text-white group-hover:text-slate-200 transition-colors flex items-center gap-2">
                  <span>{award.title}</span>
                  <Trophy className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="text-xs text-slate-400 mt-1">
                  {award.org} · {award.project}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6">
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                {award.year}
              </span>
              <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-white text-slate-400 group-hover:text-black flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
