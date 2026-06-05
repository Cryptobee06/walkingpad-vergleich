import AboutHero from "@/components/about/AboutHero";
import HowWeReview from "@/components/about/HowWeReview";
import OurTeam from "@/components/about/OurTeam";
import ReviewStandards from "@/components/about/ReviewStandards";
import WhoWeAre from "@/components/about/WhoWeAre";



export async function generateMetadata() {
  return {
    title: 'About Us - Expert Walkingpad Testing Team & Review Standards',
    description: 'Learn about our expert team, rigorous testing methodology, and transparent review standards. Professional Walkingpad evaluations you can trust.',
    keywords: 'about Walkingpad reviews, expert testing team, review methodology, fitness equipment standards',
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