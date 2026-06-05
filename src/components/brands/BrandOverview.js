'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';

export default function BrandOverview({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();

  const displayName = brand.name?.toLowerCase().startsWith('sportstech')
    ? 'Sportstech'
    : brand.name;

  return (
    <section>
      <div
        className="relative min-h-[20rem] sm:min-h-[30rem] md:min-h-[40rem] lg:min-h-[43rem] 
             bg-bottom bg-cover bg-no-repeat flex items-center justify-center 
             px-4 sm:px-6 text-white"
        style={{
          backgroundImage: `url('${brand.bannerImage}')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl text-center ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                   font-extrabold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
                   {displayName}
          
            <span className="text-blue-200 ml-2">{brand.model}</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl 
                  font-medium leading-relaxed tracking-wide drop-shadow-md">
            {brand.description[locale]}
          </p>
        </div>
      </div>
    </section>
  );
}