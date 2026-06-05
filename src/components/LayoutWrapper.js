'use client';
import { Inter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useMemo, useEffect, useState } from 'react';
import Head from 'next/head'; // Import Head for head manipulations
const inter = Inter({ subsets: ['latin'] });

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  
  // Ensure component is mounted to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine locale from pathname for meta and lang attributes
  const currentLocale = useMemo(() => {
    if (pathname?.startsWith('/de')) {
      return 'de';
    }
    return 'en';
  }, [pathname]);

  const metadata = useMemo(() => {
    if (currentLocale === 'de') {
      return {
        title: 'WalkingpadTests - Experten Walkingpad Tests & Bewertungen',
        description: 'Unabhängige Bewertungen von zertifizierten Fitnessexperten, die jedes Gerät auf Leistung, Haltbarkeit und Wertigkeit prüfen.',
        icons: {
          icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
            },
      };
    }
    return {
      title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews',
      description: 'Independent Walkingpad reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value.',
      icons: {
        icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
          },
    };
  }, [currentLocale]);

  // On server-side or before mount, use default English to prevent hydration mismatch
  const safeLocale = mounted ? currentLocale : 'en';
  const safeMetadata = mounted ? metadata : {
    title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews',
    description: 'Independent Walkingpad reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value.',
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
  // On mounting, add Google Tag Manager script to body
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-PWCLHL2K';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <html lang={safeLocale}>
      <Head>
        <title>{safeMetadata.title}</title>
        <meta name="description" content={safeMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Tag Manager Script in Head */}
        <script 
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PWCLHL2K');`
          }}
        />
      </Head>
      <body className={inter.className}>
          {/* Google Tag Manager (noscript) in Body */}
          <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PWCLHL2K"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {children}
      </body>

    </html>
  );
}
