'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function BlogHero() {
  const t = useTranslations('blog');

  return (
    <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {t('introduction')}
          </p>
        </div>
      </div>
    </section>
  );
}