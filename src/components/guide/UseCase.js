'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import {
  Sprout,
  Activity,
  Users,
  Home,
} from 'lucide-react';

const useCases = [
  {
    id: 'beginners',
    icon: <Sprout size={24} />,
    color: 'bg-green-500'
  },
  {
    id: 'runners',
    icon: <Activity size={24} />,
    color: 'bg-blue-500'
  },
  {
    id: 'seniors',
    icon: <Users size={24} />,
    color: 'bg-purple-500'
  },
  {
    id: 'homeGym',
    icon: <Home size={24} />,
    color: 'bg-orange-500'
  }
];

export default function UseCase() {
  const t = useTranslations('guide.useCase');

  return (
  

      <section className="py-20 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-14 h-14 ${useCase.color} rounded-full flex items-center justify-center text-white text-2xl shadow`}
                  >
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t(`${useCase.id}.title`)}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed text-base">
                  {t(`${useCase.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}