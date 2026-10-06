import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Award, Users, Package, Quote } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: Cpu,
      value: "6,000+",
      label: "Successful Projects",
    },
    {
      icon: Award,
      value: "6+",
      label: "Years of Experience",
    },
    {
      icon: Users,
      value: "5,000+",
      label: "Satisfied Clients",
    },
    {
      icon: Package,
      value: "200+",
      label: "Products",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16">
          
          {/* Column 1: Story & Mission (5 cols) */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-[#ea1d24] uppercase block mb-2">
              ABOUT SPS GENERATORS
            </span>
            
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-black text-neutral-900 tracking-tight font-['Outfit'] uppercase leading-[1.1] mb-6">
              POWERING BUSINESS.<br />
              POWERING PEOPLE.<br />
              <span className="text-[#ea1d24]">POWERING PROGRESS.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-8">
              SPS Generators provides reliable and high-performance power backup solutions for residential, commercial and industrial needs. With a wide range of petrol, diesel and inverter generators from trusted global brands, we help businesses and individuals stay powered without interruption.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 border border-[#ea1d24] text-[#ea1d24] hover:bg-[#ea1d24] hover:text-white text-sm font-bold px-7 py-3 rounded-full transition-all duration-300 group shadow-xs cursor-pointer"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Column 2: Managing Director Center Portrait (4 cols) */}
          <div className="lg:col-span-4 flex justify-center relative">
            <div className="relative w-full max-w-[340px] aspect-[3/4] flex items-end justify-center">
              
              {/* Dynamic Red Angular Shard in the background */}
              <div
                className="absolute inset-0 bg-[#ea1d24] rounded-3xl"
                style={{
                  clipPath: "polygon(25% 0%, 100% 15%, 85% 100%, 0% 85%)",
                  transform: "rotate(-3deg) scale(0.95)",
                }}
              />

              <div className="relative w-full h-full rounded-2xl overflow-hidden z-10 flex items-end justify-center bg-gradient-to-t from-neutral-900/10 to-transparent">
                <Image
                  src="/images/R. Nikil Kumar.png"
                  alt="R. Nikil Kumar - Managing Director of SPS Generators"
                  fill
                  className="object-contain object-bottom drop-shadow-xl"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  priority
                />
              </div>

            </div>
          </div>

          {/* Column 3: Director Quote & Handwritten Signature (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="bg-neutral-50 border border-neutral-200/80 rounded-2xl p-6 sm:p-7 shadow-sm relative">
              
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-black text-[#ea1d24] tracking-tight font-['Outfit'] uppercase">
                  R. NIKIL KUMAR
                </h3>
                <span className="text-[10px] font-extrabold tracking-widest text-neutral-500 uppercase block mt-0.5">
                  MANAGING DIRECTOR
                </span>
              </div>

              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-[#ea1d24]/20 absolute -top-3 -left-2 -z-0" />
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic relative z-10 pl-2">
                  “Our focus is simple — deliver dependable power solutions that our customers can rely on when it matters most.”
                </p>
              </div>

              {/* Signature */}
              <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between">
                <span className="text-2xl text-neutral-800 font-signature select-none">
                  R. Nikil Kumar
                </span>
                <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                  Verified
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom 4 Metric Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 rounded-2xl p-5 sm:p-6 flex items-center gap-4 shadow-xs hover:border-[#ea1d24]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#ea1d24] shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight font-['Outfit'] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-neutral-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
