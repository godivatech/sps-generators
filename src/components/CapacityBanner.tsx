import React from "react";
import Image from "next/image";
import { Zap } from "lucide-react";

export default function CapacityBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#090a0d] border-y border-neutral-800/80 select-none">
      {/* ================= DESKTOP & TABLET VIEW (md and up) ================= */}
      <div className="hidden md:block relative w-full h-[220px] lg:h-[250px] xl:h-[270px]">
        {/* Cinematic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/capacity-bg.jpg"
            alt="White Industrial Acoustic Canopy Generators Lineup"
            fill
            priority
            className="object-cover object-[center_60%] filter brightness-95 contrast-105"
            sizes="100vw"
          />
          {/* Subtle Ambient Vignettes for Seamless Depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 via-35% to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </div>

        {/* LEFT BADGE: Glassmorphic Container with Live Typography */}
        <div className="absolute left-6 lg:left-12 xl:left-20 top-1/2 -translate-y-1/2 z-20">
          <div className="bg-[#0b0d12]/85 backdrop-blur-md border border-white/15 rounded-2xl px-6 py-4 lg:px-8 lg:py-5 shadow-[0_16px_40px_rgba(0,0,0,0.7)] max-w-md">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black font-['Outfit'] tracking-tight leading-none text-white uppercase drop-shadow-md">
              1 KVA TO{" "}
              <span className="text-[#ea1d24] drop-shadow-[0_2px_18px_rgba(234,29,36,0.5)]">
                1500 KVA
              </span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-[15px] font-bold tracking-[0.24em] text-white/95 uppercase mt-2 lg:mt-3 drop-shadow-sm">
              WIDE POWER RANGE
            </p>
          </div>
        </div>

        {/* RIGHT SHAPE: Angled Red Polygonal Container with Diagonal Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[42%] lg:w-[36%] xl:w-[32%] h-full z-20">
          {/* Red Polygon with Exact Forward Slant (clipPath: 20% 0, 100% 0, 100% 100%, 0 100%) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#ea1d24] via-[#c81016] to-[#88080c] shadow-2xl overflow-hidden"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            {/* Abstract Lighting Accents inside the Red Shape */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_55%)] pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-black/30 rounded-full blur-2xl pointer-events-none" />

            {/* Subtle Diagonal Speedlines / Grid Accents */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0, rgba(255,255,255,0.15) 1px, transparent 0, transparent 16px)",
              }}
            />

            {/* Dark Shading along the Left Diagonal Cut Edge */}
            <div
              className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
            />
          </div>

          {/* Content inside the Red Shape */}
          <div className="relative z-10 h-full flex flex-col justify-center items-end text-right pr-6 lg:pr-12 xl:pr-16 pl-14">
            {/* Crest / Emblem Icon */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-white/15 border border-white/20 backdrop-blur-xs flex items-center justify-center shadow-inner">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            {/* Headline */}
            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] font-black text-white uppercase font-['Outfit'] tracking-tight leading-[1.08] drop-shadow-sm">
              POWER FOR<br />
              EVERY ENVIRONMENT
            </h3>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] lg:text-[14px] text-white/90 font-medium leading-relaxed mt-2 max-w-[280px]">
              From homes to industries,<br />
              we deliver power where it matters.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (< md) ================= */}
      <div className="block md:hidden relative w-full py-8 px-4">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/capacity-bg.jpg"
            alt="Industrial Generators"
            fill
            className="object-cover filter brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-[#090a0d]/75" />
        </div>

        {/* Mobile Stacked Content */}
        <div className="relative z-10 flex flex-col gap-4">
          {/* Top Badge */}
          <div className="bg-[#0b0d12]/90 border border-white/15 rounded-xl p-5 shadow-lg text-center">
            <h2 className="text-2xl font-black font-['Outfit'] tracking-tight text-white uppercase">
              1 KVA TO <span className="text-[#ea1d24]">1500 KVA</span>
            </h2>
            <p className="text-xs font-bold tracking-[0.2em] text-white/90 uppercase mt-1">
              WIDE POWER RANGE
            </p>
          </div>

          {/* Bottom Red Card */}
          <div className="bg-gradient-to-r from-[#ea1d24] to-[#aa0f14] rounded-xl p-5 text-white shadow-lg flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <h3 className="text-base font-black uppercase font-['Outfit'] leading-tight">
                POWER FOR EVERY ENVIRONMENT
              </h3>
              <p className="text-xs text-white/90 font-medium mt-1">
                From homes to industries, we deliver power where it matters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
