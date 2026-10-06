"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/919876543210?text=Hello%20SPS%20Generators,%20I%20would%20like%20to%20inquire%20about%20a%20generator."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/40 transition-all hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent" />
      </a>

      {/* Back to top button */}
      {showBackTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-10 h-10 rounded-full bg-[#181b21] hover:bg-[#ea1d24] text-neutral-300 hover:text-white border border-white/10 flex items-center justify-center shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
