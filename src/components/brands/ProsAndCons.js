'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function ProsAndCons({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('prosAndCons')}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* What We Like */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-green-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {t('whatWeLike')}
              </h3>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {brand.pros[locale].map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {typeof pro === 'string' ? (
                      <span className="text-gray-700">{pro}</span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-bold mb-1">{pro.title}</span>
                        <span className="text-gray-700 leading-relaxed text-sm md:text-base">{pro.description}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* What We Don't Like */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {t('whatWeDontLike')}
              </h3>
            </div>
            
            <div className="p-6">
              <ul className="space-y-4">
                {brand.cons[locale].map((con, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    {typeof con === 'string' ? (
                      <span className="text-gray-700">{con}</span>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-gray-900 font-bold mb-1">{con.title}</span>
                        <span className="text-gray-700 leading-relaxed text-sm md:text-base">{con.description}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}