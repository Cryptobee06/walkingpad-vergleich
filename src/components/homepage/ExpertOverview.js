'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import { BadgeCheck } from 'lucide-react';

export default function ExpertOverview() {
  const t = useTranslations('homepage.expertOverview');

  return (
    <section
      className="relative w-full py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl shadow-2xl px-8 py-16 md:px-14 md:py-20 text-center">
          <div className="mx-auto -mt-24 mb-10 w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
            <BadgeCheck className="w-10 h-10" />
          </div>

          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            {t('title')}
          </h2>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t('content')}
          </p>

          <div className="mt-10 text-sm text-gray-500 border-t pt-6 border-gray-200 max-w-sm mx-auto">
            — Certified Fitness & Equipment Expert
          </div>
        </div>
      </div>
    </section>
  );
}
