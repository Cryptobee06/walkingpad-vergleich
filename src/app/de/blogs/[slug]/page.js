import { notFound } from "next/navigation";

// Sample blog posts data
const blogPosts = {
  "best-treadmill-workouts-2025": {
    title: {
      en: "10 Best Walkingpad Workouts for Weight Loss in 2025",
      de: "10 Beste Walkingpad-Workouts für Gewichtsverlust 2025",
    },
    content: {
      en: `
# 10 Best Treadmill Workouts for Weight Loss in 2025

Treadmill workouts are one of the most effective ways to burn calories and lose weight. With the right combination of intensity, duration, and variety, you can transform your fitness routine and achieve your weight loss goals.

## 1. High-Intensity Interval Training (HIIT)

HIIT workouts alternate between high-intensity bursts and recovery periods. This method burns more calories in less time and continues to burn calories even after your workout.

**Workout Structure:**
- Warm-up: 5 minutes at moderate pace
- Work: 30 seconds at 85-90% effort
- Rest: 90 seconds at easy pace
- Repeat 8-10 times
- Cool-down: 5 minutes at easy pace

## 2. Incline Walking

Walking on an incline significantly increases calorie burn without the high impact of running.

**Workout Structure:**
- Start at 3% incline
- Gradually increase to 8-12% incline
- Maintain comfortable walking pace
- Duration: 30-45 minutes

## 3. Pyramid Training

Pyramid training gradually increases and decreases intensity, providing excellent cardiovascular benefits.

**Workout Structure:**
- 2 minutes at 60% effort
- 2 minutes at 70% effort
- 2 minutes at 80% effort
- 2 minutes at 90% effort
- Reverse the pyramid back down

## 4. Steady-State Cardio

Maintaining a consistent moderate intensity for extended periods builds endurance and burns fat.

**Workout Structure:**
- 30-60 minutes at 65-75% max heart rate
- Focus on sustainable pace
- Perfect for beginners

## 5. Sprint Intervals

Short, intense sprints followed by active recovery periods maximize calorie burn.

**Workout Structure:**
- Warm-up: 10 minutes
- Sprint: 15 seconds at maximum effort
- Recovery: 45 seconds walking
- Repeat 10-15 times
- Cool-down: 10 minutes

## Conclusion

The key to successful weight loss through treadmill workouts is consistency and progressive overload. Start with workouts that match your current fitness level and gradually increase intensity and duration. Remember to combine these workouts with proper nutrition for optimal results.
      `,
      de: `
# 10 Beste Walkingpad-Workouts für Gewichtsverlust 2025

Walkingpad-Workouts sind eine der effektivsten Möglichkeiten, Kalorien zu verbrennen und Gewicht zu verlieren. Mit der richtigen Kombination aus Intensität, Dauer und Vielfalt können Sie Ihre Fitness-Routine transformieren und Ihre Gewichtsverlustziele erreichen.

## 1. Hochintensives Intervalltraining (HIIT)

HIIT-Workouts wechseln zwischen hochintensiven Einheiten und Erholungsphasen ab. Diese Methode verbrennt mehr Kalorien in kürzerer Zeit und verbrennt auch nach dem Training weiter Kalorien.

**Workout-Struktur:**
- Aufwärmen: 5 Minuten in moderatem Tempo
- Arbeitsphase: 30 Sekunden bei 85-90% Anstrengung
- Ruhephase: 90 Sekunden in leichtem Tempo
- 8-10 Mal wiederholen
- Abkühlen: 5 Minuten in leichtem Tempo

## 2. Steigungsgehen

Gehen auf einer Steigung erhöht den Kalorienverbrauch erheblich, ohne die hohe Belastung des Laufens.

**Workout-Struktur:**
- Beginnen Sie bei 3% Steigung
- Steigern Sie allmählich auf 8-12% Steigung
- Bequemes Gehtempo beibehalten
- Dauer: 30-45 Minuten

## 3. Pyramiden-Training

Pyramiden-Training steigert und verringert die Intensität allmählich und bietet ausgezeichnete kardiovaskuläre Vorteile.

**Workout-Struktur:**
- 2 Minuten bei 60% Anstrengung
- 2 Minuten bei 70% Anstrengung
- 2 Minuten bei 80% Anstrengung
- 2 Minuten bei 90% Anstrengung
- Die Pyramide zurück nach unten umkehren

## 4. Steady-State Cardio

Eine konstante moderate Intensität über längere Zeiträume aufrechtzuerhalten baut Ausdauer auf und verbrennt Fett.

**Workout-Struktur:**
- 30-60 Minuten bei 65-75% maximaler Herzfrequenz
- Fokus auf nachhaltiges Tempo
- Perfekt für Anfänger

## 5. Sprint-Intervalle

Kurze, intensive Sprints gefolgt von aktiven Erholungsphasen maximieren den Kalorienverbrauch.

**Workout-Struktur:**
- Aufwärmen: 10 Minuten
- Sprint: 15 Sekunden bei maximaler Anstrengung
- Erholung: 45 Sekunden gehen
- 10-15 Mal wiederholen
- Abkühlen: 10 Minuten

## Fazit

Der Schlüssel für erfolgreichen Gewichtsverlust durch Walkingpad-Workouts ist Konsistenz und progressive Überlastung. Beginnen Sie mit Workouts, die Ihrem aktuellen Fitnesslevel entsprechen, und steigern Sie allmählich Intensität und Dauer. Denken Sie daran, diese Workouts mit angemessener Ernährung für optimale Ergebnisse zu kombinieren.
      `,
    },
    publishDate: "2025-01-15",
    category: {
      en: "Training",
      de: "Training",
    },
    author: "Steve Austin",
    readTime: {
      en: "8 min read",
      de: "8 Min. Lesezeit",
    },
  },
  // Add more blog posts here
};

