'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import {
  ratingToGrade,
  getGradeLabel,
  getGradeHeading,
  getGradeBgClass,
  formatGradeValue,
} from '@/utils/grade';

const GradeRating = ({ rating, locale }) => {
  const grade = ratingToGrade(rating);
  const heading = getGradeHeading(locale);
  const label = getGradeLabel(grade.key, locale);
  const pill = getGradeBgClass(grade.key);
  const gradeValue = formatGradeValue(grade.value, locale);

  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-2 text-center">
      <span
        className={`inline-flex items-center px-4 py-2 rounded-lg border-2 font-bold tabular-nums ${pill}`}
      >
        <span className="mr-2 text-sm font-semibold opacity-80 uppercase tracking-wide whitespace-nowrap">
          {heading}
        </span>
        <span className="text-2xl min-w-[3ch] text-center">{gradeValue}</span>
      </span>
      <span className="text-lg font-semibold text-gray-700 whitespace-nowrap">{label}</span>
    </div>
  );
};

export default function FinalVerdict({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('finalVerdict')}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {brand.name} {brand.model}
              </h3>
              
              <div className="flex justify-center mb-6">
                <GradeRating rating={brand.rating} locale={locale} />
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
              {brand.verdict[locale]}
            </p>
            
            <div className="text-center">
              <a
                href={brand.buyLink}
                target={brand.buyLink !== '#' ? '_blank' : '_self'}
                rel={brand.buyLink !== '#' ? 'noopener noreferrer' : ''}
                className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m4.5-6v6m4-6v6m4-6v6" />
                </svg>
                {t('buyNow')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}