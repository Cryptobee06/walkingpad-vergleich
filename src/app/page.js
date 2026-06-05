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

    title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews 2025',
    description: 'Independent Walkingpad reviews from certified fitness professionals. Comprehensive testing for performance, durability, and value. Find the best Walkingpad for your needs.',
    keywords: 'Walkingpad reviews, Walkingpad testing, best Walkingpads 2025, fitness equipment reviews, Walkingpad buying guide',
    openGraph: {
      title: 'WalkingpadReviews - Expert Walkingpad Testing & Reviews 2025',
      description: 'Independent Walkingpad reviews from certified fitness professionals',
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