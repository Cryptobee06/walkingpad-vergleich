import ReviewsPage from '@/components/reviews/ReviewsPage';

export async function generateMetadata() {
  return {
    title: 'Walkingpad Tests 2025 - Experten Tests & Bewertungen',
    description: 'Umfassende Walkingpad-Tests und Bewertungen von Fitness-Experten. Vergleichen Sie Top-Marken und Modelle, um das perfekte Walkingpad für Ihr Heimstudio zu finden.',
    keywords: 'Walkingpad Tests 2025, beste Laufbänder, Walkingpad Vergleich, Fitnessgeräte Tests',
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
}

export default function Page() {
  return <ReviewsPage />;
}
