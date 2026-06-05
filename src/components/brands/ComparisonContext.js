"use client";

import { useLocale } from "@/contexts/LanguageContext";

export default function ComparisonContext({ brand }) {
  const locale = useLocale();

  if (!brand?.comparisonContext) return null;

  const data = brand.comparisonContext[locale] || brand.comparisonContext.en;

  if (!data) return null;

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {data.title && (
          <h2 className="text-3xl font-extrabold text-[#2563eb] mb-6 text-center">
            {data.title}
          </h2>
        )}

        {data.intro && (
          <p className="text-gray-800 text-sm md:text-base font-medium mb-10 text-center max-w-3xl leading-relaxed">
            {data.intro}
          </p>
        )}

        {/* Box 1 */}
        {data.box1 && (
          <div className="w-full bg-[#16173b] rounded-xl p-8 shadow-[0px_20px_40px_rgba(22,23,59,0.30),_0px_10px_20px_rgba(22,23,59,0.20)] hover:shadow-[0px_20px_40px_rgba(22,23,59,0.30),_0px_10px_20px_rgba(22,23,59,0.20)] hover:-translate-y-1 transition-all duration-300 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              {data.box1.heading}
            </h3>
            <ul className="space-y-4">
              {data.box1.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#e0e1eb] text-sm md:text-base leading-relaxed">
                  <svg className="w-5 h-5 text-[#00c49f] mr-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Middle Text */}
        {data.middleText && (
          <p className="text-gray-800 text-sm md:text-base font-medium mb-8 text-center max-w-3xl leading-relaxed">
            {data.middleText}
          </p>
        )}

        {/* Box 2 */}
        {data.box2 && (
          <div className="w-full bg-[#16173b] rounded-xl p-8 shadow-[0px_20px_40px_rgba(22,23,59,0.30),_0px_10px_20px_rgba(22,23,59,0.20)] hover:shadow-[0px_20px_40px_rgba(22,23,59,0.30),_0px_10px_20px_rgba(22,23,59,0.20)] hover:-translate-y-1 transition-all duration-300 mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
              {data.box2.heading}
            </h3>
            <ul className="space-y-4">
              {data.box2.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-[#e0e1eb] text-sm md:text-base leading-relaxed">
                  <svg className="w-5 h-5 text-[#00c49f] mr-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Outro Text */}
        {data.outro && (
          <p className="text-gray-800 text-sm md:text-base font-medium text-center max-w-3xl leading-relaxed">
            {data.outro}
          </p>
        )}
      </div>
    </section>
  );
}
