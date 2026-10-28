"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Play, Pause } from "lucide-react";

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReelModal({ isOpen, onClose }: ReelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "Kinetic Form & Light", time: "00:14", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" },
    { title: "Tactile Interaction", time: "00:42", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80" },
    { title: "Spatial Environments", time: "01:18", image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80" },
    { title: "Classical Horology", time: "01:56", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Dim overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0e0d0b]/90 backdrop-blur-2xl"
      />

      <div
        className="relative z-10 w-full max-w-5xl bg-[#14120f] border border-[#c99a65]/25 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#c99a65]/15 bg-[#0e0d0b]/60">
          <span className="text-xs uppercase tracking-widest text-[#c99a65] font-medium">
            Studio Film · Exhibition Reel
          </span>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/[0.15] text-[#f5f0ea] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative w-full h-[360px] sm:h-[480px] bg-black overflow-hidden flex items-center justify-center">
          <Image
            src={chapters[activeChapter].image}
            alt="Reel scene"
            fill
            className="object-cover opacity-85 transition-all duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-transparent to-black/30" />

          {/* Center Play Indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-10 w-16 h-16 rounded-full bg-[#c99a65] text-[#0e0d0b] flex items-center justify-center shadow-xl hover:scale-105 transition-transform"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none">
            <div className="text-xs text-[#c99a65] bg-[#0e0d0b]/80 px-3 py-1 rounded backdrop-blur">
              {chapters[activeChapter].title}
            </div>
            <div className="text-xs text-[#f5f0ea] bg-[#0e0d0b]/80 px-3 py-1 rounded backdrop-blur">
              {chapters[activeChapter].time} / 02:30
            </div>
          </div>
        </div>

        {/* Chapter Bar */}
        <div className="p-6 bg-[#171512] border-t border-[#c99a65]/15">
          <div className="text-xs uppercase tracking-wider text-[#8c8070] mb-3 font-medium">
            Chapters
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                onClick={() => setActiveChapter(idx)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  activeChapter === idx
                    ? "bg-[#c99a65]/15 border-[#c99a65] text-[#f5f0ea]"
                    : "bg-white/[0.02] border-[#c99a65]/15 text-[#8c8070] hover:border-[#c99a65]/35 hover:text-[#f5f0ea]"
                }`}
              >
                <div className="text-xs font-semibold">{chap.title}</div>
                <div className="text-[11px] text-[#c99a65] mt-1">{chap.time}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
