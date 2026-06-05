'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function AboutHero() {
  const t = useTranslations('about.abouthero');

  return (
    // <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
        <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
          <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto leading-relaxed">
          {t('description')}
        </p>
      </div>
    </section>
  );
}
