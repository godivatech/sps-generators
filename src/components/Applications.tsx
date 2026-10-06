"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Building2, HardHat, Factory, HeartPulse, Music, Home } from "lucide-react";

interface ApplicationsProps {
  onOpenQuote: () => void;
}

export default function Applications({ onOpenQuote }: ApplicationsProps) {
  const applications = [
    {
      id: "commercial",
      title: "Commercial",
      subTitle: "Hotels, Restaurants, Offices",
      icon: Building2,
      image: "/images/app-commercial.jpg",
      alt: "Commercial Power Backup for Offices and Hotels",
    },
    {
      id: "construction",
      title: "Construction",
      subTitle: "Construction Sites",
      icon: HardHat,
      image: "/images/app-construction.jpg",
      alt: "Heavy Duty Genset for Construction Sites",
    },
    {
      id: "industrial",
      title: "Industrial",
      subTitle: "Factories & Manufacturing",
      icon: Factory,
      image: "/images/app-industrial.jpg",
      alt: "Continuous Industrial Power for Manufacturing Plants",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      subTitle: "Hospitals & Medical Facilities",
      icon: HeartPulse,
      image: "/images/app-healthcare.jpg",
      alt: "Critical Emergency Power for Hospitals",
    },
    {
      id: "events",
      title: "Events",
      subTitle: "Events & Temporary Power",
      icon: Music,
      image: "/images/app-events.jpg",
      alt: "Silent Temporary Power for Events and Festivals",
    },
    {
      id: "residential",
      title: "Residential",
      subTitle: "Homes & Villas",
      icon: Home,
      image: "/images/app-residential.jpg",
      alt: "Residential Power Backup for Luxury Homes and Villas",
    },
  ];

  return (
    <section id="applications" className="py-20 bg-white text-neutral-900 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight font-['Outfit'] uppercase leading-none">
            POWER FOR EVERY <span className="text-[#ea1d24]">ENVIRONMENT</span>
          </h2>

          <button
            onClick={onOpenQuote}
            className="self-start sm:self-auto inline-flex items-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-neutral-900 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-neutral-50 group cursor-pointer"
          >
            <span>View All Applications</span>
            <ArrowRight className="w-4 h-4 text-[#ea1d24] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 High-Res Application Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {applications.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                onClick={onOpenQuote}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-200/80"
              >
                {/* Background Image */}
                <Image
                  src={app.image}
                  alt={app.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10 group-hover:from-black/95 transition-colors duration-300" />

                {/* Bottom Content & Badge */}
                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#ea1d24] flex items-center justify-center text-white mb-2 shadow-md shadow-[#ea1d24]/30 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-black text-white font-['Outfit'] tracking-tight">
                    {app.title}
                  </h3>
                  <p className="text-[10px] text-neutral-300 font-medium leading-tight mt-0.5 line-clamp-1">
                    {app.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
