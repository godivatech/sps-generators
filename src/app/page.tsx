"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Products from "@/components/Products";
import CapacityBanner from "@/components/CapacityBanner";
import About from "@/components/About";
import Applications from "@/components/Applications";
import Clients from "@/components/Clients";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/QuoteModal";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-white flex flex-col">
      {/* Sticky Header */}
      <Header onOpenQuote={openQuoteModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenQuote={openQuoteModal} />
        <Brands />
        <Products onOpenQuote={openQuoteModal} />
        <CapacityBanner />
        <About />
        <Applications onOpenQuote={openQuoteModal} />
        <Clients />
        <LeadForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating UX */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <FloatingActions />
    </div>
  );
}
