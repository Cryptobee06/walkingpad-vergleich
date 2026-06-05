'use client';
import { useState } from 'react';
import { useTranslations } from '@/contexts/LanguageContext';
import {
  Gauge,
  Mountain,
  Wrench,
  Volume2,
  Sparkles,
} from 'lucide-react';

const testData = [
  {
    id: 'speedTest',
    icon: Gauge,
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/testing/speed.jpg',
  },
  {
    id: 'durabilityTest',
    icon: Wrench,
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/testing/durability-test.jpeg',
  },
  {
    id: 'inclineTest',
    icon: Mountain,
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/testing/incline.webp',
  },
  {
    id: 'noiseTest',
    icon: Volume2,
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/testing/noise-test.jpg',
  },
  {
    id: 'comfortTest',
    icon: Sparkles,
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/testing/comforthome.jpg',
  },
];

export default function TestingProcess() {
  const t = useTranslations('homepage.testingProcess');
  const [activeTest, setActiveTest] = useState(0);

  const getTestKey = (id) => id || 'speedTest';

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
          {t('title')}
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: Test Cards */}
          <div className="space-y-6">
            {testData.map((test, index) => {
              const Icon = test.icon;
              const key = getTestKey(test.id);
              const isActive = index === activeTest;

              return (
                <button
                  key={test.id}
                  onClick={() => setActiveTest(index)}
                  className={`w-full text-left transition duration-300 ease-in-out p-5 rounded-2xl border group hover:shadow-md ${isActive
                      ? 'bg-blue-50 border-blue-500 shadow-lg scale-[1.02]'
                      : 'bg-white border-gray-200 hover:border-blue-400'
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      className={`w-6 h-6 mt-1 transition ${isActive ? 'text-blue-600' : 'text-blue-400 group-hover:text-blue-500'
                        }`}
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {t(`${key}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(`${key}.description`)}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Image & Details */}
          <div className="sticky top-28">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              {/* Responsive Image */}
              <div className="w-full h-78 sm:h-74 md:h-80 lg:h-[500px] overflow-hidden">
                <img
                  src={testData[activeTest].image}
                  alt={t(`${getTestKey(testData[activeTest].id)}.title`)}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  {(() => {
                    const ActiveIcon = testData[activeTest].icon;
                    return <ActiveIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />;
                  })()}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                    {t(`${getTestKey(testData[activeTest].id)}.title`)}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                  {t(`${getTestKey(testData[activeTest].id)}.description`)}
                </p>

                <div className="inline-flex items-center px-2 sm:px-3 py-1 
                    bg-green-100 text-green-800 text-xs sm:text-sm 
                    font-medium rounded-full">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {t('passed')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-10">
          {testData.map((test) => {
            const Icon = test.icon;
            const key = getTestKey(test.id);
            return (
              <div
                key={test.id}
                className="rounded-2xl border border-gray-200 shadow-md overflow-hidden bg-white"
              >
                <img
                  src={test.image}
                  alt={t(`${key}.title`)}
                  className="w-full h-78 sm:h-74 md:h-100 lg:h-[500px] object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t(`${key}.title`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {t(`${key}.description`)}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {t('passed')}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
