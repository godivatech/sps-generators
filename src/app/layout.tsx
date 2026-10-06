import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spsgenerators.in"),
  title: "SPS Generators | Power That Never Stops | 1 kVA to 1500 kVA Generators",
  description: "SPS Generators provides dependable, high-performance power backup solutions for residential, commercial and industrial applications. Offering Honda, Alpha, Powerol, Kirloskar, and TMTL generators in Madurai and South India.",
  keywords: [
    "SPS Generators",
    "Honda generators Madurai",
    "diesel generators 1500 kVA",
    "petrol generators",
    "silent inverter generators",
    "industrial generator suppliers",
    "power backup solutions Tamil Nadu",
    "generator sales and service"
  ],
  authors: [{ name: "SPS Generators" }],
  creator: "SPS Generators",
  publisher: "SPS Generators",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://spsgenerators.in",
    siteName: "SPS Generators",
    title: "SPS Generators | Power That Never Stops",
    description: "From portable power to industrial-grade backup. SPS Generators keeps your world running with 1 kVA to 1500 kVA solutions.",
    images: [
      {
        url: "/images/hero-generator.jpg",
        width: 1200,
        height: 630,
        alt: "SPS Generators Industrial and Portable Power Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPS Generators | Power That Never Stops",
    description: "Trusted power backup solutions for homes, businesses, and heavy industries.",
    images: ["/images/hero-generator.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://spsgenerators.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data for LocalBusiness & Product Catalog
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://spsgenerators.in/#organization",
        "name": "SPS Generators",
        "url": "https://spsgenerators.in",
        "logo": "https://spsgenerators.in/images/hero-generator.jpg",
        "image": "https://spsgenerators.in/images/hero-generator.jpg",
        "description": "Leading supplier and service provider for industrial diesel, petrol, and silent inverter generators ranging from 1 kVA to 1500 kVA.",
        "telephone": "+91-98765-43210",
        "email": "info@spsgenerators.in",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Madurai Main Road",
          "addressLocality": "Madurai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "IN"
        },
        "founder": {
          "@type": "Person",
          "name": "R. Nikil Kumar",
          "jobTitle": "Managing Director"
        },
        "sameAs": [
          "https://facebook.com/spsgenerators",
          "https://instagram.com/spsgenerators",
          "https://linkedin.com/company/spsgenerators"
        ]
      },
      {
        "@type": "ItemList",
        "name": "SPS Generator Categories",
        "itemListElement": [
          {
            "@type": "Product",
            "position": 1,
            "name": "Petrol Generators (1 kVA - 13 kVA)",
            "description": "Compact, portable, heavy-duty petrol generators for residential, small businesses, and mobile operations."
          },
          {
            "@type": "Product",
            "position": 2,
            "name": "Diesel Generators (5 kVA - 1500 kVA)",
            "description": "Acoustic canopy soundproof diesel generators engineered for factories, hospitals, infrastructure, and heavy industries."
          },
          {
            "@type": "Product",
            "position": 3,
            "name": "Inverter Generators",
            "description": "Ultra-quiet, fuel-efficient portable silent inverter generators for sensitive electronics and temporary events."
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${outfit.variable} ${plusJakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0c0e12] text-[#e2e8f0] font-sans antialiased selection:bg-[#ea1d24] selection:text-white">
        {children}
      </body>
    </html>
  );
}
