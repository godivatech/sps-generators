"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#111317] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
            <h3 className="text-xl font-bold font-['Outfit']">Quote Request Received!</h3>
            <p className="text-sm text-neutral-300">
              Our engineering team will review your specifications and contact you with a detailed proposal within 2 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-[10px] font-black tracking-widest text-[#ea1d24] uppercase block">
                SPS GENERATORS
              </span>
              <h3 className="text-2xl font-black text-white font-['Outfit'] uppercase mt-1">
                Request An Instant Quote
              </h3>
              <p className="text-xs text-neutral-300 mt-1">
                Tell us your power requirements and our team will get in touch right away.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Full Name *"
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none"
                />
                <select
                  required
                  className="w-full bg-[#181b21] border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3 text-sm text-white focus:outline-none appearance-none"
                >
                  <option value="" disabled selected>
                    Select Capacity *
                  </option>
                  <option value="1-5">1 kVA - 5 kVA (Residential / Shop)</option>
                  <option value="5-15">5 kVA - 15 kVA (Offices / Inverter)</option>
                  <option value="15-50">15 kVA - 50 kVA (Commercial Buildings)</option>
                  <option value="50-250">50 kVA - 250 kVA (Hospitals / Hotels)</option>
                  <option value="250-1500">250 kVA - 1500 kVA (Industrial)</option>
                </select>
              </div>

              <textarea
                rows={3}
                placeholder="Details (Location, fuel preference, load requirement)..."
                className="w-full bg-white/5 border border-white/15 focus:border-[#ea1d24] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-400 focus:outline-none resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#ea1d24] hover:bg-[#d0151c] text-white font-bold py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-[#ea1d24]/30 cursor-pointer text-sm"
              >
                <span>Submit Quote Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
