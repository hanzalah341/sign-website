import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import { LightsProvider } from "@/context/LightsContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { companyData } from "@/data/companyData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lumex Signage Dubai | Custom 3D Letters, Neon Signs & Lighting Solutions",
    template: "%s | Lumex Signage Dubai",
  },
  description: "Lumex Signage crafts custom 3D letters, neon signs, lighting solutions, flex signboards, and event branding in Dragon Mart 1, Dubai. Design to on-site installation.",
  metadataBase: new URL("https://lumexsignage.ae"),
  keywords: [
    "signage Dubai",
    "custom 3D letters Dubai",
    "neon signs Dubai",
    "lighting solutions Dragon Mart",
    "flex signboards Dubai",
    "event branding UAE",
    "sign board maker Dubai",
    "Dragon Mart 1 signage",
  ],
  authors: [{ name: "Lumex Signage" }],
  creator: "Lumex Signage",
  publisher: "Lumex Signage",
  formatDetection: {
    telephone: true,
    address: true,
  },
  openGraph: {
    title: "Lumex Signage Dubai | Custom 3D Letters, Neon Signs & Lighting Solutions",
    description: "Custom signage in Dragon Mart 1, Dubai. 3D letters, neon signs, lighting solutions, flex signboards, and event branding with on-site installation across UAE.",
    url: "https://lumexsignage.ae",
    siteName: "Lumex Signage",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumex Signage Dubai",
    description: "Custom 3D letters, neon signs, and lighting solutions in Dragon Mart 1, Dubai.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": companyData.name,
    "telephone": companyData.phone.international,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${companyData.address.shop}, ${companyData.address.building}, ${companyData.address.area}`,
      "addressLocality": companyData.address.city,
      "addressRegion": companyData.address.city,
      "addressCountry": companyData.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1764,
      "longitude": 55.4178
    },
    "url": "https://lumexsignage.ae",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Signage Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom 3D letters" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Neon signs" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lighting solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flex signboards" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event branding" } }
      ]
    }
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-midnight text-ivory antialiased selection:bg-champagne/30 selection:text-ivory">
        <LightsProvider>
          <SmoothScroll>
            <CustomCursor />
            <Navbar />
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </SmoothScroll>
        </LightsProvider>
      </body>
    </html>
  );
}
