"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MessageCircle, Send, Upload, AlertCircle } from "lucide-react";
import { companyData } from "@/data/companyData";
import { servicesData } from "@/data/servicesData";
import MagneticButton from "./MagneticButton";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  projectSizeLocation: string;
  budgetRange: string;
  message: string;
  fileName?: string;
}

const budgetOptions = [
  "Not sure / Request recommendation",
  "Under AED 2,500",
  "AED 2,500 – AED 5,000",
  "AED 5,000 – AED 10,000",
  "AED 10,000 – AED 25,000",
  "AED 25,000+",
];

export default function QuoteForm() {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    projectSizeLocation: "",
    budgetRange: "",
    message: "",
    fileName: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service") || "";
      if (serviceParam) {
        const match = servicesData.find(
          (s) => s.slug === serviceParam || s.id === serviceParam
        );
        if (match) {
          setFormData((prev) => ({ ...prev, service: match.title }));
        }
      }
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files![0].name,
      }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name or business name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone or WhatsApp number.";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you are interested in.";
    }

    if (!formData.projectSizeLocation.trim()) {
      newErrors.projectSizeLocation = "Please specify approximate dimensions or your location in Dubai/UAE.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Prepare prefilled WhatsApp message
    const lines = [
      `*New Quote Request - Lumex Signage*`,
      `• *Client Name:* ${formData.name}`,
      `• *Phone:* ${formData.phone}`,
      formData.email ? `• *Email:* ${formData.email}` : null,
      `• *Service:* ${formData.service}`,
      `• *Size / Location:* ${formData.projectSizeLocation}`,
      formData.budgetRange ? `• *Budget:* ${formData.budgetRange}` : null,
      formData.message ? `• *Project Notes:* ${formData.message}` : null,
      formData.fileName ? `• *Reference File Attached:* ${formData.fileName}` : null,
    ].filter(Boolean);

    const waText = encodeURIComponent(lines.join("\n"));
    const waLink = `https://wa.me/${companyData.whatsapp.clean}?text=${waText}`;
    setGeneratedWhatsAppUrl(waLink);

    // Simulate instant backend validation & storage
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Automatically attempt opening WhatsApp in a new tab
      if (typeof window !== "undefined") {
        window.open(waLink, "_blank", "noopener,noreferrer");
      }
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      projectSizeLocation: "",
      budgetRange: "",
      message: "",
      fileName: "",
    });
    setIsSuccess(false);
  };

  return (
    <div className="bg-plum/60 border border-plum-border rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-champagne/10 border border-champagne text-champagne mx-auto flex items-center justify-center shadow-glow-gold">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-lg mx-auto">
              <h3 className="font-serif text-3xl text-ivory">
                Your quote request is ready!
              </h3>
              <p className="text-sm text-ivory-muted leading-relaxed">
                We have prepared your details. If WhatsApp did not open automatically, tap the button below to connect with our shop directly.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton
                href={generatedWhatsAppUrl}
                variant="whatsapp"
                size="lg"
                target="_blank"
                className="w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Open in WhatsApp</span>
              </MagneticButton>

              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-ivory-dim hover:text-champagne underline transition-colors pt-2 sm:pt-0"
              >
                Submit another request
              </button>
            </div>
          </motion.div>
        ) : (
          <form key="form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Your Name or Company <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Tariq Al-Mansoor or Krave Cafe"
                  className={`w-full px-4 py-3 rounded-xl bg-midnight border text-ivory placeholder-ivory-dim text-sm focus:outline-none transition-colors ${
                    errors.name ? "border-coral focus:border-coral" : "border-plum-border focus:border-champagne"
                  }`}
                />
                {errors.name && (
                  <p className="text-xs text-coral mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Phone / WhatsApp Number <span className="text-coral">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 056 856 3307 or +971 50..."
                  className={`w-full px-4 py-3 rounded-xl bg-midnight border text-ivory placeholder-ivory-dim text-sm focus:outline-none transition-colors ${
                    errors.phone ? "border-coral focus:border-coral" : "border-plum-border focus:border-champagne"
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-coral mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Email Address <span className="text-ivory-dim font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@business.ae"
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-plum-border text-ivory placeholder-ivory-dim text-sm focus:outline-none focus:border-champagne transition-colors"
                />
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Signage Service Needed <span className="text-coral">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl bg-midnight border text-ivory text-sm focus:outline-none transition-colors ${
                    errors.service ? "border-coral focus:border-coral" : "border-plum-border focus:border-champagne"
                  }`}
                >
                  <option value="">Select a service...</option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multiple services / Full Storefront Branding">
                    Multiple services / Full Storefront Package
                  </option>
                </select>
                {errors.service && (
                  <p className="text-xs text-coral mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.service}</span>
                  </p>
                )}
              </div>

              {/* Project Size / Location */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Sign Dimensions & Location <span className="text-coral">*</span>
                </label>
                <input
                  type="text"
                  name="projectSizeLocation"
                  value={formData.projectSizeLocation}
                  onChange={handleChange}
                  placeholder="e.g. 3m x 0.8m on storefront, Downtown Dubai"
                  className={`w-full px-4 py-3 rounded-xl bg-midnight border text-ivory placeholder-ivory-dim text-sm focus:outline-none transition-colors ${
                    errors.projectSizeLocation ? "border-coral focus:border-coral" : "border-plum-border focus:border-champagne"
                  }`}
                />
                {errors.projectSizeLocation && (
                  <p className="text-xs text-coral mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.projectSizeLocation}</span>
                  </p>
                )}
              </div>

              {/* Budget Range (Optional) */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                  Estimated Budget <span className="text-ivory-dim font-normal">(optional)</span>
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-plum-border text-ivory text-sm focus:outline-none focus:border-champagne transition-colors"
                >
                  <option value="">Select budget range...</option>
                  {budgetOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Notes / Message */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-medium text-ivory mb-2">
                Project Details or Questions <span className="text-ivory-dim font-normal">(optional)</span>
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you have in mind: wall type, preferred finish (gold brass, stainless, neon color), indoor or outdoor, installation date..."
                className="w-full px-4 py-3 rounded-xl bg-midnight border border-plum-border text-ivory placeholder-ivory-dim text-sm focus:outline-none focus:border-champagne transition-colors"
              />
            </div>

            {/* Optional Image / File Upload */}
            <div className="p-4 rounded-xl border border-dashed border-plum-border/80 bg-midnight/60">
              <label className="flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-plum text-champagne">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-ivory block">
                      {formData.fileName || "Upload logo vector or storefront photo (optional)"}
                    </span>
                    <span className="text-[11px] text-ivory-dim">
                      AI, EPS, PDF, SVG, JPG or PNG (up to 25MB)
                    </span>
                  </div>
                </div>

                <span className="px-3.5 py-1.5 rounded-full text-xs bg-plum border border-plum-border text-ivory hover:text-champagne transition-colors shrink-0">
                  {formData.fileName ? "Change file" : "Choose file"}
                </span>

                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".ai,.eps,.pdf,.svg,.jpg,.jpeg,.png,.webp"
                  className="hidden"
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <MagneticButton
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto text-xs uppercase tracking-wider font-medium"
              >
                {isSubmitting ? (
                  <span>Preparing request...</span>
                ) : (
                  <>
                    <span>Submit & WhatsApp quote</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </MagneticButton>

              <p className="text-xs text-ivory-dim text-center sm:text-right">
                Direct workshop reply within 1-2 business hours.
              </p>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
