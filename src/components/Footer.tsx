import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d11] text-neutral-400 text-sm border-t border-white/5 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-block mb-4 group">
              <div className="bg-white hover:bg-white rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-300 shadow-md inline-flex items-center justify-center">
                <div className="relative w-[220px] h-[48px] sm:w-[260px] sm:h-[56px] flex items-center justify-center">
                  <Image
                    src="/images/Logo.png"
                    alt="OM GEN POWER - Origin Grand Power"
                    fill
                    className="object-contain object-center scale-[1.04]"
                    sizes="260px"
                  />
                </div>
              </div>
            </Link>

            <p className="text-xs text-neutral-400 leading-relaxed font-medium">
              Powering Business. Powering People. Powering Progress.
            </p>
          </div>

          {/* Col 2: Products (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Petrol Generators
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Diesel Generators
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-white transition-colors">
                  Inverter Generators
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#clients" className="hover:text-white transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="#applications" className="hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="#brands" className="hover:text-white transition-colors">
                  Brands
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Brochure
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Info (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 font-['Outfit']">
              Contact
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#ea1d24] shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#ea1d24] shrink-0" />
                <a href="mailto:info@spsgenerators.in" className="hover:text-white transition-colors">
                  info@spsgenerators.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#ea1d24] shrink-0" />
                <span>Madurai, Tamil Nadu</span>
              </li>
            </ul>

            {/* Social Icons SVG */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea1d24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea1d24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea1d24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0b0d11" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#ea1d24] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Subfooter Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2024 SPS Generators. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-500">|</span>
            <Link href="#" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
