import React from "react";
import type { Metadata } from "next";
import { MapPin, MessageCircle, Clock, Navigation, ArrowUpRight } from "lucide-react";
import { companyData } from "@/data/companyData";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Contact Us & Shop Location | Lumex Signage Dragon Mart 1 Dubai",
  description: "Visit Lumex Signage at Shop BAA-02, Dragon Mart 1, Warsan First, Dubai International City, Dubai, UAE. Call or WhatsApp +971 56 856 3307 for custom signs.",
};

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Contact & Shop Location
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            Visit our shop or reach out directly.
          </h1>
          <p className="mt-4 text-ivory-muted text-base sm:text-lg leading-relaxed">
            We are located in Dragon Mart 1. Call, WhatsApp, or drop by to discuss your custom signage project.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Address */}
          <div className="p-8 rounded-2xl bg-plum border border-plum-border flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-midnight text-champagne flex items-center justify-center mb-6 border border-plum-border">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-[13px] uppercase tracking-widest text-champagne font-medium">
                Shop Address
              </span>
              <h3 className="font-serif text-2xl text-ivory mt-1">
                {companyData.address.building}
              </h3>
              <p className="text-sm text-ivory-muted mt-2">
                {companyData.address.full}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-plum-border/60">
              <a
                href={companyData.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-champagne hover:text-champagne-light transition-colors font-medium"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Phone & WhatsApp */}
          <div className="p-8 rounded-2xl bg-plum border border-plum-border flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-midnight text-[#25d366] flex items-center justify-center mb-6 border border-plum-border">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-[13px] uppercase tracking-widest text-champagne font-medium">
                Direct Line & WhatsApp
              </span>
              <h3 className="font-serif text-2xl text-ivory mt-1">
                {companyData.phone.display}
              </h3>
              <p className="text-sm text-ivory-muted mt-2">
                International: {companyData.phone.international}
                <br />
                Message us for quick scale mockups and quotes.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-plum-border/60">
              <a
                href={companyData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#25d366] hover:underline font-medium"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Timings notice - "Call or WhatsApp to confirm timings" */}
          <div className="p-8 rounded-2xl bg-plum border border-plum-border flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-midnight text-champagne flex items-center justify-center mb-6 border border-plum-border">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[13px] uppercase tracking-widest text-champagne font-medium">
                Shop Timings
              </span>
              <h3 className="font-serif text-2xl text-ivory mt-1">
                Visits & Consultations
              </h3>
              <p className="text-sm text-ivory-muted mt-2 font-medium text-champagne">
                {companyData.hoursNotice}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-plum-border/60 text-xs text-ivory-dim">
              Contact us anytime before your visit to ensure our team is available.
            </div>
          </div>
        </div>

        {/* Embedded Google Map + Directions */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[13px] uppercase tracking-widest text-champagne font-medium">
                Map & Directions
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-ivory mt-1">
                Dragon Mart 1, Dubai
              </h2>
            </div>

            <MagneticButton
              href={companyData.maps.directionsUrl}
              variant="secondary"
              size="sm"
              target="_blank"
              className="text-xs self-start sm:self-auto"
            >
              <Navigation className="w-3.5 h-3.5 text-champagne" />
              <span>Get driving directions</span>
            </MagneticButton>
          </div>

          <div className="w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden border border-plum-border shadow-2xl relative bg-plum">
            <iframe
              src={companyData.maps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumex Signage Location at Dragon Mart 1 Dubai"
              className="grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
