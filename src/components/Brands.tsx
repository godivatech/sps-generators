import React from "react";

export default function Brands() {
  const brands = [
    {
      id: "honda",
      name: "HONDA",
      sub: "GENERATORS",
      colorClass: "text-[#d52b1e]",
      subColor: "text-neutral-800",
    },
    {
      id: "alpha",
      name: "ALPHA",
      sub: "",
      colorClass: "text-[#107c41]",
      subColor: "",
    },
    {
      id: "xnt",
      name: "X-NT",
      sub: "POWER SPECIAL",
      colorClass: "text-[#0284c7]",
      subColor: "text-[#f59e0b]",
    },
    {
      id: "hawk",
      name: "HAWK",
      sub: "POWER PRODUCTS",
      colorClass: "text-[#dc2626]",
      subColor: "text-neutral-700",
    },
    {
      id: "king",
      name: "PREMIUM KING",
      sub: "",
      colorClass: "text-[#b91c1c]",
      subColor: "",
    },
    {
      id: "tmtl",
      name: "TMTL",
      sub: "ENGINES",
      colorClass: "text-[#c2410c]",
      subColor: "text-neutral-600",
      hasBadge: true,
    },
    {
      id: "powerol",
      name: "powerol",
      sub: "by mahindra",
      colorClass: "text-[#0284c7]",
      subColor: "text-[#dc2626]",
    },
    {
      id: "kirloskar",
      name: "kirloskar",
      sub: "GREEN",
      colorClass: "text-[#059669]",
      subColor: "text-[#059669]",
    },
  ];

  return (
    <section id="brands" className="bg-white py-14 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Section Header (Left) */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight font-['Outfit'] uppercase leading-none mb-2">
              BRANDS<br />
              <span className="text-neutral-900">WE OFFER</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium">
              Top quality generators from leading global brands.
            </p>
          </div>

          {/* Brands Grid (Right) */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-neutral-50/80 hover:bg-white border border-neutral-200/80 hover:border-neutral-300 rounded-xl p-4 flex flex-col items-center justify-center min-h-[90px] shadow-sm hover:shadow-md transition-all duration-200 group cursor-default"
              >
                {brand.hasBadge ? (
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full border-2 border-red-600 text-red-600 font-black text-xs flex items-center justify-center">
                      E
                    </span>
                    <span className="font-black text-lg text-red-600 tracking-wider">
                      {brand.name}
                    </span>
                  </div>
                ) : (
                  <div className="text-center">
                    <span
                      className={`block font-black text-lg sm:text-xl tracking-tight transition-transform duration-200 group-hover:scale-105 ${brand.colorClass}`}
                    >
                      {brand.name}
                    </span>
                    {brand.sub && (
                      <span
                        className={`block text-[9px] font-extrabold tracking-widest uppercase mt-0.5 ${brand.subColor}`}
                      >
                        {brand.sub}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
