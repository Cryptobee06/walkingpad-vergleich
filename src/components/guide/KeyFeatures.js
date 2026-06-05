'use client';
import { useTranslations } from '@/contexts/LanguageContext';
import {
  Zap,
  TrendingUp,
  Ruler,
  Weight,
  MonitorSmartphone,
  Box
} from 'lucide-react';


const features = [
  {
    id: 'motorPower',
    icon: <Zap size={28} />,
    color: 'bg-yellow-100 text-yellow-700'
  },
  {
    id: 'inclineSettings',
    icon: <TrendingUp size={28} />,
    color: 'bg-green-100 text-green-700'
  },
  {
    id: 'beltSize',
    icon: <Ruler size={28} />,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    id: 'weightCapacity',
    icon: <Weight size={28} />,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    id: 'display',
    icon: <MonitorSmartphone size={28} />,
    color: 'bg-red-100 text-red-700'
  },
  {
    id: 'foldability',
    icon: <Box size={28} />,
    color: 'bg-orange-100 text-orange-700'
  }
];

export default function KeyFeatures() {
  const t = useTranslations('guide.keyFeatures');

  return (
  

     <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl shadow-md border border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
            >
              <div className="p-8 flex flex-col h-full">
                <div
                  className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6 text-3xl shadow-sm`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {t(`${feature.id}.title`)}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed flex-grow">
                  {t(`${feature.id}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}