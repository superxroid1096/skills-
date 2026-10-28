"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HorizontalGallery from "@/components/HorizontalGallery";
import AboutManifesto from "@/components/AboutManifesto";
import AwardShowcase from "@/components/AwardShowcase";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ContactDrawer from "@/components/ContactDrawer";
import ReelModal from "@/components/ReelModal";
import { Project } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isReelOpen, setIsReelOpen] = useState(false);

  const scrollToWorks = () => {
    const el = document.getElementById("works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0e0d0b] text-[#f5f0ea] overflow-x-hidden">
      {/* Classical Fine Art Oil Painting Backdrop */}
      <div className="painting-backdrop" />

      {/* Subtle Canvas Linen Grain */}
      <div className="canvas-grain" />

      {/* Persistent Gallery Navigation */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Experience Stream */}
      <main className="relative z-10">
        {/* Warm Fine-Art Hero */}
        <Hero
          onExploreWorks={scrollToWorks}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Pinned GSAP ScrollTrigger Horizontal Exhibition Track */}
        <HorizontalGallery onSelectProject={(p) => setSelectedProject(p)} />

        {/* Editorial Philosophy & Atelier Milestones */}
        <AboutManifesto />

        {/* Honors & Jury Distinctions */}
        <AwardShowcase />
      </main>

      {/* Human Architectural Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Overlays */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />
    </div>
  );
}
