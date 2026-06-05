"use client";

import { useState } from "react";
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function ProductDetails({ brand }) {
  const images = brand.images;
  const features = brand.features;
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="bg-[#f9fafb] py-12 px-4 md:px-12">
      <div className="flex flex-col lg:flex-row gap-10 items-start justify-center max-w-7xl mx-auto">

        {/* Left: Thumbnails - Sticky on scroll */}
        <div className="flex lg:flex-col flex-row gap-4 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-120px)] lg:overflow-y-auto">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-16 h-16 p-1 border rounded-md bg-white shadow-sm hover:border-blue-500 transition flex-shrink-0 ${selectedImage === img ? "border-blue-600" : "border-gray-300"
                }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="object-cover w-full h-full rounded"
              />
            </button>
          ))}
        </div>

        {/* Center: Large Image - Scrolls naturally */}
        <div className="w-full lg:w-[480px] aspect-square bg-white rounded-xl shadow-md flex items-center justify-center p-4">
          <img
            src={selectedImage}
            alt="Selected"
            className="object-contain max-h-full max-w-full"
          />
        </div>

        {/* Right: Features - Sticky with scroll, height matches image section */}
        <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-blue-100 lg:sticky lg:top-24 lg:self-start lg:w-[480px] lg:h-[480px] flex flex-col overflow-hidden">
          <div className="p-6 overflow-y-auto flex-1">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Product Features</h2>
            <ul className="space-y-4">
              {brand.features[locale].map((feature, index) => {
                if (typeof feature === "string") {
                  return (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mt-1">✔</span>
                      <span className="text-gray-700 ml-4">{feature}</span>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="flex flex-col">
                      {feature.title && <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>}
                      {feature.description && <p className="text-gray-700 leading-relaxed text-sm md:text-base">{feature.description}</p>}
                      {feature.bullets && feature.bullets.length > 0 && (
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700 text-sm md:text-base">
                          {feature.bullets.map((bullet, bIdx) => (
                            <li key={bIdx}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                      {feature.footer && <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">{feature.footer}</p>}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}