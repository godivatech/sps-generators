"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ["home", "about", "products", "brands", "applications", "clients", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Products", href: "#products", id: "products" },
    { name: "Brands", href: "#brands", id: "brands" },
    { name: "Applications", href: "#applications", id: "applications" },
    { name: "Clients", href: "#clients", id: "clients" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090c]/95 backdrop-blur-md shadow-2xl py-3 border-b border-white/5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* OM GEN POWER Brand Logo */}
          <Link href="#home" className="flex items-center group select-none py-1">
            <div className="bg-white/95 hover:bg-white rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-300 shadow-md group-hover:shadow-lg flex items-center border border-white/20">
              <div className="relative w-[180px] h-[48px] sm:w-[220px] sm:h-[58px] md:w-[250px] md:h-[64px]">
                <Image
                  src="/images/Logo.png"
                  alt="OM GEN POWER - Origin Grand Power"
                  fill
                  className="object-contain object-left"
                  priority
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 220px, 250px"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden xl:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`text-[15px] font-semibold transition-all relative py-1.5 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-7 h-[3px] bg-[#ea1d24] rounded-full shadow-[0_0_8px_#ea1d24]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Items (Right) */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2.5 text-sm font-bold text-white hover:text-[#ea1d24] transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-black/40 border border-white/30 flex items-center justify-center text-white group-hover:border-[#ea1d24] group-hover:text-[#ea1d24] transition-colors shadow-sm">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="tracking-wide font-bold">+91 98765 43210</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#ea1d24] hover:bg-[#d0151c] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-xl shadow-[#ea1d24]/40 active:scale-95 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#08090c]/98 border-b border-white/10 px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? "bg-[#ea1d24]/15 text-[#ea1d24] font-bold"
                    : "text-neutral-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2.5 px-3 py-2 text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-[#ea1d24]" />
              <span>+91 98765 43210</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#ea1d24] text-white font-bold py-3 rounded-full shadow-lg text-sm cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
