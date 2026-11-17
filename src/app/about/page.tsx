import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, MessageCircle, Hammer, Ruler, Clock, CheckCircle } from "lucide-react";
import { companyData } from "@/data/companyData";
import MagneticButton from "@/components/MagneticButton";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About Us | Lumex Signage Dubai Shop",
  description: "Learn about Lumex Signage, located at Dragon Mart 1, Dubai. Custom 3D letters, neon signs, lighting solutions, flex signboards, and event branding.",
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            About Lumex Signage
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            Custom signage based in Dubai.
          </h1>
          <p className="mt-6 text-ivory-muted text-base sm:text-lg leading-relaxed">
            Lumex Signage provides custom 3D letters, neon signs, lighting solutions, flex signboards, and event branding. Every sign is made to measure and installed on site.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-plum-border">
          <div className="lg:col-span-7 space-y-6 text-ivory-muted text-base leading-relaxed font-light">
            <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-tight">
              Crafted for your wall, from design to installation.
            </h2>

            <p>
              Based at <strong className="text-ivory font-medium">{companyData.address.full}</strong>, we build signage for retail shops, restaurants, commercial spaces, and events across Dubai and the UAE.
            </p>

            <p>
              Signage in the UAE faces high heat, sun exposure, and dust. We build with durable materials—stainless steel, solid brass, cast acrylic, and weather-sealed LED modules—assembled to keep their appearance over time.
            </p>

            <p>
              We handle the entire process: reviewing your space, preparing a scaled proof on your storefront photo, building the letters, and completing the on-site installation.
            </p>

            {/* Core Commitments */}
            <div className="pt-6 space-y-4">
              <h3 className="font-serif text-xl text-ivory">Our focus on every project:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-ivory">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-plum border border-plum-border">
                  <Ruler className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium">Proportion & fit</strong>
                    <span className="text-xs text-ivory-muted">Signs scaled to match the architectural proportions of your wall.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-plum border border-plum-border">
                  <Hammer className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium">Solid assembly</strong>
                    <span className="text-xs text-ivory-muted">Clean edges, secure joins, and concealed wiring.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-plum border border-plum-border">
                  <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium">Installation included</strong>
                    <span className="text-xs text-ivory-muted">Complete mounting and electrical connection on site.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-plum border border-plum-border">
                  <CheckCircle className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-medium">Straightforward quotes</strong>
                    <span className="text-xs text-ivory-muted">Clear pricing with materials, fittings, and installation.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workshop Showcase Column: ONLY about-workshop.jpg, NO people */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-plum-border shadow-xl">
              <Image
                src="/images/about-workshop.jpg"
                alt="Lumex Signage workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest text-champagne font-medium block">
                  {companyData.address.building}
                </span>
                <p className="font-serif text-xl text-ivory mt-1">
                  Custom sign fabrication & assembly
                </p>
              </div>
            </div>

            {/* Visit box */}
            <div className="p-6 rounded-2xl bg-plum border border-plum-border space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
                <div className="text-sm">
                  <strong className="text-ivory block font-medium">Visit our shop</strong>
                  <p className="text-ivory-muted mt-0.5">
                    {companyData.address.full}
                  </p>
                  <p className="text-champagne mt-1.5 font-medium">
                    {companyData.hoursNotice}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <MagneticButton
                  href={companyData.maps.directionsUrl}
                  variant="secondary"
                  size="sm"
                  target="_blank"
                  className="text-xs"
                >
                  Google Maps directions
                </MagneticButton>
                <MagneticButton
                  href={companyData.whatsapp.url}
                  variant="whatsapp"
                  size="sm"
                  target="_blank"
                  className="text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp ({companyData.phone.display})
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaBand />
    </div>
  );
}
