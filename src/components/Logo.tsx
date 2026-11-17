"use client";

import React from "react";
import Link from "next/link";
import { useLights } from "@/context/LightsContext";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { lightsOn } = useLights();

  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl md:text-5xl",
  };

  const dotSizes = {
    sm: "w-1.5 h-1.5",
    md: "w-2 h-2",
    lg: "w-2.5 h-2.5",
    xl: "w-3 h-3",
  };

  return (
    <Link
      href="/"
      aria-label="Lumex Signage - Home"
      className={`group inline-flex items-center gap-2 font-serif tracking-tight select-none focus-visible:outline-none ${className}`}
    >
      <div className="relative flex items-center">
        <span
          className={`font-serif font-bold tracking-tight text-ivory transition-colors duration-300 ${sizeClasses[size]}`}
        >
          Lumex
        </span>

        {/* The glowing accent light on the logo */}
        <span
          className={`ml-1 inline-block rounded-full transition-all duration-500 ${dotSizes[size]} ${
            lightsOn
              ? "bg-champagne shadow-[0_0_10px_#E8C27A,0_0_20px_#E8C27A]"
              : "bg-plum-border opacity-40"
          }`}
        />
      </div>

      <span className="font-sans text-[10px] tracking-[0.25em] text-champagne/80 uppercase font-medium pl-1 border-l border-plum-border/80">
        Dubai
      </span>
    </Link>
  );
}
