import GuideHero from '@/components/guide/GuideHero';
import KeyFeatures from '@/components/guide/KeyFeatures';
import UseCase from '@/components/guide/UseCase';
import ComparisonTips from '@/components/guide/ComparisonTips';


export async function generateMetadata() {
  return {
    title: 'Treadmill Buying Guide 2025 - Expert Tips & Advice',
    description: 'Complete treadmill buying guide with expert tips on motor power, belt size, incline settings, and more. Make the right choice for your fitness goals.',
    keywords: 'treadmill buying guide, treadmill features, motor power, belt size, incline settings, home treadmill advice',
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
    </div>
  );
}