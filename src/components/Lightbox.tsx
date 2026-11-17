"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { ProjectItem } from "@/data/projectsData";

interface LightboxProps {
  items: ProjectItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(nextIdx);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) handlePrev();
    if (deltaX < -50) handleNext();
    setTouchStartX(null);
  };

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label={currentItem.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/95 backdrop-blur-md p-4 md:p-8"
      >
        {/* Top Controls */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-champagne bg-plum-deep/80 px-3 py-1.5 rounded-full border border-plum-border">
            <span>{currentItem.categoryLabel}</span>
            <span>•</span>
            <span className="text-ivory">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="p-2.5 rounded-full bg-plum border border-plum-border text-ivory hover:text-champagne transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-plum/80 border border-plum-border text-ivory hover:text-champagne transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-plum/80 border border-plum-border text-ivory hover:text-champagne transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
          <div className="relative w-full h-[55vh] md:h-[62vh] rounded-xl overflow-hidden border border-plum-border shadow-2xl">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover"
              priority
            />
          </div>

          {/* Details Bar - only title and short description, with concept note */}
          <div className="w-full mt-3 bg-plum/90 border border-plum-border rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-ivory">
                {currentItem.title}
              </h3>
              <p className="text-sm text-ivory-muted mt-1">
                {currentItem.description}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-champagne/90 bg-plum-deep px-3 py-1.5 rounded-md border border-plum-border shrink-0">
              <Info className="w-3.5 h-3.5 text-champagne" />
              <span>Concept image</span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
