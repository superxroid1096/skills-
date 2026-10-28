"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { X, Trophy, CheckCircle2, ArrowRight } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({ project, onClose, onOpenContact }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#090a0f]/85 backdrop-blur-xl transition-opacity"
      />

      {/* Modal Dialog Card */}
      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto tactile-card bg-[#0e1017] border border-white/15 rounded-2xl p-6 sm:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs font-serif italic text-slate-300">
              {project.category}
            </span>
            <span className="text-xs text-slate-500">·</span>
            <span className="text-xs text-slate-400">
              {project.year}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.15] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Title & Client */}
        <div className="mt-8">
          <div className="text-xs text-slate-400 tracking-wider uppercase font-medium">
            Commissioned for {project.client}
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-white tracking-tight mt-2">
            {project.title}
          </h2>

          {project.arabicSubtitle && (
            <p className="text-base text-slate-300 mt-2 font-normal" dir="rtl">
              {project.arabicSubtitle}
            </p>
          )}

          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed max-w-3xl font-light">
            {project.description}
          </p>
        </div>

        {/* Main Showcase Hero Image */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-xl overflow-hidden my-8 border border-white/15 bg-[#141622]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-[#090a0f]/80 backdrop-blur-md text-slate-200 py-1 px-2.5 rounded text-xs flex items-center gap-1.5 border border-white/10"
              >
                <Trophy className="w-3.5 h-3.5 text-slate-300" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-center"
            >
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {m.label}
              </div>
              <div className="font-serif text-2xl font-semibold text-white mt-1">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="text-xs uppercase tracking-wider text-slate-400 mb-3 font-medium">
            Technical Architecture & Deliverables
          </div>
          <div className="flex flex-wrap gap-2">
            {project.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/[0.03] text-xs text-slate-200 border border-white/10 rounded"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Secondary Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {project.galleryImages.slice(0, 2).map((img, idx) => (
            <div
              key={idx}
              className="relative h-60 rounded-xl overflow-hidden border border-white/10"
            >
              <Image src={img} alt="Gallery Shot" fill className="object-cover object-top" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Interested in building a similar platform?
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="magnetic-btn bg-white text-black font-semibold hover:bg-slate-200 text-xs px-6 py-2.5"
          >
            <span>Discuss This Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
