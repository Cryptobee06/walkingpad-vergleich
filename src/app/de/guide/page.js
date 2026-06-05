import GuideHero from '@/components/guide/GuideHero';
import KeyFeatures from '@/components/guide/KeyFeatures';
import UseCase from '@/components/guide/UseCase';
import ComparisonTips from '@/components/guide/ComparisonTips';
import FAQ from '@/components/guide/FAQ';

export async function generateMetadata() {
  return {
    title: 'Walkingpad Kaufratgeber 2025 - Experten Tipps & Beratung',
    description: 'Umfassender Walkingpad-Kaufratgeber mit Experten-Tipps zu Motorleistung, Bandgröße, Steigungseinstellungen und mehr. Treffen Sie die richtige Wahl für Ihre Fitnessziele.',
    keywords: 'Walkingpad Kaufratgeber, Walkingpad Eigenschaften, Motorleistung, Bandgröße, Steigungseinstellungen, HeimlWalkingpad Beratung',
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
}

export default function GuidePage() {
  return (
    <div className="min-h-screen">
      <GuideHero />
      <KeyFeatures />
      <UseCase />
      <ComparisonTips />
      <FAQ />
    </div>
  );
}