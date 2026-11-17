import React from "react";
import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturedProjects from "@/components/FeaturedProjects";
import HowWeWork from "@/components/HowWeWork";
import WhyLumex from "@/components/WhyLumex";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesPreview />
      <FeaturedProjects />
      <HowWeWork />
      <WhyLumex />
      <CtaBand />
    </>
  );
}
