"use client";

import React from "react";
import { MessageSquare, LayoutTemplate, Hammer, Wrench, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { companyData } from "@/data/companyData";

const steps = [
  {
    step: "01",
    title: "Tell us what you have in mind",
    desc: "Share your logo, vector file, or rough sketch. If you do not have artwork, tell us your wording and preferred style. We will discuss sizing and advise on what works best.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "See the design on your storefront",
    desc: "Send us a straight photo of your facade or wall. We overlay the proposed sign to true scale so you see the proportion and illumination before anything is cut.",
    icon: LayoutTemplate,
  },
  {
    step: "03",
    title: "We build it in our shop",
    desc: `In our ${companyData.address.building} shop, we cut, weld, shape, and fit weather-sealed LED modules into your letters. Every sign is assembled with care for detail.`,
    icon: Hammer,
  },
  {
    step: "04",
    title: "We install it on your wall",
    desc: "Our installation crew brings mounting templates, hardware, and equipment. We fix the letters securely, connect wiring cleanly, and test the illumination on site.",
    icon: Wrench,
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 border-t border-plum-border relative bg-plum/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Straightforward Process
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-ivory tracking-tight mt-3">
            From your idea to an illuminated wall.
          </h2>
          <p className="mt-4 text-ivory-muted text-base sm:text-lg leading-relaxed">
            Here is how we take your sign from drawing to finished installation.
          </p>
        </div>

        {/* 4 Real Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-plum-deep/80 border border-plum-border rounded-2xl p-7 flex flex-col justify-between hover:border-champagne/40 transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-champagne/60 font-light">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-plum border border-plum-border flex items-center justify-center text-champagne">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-ivory tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base text-ivory-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-plum-border/50 text-[13px] text-ivory-dim">
                  Step {idx + 1} of 4
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-midnight border border-plum-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-serif text-2xl text-ivory">Want to see a mockup on your facade?</h4>
            <p className="text-base text-ivory-muted mt-1">
              Send us a photo of your shopfront on WhatsApp and we will show you what fits.
            </p>
          </div>

          <MagneticButton
            href="/quote"
            variant="primary"
            size="md"
            className="shrink-0 text-sm tracking-wider uppercase font-medium"
          >
            <span>Request a mockup</span>
            <ArrowRight className="w-4 h-4" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
