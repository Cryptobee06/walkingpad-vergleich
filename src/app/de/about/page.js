import AboutHero from '@/components/about/AboutHero';
import HowWeReview from '@/components/about/HowWeReview';
import ReviewStandards from '@/components/about/ReviewStandards';
import WhoWeAre from '@/components/about/WhoWeAre';
import OurTeam from '@/components/about/OurTeam';

export async function generateMetadata() {
  return {
    title: 'Über uns - Experten Walkingpad-Test Team & Bewertungsstandards',
    description: 'Erfahren Sie mehr über unser Expertenteam, rigorose Testmethodik und transparente Bewertungsstandards. Professionelle Laufband-Bewertungen, denen Sie vertrauen können.',
    keywords: 'über Walkingpad-Bewertungen, Experten-Test Team, Bewertungsmethodik, Fitnessgeräte Standards',
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <HowWeReview />
      <OurTeam />
      <ReviewStandards />
      <WhoWeAre />
    </div>
  );
}
