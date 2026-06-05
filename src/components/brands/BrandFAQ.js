"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "@/contexts/LanguageContext";

export default function BrandFAQ({ brand }) {
  const t = useTranslations("guide.faq");
  const locale = useLocale();
  const [openItems, setOpenItems] = useState(new Set());
  const faqData = brand?.faq || [];

  if (!faqData || faqData.length === 0) {
    return null;
  }

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">
          {t("title")}
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const itemId = item.id || index;
            const isOpen = openItems.has(itemId);
            return (
              <div
                key={itemId}
                className={`bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md border ${
                  isOpen ? "border-blue-500" : "border-blue-300"
                }`}
              >
                <button
                  onClick={() => toggleItem(itemId)}
                  className={`w-full flex items-center justify-between px-6 py-5 text-left rounded-lg transition-colors duration-300 focus:outline-none`}
                >
                  <span className="text-lg font-medium text-gray-900">
                    {item.question[locale]}
                  </span>

                  {/* + / - icon always blue */}
                  <span className="ml-4">
                    {isOpen ? (
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "max-h-[500px] opacity-100 py-4 px-6"
                      : "max-h-0 opacity-0 px-6 py-0"
                  }`}
                >
                  <div className="text-gray-600 leading-relaxed text-base">
                    {Array.isArray(item.answer[locale]) ? (
                      item.answer[locale].map((line, i) => (
                        <p key={i} className={line.trim().startsWith('-') || line.trim().startsWith('•') ? "ml-6 mt-1" : "mt-2"}>
                          {line}
                        </p>
                      ))
                    ) : (
                      <p>{item.answer[locale]}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
