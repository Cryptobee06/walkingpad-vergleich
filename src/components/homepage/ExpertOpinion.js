

'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import Image from 'next/image';
import { Quote, BadgeCheck } from 'lucide-react';

export default function ExpertOpinion() {
  const t = useTranslations('homepage.expertOpinion');

  return (
    <section
      className="relative w-full py-28 md:py-36 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a2540]/90 backdrop-blur-sm" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        <div className="rounded-3xl shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md overflow-hidden transition-all duration-300 hover:shadow-blue-500/40">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Image Left */}
            <div className="relative h-72 lg:h-full">
              <Image
                src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                alt="Trainer"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540] via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Right */}
            <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
              <div className="text-blue-300 mb-5">
                <Quote className="w-10 h-10 drop-shadow" />
              </div>

              <blockquote className="text-lg md:text-xl italic text-white leading-relaxed mb-8">
                {t('testimonial')}
              </blockquote>

              <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {t('trainerName')}
                  </h4>
                  <p className="text-blue-200 text-sm md:text-base font-medium">
                    {t('trainerTitle')}
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-blue-100/10 text-blue-100 border border-blue-300/50 shadow-sm">
                  <BadgeCheck className="w-4 h-4" />
                  {t('testedCount')}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

