"use client";

import React from "react";
import Link from "next/link";
import { Compass, Users, MapPin, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/companyData";

const reasons = [
  {
    title: "Made to measure",
    desc: "Every sign is cut and fabricated specifically for your space. We build to your exact measurements, color tones, illumination style, and finish requirements.",
    icon: Compass,
  },
  {
    title: "One team from design to installation",
    desc: "We handle your project directly from start to finish. The team preparing your storefront proof coordinates fabrication and completes the installation on your wall.",
    icon: Users,
  },
  {
    title: `Based in ${companyData.address.building}, Dubai`,
    desc: `Our shop is located in ${companyData.address.building} (${companyData.address.shop}). You can reach out or stop by to discuss your project and review material finishes.`,
    icon: MapPin,
  },
];

export default function WhyLumex() {
  return (
    <section className="py-24 bg-ivory text-midnight relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[13px] uppercase tracking-[0.25em] text-plum-deep font-sans font-semibold">
            Honest Craftsmanship
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-midnight tracking-tight mt-3">
            Why clients work with Lumex.
          </h2>
          <p className="mt-4 text-midnight/75 text-base sm:text-lg leading-relaxed">
            We focus on practical, dependable signage work: accurate sizing, durable materials, and proper on-site installation.
          </p>
        </div>

        {/* 3 Short Honest Points - 16px body */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white/85 border border-midnight/10 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-midnight text-champagne flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-2xl text-midnight font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base text-midnight/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-midnight/10 flex items-center justify-between text-[13px] font-medium text-midnight/60">
                  <span>Signage detail</span>
                  <span>Point 0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location invite banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-midnight text-ivory flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[13px] uppercase tracking-widest text-champagne font-medium">
              Shop Location
            </span>
            <p className="font-serif text-xl sm:text-2xl text-ivory">
              {companyData.address.full}
            </p>
            <p className="text-base text-champagne">
              {companyData.hoursNotice}
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-champagne text-midnight px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-champagne-light transition-all shadow-md shrink-0"
          >
            <span>Get Directions & Contact</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
