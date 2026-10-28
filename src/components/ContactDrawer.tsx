"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, Send, CheckCircle } from "lucide-react";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    scope: "Full-Stack Web Application",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#ffffff", "#cbd5e1", "#94a3b8", "#64748b"],
    });

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Dim backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#090a0f]/80 backdrop-blur-md transition-opacity"
      />

      {/* Slide-over panel */}
      <aside className="relative z-10 w-full max-w-xl h-full bg-[#0b0d14] border-l border-white/10 p-6 sm:p-10 flex flex-col justify-between overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
            Start a Conversation
          </span>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/[0.04] hover:bg-white/[0.12] text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          /* Confirmation State */
          <div className="my-auto py-12 text-center flex flex-col items-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-white/[0.06] border border-white/20 flex items-center justify-center text-white">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs text-slate-400 tracking-widest uppercase font-medium">
                Message Sent
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white mt-1">
                Thank You
              </h3>
            </div>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-light">
              I have received your message and will review your project details and get back to you shortly.
            </p>

            <button
              onClick={handleReset}
              className="magnetic-btn bg-white text-black font-semibold hover:bg-slate-200 text-xs px-6 py-2.5"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="my-8 space-y-6 flex-1">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-white tracking-tight">
                Get in Touch with Ehab
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-light">
                Available for freelance web projects, systems engineering, and internship opportunities.
              </p>
            </div>

            {/* Scope Selector */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-400 mb-2 font-medium">
                Project Classification
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Full-Stack Web App",
                  "E-Commerce & Storefront",
                  "Python / Java Backend",
                  "Frontend UI/UX & Next.js",
                ].map((scope) => (
                  <button
                    type="button"
                    key={scope}
                    onClick={() => setFormData({ ...formData, scope })}
                    className={`p-3 rounded-xl text-left text-xs transition-all border ${
                      formData.scope === scope
                        ? "bg-white/[0.08] border-white text-white"
                        : "bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {scope}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Mitchell"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1.5 font-medium">
                  Project Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell me about what you want to build, requirements, or timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full magnetic-btn bg-white text-black font-semibold hover:bg-slate-200 py-3.5 shadow-lg shadow-white/10"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>Direct Contact</span>
          <span>Cairo, Egypt · Remote</span>
        </div>
      </aside>
    </div>
  );
}
