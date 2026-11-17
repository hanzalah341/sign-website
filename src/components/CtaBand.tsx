"use client";

import React from "react";
import { MessageCircle, ArrowRight, MapPin, Phone } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { companyData } from "@/data/companyData";

export default function CtaBand() {
  return (
    <section className="relative py-28 overflow-hidden bg-midnight border-t border-plum-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
          {companyData.address.building} • Installation in Dubai
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-ivory tracking-tight leading-tight">
          Ready to see your sign lit up on your wall?
        </h2>

        <p className="mt-6 text-base sm:text-lg text-ivory-muted max-w-2xl mx-auto leading-relaxed">
          Send us your logo, dimensions, or a photo of your storefront. We will sketch your sign to scale and give you an exact price.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton
            href="/quote"
            variant="primary"
            size="lg"
            className="text-base font-medium tracking-wide"
          >
            <span>Get a free quote</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>

          <MagneticButton
            href={companyData.whatsapp.url}
            variant="whatsapp"
            size="lg"
            target="_blank"
            className="text-base font-medium tracking-wide"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp us ({companyData.phone.display})</span>
          </MagneticButton>
        </div>

        {/* Direct contact info */}
        <div className="mt-12 pt-8 border-t border-plum-border/40 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-ivory-dim">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-champagne shrink-0" />
            <span>{companyData.address.full}</span>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-champagne shrink-0" />
            <a href={`tel:${companyData.phone.international}`} className="text-ivory hover:text-champagne transition-colors">
              Phone: {companyData.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
