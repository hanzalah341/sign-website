"use client";

import React, { useEffect, useRef } from "react";
import { useLights } from "@/context/LightsContext";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const { lightsOn } = useLights();

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!isFinePointer || isReduced) return;

      let mouseX = -100;
      let mouseY = -100;
      let ringX = -100;
      let ringY = -100;
      let isHovered = false;
      let isVisible = false;
      let rafId: number;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!isVisible) {
          isVisible = true;
          if (cursorDotRef.current) cursorDotRef.current.style.opacity = "1";
          if (cursorRingRef.current) cursorRingRef.current.style.opacity = "1";
        }
      };

      const onMouseOver = (e: MouseEvent) => {
        const target = e.target;
        if (!target || !(target instanceof Element)) return;
        try {
          if (
            target.matches?.("a, button, input, textarea, select, [data-cursor-interactive]") ||
            (typeof target.closest === "function" && target.closest("a, button"))
          ) {
            isHovered = true;
            if (cursorRingRef.current) {
              cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(1.6)`;
              cursorRingRef.current.style.borderColor = "rgba(232, 194, 122, 0.7)";
              cursorRingRef.current.style.backgroundColor = "rgba(232, 194, 122, 0.1)";
            }
          }
        } catch {}
      };

      const onMouseOut = (e: MouseEvent) => {
        const target = e.target;
        if (!target || !(target instanceof Element)) return;
        try {
          if (
            target.matches?.("a, button, input, textarea, select, [data-cursor-interactive]") ||
            (typeof target.closest === "function" && target.closest("a, button"))
          ) {
            isHovered = false;
            if (cursorRingRef.current) {
              cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(1)`;
              cursorRingRef.current.style.borderColor = "rgba(232, 194, 122, 0.35)";
              cursorRingRef.current.style.backgroundColor = "transparent";
            }
          }
        } catch {}
      };

      const onMouseLeave = () => {
        if (cursorDotRef.current) cursorDotRef.current.style.opacity = "0";
        if (cursorRingRef.current) cursorRingRef.current.style.opacity = "0";
        isVisible = false;
      };

      const render = () => {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        }
        if (cursorRingRef.current) {
          const scale = isHovered ? "scale(1.6)" : "scale(1)";
          cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) ${scale}`;
        }
        rafId = requestAnimationFrame(render);
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseover", onMouseOver, { passive: true });
      document.addEventListener("mouseout", onMouseOut, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave, { passive: true });
      rafId = requestAnimationFrame(render);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseover", onMouseOver);
        document.removeEventListener("mouseout", onMouseOut);
        document.removeEventListener("mouseleave", onMouseLeave);
        cancelAnimationFrame(rafId);
      };
    } catch {
      // Graceful fallback
    }
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-champagne/40 pointer-events-none opacity-0 transition-[border-color,background-color] duration-150 will-change-transform"
        style={{
          boxShadow: lightsOn ? "0 0 10px rgba(232, 194, 122, 0.25)" : "none",
        }}
      />
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-champagne pointer-events-none opacity-0 will-change-transform"
        style={{
          boxShadow: lightsOn ? "0 0 6px #E8C27A" : "none",
        }}
      />
    </div>
  );
}
