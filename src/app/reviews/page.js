
import ReviewsPage from '@/components/reviews/ReviewsPage';
// import WalkingPadComparison from '../comparison/page';

export async function generateMetadata() {
  return {
    title: 'Walkingpad Reviews 2025 - Expert Testing & Ratings',
    description: 'Comprehensive Walkingpad reviews and ratings from fitness experts. Compare top brands and models to find the perfect Walkingpad for your home gym.',
    keywords: 'Walkingpad reviews 2025, best Walkingpads, Walkingpad comparison, fitness equipment reviews',
    icons: {
      icon: 'https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png'
        },
  };
}

export default function Page() {
  return(
    <>
     <ReviewsPage />
    </>
  )
}
