"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export default function ServicesPreview() {
  const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(1);

  return (
    <section className="py-24 border-t border-plum-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
              What We Fabricate
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-ivory tracking-tight mt-3">
              Crafted in our shop. Installed on your wall.
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base text-champagne hover:text-champagne-light transition-colors pb-1 border-b border-champagne/40 self-start md:self-end"
          >
            <span>Explore all services</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Editorial Interactive List with Hover Image Reveal */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Services text list */}
          <div className="lg:col-span-7 space-y-1">
            {servicesData.map((service, index) => {
              const isActive = activeServiceIndex === index;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceIndex(index)}
                  className={`group relative py-7 px-4 md:px-6 rounded-xl transition-all duration-200 border-b border-plum-border/50 ${
                    isActive
                      ? "bg-plum/60 border-l-2 border-l-champagne"
                      : "hover:bg-plum/30 border-l-2 border-l-transparent"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <Link
                      href={`/services#${service.slug}`}
                      className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory group-hover:text-champagne transition-colors"
                    >
                      {service.title}
                    </Link>

                    <span className="text-[13px] font-sans text-ivory-dim tracking-wider uppercase">
                      Installation Included
                    </span>
                  </div>

                  <p className="mt-3 text-base text-ivory-muted max-w-xl leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-2.5">
                    {service.materials.slice(0, 3).map((mat, i) => (
                      <span
                        key={i}
                        className="text-[13px] bg-plum-deep/80 text-ivory-muted px-3 py-1 rounded border border-plum-border/60"
                      >
                        {mat}
                      </span>
                    ))}

                    <Link
                      href={`/quote?service=${service.slug}`}
                      className="ml-auto inline-flex items-center gap-1.5 text-sm text-champagne font-medium hover:text-champagne-light transition-colors pt-2 sm:pt-0"
                    >
                      <span>Quote this</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Floating / Reveal Image on Desktop */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28 self-start">
            <div className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-plum-border shadow-xl bg-midnight">
              <AnimatePresence mode="wait">
                {activeServiceIndex !== null && (
                  <motion.div
                    key={activeServiceIndex}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={servicesData[activeServiceIndex].image}
                      alt={servicesData[activeServiceIndex].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent opacity-85" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[12px] uppercase tracking-widest text-champagne font-medium block">
                        Signage Service
                      </span>
                      <p className="font-serif text-xl text-ivory mt-0.5">
                        {servicesData[activeServiceIndex].title}
                      </p>
                      <p className="text-xs text-ivory-muted mt-1 line-clamp-2">
                        {servicesData[activeServiceIndex].fullDesc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
