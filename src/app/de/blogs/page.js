import BlogPage from '@/components/blog/BlogPage';

export async function generateMetadata() {
  return {
    title: 'Fitness &  Walkingpad Blog - Experten Tipps & Trainingsberatung',
    description: 'Experten-Einblicke, Trainingstipps und die neuesten Nachrichten in Fitness-Technologie und Walkingpad-Innovation. Bleiben Sie mit professioneller Beratung auf dem Laufenden.',
    keywords: 'Fitness Blog, Walkingpad Training, Workout Tipps, Fitness Technologie, Lauf-Beratung',
  };
}

export default function Page() {
  return <BlogPage />;
}