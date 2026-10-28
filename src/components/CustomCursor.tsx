"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch pointer devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    // Fast GSAP quickTo for 120fps hardware-accelerated tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
    const dotXTo = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power2.out" });
    const dotYTo = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
      dotXTo(e.clientX);
      dotYTo(e.clientY);
    };

    const handleMouseDown = () => {
      gsap.to(cursor, { scale: 0.85, duration: 0.15 });
    };

    const handleMouseUp = () => {
      gsap.to(cursor, { scale: isHovered ? 2.2 : 1, duration: 0.25 });
    };

    // Global listener for interactive hover targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("button, a, input, [data-cursor-action], [data-magnetic]");
      const actionText = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text");

      if (interactive || actionText) {
        setIsHovered(true);
        if (actionText) {
          setCursorText(actionText);
          gsap.to(cursor, { scale: 2.8, backgroundColor: "rgba(226, 177, 112, 0.95)", color: "#08080a", duration: 0.25 });
        } else {
          setCursorText("");
          gsap.to(cursor, { scale: 1.8, borderColor: "rgba(226, 177, 112, 0.8)", duration: 0.25 });
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("button, a, input, [data-cursor-action], [data-magnetic]");
      if (interactive) {
        setIsHovered(false);
        setCursorText("");
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "transparent",
          borderColor: "rgba(255, 255, 255, 0.4)",
          color: "transparent",
          duration: 0.25,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isHovered, isVisible]);

  return (
    <>
      {/* Outer follow circle with text support */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          width: "36px",
          height: "36px",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          opacity: isVisible ? 1 : 0,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest uppercase select-none text-black">
            {cursorText}
          </span>
        )}
      </div>

      {/* Tiny central laser point */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "#e2b170",
          opacity: isVisible && !cursorText ? 1 : 0,
        }}
      />
    </>
  );
}

