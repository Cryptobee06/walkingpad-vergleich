'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LanguageContext = createContext();

// Translation object placeholder
let translations = {};

// Function to load translations from public folder
const loadTranslations = async () => {
  try {
    const [enResponse, deResponse] = await Promise.all([
      fetch('/locales/en/common.json'),
      fetch('/locales/de/common.json')
    ]);

    if (enResponse.ok && deResponse.ok) {
      const [enData, deData] = await Promise.all([
        enResponse.json(),
        deResponse.json()
      ]);
      translations = {
        en: enData,
        de: deData
      };
    } else {
      throw new Error('Failed to fetch translations');
    }
  } catch (error) {
    console.warn('Failed to load translations, using fallback:', error);
    translations = {
      en: {
        navigation: {
          logo: "walkingpadreviews",
          TreadmillReviews: "walkingpadreviews",
          brands: "Brands",
          guide: "Guide",
          blog: "Blog",
          about: "About"
        },
        homepage: {
          heroTitle: "Honest Reviews. Real User Feedback. Smart Buying Decisions.",
          heroSubtitle: "Independent reviews from certified fitness professionals who test every machine for performance, durability, and value."
        }
      },
      de: {
        navigation: {
          logo: "GehpadTests",
          TreadmillReviews: "GehpadTests",
          brands: "Marken",
          guide: "Ratgeber",
          blog: "Blog",
          about: "Über uns"
        },
        homepage: {
          heroTitle: "Experten Gehpad Tests & Bewertungen",
          heroSubtitle: "Unabhängige Bewertungen von zertifizierten Fitness-Profis, die jedes Gerät auf Leistung, Haltbarkeit und Wert testen."
        }
      }
    };
  }
};

export function LanguageProvider({ children, initialLocale = 'en' }) {
  const pathname = usePathname();
  const router = useRouter();

  const [isTranslationsLoaded, setIsTranslationsLoaded] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(initialLocale);

  // Load translations on mount
  useEffect(() => {
    loadTranslations().then(() => {
      setIsTranslationsLoaded(true);
    });
  }, []);

  // Determine and set locale on mount and pathname change
  useEffect(() => {
    const determineLocale = () => {
      if (pathname?.startsWith('/de')) return 'de';

      if (typeof window !== 'undefined') {
        const savedLocale = sessionStorage.getItem('Treadmill-locale');
        if (savedLocale && ['en', 'de'].includes(savedLocale)) {
          return savedLocale;
        }
      }

      return 'de'; // default fallback
    };

    const locale = determineLocale();
    setCurrentLocale(locale);
    sessionStorage.setItem('Treadmill-locale', locale);
  }, [pathname]);

  const switchLanguage = (newLocale) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('Treadmill-locale', newLocale);
      setCurrentLocale(newLocale);

      const currentPath = window.location.pathname;
      let newPath;

      if (currentPath.startsWith('/de')) {
        newPath = newLocale === 'en' ? currentPath.replace('/de', '') || '/' : currentPath;
      } else {
        newPath = newLocale === 'de' ? '/de' + (currentPath === '/' ? '' : currentPath) : currentPath;
      }

      if (router) {
        router.push(newPath);
      } else {
        window.location.href = newPath;
      }
    }
  };

  const t = (key) => {
    if (!isTranslationsLoaded) return key;

    const keys = key.split('.');
    let value = translations[currentLocale];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        locale: currentLocale,
        switchLanguage,
        t,
        isLoaded: isTranslationsLoaded
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

// Hooks

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslations(namespace = '') {
  const { t, isLoaded } = useLanguage();
  return (key) => {
    if (!isLoaded) return key;
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return t(fullKey);
  };
}

export function useLocale() {
  const { locale } = useLanguage();
  return locale;
}

export function useTranslation(namespace = '') {
  const { t, isLoaded, locale, switchLanguage } = useLanguage();
  const translationFunction = (key) => {
    if (!isLoaded) return key;
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return t(fullKey);
  };

  return {
    t: translationFunction,
    i18n: {
      language: locale,
      changeLanguage: switchLanguage
    },
    ready: isLoaded
  };
}
