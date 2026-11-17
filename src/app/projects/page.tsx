import React, { Suspense } from "react";
import type { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Projects Gallery | Lumex Signage Dubai",
  description: "Browse custom 3D letters, neon signs, architectural lighting, flex signboards, and event branding projects crafted and installed across Dubai and UAE.",
};

export default function ProjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-ivory-dim">
          <div className="w-8 h-8 rounded-full border-2 border-champagne border-t-transparent animate-spin mx-auto mb-4" />
          <p>Loading projects...</p>
        </div>
      }
    >
      <ProjectsGallery />
      <CtaBand />
    </Suspense>
  );
}
