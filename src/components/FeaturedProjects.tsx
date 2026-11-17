"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2, Info } from "lucide-react";
import { projectsData } from "@/data/projectsData";
import Lightbox from "./Lightbox";
import MagneticButton from "./MagneticButton";

export default function FeaturedProjects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const featured = projectsData.slice(0, 5);

  return (
    <section className="py-24 border-t border-plum-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-xl">
            <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
              Sample Concepts
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory tracking-tight mt-3">
              Signs crafted for your wall.
            </h2>
          </div>

          <MagneticButton
            href="/projects"
            variant="secondary"
            size="md"
            className="self-start md:self-end text-sm"
          >
            <span>View all sample concepts</span>
            <ArrowUpRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        {/* Concept Note */}
        <div className="mb-12 p-3.5 rounded-xl bg-plum/70 border border-plum-border text-[13px] text-ivory-muted flex items-center gap-2.5">
          <Info className="w-4 h-4 text-champagne shrink-0" />
          <span>Concept images. Our own project photos are coming soon.</span>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1 - Large Wide */}
          <div
            onClick={() => setLightboxIndex(0)}
            className="group relative md:col-span-8 h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-plum-border cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold"
          >
            <Image
              src={featured[0].image}
              alt={featured[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-plum/70 backdrop-blur-md border border-plum-border text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-champagne" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[13px] font-sans text-champagne font-medium uppercase tracking-wider block mb-1.5">
                {featured[0].categoryLabel}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-ivory">
                {featured[0].title}
              </h3>
              <p className="text-base text-ivory-muted mt-2 max-w-md">
                {featured[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 - Tall Vertical */}
          <div
            onClick={() => setLightboxIndex(1)}
            className="group relative md:col-span-4 h-[380px] md:h-[460px] rounded-2xl overflow-hidden border border-plum-border cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold"
          >
            <Image
              src={featured[1].image}
              alt={featured[1].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute top-4 right-4 p-2.5 rounded-full bg-plum/70 backdrop-blur-md border border-plum-border text-ivory opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4 text-champagne" />
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[13px] font-sans text-champagne font-medium uppercase tracking-wider block mb-1.5">
                {featured[1].categoryLabel}
              </span>
              <h3 className="font-serif text-xl md:text-2xl text-ivory">
                {featured[1].title}
              </h3>
              <p className="text-base text-ivory-muted mt-2">
                {featured[1].description}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            onClick={() => setLightboxIndex(2)}
            className="group relative md:col-span-4 h-[340px] rounded-2xl overflow-hidden border border-plum-border cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold"
          >
            <Image
              src={featured[2].image}
              alt={featured[2].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[13px] font-sans text-champagne uppercase tracking-wider block mb-1">
                {featured[2].categoryLabel}
              </span>
              <h3 className="font-serif text-xl text-ivory">
                {featured[2].title}
              </h3>
              <p className="text-base text-ivory-muted mt-1">{featured[2].description}</p>
            </div>
          </div>

          {/* Card 4 */}
          <div
            onClick={() => setLightboxIndex(3)}
            className="group relative md:col-span-4 h-[340px] rounded-2xl overflow-hidden border border-plum-border cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold"
          >
            <Image
              src={featured[3].image}
              alt={featured[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[13px] font-sans text-champagne uppercase tracking-wider block mb-1">
                {featured[3].categoryLabel}
              </span>
              <h3 className="font-serif text-xl text-ivory">
                {featured[3].title}
              </h3>
              <p className="text-base text-ivory-muted mt-1">{featured[3].description}</p>
            </div>
          </div>

          {/* Card 5 */}
          <div
            onClick={() => setLightboxIndex(4)}
            className="group relative md:col-span-4 h-[340px] rounded-2xl overflow-hidden border border-plum-border cursor-pointer transition-all duration-300 hover:border-champagne/60 hover:shadow-glow-gold"
          >
            <Image
              src={featured[4].image}
              alt={featured[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[13px] font-sans text-champagne uppercase tracking-wider block mb-1">
                {featured[4].categoryLabel}
              </span>
              <h3 className="font-serif text-xl text-ivory">
                {featured[4].title}
              </h3>
              <p className="text-base text-ivory-muted mt-1">{featured[4].description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        items={featured}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </section>
  );
}
