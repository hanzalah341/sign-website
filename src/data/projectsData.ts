export interface ProjectItem {
  id: string;
  title: string;
  category: "3d-letters" | "neon" | "lighting" | "flex-boards" | "events";
  categoryLabel: string;
  image: string;
  description: string;
}

export const projectCategories = [
  { id: "all", label: "All Concepts" },
  { id: "3d-letters", label: "3D Letters" },
  { id: "neon", label: "Neon Signs" },
  { id: "lighting", label: "Lighting" },
  { id: "flex-boards", label: "Flex Boards" },
  { id: "events", label: "Event Branding" },
] as const;

export const projectsData: ProjectItem[] = [
  {
    id: "concept-1",
    title: "Dimensional Metal Letters on Stone",
    category: "3d-letters",
    categoryLabel: "3D Letters",
    image: "/images/golden-oak-marble-sign.png",
    description: "Halo-illuminated dimensional lettering mounted on architectural stone surface."
  },
  {
    id: "concept-2",
    title: "Custom Script Neon Feature",
    category: "neon",
    categoryLabel: "Neon Signs",
    image: "/images/cozy-cafe-hello-neon.png",
    description: "Hand-shaped LED neon flex with warm ambient glow on clear backing."
  },
  {
    id: "concept-3",
    title: "Architectural Facade Illumination",
    category: "lighting",
    categoryLabel: "Lighting",
    image: "/images/warmly-lit-modern-building-entrance.png",
    description: "Linear light channels creating clean vertical illumination across entrance frontage."
  },
  {
    id: "concept-4",
    title: "Illuminated Wide Format Fascia",
    category: "flex-boards",
    categoryLabel: "Flex Boards",
    image: "/images/dubai-sunset-golden-wave-billboard.png",
    description: "Large format tensioned flex face signboard with uniform internal lighting."
  },
  {
    id: "concept-5",
    title: "Stage Monolith & Event Backdrop",
    category: "events",
    categoryLabel: "Event Branding",
    image: "/images/luxurious-golden-monolith-event-stage.png",
    description: "Freestanding stage backdrop structure with illuminated dimensional branding."
  },
  {
    id: "concept-6",
    title: "Storefront Dimensional Sign",
    category: "3d-letters",
    categoryLabel: "3D Letters",
    image: "/images/warmly-lit-care-clinic-facade.png",
    description: "Front-illuminated acrylic letters with crisp contrast on exterior facade."
  },
  {
    id: "concept-7",
    title: "Ambient Wall Neon Concept",
    category: "neon",
    categoryLabel: "Neon Signs",
    image: "/images/moody-pink-glow-lounge.png",
    description: "Vibrant neon accent lighting tailored for hospitality and lounge interiors."
  },
  {
    id: "concept-8",
    title: "Portal Frame & Accent Lighting",
    category: "lighting",
    categoryLabel: "Lighting",
    image: "/images/golden-portal-modern-luxury.png",
    description: "Architectural entrance portal with continuous integrated warm lighting."
  }
];
