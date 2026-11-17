export interface CompanyConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubline: string;
  address: {
    shop: string;
    building: string;
    area: string;
    city: string;
    country: string;
    full: string;
  };
  phone: {
    display: string;
    international: string;
    clean: string;
  };
  whatsapp: {
    url: string;
    number: string;
    clean: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
  };
  hoursNotice: string;
}

export const companyData: CompanyConfig = {
  name: "Lumex Signage",
  tagline: "Custom Signage & Lighting Solutions",
  heroHeadline: "Your name, lit up for all of Dubai.",
  heroSubline: "We design, fabricate, and install custom 3D letters, neon signs, lighting solutions, flex signboards, and event branding from our shop in Dragon Mart 1.",
  address: {
    shop: "Shop BAA-02",
    building: "Dragon Mart 1",
    area: "Warsan First, Dubai International City",
    city: "Dubai",
    country: "UAE",
    full: "Shop BAA-02, Dragon Mart 1, Warsan First, Dubai International City, Dubai, UAE",
  },
  phone: {
    display: "056 856 3307",
    international: "+971 56 856 3307",
    clean: "971568563307",
  },
  whatsapp: {
    url: "https://wa.me/971568563307",
    number: "+971 56 856 3307",
    clean: "971568563307",
  },
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3611.121764619379!2d55.41525047605963!3d25.176412177724765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f617fca5477c9%3A0xe72619736c2e36bb!2sDragon%20Mart!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae",
    directionsUrl: "https://maps.google.com/?q=Dragon+Mart+1+Dubai",
  },
  hoursNotice: "Call or WhatsApp to confirm timings",
};
