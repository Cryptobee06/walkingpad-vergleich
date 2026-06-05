"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function TargetAudience({ brand }) {
  const locale = useLocale();

  if (!brand?.targetAudience) return null;

  const data = brand.targetAudience[locale] || brand.targetAudience.en;

  if (!data) return null;

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {data.title && (
          <h2 className="text-3xl font-extrabold text-[#2563eb] mb-6">
            {data.title}
          </h2>
        )}

        {data.intro && (
          <p className="text-gray-800 text-sm md:text-base font-medium mb-10 max-w-3xl leading-relaxed">
            {data.intro}
          </p>
        )}

        {/* Suitable For Section */}
        {data.suitableForLabel && (
          <p className="text-gray-800 text-sm md:text-base mb-6 font-medium">
            {data.suitableForLabel}
          </p>
        )}
        
        {data.suitableFor && data.suitableFor.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 mb-12 w-full max-w-3xl">
            {data.suitableFor.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white px-6 py-4 rounded-lg shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:-translate-y-1 border border-blue-50 text-gray-700 text-sm md:text-base flex-grow text-center transition-all duration-300 hover:border-blue-400 hover:text-blue-600 ${
                  data.suitableFor.length % 2 !== 0 && idx === data.suitableFor.length - 1 ? 'w-full' : 'w-full sm:w-[calc(50%-0.5rem)]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Not Suitable For Section */}
        {data.notSuitableForLabel && (
          <p className="text-gray-800 text-sm md:text-base mb-6 font-medium">
            {data.notSuitableForLabel}
          </p>
        )}

        {data.notSuitableFor && data.notSuitableFor.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
            {data.notSuitableFor.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white px-6 py-4 rounded-lg shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:shadow-[0px_20px_40px_rgba(37,99,235,0.22),_0px_10px_20px_rgba(37,99,235,0.12)] hover:-translate-y-1 border border-blue-50 text-gray-700 text-sm md:text-base flex-grow text-center transition-all duration-300 hover:border-blue-400 hover:text-blue-600 ${
                  data.notSuitableFor.length % 2 !== 0 && idx === data.notSuitableFor.length - 1 ? 'w-full' : 'w-full sm:w-[calc(50%-0.5rem)]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
