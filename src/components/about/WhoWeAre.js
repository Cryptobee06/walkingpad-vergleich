'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function WhoWeAre() {
  const t = useTranslations('about.whoWeAre');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {t('title')}
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}