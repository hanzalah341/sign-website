"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-plum-deep border-t border-plum-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-5">
            <Logo size="lg" />
            <p className="text-ivory-muted text-sm leading-relaxed max-w-sm">
              We design, fabricate, and install custom signs in Dubai. 3D letters, neon signs, lighting solutions, flex signboards, and event branding, made to measure from our shop in Dragon Mart 1.
            </p>
            <div className="pt-2">
              <a
                href={companyData.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-champagne hover:text-champagne-light transition-colors border-b border-champagne/30 pb-1"
              >
                <span>WhatsApp: {companyData.phone.display}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-ivory tracking-tight">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-ivory-muted hover:text-champagne transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg text-ivory tracking-tight">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ivory-muted hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-ivory-muted hover:text-champagne transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-ivory-muted hover:text-champagne transition-colors">
                  Sample Concepts
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ivory-muted hover:text-champagne transition-colors">
                  About Lumex
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-ivory-muted hover:text-champagne transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/quote" className="text-ivory-muted hover:text-champagne transition-colors">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ivory-muted hover:text-champagne transition-colors">
                  Contact & Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Workshop Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg text-ivory tracking-tight">Shop Location</h4>
            <ul className="space-y-3 text-sm text-ivory-muted">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span>
                  {companyData.address.full}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-champagne shrink-0" />
                <a
                  href={`tel:${companyData.phone.international}`}
                  className="hover:text-champagne transition-colors text-ivory"
                >
                  {companyData.phone.display}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#25d366] shrink-0" />
                <a
                  href={companyData.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25d366] transition-colors"
                >
                  WhatsApp: {companyData.phone.display}
                </a>
              </li>

              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-champagne shrink-0 mt-0.5" />
                <span className="text-champagne">
                  {companyData.hoursNotice}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border & copyright */}
        <div className="mt-14 pt-8 border-t border-plum-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-dim">
          <p>© {currentYear} {companyData.name}. All rights reserved. Dubai, UAE.</p>
          <div className="flex items-center gap-4">
            <span>{companyData.address.building}</span>
            <span>•</span>
            <span>Fabrication & on-site installation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
