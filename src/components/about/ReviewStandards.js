'use client';
import { useTranslations,useLocale } from '@/contexts/LanguageContext';

const standards = [
  {
    id: 'performanceTesting',
    icon: '⚡',
    color: 'bg-yellow-100 text-yellow-700',
     content:{
       en: 'We run intensive speed, power, and responsiveness tests to ensure each product performs to its full potential under real-world conditions.',
      de: 'Wir messen realistisch die Geschwindigkeit, Motorleistung und Reaktionsfähigkeit – das A und O für fundierte Walkingpad Testberichte.'

     }
      
  },
  {
    id: 'durabilityChecks',
    icon: '🔧',
    color: 'bg-blue-100 text-blue-700',
    content:{
      en: 'Products are evaluated over time for wear, stability, and consistency—so you know they’ll last beyond the initial shine',
     de: 'Geräte werden auf Langzeithaltbarkeit getestet. So stellen wir sicher, dass jedes Laufband das „Test-Potenzial“ für echte Käufer übertrifft.'

    }
    //  content:"Products are evaluated over time for wear, stability, and consistency—so you know they’ll last beyond the initial shine."
  },
  {
    id: 'userFeedback',
    icon: '💬',
    color: 'bg-green-100 text-green-700',
    content:{
      en: 'We collect insights from real users to understand actual experiences, ensuring our reviews reflect practical performance and satisfaction.',
     de: 'Feedback eines breiten Nutzerkreises, z. B. in Kategorien wie Walkingpad leise, Under-Desk Treadmills, Laufband Vergleich,fließt in unsere Bewertung ein.'

    }
    //  content:""
  },
  {
    id: 'expertVerified',
    icon: '✓',
    color: 'bg-purple-100 text-purple-700',
    content:{
      en: 'Every test is validated by industry experts to ensure accuracy, reliability, and transparency in our review process.',
     de: 'Jedes Review wird abschließend von Fachleuten geprüft – für maximal unabhängige Laufband-Vergleiche.'

    }
    //  content:""
  },
  {
    id: 'transparentScoring',
    icon: '📈',
    color: 'bg-red-100 text-red-700',
    content:{
      en: 'Our scoring is data-backed, clearly explained, and free from bias—so you can make confident decisions with full clarity.',
     de: 'Unsere Bewertung basiert auf Daten, ist klar erklärt und frei von Voreingenommenheit – so können Sie sichere Entscheidungen mit voller Klarheit treffen.Desc'

    }
    // content:""
  }
];

export default function ReviewStandards() {
  // const t = useTranslations('about.reviewStandards');
  const t = useTranslations('');
  const locale = useLocale();
  return (
      <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            {t('Our Review Standards')}
          </h2>
          {/* <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
            {t('subtitle')}
          </p> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {standards.map((standard) => (
            <div
              key={standard.id}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:scale-[1.02] duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`bg-gradient-to-br ${standard.color} text-white w-20 h-20 flex items-center justify-center rounded-full shadow-lg text-3xl mb-6`}
                >
                  {standard.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(standard.id)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {standard.content[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}