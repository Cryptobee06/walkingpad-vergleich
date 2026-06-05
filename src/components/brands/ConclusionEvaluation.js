"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ConclusionEvaluation({ brand }) {
  const locale = useLocale();

  if (!brand?.conclusionEvaluation) return null;

  const data = brand.conclusionEvaluation[locale] || brand.conclusionEvaluation.en;

  if (!data) return null;

  return (
    <section className="bg-[#dceaff] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {data.title && (
          <h2 className="text-3xl font-extrabold text-[#2546af] mb-4">
            {data.title}
          </h2>
        )}

        {data.intro && (
          <p className="text-gray-900 text-sm md:text-base font-medium mb-2 max-w-3xl leading-relaxed whitespace-pre-wrap">
            {data.intro}
          </p>
        )}

        {data.cardsTitle && (
          <p className="text-gray-900 text-sm md:text-base font-medium mb-6 max-w-3xl leading-relaxed">
            {data.cardsTitle}
          </p>
        )}

        {data.cards && data.cards.length > 0 && (
           <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 w-full my-8">
            {data.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 md:p-8 rounded-xl flex-1 flex items-center justify-center text-center shadow-[0_15px_30px_rgba(255,255,255,0.8),_0_5px_15px_rgba(255,255,255,0.6)] hover:shadow-[0_20px_40px_rgba(255,255,255,1),_0_10px_20px_rgba(255,255,255,0.8)] hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-gray-900 font-bold text-base md:text-lg leading-snug">{card}</span>
              </div>
            ))}
          </div>
        )}

        {data.outro && (
          <p className="text-gray-900 text-sm md:text-base font-medium max-w-4xl leading-relaxed whitespace-pre-wrap">
            {data.outro}
          </p>
        )}
      </div>
    </section>
  );
}