export async function generateStaticParams() {
  const slugs = Object.keys(blogPosts);

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = "de";
  const post = blogPosts[slug];

  if (!post) {
    return {
      title: "Beitrag nicht gefunden",
      description:
        "Der angeforderte Blog-Beitrag konnte nicht gefunden werden.",
    };
  }

  return {
    title: post.title[locale],
    description: post.title[locale].substring(0, 160),
    keywords: "Laufband Workouts, Gewichtsverlust, Fitness Training, HIIT",
  };
}

const formatDate = (dateString, locale) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

function MarkdownContent({ content }) {
  // Simple markdown-to-HTML conversion for demo purposes
  // In a real app, you'd use a proper markdown parser like remark/rehype
  const html = content
    .replace(
      /^# (.*$)/gm,
      '<h1 class="text-3xl font-bold text-gray-900 mb-6">$1</h1>',
    )
    .replace(
      /^## (.*$)/gm,
      '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">$1</h2>',
    )
    .replace(
      /^### (.*$)/gm,
      '<h3 class="text-xl font-bold text-gray-900 mb-3 mt-6">$1</h3>',
    )
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
    .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
    .replace(
      /(\n<li[^>]*>.*?<\/li>\n?)+/gs,
      '<ul class="list-disc list-inside mb-4 space-y-1">$&</ul>',
    )
    .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
    .replace(/^/, '<p class="text-gray-700 leading-relaxed mb-4">')
    .replace(/$/, "</p>");

  return (
    <div
      className="prose max-w-none box-white-border"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const locale = "de";
  const post = blogPosts[slug];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-full mb-4">
              {post.category[locale]}
            </span>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title[locale]}
            </h1>

            {/* Meta */}
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formatDate(post.publishDate, locale)}</span>
              <span>•</span>
              <span>{post.readTime[locale]}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarkdownContent content={post.content[locale]} />
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {locale === "en" ? "Related Articles" : "Verwandte Artikel"}
          </h2>

          <div className="text-center">
            <a
              href={`/${locale}/blog`}
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              {locale === "en" ? "View All Articles" : "Alle Artikel ansehen"}
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
