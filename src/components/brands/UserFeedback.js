'use client';
import { useTranslations, useLocale } from '@/contexts/LanguageContext';
import { useState } from 'react';

// ✅ Brand-specific feedback data (all in one place)

const feedbackData = {
  sportstechswalklite: {
    en: [
      {
        id: 1,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Just received mine—and it is top-tier! Build quality is excellent, and the motor runs smooth and silent.!',
        date: '5 min ago',

      },
      {
        id: 2,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Comfort levels are outstanding—very gentle on my knees. The setup guide could be clearer, though.',
        date: 'a day ago',

      },
      {
        id: 3,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Three months of daily use, and it performs flawlessly. The incline works great, and the belt remains smooth.',
        date: ' 3 days ago',

      },
      {
        id: 4,
        name: 'Jonas P',
        avatar: 'JP',
        rating: 5,
        comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.',
        date: 'a week ago',

      },
      {
        id: 5,
        name: 'Claudia W',
        avatar: 'CW',
        rating: 5,
        comment: 'I was surprised by how stable the walking pad is. It feels secure even when I train on it for longer periods.',
        date: 'a month ago',

      }
    ],
    de: [
      {
        id: 1,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Das Walking Pad ist super leise und passt perfekt unter meinen Schreibtisch.Endlich kann ich mich auch im Home-Office mehr bewegen!',
        date: 'Vor 5 Minuten',

      },
      {
        id: 2,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Sehr platzsparend, einfach zusammenzuklappen und schnell verstaut. Genau das richtige Fitnessgerät für meine kleine Wohnung.',
        date: 'vor einem Tag',

      },
      {
        id: 3,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Die App-Steuerung motiviert mich, meine Schritte im Blick zu behalten. Tolle Kombination aus Technik und Bewegung.',
        date: 'Vor 3 Tagen',

      },
      {
        id: 4,
        name: 'Jonas P',
        avatar: 'JP',
        rating: 5,
        comment: 'Hochwertige Verarbeitung und gutes Preis-Leistungs-Verhältnis. Ich nutze es fast täglich und fühle mich fitter.',
        date: 'vor einer Woche',

      },
      {
        id: 5,
        name: 'Claudia W',
        avatar: 'CM',
        rating: 5,
        comment: 'Ich war überrascht, wie stabil das Walking Pad ist. Es fühlt sich sicher an, auch wenn ich länger darauf trainiere.',
        date: 'vor einem Monat',

      }
    ]
  },
  citysports: {
    en: [
      {
        id: 6,
        name: 'Clara',
        avatar: 'C',
        rating: 4,
        comment: 'Set it up in under five minutes and started walking during my Zoom meetings. Totally discreet and boosts my step count!',
        date: '2 hours ago',

      },
      {
        id: 7,
        name: 'Charlie',
        avatar: 'C',
        rating: 4.1,
        comment: 'Even after months of daily use, it’s still whisper-quiet. A great productivity & fitness combo.',
        date: ' a day ago',

      },
      {
        id: 8,
        name: 'Americo',
        avatar: 'A',
        rating: 3,
        comment: 'I appreciate how compact it is—slides effortlessly under my couch when not in use.',
        date: ' 5 days ago',

      },
      {
        id: 9,
        name: 'Django',
        avatar: 'D',
        rating: 4,
        comment: 'There are no training programs or heart rate monitoring – I miss the motivation from automated workouts.',
        date: ' a month ago',

      },
    ],
    de: [
      {
        id: 6,
        name: 'Clara',
        avatar: 'C',
        rating: 4,
        comment: 'Das Citysports WP6 ist superleise – ideal fürs Home-Office. Ich kann während meiner Meetings trainieren, ohne den Besprechungspartner zu stören.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 7,
        name: 'Charlie',
        avatar: 'C',
        rating: 3,
        comment: 'Der Motor reicht nur bis 6 km/h. Für ernsthafte Läufer ist das Gerät zu langsam.',
        date: 'vor einem Tag',

      },
      {
        id: 8,
        name: 'Americo',
        avatar: 'A',
        rating: 3,
        comment: 'Die Lauffläche ist zu klein, besonders für größere Nutzer nicht bequem. Ich stoße regelmäßig mit den Füßen an den Rand.',
        date: 'Vor 5 Tagen',

      },
      {
        id: 9,
        name: 'Django',
        avatar: 'D',
        rating: 4,
        comment: ' Keine Trainingsprogramme oder Pulsmessung vorhanden – ich vermisse die Motivation durch automatisierte Workouts.',
        date: 'vor einem Monat',

      },
    ]
  },
  kiddoza: {
    en: [
      {
        id: 10,
        name: 'Emma K',
        avatar: 'EK',
        rating: 3,
        comment: 'Setup was instant—no tools, no hassle, and I started walking during my morning calls right away.',
        date: '3 days ago',

      },
      {
        id: 11,
        name: 'David R',
        avatar: 'DR',
        rating: 4,
        comment: 'The pad feels sturdy and quiet, even with incline turned on. Perfect for small living spaces.',
        date: ' a week ago',

      },
      {
        id: 12,
        name: 'Jonas M',
        avatar: 'JM',
        rating: 2,
        comment: 'The shock absorption is next-level. My knees thank me after each walk session.',
        date: ' 2 months ago',

      }
    ],
    de: [
      {
        id: 10,
        name: 'Emma K',
        avatar: 'EK',
        rating: 3,
        comment: 'Superun ist klasse – Steigung läuft zuverlässig und der Laufgurt bleibt stabil.',
        date: ' Vor 3 Tagen',

      },
      {
        id: 11,
        name: 'David R',
        avatar: 'DR',
        rating: 4,
        comment: 'Tolles Dämpfungssystem – perfekt für meine Gelenke."Anleitung könnte besser sein.',
        date: 'vor 10 Tagen',

      },
      {
        id: 12,
        name: 'Jonas M',
        avatar: 'JM',
        rating: 2,
        comment: 'Habe es 3 Monate täglich genutzt – Steigung läuft zuverlässig, der Laufgurt ist stabil.',
        date: 'vor einer Woche',

      }
    ]
  },
  superun: {
    en: [
      {
        id: 13,
        name: 'Lukas',
        avatar: 'L',
        rating: 3,
        comment: 'Great for working from home, quiet, compact, and remote-ready. I can walk during Zoom calls without disturbing my family.',
        date: ' 1 day ago',

      },
      {
        id: 14,
        name: 'Maria',
        avatar: 'M',
        rating: 2,
        comment: 'I had mine for over a year still running smoothly. Lightweight, portable, and quiet. Excellent value for staying active.',
        date: ' 6 days ago',

      },
      {
        id: 15,
        name: 'Paul',
        avatar: 'P',
        rating: 4,
        comment: 'The motor stopped working after a year. Tried basic fixes without success. It is frustrating, especially with limited customer service follow-up. ',
        date: ' a week ago',

      },
    ],
    de: [
      {
        id: 13,
        name: 'Lukas',
        avatar: 'L',
        rating: 3,
        comment: 'Qualität und Aufbau sind top.unglaublich ruhig – total begeistert!',
        date: 'vor 1 Tag',

      },
      {
        id: 14,
        name: 'Maria',
        avatar: 'M',
        rating: 2,
        comment: 'Tolles Dämpfungssystem, super für meine Gelenke."Anleitung könnte übersichtlicher sein.',
        date: 'Vor 6 Tagen',

      },
      {
        id: 15,
        name: 'Paul',
        avatar: 'p',
        rating: 4,
        comment: 'Seit drei Monaten täglich genutzt – Steigung arbeitet zuverlässig, Laufband-toleranz top.',
        date: 'vor einer Woche',

      },
    ]
  },
  urevo: {
    en: [
      {
        id: 16,
        name: 'Tim',
        avatar: 'T',
        rating: 4,
        comment: 'Compact and quiet—ideal for dense workdays — A hands-on review highlighting its home-office utility',
        date: '3 hours ago',

      },
      {
        id: 17,
        name: 'Felix',
        avatar: 'F',
        rating: 3,
        comment: 'Rock-solid frame, silent motor. Perfect combination for multitasking — Tech reviewers praised its reliable build and quiet operation.',
        date: ' 2 days ago',

      },
      {
        id: 18,
        name: 'Emilia',
        avatar: 'E',
        rating: 3,
        comment: 'Incline adds real intensity. The CyberPad is a game-changer — Media reviews lauded its incline capabilities for busy users.',
        date: '5 days ago',

      }
    ],
    de: [
      {
        id: 16,
        name: 'Tim',
        avatar: 'T',
        rating: 4,
        comment: 'Der Motor läuft reibungslos und extrem leise – die Gerätequalität übertraf meine Erwartungen.',
        date: 'gerade eben',

      },
      {
        id: 17,
        name: 'Felix',
        avatar: 'F',
        rating: 3,
        comment: 'Sehr solide Dämpfungsleistung – meine Knie danken es mir täglich. Aufbauanleitung könnte klarer sein.',
        date: 'vor 2 Tagen',

      },
      {
        id: 18,
        name: 'Emilia',
        avatar: 'E',
        rating: 3,
        comment: 'Tägliche Nutzung seit 3 Monaten – die automatische Steigung funktioniert perfekt, und der Laufgurt läuft extrem stabil.',
        date: 'Vor 5 Tagen',

      }
    ]
  },
  copant: {
    en: [
      {
        id: 19,
        name: 'Oliver H.',
        avatar: 'O',
        rating: 4,
        comment: '“Great for basic walking and fits perfectly under my desk, but the belt length is a bit short for a natural stride.” ',
        date: '3 hours ago',

      },
      {
        id: 20,
        name: 'Ava M.',
        avatar: 'A',
        rating: 3,
        comment: '“Quiet and compact, but I wish the speed went beyond 6 km/h so I could do light jogging.” ',
        date: ' 2 days ago',

      },
      {
        id: 21,
        name: 'Liam D.',
        avatar: 'L',
        rating: 3,
        comment: '“Good for simple use but not for long workouts - cushioning could be better for knees.”',
        date: '5 days ago',

      }
    ],
    de: [
      {
        id: 19,
        name: 'Jonas',
        avatar: 'J',
        rating: 4,
        comment: 'Die KI-Trainingsprogramme und Online-Rennen machen richtig Spaß – so vergeht die Zeit wie im Flug.',
        date: 'Vor 3 Stunden',

      },
      {
        id: 20,
        name: 'Sarah',
        avatar: 'S',
        rating: 3,
        comment: 'Der Motor läuft sehr leise und das Gerät lässt sich dank der Rollen leicht unter den Schreibtisch schieben. Die Geschwindigkeitsgrenze ist jedoch schnell erreicht',
        date: 'vor einem Tag',

      },
      {
        id: 21,
        name: 'Felix',
        avatar: 'E',
        rating: 3,
        comment: 'Tolle Kombination aus App-Steuerung und Fernbedienung. Für mein Gewicht von 120 kg bietet der robuste Rahmen guten Halt.',
        date: 'vor 4 Tagen',

      },
      // {
      //   id: 25,
      //   name: 'Maja',
      //   avatar: 'M',
      //   rating: 3,
      //   comment: 'Die Multiplayer-Funktion sorgt für zusätzliche Motivation. Ohne Smartphone gehen einige Funktionen aber nicht, das sollte man wissen',
      //   date: 'vor einem Monat',

      // },

    ]
  },
  merach: {
    en: [
      {
        id: 22,
        name: 'Lucas W.',
        avatar: 'L',
        rating: 3,
        comment: ' “Very convenient for daily indoor walking, but the deck is smaller than expected and feels tight during faster steps.” ',
        date: '8 days ago',

      },
      {
        id: 23,
        name: 'Hannah J.',
        avatar: 'H',
        rating: 4,
        comment: ' “I like the quiet motor and portability, but 6 km/h is too slow when I try to jog.” ',
        date: ' 3 days ago',

      },
      {
        id: 24,
        name: 'Ethan B.',
        avatar: 'E',
        rating: 3,
        comment: '“Good compact treadmill for casual use, but after longer sessions my knees feel some strain due to limited cushioning.”',
        date: '9 days ago',

      }
    ],
    de: [
      {
        id: 22,
        name: 'Lea',
        avatar: 'L',
        rating: 4,
        comment: 'Leise und einfach zu bedienen – perfekt fürs Homeoffice',
        date: 'Vor 2 Stunden',

      },
      {
        id: 23,
        name: 'Markus',
        avatar: 'M',
        rating: 3,
        comment: 'Angenehmer Laufgurt und App-Abwechslung; für intensives Laufen reicht das Tempo jedoch nicht aus.',
        date: 'vor einem Tag',

      },
      {
        id: 24,
        name: 'Timo',
        avatar: 'T',
        rating: 3,
        comment: 'Leichtes Gewicht und kompakte Größe; für große Nutzer könnte die Lauffläche länger sein.',
        date: 'Vor 5 Tagen',

      },
      // {
      //   id: 34,
      //   name: 'Sophie',
      //   avatar: 'S',
      //   rating: 3,
      //   comment: 'Magnetische Fernbedienung ist praktisch, und die App-Games machen Spaß',
      //   date: 'vor einem Monat',

      // },

    ]
  },
  cursor: {
    en: [
      {
        id: 25,
        name: 'Oliver R',
        avatar: 'O',
        rating: 3,
        comment: ' “Great for casual walking, but the speed options are quite limited for anything more intense.” ',
        date: '4 days ago',

      },
      {
        id: 26,
        name: ' Amelia D',
        avatar: 'A',
        rating: 4,
        comment: ' “Compact and quiet, fits perfectly under my desk. I just wish the belt was slightly longer.” ',
        date: ' 3 days ago',

      },
      {
        id: 27,
        name: ' Viktor S',
        avatar: 'V',
        rating: 3,
        comment: '“Good for basic movement, but not ideal for extended workouts or fast-paced walking.”',
        date: '6 days ago',

      }
    ],
    de: [
      {
        id: 25,
        name: 'Sophia',
        avatar: 'S',
        rating: 4,
        comment: 'Ich bin so happy mit dem Laufband … ideal für Serien & Homeoffice',
        date: 'Vor 2 Stunden',

      },
      {
        id: 26,
        name: 'Fritz',
        avatar: 'F',
        rating: 3,
        comment: 'Kompakt, praktisch und sofort einsatzbereit.',
        date: 'vor einem Tag',

      },
      {
        id: 27,
        name: 'Matilda',
        avatar: 'M',
        rating: 3,
        comment: 'Das Gerät kann nicht wirklich was es ist recht laut und es lässt sich analog nach oben stellen.Also die Steigung einstellen was erst mal nicht schlecht ist will man jedoch mal ein bisschen Gas geben. Beim Laufen verzieht sich sofort das Laufband',
        date: 'Vor 5 Tagen',

      },
      // {
      //   id: 41,
      //   name: 'Paul',
      //   avatar: 'P',
      //   rating: 3,
      //   comment: 'Etwas billig gemacht der und der an/aus Schalter kommt auf dem Boden und beim transportieren geht er an .Ich hsbe mir eine Steckdose mit einem Schalter besorgt so kann er nicht ungewollt einschalten nicht gerade gut eher schlächt',
      //   date: 'vor einem Monat',

      // },

    ]
  },
  cazvian: {
    en: [
      {
        id: 28,
        name: ' Sofia K',
        avatar: 'S',
        rating: 3,
        comment: ' “Nice for daily walking, but the motor feels light for longer sessions.”',
        date: '1 day ago',

      },
      {
        id: 29,
        name: 'Daniel F',
        avatar: 'D',
        rating: 4,
        comment: ' “Easy to store and move, though the speed range is very basic.” ',
        date: ' 5 days ago',

      },
      {
        id: 30,
        name: 'Harper J',
        avatar: 'H',
        rating: 3,
        comment: ' “Good option for starters, but not for serious fitness routines.”',
        date: '8 days ago',

      }
    ],
    de: [
      {
        id: 28,
        name: 'Anneliese',
        avatar: 'A',
        rating: 4,
        comment: 'Perfekt, um meine Steps zu schaffen. Super kompakt.',
        date: 'Vor 2 Stunden',

      },
      {
        id: 29,
        name: 'Leon',
        avatar: 'L',
        rating: 3,
        comment: 'Topspeed nur 4,5kmh bei 80kg Motor wird sehr heiß',
        date: 'vor einem Tag',

      },
      {
        id: 30,
        name: 'Albert',
        avatar: 'A',
        rating: 3,
        comment: 'Es ist kleiner als man es denkt',
        date: 'Vor 5 Tagen',

      },
      // {
      //   id: 48,
      //   name: 'Sophie',
      //   avatar: 'S',
      //   rating: 3,
      //   comment: 'Es war zu klein als ich vorgestellt habe',
      //   date: 'vor einem Monat',

      // },
      //  {
      //   id: 49,
      //   name: 'Karl',
      //   avatar: 'K',
      //   rating: 3,
      //   comment: 'Für den Preis gut – aber keine Programme, kein Komfort wie bei teureren Geräten.',
      //   date: 'vor einem Monat',

      // },

    ]
  },
  sportstechwalkmate: {
    en: [
      {
        id: 31,
        name: 'Lena M',
        avatar: 'LM',
        rating: 5,
        comment: 'Just received mine—and it is top-tier! Build quality is excellent, and the motor runs smooth and silent.!',
        date: '5 min ago',

      },
      {
        id: 32,
        name: 'Markus R',
        avatar: 'MR',
        rating: 5,
        comment: 'Comfort levels are outstanding—very gentle on my knees. The setup guide could be clearer, though.',
        date: 'a day ago',

      },
      {
        id: 33,
        name: 'Sabine K',
        avatar: 'SK',
        rating: 5,
        comment: 'Three months of daily use, and it performs flawlessly. The incline works great, and the belt remains smooth.',
        date: ' 3 days ago',

      },
      // {
      //   id: 34,
      //   name: 'Jonas P',
      //   avatar: 'JP',
      //   rating: 5,
      //   comment: 'High-quality build and great value for money. I use it almost daily and feel fitter.',
      //   date: 'a week ago',

      // },
      // {
      //   id: 35,
      //   name: 'Claudia W',
      //   avatar: 'CW',
      //   rating: 5,
      //   comment: 'I was surprised by how stable the walking pad is. It feels secure even when I train on it for longer periods.',
      //   date: 'a month ago',

      // }
    ],
    de: [
      {
        id: 31,
        name: 'Sophie B.',
        avatar: 'SB',
        rating: 5,
        comment: 'Super stabil und leise, passt perfekt unter den Schreibtisch. Ideal für den ganzen Tag im Home-Office!',
        date: 'Vor 5 Minuten',

      },
      {
        id: 32,
        name: 'David S.',
        avatar: 'DS',
        rating: 5,
        comment: 'Einfache Montage, tolle App-Tracking – merke direkt den Fitness-Boost. Empfehlung pur!',
        date: 'vor einem Tag',

      },
      {
        id: 33,
        name: 'Laura H.',
        avatar: 'LH',
        rating: 5,
        comment: 'Kompakt, leicht zu verstauen und motiviert täglich. Beste Investition für mehr Bewegung!',
        date: 'Vor 3 Tagen',
      },


    ]
  },


};
// ✅ Helper to pick feedback dynamically
const generateUserFeedback = (brandName, locale) => {
  const key = brandName.toLowerCase();
  // console.log(brandName, locale, key);
  if (feedbackData[key] && feedbackData[key][locale]) {
    return feedbackData[key][locale];
  }
  return feedbackData[key]?.en || [];
};

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// const formatDate = (dateString, locale) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat(locale, {
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric'
//   }).format(date);
// };

