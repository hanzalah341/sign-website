export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  styles: string[];
  materials: string[];
  included: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "3d-letters",
    slug: "3d-letters",
    title: "Custom 3D Letters",
    shortDesc: "Dimensional letters crafted in metal and acrylic, with front, back, or halo illumination options.",
    fullDesc: "We build dimensional letters tailored to your storefront. Whether you need polished metal finishes or clean acrylic faces, each letter is shaped, wired, and assembled with care for weather resistance.",
    image: "/images/golden-oak-marble-sign.png",
    styles: ["Front-lit acrylic face", "Reverse halo-lit with warm glow", "Dual-lit (front and halo)", "Non-illuminated solid metal"],
    materials: ["Stainless steel finishes", "Polished brass", "Cast acrylic", "Powder-coated aluminum"],
    included: [
      "Storefront scale mockup preview",
      "Letter fabrication and assembly",
      "Low-voltage LED illumination modules",
      "Mounting template and hardware",
      "On-site installation included"
    ],
    idealFor: "Retail stores, restaurants, clinic facades, and reception walls."
  },
  {
    id: "neon-signs",
    slug: "neon-signs",
    title: "Neon Signs",
    shortDesc: "Custom neon lettering and artwork made with durable, low-heat LED tubes.",
    fullDesc: "Custom neon brings high-visibility character to any wall. We shape durable LED neon flex into your exact lettering, logos, or artwork, delivering vibrant light with low power consumption.",
    image: "/images/cozy-cafe-hello-neon.png",
    styles: ["Cut-to-shape clear backing", "Solid acrylic backboard", "Weather-resistant outdoor casing", "Freestanding mounts"],
    materials: ["Silicone LED neon flex", "High-clarity acrylic backboards", "Low-voltage power adapters", "Mounting standoff hardware"],
    included: [
      "Digital outline and tube layout proof",
      "Contour-cut acrylic backing plate",
      "Dimmer controller and power supply",
      "Hanging wire or wall standoff fixings",
      "On-site installation included"
    ],
    idealFor: "Cafes, beauty spaces, studios, photo walls, and interior features."
  },
  {
    id: "lighting-solutions",
    slug: "lighting-solutions",
    title: "Lighting Solutions",
    shortDesc: "Architectural frontage illumination, warm halo coves, and custom light boxes.",
    fullDesc: "Proper lighting highlights your space after dusk. We build linear architectural light channels, indirect coves, and custom light boxes designed for dependable daily operation.",
    image: "/images/golden-portal-modern-luxury.png",
    styles: ["Concealed linear facade troughs", "Slimline light boxes", "Halo wall wash accents", "Warm to cool light tones"],
    materials: ["Aluminum channels", "Weather-sealed LED strips", "Frosted diffusers", "Low-voltage drivers"],
    included: [
      "Lighting layout and dimension check",
      "Aluminum channels and diffusers",
      "Power supplies and wiring",
      "Discreet cabling routing",
      "On-site installation included"
    ],
    idealFor: "Storefronts, entrances, reception areas, and display perimeters."
  },
  {
    id: "flex-signboards",
    slug: "flex-signboards",
    title: "Flex Signboards",
    shortDesc: "Large-format outdoor fascia signboards with clean internal illumination.",
    fullDesc: "When broad visibility is needed across large frontage, flex signboards provide a clean, continuous display. We fabricate durable structural frames and tension high-grade banner face material.",
    image: "/images/dubai-sunset-golden-wave-billboard.png",
    styles: ["Backlit flex face box", "Front-lit billboard style", "Double-sided projecting boxes", "Wide format frames"],
    materials: ["Galvanized structural steel frame", "Aluminum exterior trim", "UV-treated flex face", "Internal LED illumination grid"],
    included: [
      "Frame structure fabrication",
      "High-resolution UV graphic printing",
      "Tensioning and internal light mounting",
      "Mounting brackets and hardware",
      "On-site installation included"
    ],
    idealFor: "Supermarkets, commercial units, industrial facilities, and roadside retail."
  },
  {
    id: "event-branding",
    slug: "event-branding",
    title: "Event Branding",
    shortDesc: "Freestanding backdrops, entrance portals, photo spots, and exhibition signs.",
    fullDesc: "We build custom stage backdrops, illuminated logo stands, and exhibition structures tailored for brand activations, product launches, and trade shows.",
    image: "/images/luxurious-golden-monolith-event-stage.png",
    styles: ["Freestanding backdrops", "Illuminated photo spot monuments", "Entrance portals", "Branded stage signs"],
    materials: ["Timber and MDF carpentry", "Matte fabric and vinyl", "Acrylic lettering accents", "Weighted support bases"],
    included: [
      "Scale layout and structural plan",
      "Workshop preparation and fitting",
      "Timed delivery to your event venue",
      "On-site assembly and setup",
      "Installation and positioning included"
    ],
    idealFor: "Exhibitions, product showcases, corporate events, and pop-up launches."
  }
];
