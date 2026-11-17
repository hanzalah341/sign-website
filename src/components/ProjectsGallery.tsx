"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, Info } from "lucide-react";
import { projectsData, projectCategories } from "@/data/projectsData";
import Lightbox from "./Lightbox";
import MagneticButton from "./MagneticButton";
import { companyData } from "@/data/companyData";

export default function ProjectsGallery() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("filter") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) {
      setSelectedCategory(filter);
    }
  }, [searchParams]);

  const filteredProjects = selectedCategory === "all"
    ? projectsData
    : projectsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Gallery & Visual References
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            Sample projects and concepts
          </h1>
          <p className="mt-4 text-ivory-muted text-base sm:text-lg leading-relaxed">
            Explore sample styles and dimensional sign concepts to inspire your storefront, interior, or event.
          </p>
        </div>

        {/* Prominent Visible Note */}
        <div className="mb-10 p-4 rounded-xl bg-plum border border-champagne/30 flex items-center gap-3 text-sm text-ivory-muted">
          <Info className="w-5 h-5 text-champagne shrink-0" />
          <span>
            <strong className="text-ivory font-medium">Note:</strong> Concept images. Our own project photos are coming soon.
          </span>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-plum-border/60">
          {projectCategories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-champagne text-midnight shadow-[0_0_12px_rgba(232,194,122,0.3)]"
                    : "bg-plum text-ivory-muted hover:text-ivory hover:bg-plum-hover border border-plum-border"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-[360px] rounded-2xl overflow-hidden border border-plum-border bg-plum cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold flex flex-col justify-end p-6"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />

                {/* Top Corner Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded bg-midnight/80 backdrop-blur-md text-champagne border border-plum-border">
                    {project.categoryLabel}
                  </span>

                  <div className="p-2 rounded-full bg-midnight/80 backdrop-blur-md border border-plum-border text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-champagne" />
                  </div>
                </div>

                {/* Bottom Content: only category, title and short description */}
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl text-ivory group-hover:text-champagne transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-ivory-muted mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Custom Order Box */}
        <div className="mt-20 p-8 rounded-2xl bg-plum border border-plum-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl text-ivory">Have a specific design in mind?</h3>
            <p className="text-sm text-ivory-muted mt-1 max-w-xl">
              Send us your logo or a photo of your storefront, and we will sketch your sign to scale.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton
              href="/quote"
              variant="primary"
              size="md"
              className="text-xs tracking-wider uppercase font-medium"
            >
              Get a free quote
            </MagneticButton>

            <MagneticButton
              href={companyData.whatsapp.url}
              variant="whatsapp"
              size="md"
              target="_blank"
              className="text-xs"
            >
              WhatsApp us
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={filteredProjects}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
}
