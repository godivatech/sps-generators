"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Clients() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: "BURGER MAN", sub: "SOUTH INDIA" },
    { name: "US PIZZA", sub: "" },
    { name: "ZUDIO", sub: "MADURAI" },
    { name: "GROW HAIR", sub: "" },
    { name: "DHANARATHNA", sub: "P LTD" },
    { name: "VRC", sub: "CONSTRUCTION" },
    { name: "ADDIN", sub: "P LTD" },
    { name: "GO RURAL", sub: "P LTD" },
    { name: "TN CRICKET", sub: "ASSOCIATION" },
    { name: "ICON", sub: "ENGINEER" },
    { name: "BLACK FOREST", sub: "" },
    { name: "FB CAKE", sub: "" },
    { name: "SIET", sub: "" },
    { name: "WRIGHT ENERGY", sub: "" },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="clients" className="py-16 bg-[#f8fafc] border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight font-['Outfit'] uppercase">
              TRUSTED BY BUSINESSES ACROSS INDUSTRIES
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              From leading brands to growing businesses, SPS Generators is the trusted power partner for many.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous clients"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next clients"
              className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable / Marquee client logos track */}
        <div
          ref={scrollRef}
          className="flex items-center gap-4 overflow-x-auto scrollbar-none py-2 select-none no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {clients.concat(clients).map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-neutral-200/90 rounded-xl px-5 py-3.5 flex flex-col items-center justify-center min-w-[150px] sm:min-w-[170px] shadow-xs hover:shadow-md hover:border-neutral-300 transition-all shrink-0 cursor-default"
            >
              <span className="font-black text-xs sm:text-sm text-neutral-800 tracking-wider text-center">
                {client.name}
              </span>
              {client.sub && (
                <span className="text-[9px] font-bold text-neutral-400 tracking-widest uppercase mt-0.5">
                  {client.sub}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
