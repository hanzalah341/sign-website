"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Lightbulb, LightbulbOff, MessageCircle, Phone } from "lucide-react";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";
import { useLights } from "@/context/LightsContext";
import { companyData } from "@/data/companyData";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { lightsOn, toggleLights } = useLights();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 200) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-300 ${
            isScrolled
              ? "bg-plum-deep/85 backdrop-blur-md border-b border-plum-border/70 py-3 shadow-subtle-plum"
              : "bg-transparent py-5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-sans">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1 transition-colors duration-200 ${
                      isActive
                        ? "text-champagne font-medium"
                        : "text-ivory-muted hover:text-ivory"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne rounded-full shadow-[0_0_8px_#E8C27A]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions: Light Switch + Quote CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Lights Toggle */}
              <button
                type="button"
                onClick={toggleLights}
                aria-label={lightsOn ? "Switch showroom lights off" : "Switch showroom lights on"}
                title={lightsOn ? "Lights are ON (click to dim)" : "Lights are OFF (click to light up)"}
                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans border transition-all duration-300 ${
                  lightsOn
                    ? "border-champagne/40 bg-champagne/10 text-champagne hover:bg-champagne/20 shadow-[0_0_12px_rgba(232,194,122,0.2)]"
                    : "border-plum-border bg-plum-deep text-ivory-dim hover:text-ivory hover:border-plum-border/80"
                }`}
              >
                {lightsOn ? (
                  <>
                    <Lightbulb className="w-3.5 h-3.5 text-champagne animate-pulse" />
                    <span className="font-medium tracking-wide">Lights ON</span>
                  </>
                ) : (
                  <>
                    <LightbulbOff className="w-3.5 h-3.5 text-ivory-dim" />
                    <span className="font-medium tracking-wide">Lights OFF</span>
                  </>
                )}
              </button>

              <MagneticButton
                href="/quote"
                variant="primary"
                size="sm"
                className="font-medium text-xs tracking-wider uppercase px-5 py-2.5"
              >
                Get a free quote
              </MagneticButton>
            </div>

            {/* Mobile Actions: Light switch + Hamburger button */}
            <div className="flex md:hidden items-center gap-2.5">
              <button
                type="button"
                onClick={toggleLights}
                aria-label="Toggle showroom lights"
                className={`p-2 rounded-full border transition-all duration-300 ${
                  lightsOn
                    ? "border-champagne/40 bg-champagne/10 text-champagne"
                    : "border-plum-border bg-plum text-ivory-dim"
                }`}
              >
                {lightsOn ? (
                  <Lightbulb className="w-4 h-4 text-champagne" />
                ) : (
                  <LightbulbOff className="w-4 h-4 text-ivory-dim" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg bg-plum border border-plum-border text-ivory focus:outline-none"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[65px] z-30 bg-midnight/98 backdrop-blur-xl border-b border-plum-border flex flex-col justify-between p-6 md:hidden overflow-y-auto"
          >
            <div className="space-y-4 pt-4">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xl font-serif py-3 border-b border-plum-border/50 flex items-center justify-between ${
                        isActive ? "text-champagne font-medium" : "text-ivory hover:text-champagne"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-champagne shadow-[0_0_8px_#E8C27A]" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 flex flex-col gap-3">
                <MagneticButton
                  href="/quote"
                  variant="primary"
                  className="w-full text-center justify-center py-3.5 text-sm"
                >
                  Get a free quote
                </MagneticButton>

                <MagneticButton
                  href={companyData.whatsapp.url}
                  variant="whatsapp"
                  target="_blank"
                  className="w-full text-center justify-center py-3.5 text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp us ({companyData.phone.display})
                </MagneticButton>
              </div>
            </div>

            {/* Mobile Footer detail */}
            <div className="pt-8 text-xs text-ivory-dim space-y-2 border-t border-plum-border/60">
              <p className="text-ivory-muted font-medium">{companyData.address.full}</p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <a href={`tel:${companyData.phone.international}`} className="text-ivory hover:text-champagne">
                  {companyData.phone.display}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
