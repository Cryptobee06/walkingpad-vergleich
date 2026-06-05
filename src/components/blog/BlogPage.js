'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

// Unified blog posts data - exactly 3 posts for both languages
const blogPosts = [
  {
    id: 1,
    slug: 'best-treadmill-workouts-2025',
    title: {
      en: '10 Best Walkingpad Workouts for Weight Loss',
      de: '10 Beste Walkingpad-Workouts für Gewichtsverlust'
    },
    excerpt: {
      en: 'Discover effective Walkingpad workout routines that maximize calorie burn and accelerate weight loss.',
      de: 'Entdecken Sie effektive Walkingpad-Workouts, die die Kalorienverbrennung maximieren und den Gewichtsverlust beschleunigen.'
    },
    date: {
      en: 'Jan 15, 2025',
      de: '15. Jan 2025'
    },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/blog/blog1.webp'
  },
  {
    id: 2,
    slug: 'treadmill-maintenance-guide',
    title: {
      en: 'Walkingpad Maintenance Tips for Longevity',
      de: 'Walkingpad-Wartungstipps für Langlebigkeit'
    },
    excerpt: {
      en: 'Learn essential maintenance practices to keep your Walkingpad running smoothly for years.',
      de: 'Lernen Sie wichtige Wartungspraktiken, um Ihr Walkingpad jahrelang reibungslos laufen zu lassen.'
    },
    date: {
      en: 'Jan 10, 2025',
      de: '10. Jan 2025'
    },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/blog/blog2.webp'
  },
  {
    id: 3,
    slug: 'treadmill-motor-guide',
    title: {
      en: 'Understanding Walkingpad Motor Power',
      de: 'Walkingpad-Motorleistung verstehen'
    },
    excerpt: {
      en: 'A comprehensive guide to treadmill motor specifications and what they mean for performance.',
      de: 'Ein umfassender Leitfaden zu Walkingpad-Motorspezifikationen und was sie für die Leistung bedeuten.'
    },
    date: {
      en: 'Jan 5, 2025',
      de: '5. Jan 2025'
    },
    image: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/images/blog/blog3.jpg'
  }
];

export default function BlogPage() {
  const locale = useLocale();
  
  // Get base path for links
  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  const pageTitle = {
    en: 'Fitness & Walkingpad Blog',
    de: 'Fitness & Walkingpad Blog'
  };

  const pageSubtitle = {
    en: 'Expert insights, training tips, and the latest news in fitness technology and Walkingpad innovation.',
    de: 'Experten-Einblicke, Trainingstipps und die neuesten Nachrichten in Fitness-Technologie und Walkingpad-Innovation.'
  };

  const readMore = {
    en: 'Read More →',
    de: 'Weiterlesen →'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8 text-center">
        {pageTitle[locale]}
      </h1>
  
      {/* Subtitle */}
      <p className="text-base sm:text-lg lg:text-xl text-gray-600 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
        {pageSubtitle[locale]}
      </p>
  
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image with aspect ratio */}
            <Link
              href={`${getBasePath()}/blog/${post.slug}`}
              className="block overflow-hidden"
            >
              <div className="aspect-[8/9]">
                <img
                  src={post.image}
                  alt={post.title[locale]}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
            </Link>
  
            {/* Content */}
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
                {post.title[locale]}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                {post.excerpt[locale]}
              </p>
  
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500">
                  {post.date[locale]}
                </span>
                <Link
                  href={`${getBasePath()}/blog/${post.slug}`}
                  className="text-primary-600 font-semibold text-xs sm:text-sm hover:text-primary-700"
                >
                  {readMore[locale]}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  
  );
}
