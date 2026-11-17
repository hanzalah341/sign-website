import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MessageCircle, Phone, MapPin, Check } from "lucide-react";
import QuoteForm from "@/components/QuoteForm";
import { companyData } from "@/data/companyData";

export const metadata: Metadata = {
  title: "Get a Free Signage Quote | Lumex Signage Dubai",
  description: "Request a custom quotation for 3D letters, neon signs, lighting solutions, flex boards, or event branding from Lumex Signage in Dragon Mart 1, Dubai.",
};

export default function QuotePage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[13px] uppercase tracking-[0.25em] text-champagne font-sans font-medium">
            Estimate & Consultation
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl text-ivory tracking-tight mt-3">
            Get a free quote for your sign.
          </h1>
          <p className="mt-4 text-ivory-muted text-base sm:text-lg leading-relaxed">
            Fill out the details below. We will calculate the material requirements, prepare a scale proposal on your wall, and send a clear quotation.
          </p>
        </div>

        {/* Layout: Form on Left, Workshop Direct Info on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <Suspense fallback={<div className="p-12 text-center text-ivory-muted">Loading form...</div>}>
              <QuoteForm />
            </Suspense>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-plum border border-plum-border space-y-4">
              <h3 className="font-serif text-xl text-ivory">Prefer to talk directly?</h3>
              <p className="text-sm text-ivory-muted leading-relaxed">
                If you have photos or vector artwork on your phone, you can message us directly on WhatsApp for a quick reply.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <a
                  href={companyData.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-midnight border border-plum-border hover:border-[#25d366]/60 transition-colors text-ivory"
                >
                  <MessageCircle className="w-5 h-5 text-[#25d366] shrink-0" />
                  <div>
                    <span className="font-medium block">WhatsApp Workshop</span>
                    <span className="text-ivory-dim text-xs">{companyData.phone.display}</span>
                  </div>
                </a>

                <a
                  href={`tel:${companyData.phone.international}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-midnight border border-plum-border hover:border-champagne/60 transition-colors text-ivory"
                >
                  <Phone className="w-5 h-5 text-champagne shrink-0" />
                  <div>
                    <span className="font-medium block">Phone Call</span>
                    <span className="text-ivory-dim text-xs">{companyData.phone.display}</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-plum-deep border border-plum-border space-y-3 text-sm text-ivory-muted">
              <h4 className="font-serif text-lg text-ivory">What happens next:</h4>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <span>We review your dimensions and wall space.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <span>We send a scale mockup on your storefront photo.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                  <span>You receive an itemized quote with installation included.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl border border-plum-border/60 bg-midnight/40 text-sm text-ivory-dim flex items-start gap-3">
              <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
              <div>
                <span>Shop location: <strong className="text-ivory">{companyData.address.full}</strong></span>
                <p className="text-xs text-champagne mt-1 font-medium">{companyData.hoursNotice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
