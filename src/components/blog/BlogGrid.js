'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    slug: 'best-treadmill-workouts-2025',
    title: {
      en: '10 Best Treadmill Workouts for Weight Loss in 2025',
      de: '10 Beste Walkingpad-Workouts für Gewichtsverlust 2025'
    },
    excerpt: {
      en: 'Discover effective treadmill workouts that burn calories and boost metabolism. From HIIT to incline training, these proven routines deliver results.',
      de: 'Entdecken Sie effektive Walkingpad-Workouts, die Kalorien verbrennen und den Stoffwechsel ankurbeln. Von HIIT bis hin zu Steigungstraining - diese bewährten Routinen liefern Ergebnisse.'
    },
    publishDate: '2025-01-15',
    category: {
      en: 'Training',
      de: 'Training'
    },
    image: '/images/blog/treadmill-workouts.jpg'
  },
  {
    id: 2,
    slug: 'treadmill-maintenance-guide',
    title: {
      en: 'Complete Treadmill Maintenance Guide: Keep Your Machine Running Smoothly',
      de: 'Vollständiger Walkingpad-Wartungsratgeber: Halten Sie Ihr Gerät am Laufen'
    },
    excerpt: {
      en: 'Learn essential maintenance tips to extend your treadmill\'s lifespan. Regular care prevents costly repairs and ensures optimal performance.',
      de: 'Lernen Sie wichtige Wartungstipps, um die Lebensdauer Ihres Walkingpads zu verlängern. Regelmäßige Pflege verhindert kostspielige Reparaturen und gewährleistet optimale Leistung.'
    },
    publishDate: '2025-01-10',
    category: {
      en: 'Maintenance',
      de: 'Wartung'
    },
    image: '/images/blog/treadmill-maintenance.jpg'
  },
  {
    id: 3,
    slug: 'running-vs-walking-treadmill',
    title: {
      en: 'Running vs Walking on Treadmill: Which Burns More Calories?',
      de: 'Laufen vs. Gehen auf dem Walkingpad: Was verbrennt mehr Kalorien?'
    },
    excerpt: {
      en: 'Compare the benefits of running versus walking on treadmills. Understand calorie burn, joint impact, and which approach suits your fitness goals.',
      de: 'Vergleichen Sie die Vorteile des Laufens gegenüber dem Gehen auf Laufbändern. Verstehen Sie Kalorienverbrennung, Gelenkbelastung und welcher Ansatz zu Ihren Fitnesszielen passt.'
    },
    publishDate: '2025-01-05',
    category: {
      en: 'Fitness',
      de: 'Fitness'
    },
    image: '/images/blog/running-vs-walking.jpg'
  },
  {
    id: 4,
    slug: 'home-gym-treadmill-setup',
    title: {
      en: 'Setting Up Your Home Gym: Treadmill Placement and Safety Tips',
      de: 'Heimstudio einrichten: Walkingpad-Platzierung und Sicherheitstipps'
    },
    excerpt: {
      en: 'Expert advice on positioning your treadmill for optimal use and safety. Learn about space requirements, ventilation, and creating the perfect workout environment.',
      de: 'Expertenberatung zur optimalen Positionierung Ihres Walkingpads für Nutzung und Sicherheit. Erfahren Sie mehr über Platzanforderungen, Belüftung und die Schaffung der perfekten Trainingsumgebung.'
    },
    publishDate: '2024-12-28',
    category: {
      en: 'Home Gym',
      de: 'Heimstudio'
    },
    image: '/images/blog/home-gym-setup.jpg'
  },
  {
    id: 5,
    slug: 'treadmill-technology-2025',
    title: {
      en: 'Latest Treadmill Technology Trends in 2025: What\'s New?',
      de: 'Neueste Walkingpad-Technologie-Trends 2025: Was ist neu?'
    },
    excerpt: {
      en: 'Explore cutting-edge treadmill features including AI coaching, virtual reality integration, and smart connectivity. The future of home fitness is here.',
      de: 'Entdecken Sie modernste Walkingpad-Features einschließlich KI-Coaching, Virtual-Reality-Integration und intelligenter Konnektivität. Die Zukunft des Heimfitness ist da.'
    },
    publishDate: '2024-12-20',
    category: {
      en: 'Technology',
      de: 'Technologie'
    },
    image: '/images/blog/treadmill-technology.jpg'
  },
  {
    id: 6,
    slug: 'beginner-treadmill-mistakes',
    title: {
      en: '7 Common Beginner Treadmill Mistakes and How to Avoid Them',
      de: '7 Häufige Anfänger-Walkingpad-Fehler und wie man sie vermeidet'
    },
    excerpt: {
      en: 'Avoid these common treadmill mistakes that can lead to injury or poor results. Learn proper form, speed progression, and safety protocols for beginners.',
      de: 'Vermeiden Sie diese häufigen Walkingpad-Fehler, die zu Verletzungen oder schlechten Ergebnissen führen können. Lernen Sie richtige Form, Geschwindigkeitssteigerung und Sicherheitsprotokolle für Anfänger.'
    },
    publishDate: '2024-12-15',
    category: {
      en: 'Beginner Tips',
      de: 'Anfänger-Tipps'
    },
    image: '/images/blog/beginner-mistakes.jpg'
  }
];

const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export default function BlogGrid() {
  const t = useTranslations('blog');
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📋</div>
                  <p className="text-primary-700 font-semibold text-sm">
                    Blog Image
                  </p>
                </div>
              </div>
              
              <div className="p-6">
                {/* Category */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {post.category[locale]}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title[locale]}
                </h2>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt[locale]}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">
                    {formatDate(post.publishDate, locale)}
                  </span>
                  
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors"
                  >
                    {t('readMore')}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            {locale === 'en' ? 'Load More Articles' : 'Weitere Artikel laden'}
          </button>
        </div>
      </div>
    </section>
  );
}