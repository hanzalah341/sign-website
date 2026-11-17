import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { MessageSquare, Eye, Hammer, Wrench, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Our Process | How Lumex Builds Signs in Dubai",
  description: "A step-by-step walkthrough of how Lumex Signage takes a sign project from initial concept and storefront mockup to fabrication and on-site installation.",
};

const detailedSteps = [
  {
    step: "01",
    phase: "Briefing & Measurements",
    title: "Tell us what you have in mind",
    summary: "Everything begins with a simple conversation. You send us your logo, sign name, or rough sketch.",
    details: [
      "Send your artwork or just tell us the style and wording you need.",
      "Share your approximate wall dimensions or a clear photo of your storefront.",
      "We will advise on suitable lighting styles (front-lit, halo-lit, or neon).",
      "We provide a clear quote with fabrication and installation included."
    ],
    image: "/images/process-sketch.jpg",
    icon: MessageSquare,
  },
  {
    step: "02",
    phase: "Visual Proof & Scale",
    title: "See the design on your storefront",
    summary: "We place the proposed sign to true scale onto a photo of your wall so you can see how it looks before anything is cut.",
    details: [
      "Scale accuracy: We adjust dimensions to fit the proportion of your entryway or facade.",
      "Lighting preview: Review how the letters look when lit.",
      "Technical layout: We confirm mounting points and electrical feed positions.",
      "Material approval: Confirm metal finish, acrylic color, or neon tube tone."
    ],
    image: "/images/process-design.jpg",
    icon: Eye,
  },
  {
    step: "03",
    phase: "Workshop Fabrication",
    title: "We build it in our shop",
    summary: "Your sign is cut, welded, formed, and wired in our Dragon Mart 1 shop.",
    details: [
      "Metal cutting and shaping: Clean edges and solid joints.",
      "Careful assembly: Dimensional letters are hand-formed to prevent light leaks.",
      "LED wiring: Low-voltage, weather-sealed modules are wired and tested.",
      "Quality inspection: Every finished sign is tested in the shop before packing."
    ],
    image: "/images/process-fabrication.jpg",
    icon: Hammer,
  },
  {
    step: "04",
    phase: "On-Site Installation",
    title: "We mount and connect your sign",
    summary: "Our installation crew brings mounting templates, hardware, and equipment to install your sign securely.",
    details: [
      "1:1 paper template aligned on wall for level placement and accurate letter spacing.",
      "Secure wall anchors fitted into your wall surface.",
      "Clean wiring routed discreetly to the power unit.",
      "Full illumination test with you before we finish the job."
    ],
    image: "/images/process-install.jpg",
    icon: Wrench,
  },
];

export default function ProcessPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Our Method
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            How your sign comes to life.
          </h1>
          <p className="mt-6 text-ivory-muted text-base sm:text-lg leading-relaxed">
            From the initial storefront sketch to the moment the power switch turns on, here is our 4-stage process.
          </p>
        </div>

        {/* Timeline Sequence - ALL CARDS ARE CLEANLY LEFT-ALIGNED */}
        <div className="space-y-16">
          {detailedSteps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-plum/40 border border-plum-border rounded-2xl p-6 sm:p-8"
              >
                {/* Content Column: LEFT-ALIGNED FOR ALL STEPS */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-champagne font-medium">
                    <span className="w-7 h-7 rounded-full bg-plum border border-champagne/40 flex items-center justify-center font-serif text-xs">
                      {item.step}
                    </span>
                    <Icon className="w-4 h-4 text-champagne" />
                    <span>{item.phase}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-tight">
                    {item.title}
                  </h2>

                  <p className="text-base text-ivory-muted leading-relaxed">
                    {item.summary}
                  </p>

                  <div className="pt-2 border-t border-plum-border/60">
                    <ul className="space-y-2.5 text-sm text-ivory-dim text-left">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-champagne shrink-0 mt-2" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image Column */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-plum-border shadow-lg bg-plum">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 text-xs font-sans text-ivory-muted">
                      Stage {item.step}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Start Project Banner */}
        <div className="mt-20 p-8 rounded-2xl bg-midnight border border-plum-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-ivory">
              Ready to start your sign project?
            </h3>
            <p className="text-sm text-ivory-muted mt-1 max-w-xl leading-relaxed">
              Send us your measurements or storefront photo on WhatsApp, and we will sketch a proposal.
            </p>
          </div>

          <MagneticButton
            href="/quote"
            variant="primary"
            size="md"
            className="shrink-0 text-xs tracking-wider uppercase font-medium"
          >
            <span>Get a free quote</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>

      <CtaBand />
    </div>
  );
}
