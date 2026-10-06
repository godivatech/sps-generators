"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProductsProps {
  onOpenQuote: () => void;
}

export default function Products({ onOpenQuote }: ProductsProps) {
  return (
    <section id="products" className="py-14 sm:py-16 lg:py-20 bg-[#f4f5f8] text-neutral-900 border-t border-neutral-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Top Header (Matching reference layout pixel-by-pixel) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-10 gap-6">
          <div className="flex flex-col lg:flex-row lg:items-end gap-5 lg:gap-10">
            <div>
              <div className="text-[13px] font-extrabold tracking-[0.16em] uppercase mb-1.5 font-['Outfit']">
                <span className="text-neutral-900">OUR </span>
                <span className="text-[#ea1d24]">PRODUCT RANGE</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-black text-neutral-900 tracking-[-0.03em] font-['Outfit'] uppercase leading-none whitespace-nowrap">
                CHOOSE YOUR <span className="text-[#ea1d24]">POWER</span>
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm lg:text-[14px] text-neutral-600 font-medium max-w-sm lg:max-w-md leading-[1.4] pb-0.5">
              Wide range of petrol, diesel and inverter generators<br className="hidden sm:inline" />
              for residential, commercial and industrial needs.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="self-start lg:self-end border-[1.5px] border-[#ea1d24] text-[#ea1d24] hover:bg-[#ea1d24] hover:text-white bg-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 group cursor-pointer shrink-0 shadow-xs mb-0.5"
            aria-label="View All Products"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* The 3 Cards Grid - Built with proper CSS backgrounds, live HTML typography & interactive buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          
          {/* ================= CARD 1: PETROL GENERATORS ================= */}
          <div
            onClick={onOpenQuote}
            className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between p-6 sm:p-7"
          >
            {/* Background Image Canvas */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src="/images/card1.png"
                alt="Petrol Generators"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>

            {/* Left Content (Live Semantic HTML) */}
            <div className="relative z-10 flex flex-col justify-between h-full w-[52%] max-w-[200px]">
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-black text-white tracking-tight font-['Outfit'] uppercase leading-none">
                  PETROL<br />
                  <span>GENERATORS</span>
                </h3>
                <span className="text-xs sm:text-[13px] font-bold text-white/90 tracking-wide block mt-2.5">
                  1 KVA – 13 KVA
                </span>
              </div>

              {/* White Circular Button with Red Arrow */}
              <button
                className="w-11 h-11 rounded-full bg-white text-[#ea1d24] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#ea1d24] group-hover:text-white transition-all duration-300 mt-auto cursor-pointer"
                aria-label="Inquire about Petrol Generators"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* ================= CARD 2: DIESEL GENERATORS ================= */}
          <div
            onClick={onOpenQuote}
            className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-neutral-800 flex flex-col justify-between p-6 sm:p-7 bg-[#0d0f14]"
          >
            {/* Background Industrial Refinery at Night */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/app-industrial.jpg"
                alt="Industrial Night Refinery Background"
                fill
                className="object-cover object-center opacity-45 mix-blend-luminosity filter contrast-125"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              {/* Dark Gradient Overlay for optimal text readability */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #0d0f14 0%, rgba(13,15,20,0.88) 45%, rgba(13,15,20,0.3) 100%)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.25) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Left Content (Live Semantic HTML) */}
            <div className="relative z-10 flex flex-col justify-between h-full w-[52%] max-w-[200px]">
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-black text-white tracking-tight font-['Outfit'] uppercase leading-none">
                  DIESEL<br />
                  <span>GENERATORS</span>
                </h3>
                <span className="text-xs sm:text-[13px] font-bold text-neutral-300 tracking-wide block mt-2.5">
                  5 KVA – 1500 KVA
                </span>
              </div>

              {/* Red Circular Button with White Arrow */}
              <button
                className="w-11 h-11 rounded-full bg-[#ea1d24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white group-hover:text-[#ea1d24] transition-all duration-300 mt-auto cursor-pointer"
                aria-label="Inquire about Diesel Generators"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Right Product Image Canvas */}
            <div className="absolute right-1 bottom-2 sm:right-3 sm:bottom-3 w-[64%] h-[80%] flex items-end justify-center pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/images/diesel-generator.jpg"
                  alt="Industrial Acoustic Canopy Diesel Generator 5 kVA to 1500 kVA"
                  fill
                  className="object-contain object-bottom filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 60vw, 25vw"
                />
              </div>
            </div>
          </div>

          {/* ================= CARD 3: INVERTER GENERATORS ================= */}
          <div
            onClick={onOpenQuote}
            className="group relative h-[320px] sm:h-[340px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 cursor-pointer border border-neutral-200/90 flex flex-col justify-between p-6 sm:p-7 bg-white"
          >
            {/* Background Studio Light Grey Gradient & Subtle Ambient Lines */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(145deg, #ffffff 0%, #f8fafc 50%, #eef2f6 100%)",
              }}
            />
            <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-l from-neutral-200/30 to-transparent pointer-events-none" />

            {/* Left Content (Live Semantic HTML) */}
            <div className="relative z-10 flex flex-col justify-between h-full w-[52%] max-w-[200px]">
              <div>
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-black text-neutral-900 tracking-tight font-['Outfit'] uppercase leading-none">
                  INVERTER<br />
                  <span>GENERATORS</span>
                </h3>
                <span className="text-xs sm:text-[13px] font-bold text-neutral-600 tracking-wide block mt-2.5">
                  Portable Power
                </span>
              </div>

              {/* Red Circular Button with White Arrow */}
              <button
                className="w-11 h-11 rounded-full bg-[#ea1d24] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-neutral-900 transition-all duration-300 mt-auto cursor-pointer"
                aria-label="Inquire about Inverter Generators"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Right Product Image Canvas */}
            <div className="absolute right-1 bottom-2 sm:right-3 sm:bottom-3 w-[56%] h-[82%] flex items-end justify-center pointer-events-none">
              <div className="relative w-full h-full">
                <Image
                  src="/images/inverter-generator.jpg"
                  alt="Alpha Portable Silent Inverter Generator"
                  fill
                  className="object-contain object-bottom filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.22)] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 60vw, 25vw"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


