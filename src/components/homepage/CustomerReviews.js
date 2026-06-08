'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import {
  ratingToGrade,
  getGradeLabel,
  getGradeHeading,
  getGradeBgClass,
  formatGradeValue,
} from '@/utils/grade';

const reviewsData = [
  {
    id: 1,
    name: 'Michael Chen',
    rating: 5,
    review:
      'Durch die detaillierten Testberichte habe ich das perfekte Laufband gefunden. Die Empfehlung des Sportstech sWalk Lite war ein Volltreffer!',
    avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus1.jpg',
  },
  {
    id: 2,
    name: ' Sarah Johnson',
    rating: 5,
    review:
      'Very thorough reviews with real performance data. I appreciate the detailed testing process and honest pros/cons for each model.',
      avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus2.webp',
  },
  {
    id: 3,
    name: 'Emma Williams',
    rating: 4.8,
    review:
      'Great resource for treadmill comparisons. The buying guide was especially helpful for understanding what features matter most.',
      avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus3.webp',
  },
  {
    id: 4,
    name: 'David',
    rating: 5,
    review:
      "Professional and unbiased reviews. The team clearly knows what they're talking about. Saved me from buying the wrong treadmill!",
      avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus4.webp',
  },
  {
    id: 5,
    name: 'Thompson',
    rating: 4.9,
    review:
      'Comprehensive testing and easy-to-understand explanations. The noise level tests were particularly useful for my apartment living situation.',
      avatar: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/customer/cus5.jpg',
  },
];

const GradeRating = ({ rating, locale }) => {
  const grade = ratingToGrade(rating);
  const heading = getGradeHeading(locale);
  const label = getGradeLabel(grade.key, locale);
  const pill = getGradeBgClass(grade.key);
  const gradeValue = formatGradeValue(grade.value, locale);

  return (
    <div className="flex items-center justify-center">
      <span
        className={`inline-flex items-center px-3 py-1 rounded-md border text-sm font-bold tabular-nums ${pill}`}
      >
        <span className="mr-1.5 text-xs font-semibold opacity-80 whitespace-nowrap">
          {heading}
        </span>
        <span className="text-base min-w-[3ch] text-center">{gradeValue}</span>
        <span className="ml-2 text-xs font-medium opacity-90 whitespace-nowrap">{label}</span>
      </span>
    </div>
  );
};

export default function CustomerReviews() {
  const t = useTranslations('homepage.customerReviews');
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
console.log(t('firstrev.description'),"4444444444444")
const translatedReviews = t('reviews', { returnObjects: true });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="w-full py-24 relative bg-gradient-to-r from-[#0a2540] via-[#121e30] to-[#1a1a2e] overflow-hidden text-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('title')}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-3xl shadow-2xl backdrop-blur-2xl bg-white/10 border border-white/20">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
             {reviewsData.map((review, index) => {
  const translatedReview = translatedReviews[index]?.description || review.review;

  return (
    <div
      key={review.id}
      className="w-full flex-shrink-0 px-6 py-12 text-center"
    >
      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden ring-4 ring-indigo-400 mb-6 shadow-lg">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-center mb-4">
        <GradeRating rating={review.rating} locale={locale} />
      </div>
      <blockquote className="relative italic text-xl text-gray-100 leading-relaxed mb-6 max-w-2xl mx-auto">
        <span className="text-3xl text-white mr-1">“</span>
        {translatedReview}
        <span className="text-3xl text-white ml-1">”</span>
      </blockquote>
      <p className="text-lg font-semibold text-white">{review.name}</p>
    </div>
  );
})}

            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => goToSlide(currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-indigo-500/70 hover:bg-indigo-600 text-white p-3 rounded-full shadow-md transition"
            aria-label="Previous"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide(currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-indigo-500/70 hover:bg-indigo-600 text-white p-3 rounded-full shadow-md transition"
            aria-label="Next"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {reviewsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-indigo-400 scale-110'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
