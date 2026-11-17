"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Power } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLights } from "@/context/LightsContext";
import { companyData } from "@/data/companyData";

export default function HeroSection() {
  const { lightsOn, toggleLights } = useLights();
  const [flickered, setFlickered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlickered(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden py-12 md:py-16">
      {/* Optimized Radial Ambient Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
          lightsOn ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 35%, rgba(232, 194, 122, 0.12) 0%, rgba(255, 77, 125, 0.06) 40%, transparent 75%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top bar: Interactive Showroom Switch */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-plum-border/40">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
            <span className="text-[13px] uppercase tracking-[0.2em] text-ivory-dim font-sans font-medium">
              {companyData.address.building} • Dubai, UAE
            </span>
          </div>

          <button
            type="button"
            onClick={toggleLights}
            aria-label="Toggle neon sign power"
            className={`group inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[13px] font-sans border transition-all duration-200 ${
              lightsOn
                ? "border-champagne/40 bg-champagne/10 text-champagne hover:bg-champagne/20"
                : "border-plum-border bg-plum/60 text-ivory-dim hover:text-ivory"
            }`}
          >
            <Power className={`w-3.5 h-3.5 ${lightsOn ? "text-champagne animate-pulse" : "text-ivory-dim"}`} />
            <span className="font-medium">
              {lightsOn ? "Lights: ON" : "Lights: OFF"}
            </span>
          </button>
        </div>

        {/* The Signature "LUMEX" Dimensional / Neon Sign */}
        <div className="relative py-6 md:py-10 text-center my-2 select-none">
          <div className="absolute top-1/2 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-plum-border/60 to-transparent -translate-y-1/2 -z-10" />

          <div
            className={`inline-block font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold tracking-tight transition-all duration-300 ${
              lightsOn
                ? flickered
                  ? "neon-glow-gold"
                  : "animate-tube-strike text-champagne-light"
                : "neon-off"
            }`}
          >
            LUMEX
          </div>

          <div className="mt-2 flex items-center justify-center gap-4">
            <span
              className={`text-[13px] md:text-sm font-sans tracking-[0.4em] uppercase transition-colors duration-300 ${
                lightsOn ? "text-champagne/90" : "text-ivory-dim opacity-40"
              }`}
            >
              Signage Studio
            </span>
            <span className="text-plum-border">•</span>
            <span
              className={`text-[13px] md:text-sm font-sans tracking-[0.3em] uppercase transition-colors duration-300 ${
                lightsOn ? "text-coral/90" : "text-ivory-dim opacity-40"
              }`}
            >
              Fabrication & Installation
            </span>
          </div>
        </div>

        {/* Editorial Headline & Plain-English Story */}
        <div className="max-w-3xl mt-8 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-[1.08]"
          >
            {companyData.heroHeadline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ivory-muted text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            {companyData.heroSubline}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="/quote"
              variant="primary"
              size="lg"
              className="text-base tracking-wide font-medium"
            >
              <span>Get a free quote</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>

            <MagneticButton
              href={companyData.whatsapp.url}
              variant="whatsapp"
              size="lg"
              target="_blank"
              className="text-base tracking-wide"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp us</span>
            </MagneticButton>

            <MagneticButton
              href="/projects"
              variant="secondary"
              size="lg"
              className="text-base tracking-wide"
            >
              <span>See our concepts</span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom honest reassurance: minimum 16px body, 13px labels */}
        <div className="mt-14 pt-8 border-t border-plum-border/50 grid grid-cols-1 md:grid-cols-3 gap-6 text-base text-ivory-muted">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-champagne mt-2 shrink-0" />
            <div>
              <strong className="text-ivory block font-medium text-base">Made to measure</strong>
              <span className="text-base leading-relaxed">Cut and assembled to fit your exact storefront and wall space.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-champagne mt-2 shrink-0" />
            <div>
              <strong className="text-ivory block font-medium text-base">One team from design to installation</strong>
              <span className="text-base leading-relaxed">We handle layout proofs, fabrication, and on-site UAE installation.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-champagne mt-2 shrink-0" />
            <div>
              <strong className="text-ivory block font-medium text-base">{companyData.address.building}</strong>
              <span className="text-base leading-relaxed">Visit our shop at {companyData.address.shop}. {companyData.hoursNotice}.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