export default function UserFeedback({ brand }) {
  const t = useTranslations('brands');
  const locale = useLocale();
  const [expandedComments, setExpandedComments] = useState(new Set());

  const userFeedback = generateUserFeedback(brand.name, locale);

  const toggleExpanded = (commentId) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
          {t('userFeedback')}
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {userFeedback.map((feedback) => (
            <div key={feedback.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* User Info */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">
                      {feedback.avatar}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">
                        {feedback.name}
                      </h4>
                      <span className="text-sm text-gray-500">
                        {feedback.date}
                      </span>
                    </div>

                    <StarRating rating={feedback.rating} />
                  </div>
                </div>

                {/* Comment */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {feedback.comment}
                </p>

                {/* Reply Button */}
                {expandedComments.has(feedback.id) && feedback.replies.length > 0 && (
                  <button
                    onClick={() => toggleExpanded(feedback.id)}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                  >
                    <svg className={`w-4 h-4 mr-1 transition-transform ${expandedComments.has(feedback.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {expandedComments.has(feedback.id)
                      ? (locale === 'en' ? 'Hide replies' : 'Antworten ausblenden')
                      : (locale === 'en' ? `Show ${feedback.replies.length} replies` : `${feedback.replies.length} Antworten anzeigen`)
                    }
                  </button>
                )}

                {/* Replies */}
                {expandedComments.has(feedback.id) && feedback.replies.length > 0 && (
                  <div className="mt-4 pl-8 border-l-2 border-gray-200 space-y-4">
                    {feedback.replies.map((reply) => (
                      <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-sm font-semibold">
                              {reply.avatar}
                            </span>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-medium text-gray-900 text-sm">
                                {reply.name}
                              </h5>
                              <span className="text-xs text-gray-500">
                                {reply.date}
                              </span>
                            </div>

                            <p className="text-gray-700 text-sm leading-relaxed">
                              {reply.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
