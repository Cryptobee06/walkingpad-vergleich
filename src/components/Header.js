'use client';
import { useState, useEffect } from 'react';
import { useTranslations, useLocale, useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const brandCategories = [
  {
    name: 'Amateur Walking Pads',
    nameDE: 'Amateur-Walking Pads',
    slug: 'amateur',
    brands: [
      { name: 'WalkMate', slug: 'Sportstechwalkmate' },
      { name: 'Copant', slug: 'Copant' },
      { name: 'Merach', slug: 'Merach' },
      { name: 'Cursor', slug: 'Cursor' },
      { name: 'Cazvian', slug: 'Cazvian' },
    ]
  },
  {
    name: 'Advanced Walking Pads',
    nameDE: 'Advanced Walking Pads',
    slug: 'advanced',
    brands: [
      { name: 'sWalk Lite', slug: 'Sportstechswalklite' },
      { name: 'Citysports', slug: 'Citysports' },
      { name: 'kiddoza', slug: 'kiddoza' },
      { name: 'Superun', slug: 'Superun' },
      { name: 'Urevo', slug: 'Urevo' },
    ]
  }
];

// Review categories for the Reviews dropdown
const reviewCategories = [
  {
    name: 'Amateur Walking Pads',
    nameDE: 'Amateur-Walking Pads',
    slug: 'amateur',
  },
  {
    name: 'Advanced Walking Pads',
    nameDE: 'Advanced Walking Pads',
    slug: 'advanced',
  }
];

export default function Header() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const { switchLanguage, isLoaded } = useLanguage();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState(null);
  const [mobileExpandedReviews, setMobileExpandedReviews] = useState(false);

  // --- Default to German if no locale is set ---
  useEffect(() => {
    if (locale === 'en') return;
    if (!locale || locale !== 'de') {
      switchLanguage('de');
    }
  }, [locale, switchLanguage]);

  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const isActivePath = (path) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'de' : 'en';

    // Get current query string - THIS IS THE KEY FIX
    const currentQueryString = searchParams.toString();

    // Get the current path without locale prefix
    let pathWithoutLocale = pathname;
    if (pathname.startsWith('/de/')) {
      pathWithoutLocale = pathname.substring(3); // Remove '/de'
    } else if (pathname === '/de') {
      pathWithoutLocale = '/';
    } else if (pathname.startsWith('/en/')) {
      pathWithoutLocale = pathname.substring(3); // Remove '/en'
    } else if (pathname === '/en') {
      pathWithoutLocale = '/';
    }

    // Ensure path starts with /
    if (!pathWithoutLocale.startsWith('/')) {
      pathWithoutLocale = '/' + pathWithoutLocale;
    }

    // Build new path with new locale
    const newBasePath = newLocale === 'de' ? '/de' : '';
    let newFullPath = newBasePath + pathWithoutLocale;

    // Handle root path case
    if (newFullPath === '') {
      newFullPath = '/';
    }

    // Append query string if exists - THIS PRESERVES THE CATEGORY PARAMETER
    if (currentQueryString) {
      newFullPath = `${newFullPath}?${currentQueryString}`;
    }

    // Update the language context
    switchLanguage(newLocale);

    // Navigate to new URL with preserved query params
    router.push(newFullPath);
  };

  const getBasePath = () => {
    return locale === 'de' ? '/de' : '';
  };

  const getCategoryName = (category) => {
    return locale === 'de' ? category.nameDE : category.name;
  };

  const handleBrandsMouseLeave = () => {
    setIsBrandsOpen(false);
    setActiveCategory(null);
  };

  const handleReviewsMouseLeave = () => {
    setIsReviewsOpen(false);
  };

  if (!isLoaded) {
    return (
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-primary-600">Loading...</div>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={`${getBasePath()}/`} className="flex items-center">
            <div className="text-2xl font-bold text-primary-600">
              <img src="/Assets/logo.png" className='xl:w-[90%] lg:w-[80%] md:w-[90%] w-[60%]'></img>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-10">

            {/* Reviews Dropdown with Categories */}
            <div
              className="relative"
              onMouseEnter={() => setIsReviewsOpen(true)}
              onMouseLeave={handleReviewsMouseLeave}
            >
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${isActivePath('/reviews')
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
                  }`}
              >
                {t('treadmillReviews')}
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Reviews Dropdown */}
              <div
                className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isReviewsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
              >
                <div className="py-1">
                  {/* Category Links */}
                  {reviewCategories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`${getBasePath()}/reviews?category=${category.slug}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {getCategoryName(category)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Brands Dropdown with Categories */}
            <div
              className="relative"
              onMouseEnter={() => setIsBrandsOpen(true)}
              onMouseLeave={handleBrandsMouseLeave}
            >
              <button
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center ${isActivePath('/brands')
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-700 hover:text-primary-600'
                  }`}
              >
                {t('brands')}
                <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* First level dropdown - Categories */}
              <div
                className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${isBrandsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
              >
                <div className="py-1">
                  {brandCategories.map((category) => (
                    <div
                      key={category.slug}
                      className="relative"
                      onMouseEnter={() => setActiveCategory(category.slug)}
                    >
                      <div
                        className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 cursor-pointer"
                      >
                        <span>{getCategoryName(category)}</span>
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>

                      {/* Second level dropdown - Brands */}
                      <div
                        className={`absolute left-full top-0 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${activeCategory === category.slug ? 'opacity-100 visible' : 'opacity-0 invisible'
                          }`}
                      >
                        <div className="py-1">
                          {category.brands.map((brand) => (
                            <Link
                              key={brand.slug}
                              href={`${getBasePath()}/brands/${brand.slug}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                            >
                              {brand.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href={`${getBasePath()}/guide`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActivePath('/guide')
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
                }`}
            >
              {t('guide')}
            </Link>

            <Link
              href={`${getBasePath()}/blog`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActivePath('/blog')
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
                }`}
            >
              {t('blog')}
            </Link>

            <Link
              href={`${getBasePath()}/about`}
              className={`px-3 py-2 text-sm font-medium transition-colors ${isActivePath('/about')
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-700 hover:text-primary-600'
                }`}
            >
              {t('about')}
            </Link>

            <button
              onClick={toggleLanguage}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors border border-gray-300 rounded-md"
            >
              {locale === 'en' ? 'DE' : 'EN'}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

              {/* Mobile Reviews with Categories */}
              <div className="space-y-1">
                <button
                  onClick={() => setMobileExpandedReviews(!mobileExpandedReviews)}
                  className={`flex items-center justify-between w-full px-3 py-2 text-base font-medium transition-colors ${isActivePath('/reviews')
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                >
                  <span>{t('treadmillReviews')}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileExpandedReviews ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                {mobileExpandedReviews && (
                  <div className="pl-4">
                    <Link
                      href={`${getBasePath()}/reviews`}
                      className="block px-6 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {locale === 'de' ? 'Alle Walking Pads' : 'All Walking Pads'}
                    </Link>
                    {reviewCategories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`${getBasePath()}/reviews?category=${category.slug}`}
                        className="block px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {getCategoryName(category)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Brands with Categories */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-base font-medium text-gray-700">{t('brands')}</div>

                {brandCategories.map((category) => (
                  <div key={category.slug}>
                    <button
                      onClick={() => setMobileExpandedCategory(
                        mobileExpandedCategory === category.slug ? null : category.slug
                      )}
                      className="flex items-center justify-between w-full px-6 py-2 text-sm font-medium text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                    >
                      <span>{getCategoryName(category)}</span>
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileExpandedCategory === category.slug ? 'rotate-180' : ''
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>

                    {mobileExpandedCategory === category.slug && (
                      <div className="pl-4">
                        {category.brands.map((brand) => (
                          <Link
                            key={brand.slug}
                            href={`${getBasePath()}/brands/${brand.slug}`}
                            className="block px-6 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {brand.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Link
                href={`${getBasePath()}/guide`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${isActivePath('/guide')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('guide')}
              </Link>

              <Link
                href={`${getBasePath()}/blog`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${isActivePath('/blog')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('blog')}
              </Link>

              <Link
                href={`${getBasePath()}/about`}
                className={`block px-3 py-2 text-base font-medium transition-colors ${isActivePath('/about')
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>

              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              >
                {locale === 'en' ? 'Deutsch' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}