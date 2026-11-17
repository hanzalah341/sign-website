"use client";

import React, { useState } from "react";
import Link from "next/link";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
  size = "md",
  disabled = false,
}: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || typeof window === "undefined") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantClasses = {
    primary:
      "bg-champagne text-midnight font-medium hover:bg-champagne-light shadow-[0_2px_15px_rgba(232,194,122,0.25)] hover:shadow-[0_4px_25px_rgba(232,194,122,0.4)] border border-champagne-light/30",
    secondary:
      "bg-plum border border-plum-border text-ivory hover:border-champagne/60 hover:text-champagne-light shadow-subtle-plum",
    ghost:
      "bg-transparent text-ivory hover:text-champagne border border-transparent hover:border-plum-border",
    whatsapp:
      "bg-[#1EB754] text-white font-medium hover:bg-[#199d48] shadow-[0_2px_15px_rgba(30,183,84,0.3)] hover:shadow-[0_4px_25px_rgba(30,183,84,0.5)] border border-[#25d366]/40",
  };

  const content = (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition: offset.x === 0 && offset.y === 0 ? "transform 0.3s ease-out" : "transform 0.05s linear",
      }}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-sans select-none will-change-transform ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </div>
  );

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {content}
    </button>
  );
}
