"use client";

import React, { useState } from "react";
import Image from "next/image";
import { User, Phone, Building2, Zap, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    company: "",
    requiredType: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setStatus("error");
      setStatusMessage("Please enter your name and contact phone number.");
      return;
    }

    setStatus("submitting");

    // Simulate instant secure form submission
    setTimeout(() => {
      setStatus("success");
      setStatusMessage("Thank you! Our power engineers will contact you shortly with a personalized quote.");
      setFormData({
        fullName: "",
        phone: "",
        company: "",
        requiredType: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-[#0c0e12]">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-technician.jpg"
          alt="Power Generator Technician in Control Room"
          fill
          className="object-cover object-right lg:object-center opacity-30 filter saturate-150"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12] via-[#0c0e12]/90 to-[#0c0e12]/75" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight font-['Outfit'] uppercase leading-[1.08] mb-4">
              NEED RELIABLE<br />
              <span className="text-white">BACKUP POWER?</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 max-w-md font-normal leading-relaxed">
              Tell us what you need. We'll help you find the right generator solution with tailored capacity and fuel economics.
            </p>
          </div>

          {/* Right Column: Dark Glassmorphic Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-[#12141a]/85 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-9 shadow-2xl shadow-black/80 space-y-4"
            >
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Company & Required Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company / Business Name"
                    className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <select
                    name="requiredType"
                    value={formData.requiredType}
                    onChange={handleChange}
                    className="w-full bg-[#161821] border border-white/15 focus:border-[#ea1d24] rounded-xl pl-11 pr-4 py-3.5 text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#161821] text-neutral-400">
                      Required Type
                    </option>
                    <option value="petrol" className="bg-[#161821] text-white">
                      Petrol Generator (1 - 13 kVA)
                    </option>
                    <option value="diesel" className="bg-[#161821] text-white">
                      Diesel Generator (5 - 1500 kVA)
                    </option>
                    <option value="inverter" className="bg-[#161821] text-white">
                      Silent Inverter Generator
                    </option>
                    <option value="commercial" className="bg-[#161821] text-white">
                      Commercial Power Backup
                    </option>
                    <option value="industrial" className="bg-[#161821] text-white">
                      Industrial Heavy Genset
                    </option>
                  </select>
                </div>
              </div>

              {/* Row 3: Your Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your Message (power requirement, location, details...)"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3.5 text-sm text-white placeholder-neutral-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ea1d24] hover:bg-[#d0151c] text-white text-base font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-[#ea1d24]/30 hover:scale-[1.02] active:scale-95 disabled:opacity-70 cursor-pointer"
                >
                  <span>{status === "submitting" ? "Processing..." : "Get a Quote"}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                {status === "success" && (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2 text-rose-400 text-xs sm:text-sm font-medium">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </div>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
