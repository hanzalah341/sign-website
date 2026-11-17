"use client";

import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { companyData } from "@/data/companyData";

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
    >
      {/* Tooltip on hover / desktop */}
      <div
        className={`hidden sm:flex items-center bg-plum-deep/95 backdrop-blur-md border border-plum-border text-ivory text-xs px-3.5 py-2 rounded-full shadow-lg transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-champagne font-medium mr-1.5">Direct chat:</span>
        <span>{companyData.phone.display}</span>
      </div>

      {/* Pulsing button */}
      <a
        href={companyData.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lumex Signage on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
      >
        {/* Radar ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:rotate-6" />
      </a>
    </aside>
  );
}
