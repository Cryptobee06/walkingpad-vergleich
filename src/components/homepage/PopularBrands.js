'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import Image from 'next/image';

const brands = [
  { name: 'Sportstech', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/products/sportstech.png' },
  { name: 'NordicTrack', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/citysports.png' },
  { name: 'ProForm', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/superun.png' },
  { name: 'Horizon Fitness', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/urevo.webp' },
  { name: 'Life Fitness', logo: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/kiddoza.jpg' },
  { name: 'Merach', logo: '/Assets/Merach-Logo.webp' },
  { name: 'cursor', logo: '/Assets/cursorlogo.png' },
  { name: 'cazvian', logo: '/Assets/CAZVIAN.png' },
];

export default function PopularBrands() {
  const t = useTranslations('homepage.popularBrands');

  return (
    <section className="relative bg-[#f4f8fc] py-24">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M1200 0L0 0 0 0C150 100 1050 100 1200 0z"
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          {t('title')}
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-12">
          {t('Subtitle')}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              aria-label={brand.name}
              className="group w-36 sm:w-40 h-16 relative grayscale-0 hover:grayscale-0 transition-all duration-300 ease-in-out hover:drop-shadow-lg"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            
            </div>
          ))}
          <h1 className='text-black text-3xl font-serif  ease-in-out group-hover:scale-105 cursor-pointer'>Copant</h1>
        </div>
      </div>
    </section>
  );
}
