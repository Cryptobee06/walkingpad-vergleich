"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ProductDescription({ brand }) {
  const locale = useLocale();

  if (!brand?.productDescription) return null;

  const desc = brand.productDescription[locale] || brand.productDescription.en;

  if (!desc) return null;

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:-translate-y-1 border border-blue-50 flex flex-col items-center text-center transition-all duration-300">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2563eb] mb-6">
            Product Description
          </h2>
          
          {desc.intro && (
            <p className="text-gray-800 text-base md:text-lg font-medium leading-relaxed max-w-3xl">
              {desc.intro}
            </p>
          )}

          {desc.cards && desc.cards.length > 0 && (
            <div className="mt-6 space-y-4 text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl">
              {desc.cards.map((card, idx) => (
                <p key={idx}>{card}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
