import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Check, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import MagneticButton from "@/components/MagneticButton";
import CtaBand from "@/components/CtaBand";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Signage Services in Dubai | Custom 3D Letters, Neon & Lighting | Lumex",
  description: "Explore our 5 signage services in Dubai: Custom 3D letters, LED neon signs, lighting solutions, flex signboards, and event branding. Full installation included.",
};

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Our Signage Services
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            Five ways we bring your brand to light.
          </h1>
          <p className="mt-6 text-ivory-muted text-base sm:text-lg leading-relaxed">
            Every sign is built in our {companyData.address.building} shop to withstand Dubai weather, sun exposure, and heat. We assemble quality low-voltage LED modules, durable aluminum, and weather-sealed housings so your sign stays bright.
          </p>
        </div>

        {/* Quick jump anchor bar */}
        <div className="mt-10 flex flex-wrap gap-2.5 pb-4 border-b border-plum-border/70">
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.slug}`}
              className="px-4 py-2 rounded-full text-xs font-sans bg-plum border border-plum-border text-ivory hover:text-champagne hover:border-champagne/40 transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Services Detail Sections */}
      <div className="space-y-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              className="scroll-mt-32 pt-8 border-t border-plum-border/60"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Image Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-plum-border shadow-xl bg-midnight group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[13px] uppercase tracking-widest text-champagne font-medium block">
                        Signage Service
                      </span>
                      <p className="text-sm text-ivory mt-1">
                        Ideal for: {service.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-[13px] font-sans text-champagne uppercase tracking-widest font-semibold">
                      Service 0{index + 1} • Complete Fabrication & Installation
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory tracking-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-ivory-muted leading-relaxed font-light">
                    {service.fullDesc}
                  </p>

                  {/* Styles & Variations */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-serif text-lg text-ivory">Lighting Styles & Options</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.styles.map((style, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2.5 text-sm text-ivory bg-plum/70 px-3.5 py-2.5 rounded-lg border border-plum-border/70"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0" />
                          <span>{style}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="space-y-3 pt-2">
                    <h3 className="font-serif text-lg text-ivory">Materials & Specs</h3>
                    <div className="flex flex-wrap gap-2">
                      {service.materials.map((mat, i) => (
                        <span
                          key={i}
                          className="text-sm bg-plum-deep text-ivory-muted px-3 py-1.5 rounded-md border border-plum-border/60"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="space-y-3 pt-4 border-t border-plum-border/50">
                    <h3 className="font-serif text-lg text-ivory">What is included in every project:</h3>
                    <ul className="space-y-2 text-sm text-ivory-muted">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-6 flex flex-wrap items-center gap-4">
                    <MagneticButton
                      href={`/quote?service=${service.slug}`}
                      variant="primary"
                      size="md"
                      className="text-xs tracking-wider uppercase font-medium"
                    >
                      <span>Request a quote for this</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </MagneticButton>

                    <MagneticButton
                      href={`/projects?filter=${service.slug}`}
                      variant="ghost"
                      size="md"
                      className="text-xs"
                    >
                      <span>See {service.title} concepts</span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Closing CTA */}
      <div className="mt-28">
        <CtaBand />
      </div>
    </div>
  );
}
