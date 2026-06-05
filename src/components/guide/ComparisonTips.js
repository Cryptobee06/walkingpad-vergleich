'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function ComparisonTips() {
  const t = useTranslations('guide.comparisonTips');

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
            {t('title')}
          </h2>

          <div className="relative bg-white rounded-3xl border border-blue-100 shadow-lg px-8 py-12 md:px-12 md:py-16">
            {/* Icon badge */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 bg-blue-600 shadow-lg rounded-full flex items-center justify-center ring-4 ring-blue-200">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-10">
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
