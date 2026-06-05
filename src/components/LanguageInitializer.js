'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageInitializer() {
  const pathname = usePathname();
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLocale = sessionStorage.getItem('Treadmill-locale') || 'de';
    const currentLocale = pathname?.startsWith('/de') ? 'de' : 'en';

    // ✅ If German is savedLocale but URL has no /de prefix → redirect
    if (!pathname.startsWith('/de') && savedLocale === 'de') {
      const newPath = '/de' + (pathname === '/' ? '' : pathname);
      router.replace(newPath);
      return;
    }

    // ✅ If saved preference doesn't match current URL → redirect
    if (savedLocale && savedLocale !== currentLocale) {
      let newPath;

      if (savedLocale === 'de' && !pathname.startsWith('/de')) {
        newPath = '/de' + (pathname === '/' ? '' : pathname);
      } else if (savedLocale === 'en' && pathname.startsWith('/de')) {
        newPath = pathname.replace(/^\/de/, '') || '/';
      }

      if (newPath && newPath !== pathname) {
        router.replace(newPath);
        return;
      }
    }

    // ✅ Safe to render
    setReady(true);
  }, [pathname]);

  if (!ready) return <div className="text-center p-4"></div>;
  return null;
}
