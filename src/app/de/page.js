

export const dynamic = 'force-static';
import HeroSection from '@/components/homepage/HeroSection';
import ExpertOverview from '@/components/homepage/ExpertOverview';
import PopularBrands from '@/components/homepage/PopularBrands';
import TestingProcess from '@/components/homepage/TestingProcess';
import ExpertOpinion from '@/components/homepage/ExpertOpinion';
import BestTreadmills from '@/components/homepage/BestTreadmills';
import CustomerReviews from '@/components/homepage/CustomerReviews';

export async function generateMetadata() {
  return {
    title: 'LaufbandTests - Experten Laufband Tests & Bewertungen 2025',
    description: 'Unabhängige Laufband-Bewertungen von zertifizierten Fitness-Profis. Umfassende Tests für Leistung, Haltbarkeit und Wert. Finden Sie das beste Laufband für Ihre Bedürfnisse.',
    keywords: 'Laufband Tests, Laufband Bewertungen, beste Laufbänder 2025, Fitnessgeräte Tests, Laufband Kaufratgeber',
    openGraph: {
      title: 'LaufbandTests - Experten Laufband Tests & Bewertungen 2025',
      description: 'Unabhängige Laufband-Bewertungen von zertifizierten Fitness-Profis',
      type: 'website',
    },
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
       <HeroSection />
       {/* <ExpertOverview /> */}
       <TestingProcess />
       <ExpertOpinion />
       <BestTreadmills />
       <CustomerReviews />
      <PopularBrands />
    </div>
  );
}