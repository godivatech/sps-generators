"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState("01");

  const slides = [
    { num: "01", active: true },
    { num: "02", active: false },
    { num: "03", active: false },
    { num: "04", active: false },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-6 bg-[#08090c] overflow-hidden select-none"
    >
      {/* Full-Bleed High-Res Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-generator.jpg"
          alt="SPS Honda and Alpha Industrial Power Generator"
          fill
          priority
          className="object-cover object-[70%_center] lg:object-[68%_center] xl:object-[65%_center] filter brightness-[0.92] contrast-[1.05]"
          sizes="100vw"
        />

        {/* Precise Cinematic Gradient Overlays for Razor Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/95 via-[#08090c]/60 via-45% to-transparent z-[1]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#08090c]/80 to-transparent z-[1]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08090c] via-[#08090c]/60 to-transparent z-[1]" />
      </div>

      {/* Main Hero Body */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10 flex-1 flex items-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full items-center">
          
          {/* Left Hero Column: Typography & CTAs */}
          <div className="lg:col-span-8 xl:col-span-7 pt-4 sm:pt-0">
            
            {/* Overline Badge */}
            <div className="text-[13px] sm:text-[14px] font-extrabold tracking-[0.24em] text-neutral-300 uppercase mb-3 drop-shadow-sm font-['Outfit']">
              RELIABLE POWER SOLUTIONS
            </div>

            {/* Giant Hero Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[86px] font-black text-white tracking-[-0.02em] leading-[0.98] uppercase font-['Outfit'] mb-6 drop-shadow-md">
              POWER THAT<br />
              <span className="text-[#ea1d24] drop-shadow-[0_4px_35px_rgba(234,29,36,0.4)]">
                NEVER STOPS.
              </span>
            </h1>

            {/* Subtext Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-200/95 max-w-xl mb-8 leading-relaxed font-normal drop-shadow-sm">
              From portable power to industrial-grade backup.<br className="hidden sm:inline" />
              SPS Generators keeps your world running.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#products"
                className="inline-flex items-center gap-2.5 bg-[#ea1d24] hover:bg-[#d0151c] text-white text-sm sm:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#ea1d24]/35 hover:scale-[1.02] active:scale-95 group cursor-pointer"
              >
                <span>Explore Generators</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2.5 bg-black/40 hover:bg-white/10 text-white border border-white/35 hover:border-white text-sm sm:text-base font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full transition-all duration-300 backdrop-blur-md active:scale-95 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Get a Quote</span>
              </button>
            </div>

          </div>

          {/* Right Side Vertical Indicators & Slogan */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 flex-col items-end justify-between h-[400px] pointer-events-none">
            
            {/* 01, 02, 03, 04 Slide Numbers */}
            <div className="flex flex-col items-center gap-5 pr-2 pointer-events-auto">
              {slides.map((slide) => (
                <button
                  key={slide.num}
                  onClick={() => setActiveSlide(slide.num)}
                  className={`flex flex-col items-center text-sm transition-all duration-200 cursor-pointer ${
                    activeSlide === slide.num
                      ? "text-white font-black scale-110"
                      : "text-neutral-400 hover:text-white font-semibold"
                  }`}
                >
                  <span>{slide.num}</span>
                  {activeSlide === slide.num && (
                    <span className="w-4 h-[2px] bg-[#ea1d24] rounded-full mt-1 animate-in fade-in" />
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Right Slogan Block */}
            <div className="text-right text-[11px] font-extrabold tracking-[0.16em] text-neutral-300/80 leading-[1.4] uppercase pr-2">
              <div>POWERING</div>
              <div>BUSINESS.</div>
              <div>POWERING PEOPLE.</div>
              <div>POWERING PROGRESS.</div>
            </div>

          </div>

        </div>
      </div>

      {/* Hero Bottom Stats Row (4 Red Outline Icon Stat Cards) */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10 pt-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5 border-t border-white/10">
          
          {/* Stat 1: 6,000+ Successful Projects */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-[#ea1d24]/60 flex items-center justify-center text-[#ea1d24] shrink-0 shadow-lg group-hover:border-[#ea1d24] transition-colors">
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#ea1d24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="8" width="22" height="18" rx="4" />
                <circle cx="11" cy="15" r="2" fill="#ea1d24" />
                <circle cx="21" cy="15" r="2" fill="#ea1d24" />
                <path d="M12 21h8" />
                <line x1="16" y1="4" x2="16" y2="8" />
                <circle cx="16" cy="3" r="1.5" fill="#ea1d24" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Outfit'] leading-none">
                6,000+
              </div>
              <div className="text-xs text-neutral-300 font-medium mt-1">
                Successful Projects
              </div>
            </div>
          </div>

          {/* Stat 2: 6+ Years of Experience */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-[#ea1d24]/60 flex items-center justify-center text-[#ea1d24] shrink-0 shadow-lg group-hover:border-[#ea1d24] transition-colors">
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#ea1d24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" />
                <path d="M7 27C7 23.5 11 22 16 22C21 22 25 23.5 25 27" />
                <circle cx="24" cy="11" r="3" />
                <path d="M22 18C23.5 17.5 26 18 27 20" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Outfit'] leading-none">
                6+
              </div>
              <div className="text-xs text-neutral-300 font-medium mt-1">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Stat 3: 5,000+ Satisfied Clients */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-[#ea1d24]/60 flex items-center justify-center text-[#ea1d24] shrink-0 shadow-lg group-hover:border-[#ea1d24] transition-colors">
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#ea1d24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                <path d="M4 26v-2a6 6 0 0 1 12 0v2" />
                <path d="M20 14a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                <path d="M17 26v-1.5a5 5 0 0 1 9 0V26" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Outfit'] leading-none">
                5,000+
              </div>
              <div className="text-xs text-neutral-300 font-medium mt-1">
                Satisfied Clients
              </div>
            </div>
          </div>

          {/* Stat 4: 200+ Products */}
          <div className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-black/40 border border-[#ea1d24]/60 flex items-center justify-center text-[#ea1d24] shrink-0 shadow-lg group-hover:border-[#ea1d24] transition-colors">
              <svg viewBox="0 0 32 32" width="24" height="24" fill="none" stroke="#ea1d24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10l12-6 12 6-12 6-12-6z" />
                <path d="M4 10v12l12 6V16" />
                <path d="M28 10v12l-12 6V16" />
                <path d="M16 10l6-3" />
              </svg>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight font-['Outfit'] leading-none">
                200+
              </div>
              <div className="text-xs text-neutral-300 font-medium mt-1">
                Products
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
