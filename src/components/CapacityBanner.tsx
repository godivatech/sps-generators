import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function CapacityBanner() {
  return (
    <section className="relative bg-[#0c0e12] overflow-hidden py-16 lg:py-20 border-y border-white/10">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/wide-range-generators.jpg"
          alt="Wide Range of Industrial Generators Background"
          fill
          className="object-cover opacity-20 filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0e12] via-[#0c0e12]/85 to-[#0c0e12]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: 1 KVA TO 1500 KVA */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div className="text-3xl sm:text-4xl xl:text-5xl font-black text-white tracking-tight font-['Outfit'] uppercase leading-none">
              1 KVA <span className="text-neutral-400 font-bold text-2xl sm:text-3xl">TO</span>{" "}
              <span className="text-[#ea1d24] block sm:inline mt-1 sm:mt-0">1500 KVA</span>
            </div>
            <p className="text-sm sm:text-base font-extrabold text-neutral-300 tracking-widest uppercase mt-2">
              WIDE POWER RANGE
            </p>
          </div>

          {/* Center: Lineup Image Showcase */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-[16/7] rounded-xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80">
              <Image
                src="/images/wide-range-generators.jpg"
                alt="Industrial generator sets lineup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Right: Angular Red Badge */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="relative bg-gradient-to-br from-[#ea1d24] to-[#b91c1c] text-white p-6 sm:p-7 rounded-2xl shadow-xl shadow-[#ea1d24]/20 border border-red-500/30 max-w-md">
              <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center text-white mb-3">
                <Zap className="w-5 h-5 fill-white text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase font-['Outfit'] leading-tight mb-2">
                POWER FOR EVERY ENVIRONMENT
              </h3>
              <p className="text-xs sm:text-sm text-red-50 leading-relaxed font-normal">
                From homes to industries, we deliver power where it matters.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
