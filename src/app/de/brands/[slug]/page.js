import { notFound } from "next/navigation";
import BrandOverview from "@/components/brands/BrandOverview";
import ProductDetails from "@/components/brands/ProductDetails";
import ProsAndCons from "@/components/brands/ProsAndCons";
import FinalVerdict from "@/components/brands/FinalVerdict";
import UserFeedback from "@/components/brands/UserFeedback";
import BrandFAQ from "@/components/brands/BrandFAQ";
import ProductDescription from "@/components/brands/ProductDescription";
import TargetAudience from "@/components/brands/TargetAudience";
import ComparisonContext from "@/components/brands/ComparisonContext";
import ConclusionEvaluation from "@/components/brands/ConclusionEvaluation";

const brandData = {
  Sportstechswalklite: {
    name: "Sportstechswalklite",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/sporstech/100-Sportstech-Laufband-sTreadPro+(1).jpg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/sporstech/create+(1).jpeg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/sporstech/create+(2).jpeg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/sporstech/create+(3).jpeg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/sporstech/create.jpeg",
    ],
    productDescription: {
      de: {
        intro: "Das Sportstech sWalk Lite ist ein motorisiertes Walking Pad für Zuhause, das besonders für platzsparendes Training entwickelt wurde.",
        cards: [
          "Das Gerät besitzt einen Geschwindigkeitsbereich von 1 bis 6 km/h, wodurch sowohl langsames Gehen als auch schnelleres Walking möglich ist. Diese Geschwindigkeit eignet sich gut für moderate Bewegungseinheiten oder Training während der Arbeit.",
          "Das Laufband ist für ein maximales Benutzergewicht von 120 kg ausgelegt und bietet damit eine stabile Trainingsplattform für viele Nutzer.",
          "Mit Abmessungen von etwa 122 × 53 × 12 cm gehört das Gerät zu den kompakteren Laufbändern auf dem Markt. Diese flache Bauweise ermöglicht es, das Laufband nach dem Training unter Möbeln oder an der Wand zu verstauen.",
          "Zusätzlich verfügt das sWalk Lite über Transportrollen, wodurch es relativ leicht bewegt werden kann."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Sportstech sWalk Lite eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen wie Apps oder Trainingsprogramme",
            "Platzbedarf"
          ]
        },
        middleText: "Das Sportstech sWalk Lite positioniert sich als kompaktes und modernes Walking Pad für Alltagstraining.",
        outro: "Seine Kombination aus App-Integration, LED-Anzeige und platzsparender Bauweise macht es besonders interessant für Nutzer, die ein einfaches Fitnessgerät für tägliche Bewegung suchen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Sportstech sWalk Lite ist ein kompaktes Walking Pad, das besonders für alltägliche Bewegung, Homeoffice-Training und platzsparendes Fitness-Equipment entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompaktes Design",
          "LED-Anzeige mit Trainingsdaten",
          "App-Integration",
          "einfache Bedienung",
          "gute Stabilität"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet. Für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann das sWalk Lite jedoch eine praktische und platzsparende Lösung sein."
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",

      ],
      de: [
        {
          title: "LED-Anzeige mit Trainingsdaten",
          description: "Ein besonderes Merkmal des sWalk Lite ist seine patentierte LED-Anzeige, die Trainingsdaten in Echtzeit anzeigt. Dazu gehören Geschwindigkeit, Schritte und Pulsinformationen.",
          footer: "Die LED-Anzeige wechselt außerdem ihre Farbe je nach Geschwindigkeit. Diese visuelle Funktion dient nicht nur als Design-Element, sondern kann auch als Motivation während des Trainings dienen."
        },
        {
          title: "Verbindung mit der Sportstech Live App",
          description: "Das Walking Pad kann über Bluetooth mit der Sportstech Live App verbunden werden. Über die App können Trainingsdaten verfolgt und verschiedene Trainingsprogramme genutzt werden. Die App bietet Funktionen wie:",
          bullets: [
            "Trainingsstatistiken",
            "personalisierte Empfehlungen",
            "virtuelle Trainingsstrecken",
            "Community-Challenges"
          ],
          footer: "Diese Funktionen können die Motivation erhöhen und das Training abwechslungsreicher gestalten."
        },
        {
          title: "Vier Trainingsprogramme",
          description: "Das sWalk Lite verfügt über vier vorinstallierte Trainingsprogramme, die unterschiedliche Geschwindigkeitsprofile bieten. Diese Programme helfen dabei, das Training strukturierter zu gestalten."
        },
        {
          title: "Manuelle Steigungsfunktion",
          description: "Das Gerät besitzt außerdem eine manuelle Steigung von etwa 6 %, die über ausklappbare Steigungsbügel eingestellt wird. Diese Steigung erhöht die Trainingsintensität und kann zusätzliche Muskelgruppen aktivieren."
        }
      ],
    },

    // name: 'Sportstech',
    model: "sWalk Lite",
    logo: "/images/brands/treadmill1.jpg",

    description: {
      en: "The WalkMate is a compact treadmill for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is among the flatter walking pads on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.The treadmill weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional treadmills, which are often much heavier and require a permanent setup location.The maximum user weight is 120 kg, making it suitable for a wide range of users.",
      de: "Das Sportstech sWalk Lite ist ein kompaktes Walking Pad, das speziell für den Einsatz zu Hause oder im Homeoffice entwickelt wurde. Walking Pads gehören mittlerweile zu den beliebtesten Fitnessgeräten für Zuhause, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Viele Menschen verbringen einen großen Teil ihres Tages im Sitzen – besonders bei Büroarbeit oder im Homeoffice. Ein Walking Pad kann helfen, diesen Bewegungsmangel auszugleichen, indem es ermöglicht, während der Arbeit oder in kurzen Pausen aktiv zu bleiben. Das sWalk Lite kombiniert ein platzsparendes Design mit moderner Technik.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/sportstech-banner.webp",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",


      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Dank seiner flachen Bauweise lässt sich das sWalk Lite leicht verstauen und eignet sich besonders für Wohnungen mit begrenztem Platzangebot."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads wie das sWalk Lite sind ideal für Menschen, die während der Arbeit aktiv bleiben möchten."
        },
        {
          title: "App-Integration und moderne Funktionen",
          description: "Die Verbindung mit der Sportstech Live App bietet zusätzliche Trainingsmöglichkeiten und ermöglicht eine detaillierte Analyse der Trainingsdaten."
        },
        {
          title: "Robuste Bauweise",
          description: "Viele Nutzerberichte heben die stabile Konstruktion und die solide Verarbeitung des Geräts hervor."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",


      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit maximal 6 km/h ist das Gerät eher für Walking-Training geeignet als für intensives Lauftraining."
        },
        {
          title: "Weniger Trainingsprogramme als große Laufbänder",
          description: "Das Gerät bietet vier Programme, während größere Laufbänder oft deutlich mehr Trainingsmodi besitzen."
        },
        {
          title: "Fokus auf Heimtraining",
          description: "Das sWalk Lite ist hauptsächlich für den Heimgebrauch gedacht und weniger für intensives Fitnessstudio-Training."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Welche Geschwindigkeit bietet das sWalk Lite?",
        },
        answer: {
          de: "Das Gerät erreicht Geschwindigkeiten von 1 bis 6 km/h, was ideal für Walking-Training ist."
        }
      },
      {
        question: {
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          de: "Das maximale Benutzergewicht beträgt 120 kg."
        }
      },
      {
        question: {
          de: "Hat das Laufband eine Steigung?",
        },
        answer: {
          de: "Ja, das Gerät besitzt eine manuelle Steigung von etwa 6 %."
        }
      },
      {
        question: {
          de: "Kann man das Laufband mit einer App verbinden?",
        },
        answer: {
          de: "Ja, das sWalk Lite kann über Bluetooth mit der Sportstech Live App verbunden werden."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Sportstech sWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer,ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 4.8,
    buyLink: "https://www.sportstech.de/laufband/swalk-lite",
  },
  Citysports: {
    name: "Citysports",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city04.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city03.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city01.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city02.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city05.png",
    ],
    productDescription: {
      de: {
        intro: "Das Citysports Walking Pad ist ein motorisiertes Laufband für Zuhause, das speziell für platzsparendes Training entwickelt wurde.",
        cards: [
          "Die Konstruktion des Geräts ist darauf ausgelegt, möglichst wenig Platz zu benötigen. Dadurch lässt sich das Laufband auch in kleineren Wohnungen problemlos nutzen. Viele Nutzer entscheiden sich bewusst für Walking Pads, weil sie sich nach dem Training leicht verstauen lassen und nicht dauerhaft im Raum stehen müssen.",
          "Das Laufband bietet einen Geschwindigkeitsbereich für Walking-Training, der sowohl gemütliches Gehen als auch schnelleres Walking ermöglicht. Diese Flexibilität erlaubt es Nutzern, ihre Trainingsintensität individuell anzupassen.",
          "Das Gerät verfügt außerdem über ein LED-Display, das wichtige Trainingsinformationen anzeigt. Dazu gehören unter anderem: Geschwindigkeit, Trainingszeit, zurückgelegte Distanz und Kalorienverbrauch."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Citysports Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen wie Apps oder Trainingsprogramme",
            "Platzbedarf"
          ]
        },
        middleText: "Das Citysports Walking Pad gehört zu den preisorientierten und einfachen Walking Pads auf dem Markt. Für viele Nutzer ist diese Ausstattung völlig ausreichend, insbesondere wenn das Gerät hauptsächlich für Walking-Training genutzt wird.",
        outro: "Wer dagegen ein Gerät für intensives Lauftraining oder sehr lange Trainingseinheiten sucht, sollte möglicherweise ein leistungsstärkeres Laufband in Betracht ziehen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Citysports Walking Pad ist ein kompaktes Laufband, das besonders für alltägliche Bewegung, Homeoffice-Nutzung und platzsparendes Heimtraining entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompakte Bauweise",
          "einfache Bedienung",
          "grundlegende Trainingsfunktionen",
          "geeignet für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet. Für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann das Citysports Walking Pad jedoch eine praktische und platzsparende Lösung sein."
      }
    },
    features: {
      en: [
        "Intelligent LED Console",
        "Folding Design",
        "Cushioning System",
        "Powerful Motor",
        "Spacious Belt",
        "Powerful motor 440W",
        "Speed range: 1-8KM/H",
        " With safety handrail",
        "Lower Maintenance",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein Hauptmerkmal des Citysports Walking Pads ist seine kompakte Konstruktion. Walking Pads sind bewusst so gestaltet, dass sie wenig Platz benötigen und leicht verstaut werden können.",
          footer: "Gerade in kleineren Wohnungen oder Büros kann ein großes Laufband schnell unpraktisch werden. Das Citysports Modell bietet hier eine platzsparende Alternative."
        },
        {
          title: "Leiser Motorbetrieb",
          description: "Das Laufband verfügt über einen relativ leisen Motor, wodurch es auch während der Arbeit oder beim Fernsehen verwendet werden kann. Für viele Nutzer ist dieser Punkt besonders wichtig, da Walking Pads häufig im Homeoffice genutzt werden."
        },
        {
          title: "Stoßdämpfende Laufoberfläche",
          description: "Das Citysports Walking Pad besitzt eine stoßdämpfende Lauffläche, die Stöße beim Gehen absorbieren kann. Diese Konstruktion kann dazu beitragen, die Belastung auf Knie und Gelenke zu reduzieren.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung einen wichtigen Beitrag zum Trainingskomfort leisten."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt wichtige Trainingswerte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen helfen Nutzern, ihre Fortschritte zu verfolgen und ihre Trainingsroutine anzupassen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Das Gerät wird über eine Fernbedienung gesteuert, mit der sich Geschwindigkeit und Einstellungen bequem anpassen lassen.",
          footer: "Diese einfache Bedienung macht das Walking Pad besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "CS-WP6",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports is an American fitness equipment company renowned for interactive training technology. The Commercial 1750 is their premium home treadmill featuring iFit integration and professional-grade construction.",
      de: "Das Citysports Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Walking Pads haben in den letzten Jahren stark an Popularität gewonnen, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Viele Menschen verbringen einen großen Teil ihres Tages im Sitzen, insbesondere bei Büroarbeit oder im Homeoffice. ",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/nor-banner.jpg",

    pros: {
      en: [
        "Powerful commercial-grade motor",
        "Large HD touchscreen display",
        "Decline capability for varied training",
        "Extensive iFit workout library",
        "Excellent build quality",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Citysports Walking Pad benötigt deutlich weniger Platz als ein klassisches Laufband und eignet sich daher besonders für kleine Wohnungen."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit verwendet. Das Citysports Modell ist für genau diesen Zweck gut geeignet."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Walking Pads, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "iFit subscription required for full features",
        "Higher price point",
        "Large footprint requires space",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit maximal etwa 6 km/h ist das Gerät eher für Walking als für intensives Lauftraining geeignet."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Wie bei vielen Walking Pads ist die Lauffläche kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Modelle bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Citysports Walking Pad joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Citysports Walking Pad is an excellent choice for serious runners who want gym-quality equipment at home. The iFit integration provides unmatched workout variety, though the subscription cost should be considered.",
      de: "Das Citysports CS-WP6 bietet als Under-Desk Walkingpad eine praktische und günstige Einstiegslösung für tägliche Bewegung. Es überzeugt durch leisen Betrieb, einfache Bedienbarkeit und transportfreundliches Design. Wer gelegentlich und platzsparend trainieren will, findet hier eine solide Lösung – auch wenn Profis oder intensivere Nutzer ggf. ein Laufband mit längerer Lauffläche oder mehr Speed bevorzugen.",
    },
    rating: 4.0,
    // buyLink: 'https://www.city-sports.eu/collections/treadmill/products/citysports-under-desk-treadmill-citysports-laufband-citysports-treadmill-citysports-tapis-roulant-citysports-tapis-de-course?spm=..collection_c6816f06-4986-4263-97d0-4377c49999a8.collection_detail_1.9&spm_prev=..index.header_1.1'
  },
  kiddoza: {
    name: "Kiddoza",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza05.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza04.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza01.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza02.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza03.png",
    ],
    productDescription: {
      en: {
        intro: "The Kiddoza Walking Pad is a space-saving treadmill for home use, making it ideal for smaller apartments or home office environments.",
        cards: [
          "The device is designed to take up as little space as possible. Walking pads are intentionally built so they can be easily stored after use, for example under furniture or behind doors.",
          "The treadmill offers a speed range specifically designed for walking workouts, allowing users to choose between relaxed walking and faster-paced walking.",
          "Another key feature is the integrated LED display, which shows important workout data. This includes amongst others:\n- Speed\n- Workout time\n- Distance covered\n- Calories burned\nThese metrics help users track their progress and structure their training more effectively.",
          "With its simple design, the Kiddoza Walking Pad is especially suitable for people looking for a straightforward fitness device that is ready to use quickly."
        ]
      },
      de: {
        intro: "Das Kiddoza Walking Pad ist ein platzsparendes Laufband für Zuhause, das sich besonders für kleinere Wohnungen oder Homeoffice-Umgebungen eignet.",
        cards: [
          "Die Konstruktion des Geräts ist darauf ausgelegt, möglichst wenig Platz zu benötigen. Walking Pads sind bewusst so gestaltet, dass sie nach dem Training einfach verstaut werden können, beispielsweise unter Möbeln oder hinter Türen.",
          "Das Laufband bietet einen Geschwindigkeitsbereich, der speziell für Walking-Training entwickelt wurde. Dadurch können Nutzer zwischen gemütlichem Gehen und schnellerem Walking wählen.",
          "Ein weiteres wichtiges Merkmal ist das integrierte LED-Display, das wichtige Trainingsinformationen anzeigt. Dazu gehören unter anderem:\n- Geschwindigkeit\n- Trainingszeit\n- zurückgelegte Distanz\n- Kalorienverbrauch\nDiese Daten helfen Nutzern, ihre Fortschritte zu verfolgen und ihr Training besser zu strukturieren.",
          "Durch seine einfache Konstruktion eignet sich das Kiddoza Walking Pad besonders für Menschen, die ein unkompliziertes Fitnessgerät suchen, das schnell einsatzbereit ist."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Kiddoza Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen",
            "Platzbedarf"
          ]
        },
        middleText: "Das Kiddoza Walking Pad gehört zu den einfacheren Walking Pads für den Heimgebrauch. Für viele Nutzer ist diese Ausstattung vollkommen ausreichend, insbesondere wenn das Gerät hauptsächlich für Walking-Training genutzt wird.",
        outro: "Wer dagegen ein Gerät für intensives Lauftraining oder sehr lange Trainingseinheiten sucht, sollte möglicherweise ein leistungsstärkeres Laufband in Betracht ziehen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Kiddoza Walking Pad ist ein kompaktes Laufband, das besonders für alltägliche Bewegung, Homeoffice-Training und platzsparendes Heimfitness entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompakte Bauweise",
          "einfache Bedienung",
          "grundlegende Trainingsfunktionen",
          "geeignet für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet. Für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann das Kiddoza Walking Pad jedoch eine praktische und platzsparende Lösung sein."
      }
    },
    features: {
      en: [
        "4% Incline for better fat burning",
        "2.5 HP quiet and powerful motor",
        "Supports up to 120 kg weight",
        "Advanced shock absorption system",
        "8 silicone + 2 cushions + 5-layer anti-slip belt",
        "LCD display shows distance, speed, time, calories",
        "Dual control: remote + mobile app",
        "Compact & lightweight (20 kg)",
        "Easy to store under sofa/bed/desk",
        "No assembly needed – ready to use",
        "2-in-1 walking and jogging mode",
        "Speed range: 1–6 km/h",
        "1-year warranty with lifetime tech support",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein zentrales Merkmal des Kiddoza Walking Pads ist seine platzsparende Konstruktion. Walking Pads sind speziell dafür entwickelt worden, wenig Raum einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Kiddoza Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße reduziert. Dadurch kann die Belastung auf Knie und Gelenke verringert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine solche Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Walking Pads – einschließlich des Kiddoza Modells – werden über eine Fernbedienung gesteuert. Dadurch können Nutzer Geschwindigkeit und Einstellungen bequem anpassen, ohne ihr Training zu unterbrechen."
        }
      ],
    },
    model: "Under desk walking pad",
    logo: "/images/brands/proform-logo.png",
    description: {
      en: "Kiddoza,  focuses on providing premium features at accessible prices. The Pro 2000 offers professional-grade performance with smart connectivity and iFit compatibility.",
      de: "Das Kiddoza Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause entwickelt wurde. Walking Pads gehören zu den beliebtesten Fitnessgeräten für Heimtraining, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Viele Menschen verbringen heutzutage einen großen Teil ihres Tages im Sitzen – sei es bei der Arbeit, beim Lernen oder beim Entspannen zu Hause.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/proform-banner.webp",

    pros: {
      en: [
        "Strong motor performance",
        "Decline and incline capability",
        "Good cushioning system",
        "iFit integration included",
        "Competitive pricing",
      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Das Kiddoza Walking Pad ist deutlich kompakter als klassische Laufbänder und eignet sich daher besonders für Wohnungen mit begrenztem Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit verwendet. Das Kiddoza Modell ist gut für langsames bis moderates Gehen geeignet und kann daher während der Arbeit genutzt werden."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich unkompliziert bedienen und erfordert keine komplexen Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Walking Pads, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Smaller touchscreen than premium models",
        "Build quality not as robust as commercial grade",
        "Limited warranty coverage",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie viele Walking Pads ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei großen Fitnessstudio-Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Walking Pads bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Kiddoza Walking Pad joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The kiddoza Walking Pad strikes an excellent balance between features and price. It provides many premium capabilities without the premium price tag, making it ideal for budget-conscious fitness enthusiasts.",
      de: "Das Kiddoza Under-Desk Walking Pad bietet ein beeindruckendes Preis-Leistungs-Verhältnis. Es kombiniert Walking-Pad-Essentials wie Neigungsfunktion,App-Anbindung und Kompaktheit – perfekt für alle, die nach einem qualitativ hochwertigen,budgetfreundlichen Walking Pad für das Home-Gym suchen.",
    },
    rating: 3.5,
    // buyLink: 'https://www.hometreadmills.uk/products/under-desk-treadmill-2-5hp-incline-running-machine'
  },
  Superun: {
    name: "Superun",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun04.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun05.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun01.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun02.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun03.png",
    ],
    productDescription: {
      de: {
        intro: "Das Superun Walking Pad ist ein platzsparendes Laufband für Heimtraining, das sich besonders für kleinere Wohnungen oder Homeoffice-Umgebungen eignet.",
        cards: [
          "Die Konstruktion des Geräts ist darauf ausgelegt, möglichst wenig Platz zu benötigen. Walking Pads sind bewusst so gestaltet, dass sie nach dem Training leicht verstaut werden können, beispielsweise unter Möbeln oder hinter Türen.",
          "Das Laufband bietet einen Geschwindigkeitsbereich, der speziell für Walking-Training entwickelt wurde. Dadurch können Nutzer zwischen gemütlichem Gehen und schnellerem Walking wählen.",
          "Das Gerät verfügt außerdem über ein LED-Display, das wichtige Trainingsinformationen anzeigt. Dazu gehören unter anderem Geschwindigkeit, Trainingszeit, zurückgelegte Distanz und Kalorienverbrauch. Diese Daten helfen Nutzern, ihre Fortschritte zu verfolgen und ihr Training besser zu strukturieren.",
          "Durch seine einfache Konstruktion eignet sich das Superun Walking Pad besonders für Menschen, die ein unkompliziertes Fitnessgerät suchen, das schnell einsatzbereit ist."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Superun Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen",
            "Platzbedarf"
          ]
        },
        middleText: "Das Superun Walking Pad gehört zu den einfachen und preisorientierten Walking Pads für den Heimgebrauch. Für viele Nutzer ist diese Ausstattung vollkommen ausreichend, insbesondere wenn das Gerät hauptsächlich für Walking-Training genutzt wird.",
        outro: "Wer dagegen ein Gerät für intensives Lauftraining oder sehr lange Trainingseinheiten sucht, sollte möglicherweise ein leistungsstärkeres Laufband in Betracht ziehen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Superun Walking Pad ist ein kompaktes Laufband, das besonders für alltägliche Bewegung, Homeoffice-Training und platzsparendes Heimfitness entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompakte Bauweise",
          "einfache Bedienung",
          "grundlegende Trainingsfunktionen",
          "geeignet für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet. Für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann das Superun Walking Pad jedoch eine praktische und platzsparende Lösung sein."
      }
    },
    features: {
      en: [
        "Foldable Design with Built-in Wheels",
        "Manual Incline Adjustment (0% – 6%)",
        "Supports up to 350 lbs weight capacity",
        "Brushless Motor with 3 HP Power",
        "Speed Range: 0.6 – 10 MPH",
        "Compatible with PitPat App (iOS & Android)",
        "Space-saving Design for Small Areas",
        "Tracks Distance, Speed, Time, and Calories",
        "Includes Phone Holder and Security Lock",
        "Durable Alloy Steel Frame",
        "Lightweight (86 lbs)",
        "Package Includes Tools and Lubricant",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein zentrales Merkmal des Superun Walking Pads ist seine platzsparende Bauweise. Walking Pads sind speziell dafür entwickelt worden, wenig Platz einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Superun Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße absorbieren kann. Dadurch kann die Belastung auf Knie und Gelenke reduziert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und helfen dabei, Trainingsziele zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Walking Pads – einschließlich Superun Modelle – werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "B,A06-С",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "Superun is known for reliable, well-built treadmills that focus on simplicity and durability. The 7.8 AT represents their commitment to quality construction and user-friendly design.",
      de: "Das Superun Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Walking Pads gehören inzwischen zu den beliebtesten Fitnessgeräten für Heimtraining, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Viele Menschen verbringen einen Großteil ihres Tages im Sitzen, besonders bei Büroarbeit oder im Homeoffice. ",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/horizon-banner.avif",

    pros: {
      en: [
        "Excellent build quality and reliability",
        "Smooth and quiet operation",
        "Good cushioning system",
        "Easy to use controls",
        "Strong warranty support",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Superun Walking Pad ist deutlich kompakter als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit verwendet. Das Superun Modell eignet sich gut für langsames bis moderates Gehen während der Arbeit."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Walking Pads, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Limited smart features",
        "No touchscreen display",
        "Fewer preset programs",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie viele Walking Pads ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Walking Pads bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Superun Walking Pad joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Superun Walking Pad excels in reliability and build quality. While it may lack some modern smart features, it delivers consistent performance and represents excellent value for those prioritizing durability.",
      de: "Das Superun B-A06-C überzeugt im Walking Pad Vergleich mit zuverlässiger Technik,hochwertiger Verarbeitung und klarer Benutzerführung. Es ist eine ausgezeichnete Wahl für Fitness-Nutzer, die ein langlebiges, geräuscharmes Gerät ohne überflüssigen Schnickschnack suchen.",
    },
    rating: 3.9,
    // buyLink: 'https://superuntreadmill.com/products/superun%C2%AE-ba04-ultra-walking-pad-with-remote-control'
  },
  Urevo: {
    name: "Urevo",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo04.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo01.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo02.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo03.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo05.png",
    ],
    productDescription: {
      de: {
        intro: "Das Urevo Walking Pad ist ein platzsparendes Laufband für Heimtraining, das besonders für kleinere Wohnungen oder Homeoffice-Umgebungen geeignet ist.",
        cards: [
          "Die Konstruktion des Geräts ist darauf ausgelegt, möglichst wenig Platz zu benötigen. Walking Pads sind bewusst so gestaltet, dass sie nach dem Training leicht verstaut werden können, beispielsweise unter Möbeln oder hinter Türen.",
          "Das Laufband bietet einen Geschwindigkeitsbereich, der speziell für Walking-Training entwickelt wurde. Dadurch können Nutzer zwischen gemütlichem Gehen und schnellerem Walking wählen.",
          "Ein weiteres wichtiges Merkmal ist das integrierte LED-Display, das wichtige Trainingsinformationen anzeigt. Dazu gehören unter anderem Geschwindigkeit, Trainingszeit, zurückgelegte Distanz und Kalorienverbrauch. Diese Daten helfen Nutzern, ihre Fortschritte zu verfolgen und ihr Training besser zu strukturieren.",
          "Durch seine einfache Konstruktion eignet sich das Urevo Walking Pad besonders für Menschen, die ein unkompliziertes Fitnessgerät suchen, das schnell einsatzbereit ist."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Urevo Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen",
            "Platzbedarf"
          ]
        },
        middleText: "Das Urevo Walking Pad gehört zu den kompakten und preisorientierten Walking Pads für den Heimgebrauch. Für viele Nutzer ist diese Ausstattung vollkommen ausreichend, insbesondere wenn das Gerät hauptsächlich für Walking-Training genutzt wird.",
        outro: "Wer dagegen ein Gerät für intensives Lauftraining oder sehr lange Trainingseinheiten sucht, sollte möglicherweise ein leistungsstärkeres Laufband in Betracht ziehen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Urevo Walking Pad ist ein kompaktes Laufband, das besonders für alltägliche Bewegung, Homeoffice-Training und platzsparendes Heimfitness entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompakte Bauweise",
          "einfache Bedienung",
          "grundlegende Trainingsfunktionen",
          "geeignet für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet. Für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann das Urevo Walking Pad jedoch eine praktische und platzsparende Lösung sein."
      }
    },
    features: {
      en: [
        "Compact Design with Larger Running Deck",
        "30% Increased Workout Space",
        "Ultra-Quiet Brushless Motor",
        "30% Noise Reduction",
        "Energy-Saving Motor (15% less consumption)",
        "14% Auto Incline with MegaLift Technology",
        "40% More Efficient Fat Burning",
        "8-Point Shock Absorption System",
        "Reduces Knee Impact by 30%",
        "Smart UREVO App Integration",
        "Outdoor Running Simulation",
        "Auto Incline Adjustment via App",
        "Custom Fitness Goals & Data Tracking",
        "Multiple Workout Modes with Free Resources",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein zentrales Merkmal des Urevo Walking Pads ist seine platzsparende Bauweise. Walking Pads sind speziell dafür entwickelt worden, wenig Platz einzunehmen und sich leicht verstauen zu lassen.",
          footer: "Gerade in kleineren Wohnungen kann ein großes Laufband schnell unpraktisch werden. Das Urevo Modell bietet hier eine kompakte Alternative."
        },
        {
          title: "Stoßdämpfende Lauffläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Laufoberfläche, die beim Gehen entstehende Stöße absorbieren kann. Dadurch kann die Belastung auf Knie und Gelenke reduziert werden.",
          footer: "Gerade bei regelmäßigem Walking-Training kann eine gute Dämpfung den Trainingskomfort deutlich verbessern."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt während des Trainings verschiedene Daten an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und helfen dabei, Trainingsziele zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Walking Pads – einschließlich Urevo Modelle – werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    model: "SpaceWalk E1L",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo is a premium fitness equipment manufacturer with decades of commercial gym experience. The T5 Track Connect brings commercial-grade quality to the home environment.",
      de: "Das Urevo Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Walking Pads gehören zu den beliebtesten Fitnessgeräten für Heimtraining, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Viele Menschen verbringen heutzutage einen Großteil ihres Tages im Sitzen, besonders bei Büroarbeit oder im Homeoffice. Ein Walking Pad kann dabei helfen, diesen Bewegungsmangel auszugleichen, indem es ermöglicht, während alltäglicher Aktivitäten aktiv zu bleiben.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/life-banner.jpg",
    pros: {
      en: [
        "Commercial-grade build quality",
        "Excellent shock absorption",
        "Whisper-quiet operation",
        "Superior warranty coverage",
        "Professional aesthetic",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Urevo Walking Pad ist deutlich kompakter als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit verwendet. Das Urevo Modell eignet sich gut für langsames bis moderates Gehen während der Arbeit."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät lässt sich schnell in Betrieb nehmen und erfordert keine komplizierten Einstellungen."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Nutzer verwenden Walking Pads, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Premium pricing",
        "Limited entertainment features",
        "Heavy and requires dedicated space",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie viele Walking Pads ist auch dieses Modell hauptsächlich für Walking-Training gedacht und weniger für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Walking Pads bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Urevo Walking Pad joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Urevo Walking Pad Track Connect represents the pinnacle of home treadmill quality. While expensive, it offers unmatched durability and performance for serious fitness enthusiasts.",
      de: "Urevo Track Connect (SpaceWalk E1L) belegt einen Spitzenplatz im Walkingpad Vergleich für hochwertige Home-Laufbänder. Mit einer Bewertung von 4,5/5 überzeugt es durch hervorragende Verarbeitung, Trainingstiefe und Komfort – ideal für Fitnessenthusiasten mit hohen Ansprüchen.",
    },
    rating: 3.9,
    // buyLink: 'https://www.urevo.com/collections/foldable-treadmill/products/urevo-foldi-3s-treadmill'
  },
  Sportstechwalkmate: {
    name: "Sportstech",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/Walkmate.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/100-WalkMate.jpg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/walkmate2.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/walkingpad2.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/Gemini_Generated_Image_j5hb7cj5hb7cj5hb (1).png",
    ], 
    productDescription: {
      en: {
        intro: "The WalkMate is a compact home treadmill designed specifically for limited living spaces and flexible use. Its slim design makes it relatively easy to store and bring out again when needed.",
        cards: [
          "With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is one of the flatter walking pads on the market. This low height not only facilitates storage under furniture or behind doors but also makes it interesting for users who want to move the device regularly between different rooms.",
          "The treadmill weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a significant advantage over classic treadmills, which are often much heavier and require a permanent spot.",
          "The maximum load capacity is 120 kg, which is sufficient for most users and makes the device suitable for a broad target group."
        ]
      },
      de: {
        intro: "Das WalkMate ist ein kompaktes Laufband für den Heimgebrauch, das speziell auf begrenzte Wohnräume und flexible Nutzung ausgelegt ist. Durch seine schlanke Bauform lässt es sich relativ einfach verstauen und bei Bedarf wieder hervorholen.",
        cards: [
          "Mit Abmessungen von etwa 109,7 × 52,1 × 10,9 cm gehört das Gerät zu den flacheren Walking Pads auf dem Markt. Diese Bauhöhe erleichtert nicht nur die Lagerung unter Möbeln oder hinter Türen, sondern macht es auch interessant für Nutzer, die das Gerät regelmäßig zwischen verschiedenen Räumen bewegen möchten.",
          "Das Laufband wiegt rund 15,8 kg und verfügt über integrierte Transportrollen, wodurch es sich vergleichsweise leicht verschieben lässt. Diese Mobilität ist ein wichtiger Vorteil gegenüber klassischen Laufbändern, die oft deutlich schwerer sind und dauerhaft einen festen Platz benötigen.",
          "Die maximale Belastbarkeit beträgt 120 kg, was für die meisten Nutzer ausreichend ist und das Gerät für eine breite Zielgruppe geeignet macht."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product For?",
        intro: "The WalkMate is a compact treadmill for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed",
        suitableForLabel: "The Sportstech WalkMate is especially suitable for:",
        suitableFor: [
          "people working from home",
          "individuals with limited living space",
          "users who want to increase daily step count",
          "beginners in home fitness",
          "people who prefer light endurance training"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "serious runners",
          "intensive running workouts",
          "users who need higher speeds"
        ]
      },
      de: {
        title: "Für wen ist das Produkt geeignet?",
        intro: "",
        suitableForLabel: "Das Sportstech WalkMate eignet sich besonders für:",
        suitableFor: [
          "Menschen im Homeoffice",
          "Personen mit wenig Platz in der Wohnung",
          "Nutzer, die mehr Schritte im Alltag sammeln möchten",
          "Einsteiger im Bereich Heimfitness",
          "Menschen, die leichtes Ausdauertraining bevorzugen"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät dagegen für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensive Lauftrainings",
          "Nutzer, die hohe Geschwindigkeiten benötigen"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        intro: "When purchasing a walking pad, it is important to consider where and how often it will be used.",
        box1: {
          heading: "Many buyers choose walking pads over large treadmills because:",
          items: [
            "space is limited",
            "they do not plan intense running workouts",
            "they want a device for everyday activity"
          ]
        },
        middleText: "The WalkMate fits perfectly into this category—a compact fitness device for regular movement rather than maximum athletic performance.",
        box2: {
          heading: "Key factors to consider when choosing a walking pad include:",
          items: [
            "maximum speed",
            "running surface size",
            "weight and portability",
            "noise level",
            "additional features like app integration"
          ]
        },
        outro: "In these areas, the WalkMate offers a solid feature set for its intended use."
      },
      de: {
        title: "Vergleichs- und Kaufkontext",
        intro: "Beim Kauf eines Walking Pads sollte man vor allem darauf achten, wo und wie häufig das Gerät genutzt wird.",
        box1: {
          heading: "Viele Käufer entscheiden sich bewusst gegen ein großes Laufband, weil:",
          items: [
            "der Platz begrenzt ist",
            "sie kein intensives Lauftraining planen",
            "sie ein Gerät für den Alltag suchen"
          ]
        },
        middleText: "Das WalkMate gehört genau zu dieser Kategorie: ein kompaktes Fitnessgerät für regelmäßige Bewegung, nicht für maximale sportliche Leistung.",
        box2: {
          heading: "Wer ein Walking Pad sucht, sollte besonders auf folgende Faktoren achten:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Gewicht und Mobilität",
            "Geräuschentwicklung",
            "zusätzliche Funktionen wie App-Integration"
          ]
        },
        outro: "In diesen Bereichen bietet das WalkMate eine solide Ausstattung für den vorgesehenen Einsatzzweck."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech WalkMate is a compact walking pad designed primarily for everyday movement, home office use, and space-saving workouts at home.",
        cards: [
          "Ease of use",
          "The ability to integrate movement into daily life",
          "Its compact design"
        ],
        outro: "Anyone looking for a device to walk regularly, track steps, and stay active will find the WalkMate a practical solution. However, it is less suitable for intensive running training or high speeds. Overall, the WalkMate is aimed at users who want a simple, space-saving fitness device for daily activity."
      },
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Sportstech WalkMate ist ein kompaktes Walking Pad, das vor allem für alltägliche Bewegung, Homeoffice-Nutzung und platzsparendes Training zu Hause entwickelt wurde.",
        cardsTitle: "Seine Stärken liegen vor allem in:",
        cards: [
          "der kompakten Bauweise",
          "der einfachen Nutzung",
          "der Möglichkeit, Bewegung in den Alltag zu integrieren"
        ],
        outro: "Wer ein Gerät sucht, um regelmäßig zu gehen, Schritte zu sammeln und aktiv zu bleiben, findet im WalkMate eine praktische Lösung. Für intensives Lauftraining oder hohe Geschwindigkeiten ist das Modell dagegen weniger geeignet.\n\nInsgesamt richtet sich das WalkMate vor allem an Nutzer, die ein unkompliziertes, platzsparendes Fitnessgerät für tägliche Bewegung suchen."
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        {
          title: "Kompaktes Design für Zuhause",
          description: "Eines der wichtigsten Merkmale des WalkMate ist seine platzsparende Konstruktion. Viele Menschen haben zu Hause keinen Platz für ein großes Laufband. Genau hier setzen Walking Pads an: Sie sind schlanker, leichter und können nach dem Training schnell verstaut werden.",
        },
        {
          title: "Geschwindigkeit für Walking-Training",
          description: "Das WalkMate bietet eine Geschwindigkeit von 1 bis 6 km/h. Dieser Bereich ist optimal für:",
          bullets: [
            "gemütliches Gehen",
            "zügiges Walking",
            "Bewegung während der Arbeit",
            "lockere Ausdauer-Einheiten",
          ],
          footer: "Für intensives Jogging ist das Gerät dagegen nicht gedacht – und genau darin liegt auch seine klare Positionierung.",
        },
        {
          title: "Trainingsprogramme",
          description: "Das Laufband verfügt über mehrere integrierte Trainingsprogramme, die unterschiedliche Intensitäten ermöglichen. Diese Programme können dabei helfen, das Training abwechslungsreicher zu gestalten und ein strukturiertes Bewegungsprogramm umzusetzen.",
        },
        {
          title: "Bluetooth und App-Integration",
          description: "Über Bluetooth lässt sich das WalkMate mit mobilen Geräten verbinden. In Kombination mit einer Fitness-App können Trainingsdaten aufgezeichnet und ausgewertet werden. Dazu gehören beispielsweise:",
          bullets: [
            "zurückgelegte Distanz",
            "Trainingszeit",
            "Schrittzahl",
            "geschätzter Kalorienverbrauch",
          ],
          footer: "Solche Funktionen können die Motivation erhöhen und helfen, Fortschritte langfristig zu verfolgen.",
        },
        {
          title: "Anzeige wichtiger Trainingsdaten",
          description: "Das integrierte LCD-Display zeigt während des Trainings verschiedene Werte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingsdauer",
            "Distanz",
            "Schritte",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen guten Überblick über ihre Aktivität und erleichtern es, Trainingsziele zu verfolgen.",
        },
      ],
    },

    // name: 'Sportstech',
    model: "WalkMate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Sportstech WalkMate gehört zur Kategorie der sogenannten Walking Pads, also besonders kompakter Laufbänder, die vor allem für Gehen, leichte Bewegungseinheiten und den Einsatz im Homeoffice entwickelt wurden. Anders als klassische Fitnessstudio-Laufbänder liegt der Fokus hier nicht auf hohen Geschwindigkeiten oder intensiven Lauftrainings, sondern auf alltäglicher Bewegung, Komfort und platzsparender Nutzung im eigenen Zuhause. Gerade für Menschen, die viel Zeit am Schreibtisch verbringen, kann ein Walking Pad eine praktische Lösung sein. ",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/Walkmate.jpg",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Platzsparend und leicht zu verstauen",
          description: "Der wohl größte Vorteil des WalkMate ist seine kompakte Bauweise. Im Vergleich zu traditionellen Laufbändern benötigt es deutlich weniger Platz und kann bei Nichtbenutzung schnell verstaut werden."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Viele Nutzer verwenden Walking Pads während der Arbeit. Das WalkMate eignet sich besonders gut für diesen Einsatz, da es für langsames bis moderates Gehen ausgelegt ist und keine extrem hohen Geschwindigkeiten benötigt."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist relativ unkompliziert aufgebaut und lässt sich ohne komplexe Einstellungen nutzen. Gerade für Einsteiger kann das ein wichtiger Vorteil sein."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Ein Walking Pad kann helfen, mehr Schritte in den Alltag zu integrieren. Für Menschen mit überwiegend sitzender Tätigkeit kann das eine einfache Möglichkeit sein, ihre Aktivität zu erhöhen."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Keine hohen Laufgeschwindigkeiten",
          description: "Mit maximal 6 km/h ist das WalkMate klar auf Walking ausgelegt. Wer regelmäßig joggen oder laufen möchte, wird mit dieser Geschwindigkeit wahrscheinlich nicht auskommen."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche von 90 × 40 cm ist ausreichend für normales Gehen, aber kleiner als bei vielen klassischen Laufbändern. Größere Nutzer oder Menschen mit sehr langen Schritten könnten dies eventuell als Einschränkung empfinden."
        },
        {
          title: "Fokus auf leichtes Training",
          description: "Das Gerät ist ideal für moderate Bewegung, aber weniger geeignet für intensives Ausdauertraining oder ambitionierte Laufprogramme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Ist das WalkMate ein Laufband oder ein Walking Pad?",
        },
        answer: {
          de: "Technisch gesehen handelt es sich um ein Walking Pad, das speziell für Gehen und leichtes Training entwickelt wurde."
        }
      },
      {
        question: {
          de: "Kann man damit joggen?",
        },
        answer: {
          de: "Mit einer Höchstgeschwindigkeit von 6 km/h eignet sich das Gerät eher für Walking und schnelles Gehen, nicht für intensives Joggen."
        }
      },
      {
        question: {
          de: "Wie viel Platz benötigt das Gerät?",
        },
        answer: {
          de: "Dank seiner kompakten Bauweise benötigt das WalkMate deutlich weniger Platz als klassische Laufbänder."
        }
      },
      {
        question: {
          de: "Für wen ist ein Walking Pad sinnvoll?",
        },
        answer: {
          de: [
            "Walking Pads sind besonders sinnvoll für Menschen, die:",
            "- viel sitzen",
            "- zu Hause trainieren möchten",
            "- nur begrenzten Platz haben",
            "- Bewegung in ihren Alltag integrieren wollen"
          ]
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Sportstech Walkmate überzeugt als kompaktes und leises Walkingpad für Homeoffice und Zuhause, ideal für entspanntes Gehen unter dem Schreibtisch. Mit App-Integration, transportabler Bauweise, manueller Steigung und sofortiger Einsatzbereitschaft erreicht es eine Bewertung",
    },
    rating: 4.7,
    buyLink: "https://www.sportstech.de/laufband/walkmate",
  },
  Copant: {
    name: "Copant",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0009.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0015.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0016.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0019.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/Untitled_design-removebg-preview.png",
    ],
    productDescription: {
      en: {
        intro: "The Copant Walking Pad is a compact home treadmill that stands out for its easy use and modern features. The device is designed to take up as little space as possible while enabling comfortable training.",
        cards: [
          "A key feature is the 2.5 HP motor, which offers enough power for walking workouts and light jogging sessions. This motor power ensures the treadmill runs stably and smoothly, even when the speed is changed.",
          "The speed can be adjusted between 1 and 6 km/h. This makes the device suitable for beginners as well as users who prefer a slightly faster walking pace. It is particularly practical that the speed can be individually adjusted so every user can choose their personal training level.",
          "The treadmill is also designed for a maximum user weight of 136 kg. This load capacity provides stability and makes the device suitable for a broad target audience."
        ]
      },
      de: {
        intro: "Das Copant Walking Pad ist ein kompaktes Laufband für Zuhause, das sich durch seine einfache Nutzung und moderne Ausstattung auszeichnet. Das Gerät ist so konzipiert, dass es möglichst wenig Platz benötigt und gleichzeitig ein komfortables Training ermöglicht.",
        cards: [
          "Ein zentrales Merkmal ist der 2,5-PS-Motor, der ausreichend Leistung für Walking-Training und leichte Joggingeinheiten bietet. Diese Motorleistung sorgt dafür, dass das Laufband stabil und gleichmäßig läuft, selbst wenn die Geschwindigkeit verändert wird.",
          "Die Geschwindigkeit kann zwischen 1 und 6 km/h eingestellt werden. Dadurch eignet sich das Gerät sowohl für Anfänger als auch für Nutzer, die ein etwas schnelleres Walking-Tempo bevorzugen. Besonders praktisch ist, dass die Geschwindigkeit individuell angepasst werden kann, sodass jeder Nutzer sein persönliches Trainingsniveau wählen kann.",
          "Das Laufband ist zudem für ein maximales Benutzergewicht von 136 kg ausgelegt. Diese Belastbarkeit sorgt für Stabilität und macht das Gerät für eine breite Zielgruppe geeignet."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Copant Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Menschen im Homeoffice",
          "Personen mit begrenztem Wohnraum",
          "Nutzer, die mehr Bewegung in den Alltag integrieren möchten",
          "Einsteiger im Bereich Heimfitness",
          "Menschen, die leichtes Ausdauertraining bevorzugen"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für Nutzer, die intensives Lauftraining oder hohe Geschwindigkeiten benötigen."
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Vergleich verschiedener Walking Pads spielen mehrere Faktoren eine wichtige Rolle:",
          items: [
            "maximale Geschwindigkeit",
            "Motorleistung",
            "Belastbarkeit",
            "zusätzliche Smart-Funktionen",
            "Geräuschentwicklung"
          ]
        },
        middleText: "Das Copant Walking Pad positioniert sich als preisgünstige und technologieorientierte Lösung für den Alltag. Für viele Nutzer ist genau diese Kombination aus einfacher Nutzung, App-Integration und kompaktem Design entscheidend.",
        outro: "Wer hauptsächlich gehen möchte und ein Gerät für den täglichen Gebrauch sucht, findet hier eine solide Option."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Copant Walking Pad ist ein modernes und kompaktes Laufband, das vor allem für alltägliche Bewegung, Walking-Training und Homeoffice-Nutzung entwickelt wurde.",
        cardsTitle: "Seine Stärken liegen in:",
        cards: [
          "der kompakten Bauweise",
          "der einfachen Bedienung",
          "der App-Integration",
          "der ausreichenden Motorleistung für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet, doch für Nutzer, die ihre tägliche Aktivität erhöhen möchten, kann es eine praktische Lösung sein."
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor & landscape workout videos in the app",
      ],

      de: [
        {
          title: "App-Steuerung und Smart-Funktionen",
          description: "Ein besonderes Highlight des Copant Walking Pads ist die Smart-App-Integration. Über eine Smartphone-App können Trainingsdaten verfolgt und analysiert werden. Dazu gehören beispielsweise zurückgelegte Distanz, Trainingszeit oder Kalorienverbrauch.",
          footer: "Darüber hinaus ermöglicht die App zusätzliche Funktionen wie virtuelle Trainingsszenarien oder die Teilnahme an digitalen Lauf-Events. Nutzer können sich mit anderen Läufern verbinden und ihr Training interaktiver gestalten."
        },
        {
          title: "Mehrere Steuerungsmöglichkeiten",
          description: "Das Gerät kann über verschiedene Methoden gesteuert werden. Neben der App ist auch eine Fernbedienung verfügbar, mit der sich Geschwindigkeit und Einstellungen bequem anpassen lassen.",
          footer: "Diese Flexibilität erleichtert die Bedienung und ermöglicht es, das Training schnell an persönliche Bedürfnisse anzupassen."
        },
        {
          title: "Stoßdämpfung und rutschfeste Lauffläche",
          description: "Das Copant Walking Pad verfügt über ein stoßdämpfendes Design und eine rutschfeste Lauffläche. Diese Konstruktion kann helfen, die Belastung auf Knie und Gelenke zu reduzieren und sorgt gleichzeitig für ein stabileres Laufgefühl.",
          footer: "Gerade bei regelmäßigem Training kann eine gute Dämpfung einen wichtigen Beitrag zum Komfort leisten."
        },
        {
          title: "Intelligente Technologie",
          description: "Das Gerät ist mit einem intelligenten Chip ausgestattet, der zukünftige Updates ermöglicht und zusätzliche Funktionen unterstützt. Dadurch bleibt das System langfristig kompatibel mit verschiedenen Smart-Geräten."
        }
      ],
    },

    model: "Raceable Walking Pad",
    logo: "/images/brands/treadmill1.jpg",

    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das Copant Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. In den letzten Jahren sind Walking Pads immer beliebter geworden, vor allem bei Menschen, die mehr Bewegung in ihren Alltag integrieren möchten, ohne dafür ein großes Fitnessgerät im Wohnzimmer aufstellen zu müssen. Im Gegensatz zu klassischen Laufbändern konzentriert sich das Copant Walking Pad vor allem auf Walking, leichtes Ausdauertraining und Bewegung während der Arbeit.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/product1brandbanner.jpg",

    pros: {
      en: [
        "Excellent shock absorption system",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Platzsparendes Design",
          description: "Einer der größten Vorteile des Copant Walking Pads ist seine kompakte Bauweise."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit genutzt. Das Copant Modell eignet sich gut dafür, da die Geschwindigkeit perfekt für langsames bis moderates Gehen ausgelegt ist."
        },
        {
          title: "Smart-Funktionen und App-Integration",
          description: "Die Möglichkeit, Trainingsdaten über eine App zu verfolgen, kann motivierend wirken und hilft vielen Nutzern, ihre Fortschritte besser zu überwachen."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist relativ einfach zu bedienen und erfordert keine komplizierte Installation. Dadurch eignet es sich auch gut für Einsteiger im Bereich Heimfitness."
        }
      ],
    },

    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit einer maximalen Geschwindigkeit von 6 km/h ist das Copant Walking Pad eher für Walking als für intensives Lauftraining gedacht."
        },
        {
          title: "Fokus auf leichtes Training",
          description: "Das Gerät richtet sich eher an Nutzer, die moderate Bewegung suchen, und weniger an ambitionierte Läufer."
        },
        {
          title: "Kleinere Trainingsfläche im Vergleich zu großen Laufbändern",
          description: "Wie bei vielen Walking Pads ist auch hier die Lauffläche kompakter als bei klassischen Fitnessstudio-Laufbändern."
        }
      ],
    },

    faq: [
      {
        question: {
          de: "Ist das Copant Walking Pad für das Homeoffice geeignet?",
        },
        answer: {
          de: "Ja, viele Nutzer verwenden Walking Pads während der Arbeit, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Kann man mit diesem Gerät joggen?",
        },
        answer: {
          de: "Die maximale Geschwindigkeit von 6 km/h eignet sich eher für Walking oder schnelles Gehen."
        }
      },
      {
        question: {
          de: "Welche Funktionen bietet die App?",
        },
        answer: {
          de: "Über die App können Trainingsdaten verfolgt und zusätzliche Trainingsfunktionen genutzt werden."
        }
      },
      {
        question: {
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          de: "Das maximale Benutzergewicht liegt bei 136 kg."
        }
      }
    ],

    verdict: {
      en: "The Copant delivers exceptional features with AI coaching, multiplayer races, and quiet motor performance.",
      de: "Das Copant Raceable Walking Pad vereint klassische Walkingpad-Funktionen mit modernem AI-Coaching und Online-Racing. Der 2,5-PS-Motor, die App-Steuerung und die gelenkschonende Lauffläche bieten ein komfortables Training für Nutzer bis 136 kg.Besonders überzeugend sind die interaktiven Funktionen: professionelle Trainingskurse,KI-Begleitung und Multiplayer-Rennen sorgen für Abwechslung und Motivation.Wer schnellere Laufgeschwindigkeiten sucht oder sich nicht mit Apps beschäftigen möchte,wird durch das begrenzte Tempo und die App-Abhängigkeit jedoch eingeschränkt",
    },

    rating: 3.5,
  },
  Merach: {
    name: "Merach",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0044.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0045.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0037.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0048-removebg-preview.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0039-removebg-preview.png",
    ],
    productDescription: {
      en: {
        intro: "The MERACH Walking Pad is a compact treadmill for home and office use, distinguished by its versatile applications. Thanks to its space-saving design, the device can be easily used even in smaller apartments.",
        cards: [
          "A special feature is the foldable design with a handrail. When the handrail is folded down, the device functions as a low-speed walking pad – ideal for users who want to stay active while working or watching TV. When the handrail is folded up, the device can be used as a classic treadmill.",
          "The maximum speed in running mode is approximately 12 km/h, which also makes moderate jogging possible.",
          "The treadmill also has a running surface of approximately 40 × 95 cm, which provides enough space for walking workouts and light running. The construction includes a multi-layer shock absorption system that can help reduce stress on knees and joints.",
          "Due to its compact design, the device is relatively easy to store and can quickly be brought out again when needed."
        ]
      },
      de: {
        intro: "Das MERACH Walking Pad ist ein kompaktes Laufband für Zuhause und Büro, das sich durch seine vielseitigen Einsatzmöglichkeiten auszeichnet. Dank seines platzsparenden Designs lässt sich das Gerät auch in kleineren Wohnungen problemlos nutzen.",
        cards: [
          "Ein besonderes Merkmal ist das klappbare Design mit Handlauf. Wenn der Handlauf heruntergeklappt ist, funktioniert das Gerät als Walking Pad mit niedriger Geschwindigkeit – ideal für Nutzer, die während der Arbeit oder beim Fernsehen aktiv bleiben möchten. Wird der Handlauf hochgeklappt, kann das Gerät als klassisches Laufband verwendet werden.",
          "Die maximale Geschwindigkeit beträgt im Laufmodus etwa 12 km/h, wodurch auch moderates Jogging möglich ist.",
          "Das Laufband verfügt außerdem über eine Lauffläche von etwa 40 × 95 cm, die ausreichend Platz für Walking-Training und lockeres Laufen bietet. Die Konstruktion enthält ein mehrschichtiges Stoßdämpfungssystem, das dabei helfen kann, die Belastung auf Knie und Gelenke zu reduzieren.",
          "Durch seine kompakte Bauweise lässt sich das Gerät relativ leicht verstauen und bei Bedarf schnell wieder hervorholen."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das MERACH Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Nutzer, die Walking und leichtes Jogging kombinieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für ambitionierte Läufer oder intensives Marathontraining."
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Vergleich verschiedener Walking Pads sollten Käufer mehrere Faktoren berücksichtigen:",
          items: [
            "maximale Geschwindigkeit",
            "Trainingsmodi",
            "Stoßdämpfung",
            "Smart-Funktionen",
            "Platzbedarf"
          ]
        },
        middleText: "Das MERACH Modell gehört zu den vielseitigeren Walking Pads, da es sowohl Walking- als auch Lauftraining unterstützt.",
        outro: "Gerade für Nutzer, die ein Gerät suchen, das sowohl Bewegung im Alltag als auch echtes Training ermöglicht, kann ein solches 3-in-1-Design ein wichtiger Vorteil sein."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das MERACH Walking Pad ist ein vielseitiges Laufband für Zuhause, das sowohl als Walking Pad als auch als kompaktes Laufband genutzt werden kann.",
        cardsTitle: "Seine größten Stärken sind:",
        cards: [
          "das 3-in-1 Design",
          "die höhere maximale Geschwindigkeit im Vergleich zu vielen Walking Pads",
          "die App-Integration und Smart-Funktionen",
          "das platzsparende Design"
        ],
        outro: "Für Nutzer, die ein flexibles Heimfitnessgerät suchen, das sowohl Walking als auch moderates Lauftraining ermöglicht, kann das MERACH Laufband eine interessante Option sein."
      }
    },
    features: {
      en: [
        "Dimensions: 127 x 56.5 x 11.5 cm",
        "Weight: 23 kg",
        "Max user weight: 120 kg",
        "Includes transport wheels for easy movement",
        "No assembly required",
        "Speed range: 1-8 km/h",
        "LED lights change color depending on speed (7 colors)",
        "Manual incline of 11.5%",
        "4 preset workout programs (P01–P04)",
        "Modern LCD display",
        "Works with the Sportstech Live app",
        "Can adjust speed, change programs, and turn LEDs on/off using the app",
        "Shows real-time training data like speed, steps, and heart rate",
        "Personalized workouts with trainers available in the app",
        "Outdoor and landscape workout videos in the app",
      ],
      de: [
        {
          title: "3-in-1 Trainingsmodus",
          description: "Ein zentrales Merkmal des MERACH Laufbands ist seine 3-in-1 Funktion. Das Gerät bietet verschiedene Trainingsmodi, die unterschiedliche Nutzungsarten ermöglichen:",
          bullets: [
            "Walking unter dem Schreibtisch",
            "leichtes Jogging",
            "normales Lauftraining",
          ],
          footer: "Diese Flexibilität macht das Gerät besonders interessant für Menschen, die ein vielseitiges Fitnessgerät für den Alltag suchen."
        },
        {
          title: "Steigungsfunktion",
          description: "Das Laufband verfügt über eine Steigung von etwa 6 %, die das Training anspruchsvoller machen kann. Eine Steigung erhöht die Trainingsintensität und kann den Kalorienverbrauch deutlich steigern.",
          footer: "Gerade bei Walking-Training kann eine moderate Steigung das Training effektiver machen, ohne dass die Geschwindigkeit stark erhöht werden muss."
        },
        {
          title: "Stoßdämpfungssystem",
          description: "Das MERACH Walking Pad nutzt ein mehrschichtiges Stoßdämpfungssystem, das Stöße beim Laufen reduziert und dadurch die Gelenke entlasten kann. Dieses System besteht aus mehreren Schichten, darunter eine rutschfeste Oberfläche und eine stoßabsorbierende Schicht."
        },
        {
          title: "App-Integration",
          description: "Das Gerät kann mit der MERACH Fitness App verbunden werden. Über die App lassen sich Trainingsdaten verfolgen und verschiedene Trainingsprogramme nutzen. Dazu gehören:",
          bullets: [
            "Trainingsstatistiken",
            "virtuelle Trainingsszenarien",
            "personalisierte Trainingspläne",
          ],
          footer: "Solche Funktionen können die Motivation erhöhen und helfen, Trainingsziele besser zu verfolgen."
        },
        {
          title: "Fernbedienung und Display",
          description: "Das Laufband wird über eine Fernbedienung oder ein LED-Display gesteuert. Das Display zeigt während des Trainings wichtige Daten wie:",
          bullets: [
            "Geschwindigkeit",
            "Trainingszeit",
            "Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Dadurch behalten Nutzer jederzeit den Überblick über ihre Aktivität."
        }
      ],
    },

    // name: 'Sportstech',
    model: "T26B1 3-in-1 Treadmill",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "Sportstech is a German fitness equipment manufacturer known for innovative home fitness solutions. The F15 treadmill represents their flagship model, combining advanced shock absorption technology with smart connectivity features.",
      de: "Das MERACH Walking Pad gehört zu den modernen Laufbändern für Zuhause, die speziell für den Einsatz in kleinen Wohnungen oder im Homeoffice entwickelt wurden. In den letzten Jahren sind solche Geräte immer beliebter geworden, da viele Menschen versuchen, mehr Bewegung in ihren Alltag zu integrieren, ohne regelmäßig ins Fitnessstudio gehen zu müssen. Im Gegensatz zu klassischen Laufbändern kombiniert das MERACH Modell mehrere Trainingsmöglichkeiten in einem Gerät.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/Merachbrandimg2.jpg",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Excellent shock absorption system 111",
        "Powerful and quiet motor",
        "Smart app integration",
        "Foldable space-saving design",
        "Good value for money",
      ],
      de: [
        {
          title: "Vielseitige Nutzung",
          description: "Durch die Kombination aus Walking-Pad-Modus und Laufband-Modus ist das MERACH Gerät vielseitiger als viele andere kompakte Laufbänder."
        },
        {
          title: "Gute Option für Homeoffice",
          description: "Viele Nutzer verwenden Walking Pads während der Arbeit. Mit seiner niedrigen Geschwindigkeit und kompakten Bauweise eignet sich das MERACH Modell gut für diesen Einsatz."
        },
        {
          title: "App-Integration und moderne Technik",
          description: "Die Verbindung mit der MERACH App ermöglicht eine detaillierte Analyse des Trainings und zusätzliche Trainingsprogramme."
        },
        {
          title: "Stoßdämpfung und Komfort",
          description: "Das Stoßdämpfungssystem kann helfen, Gelenke zu schonen und das Training angenehmer zu gestalten."
        }
      ],
    },
    cons: {
      en: [
        "Assembly can be challenging",
        "Limited preset programs",
        "App interface could be improved",
      ],
      de: [
        {
          title: "Begrenzte Trainingsfläche",
          description: "Die Lauffläche ist kompakter als bei großen Laufbändern. Für intensives Lauftraining oder sehr große Nutzer könnte sie etwas klein sein."
        },
        {
          title: "Fokus auf Heimtraining",
          description: "Das Gerät ist vor allem für den Heimgebrauch gedacht und weniger für intensives Fitnessstudio-Training."
        },
        {
          title: "Kein Ersatz für professionelle Laufbänder",
          description: "Wer regelmäßig lange Strecken oder sehr intensives Lauftraining absolviert, wird möglicherweise ein leistungsstärkeres Laufband bevorzugen."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem MERACH Walking Pad joggen?",
        },
        answer: {
          de: "Ja. Mit hochgeklapptem Handlauf kann das Gerät Geschwindigkeiten von bis zu etwa 12 km/h erreichen."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Im Walking-Modus kann das Gerät mit niedriger Geschwindigkeit verwendet werden, was ideal für Bewegung während der Arbeit ist."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt unter anderem Geschwindigkeit, Zeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Kann das Laufband mit einer App verbunden werden?",
        },
        answer: {
          de: "Ja. Das Gerät kann mit der MERACH Fitness App synchronisiert werden, um Trainingsdaten zu verfolgen und Trainingsprogramme zu nutzen."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das Merach T26B1 bietet ein leises und platzsparendes Laufband-Erlebnis für den Alltag.Der stabile Stahlrahmen, die flexible 3-in-1-Nutzung und die komfortable Bedienung machen es zur optimalen Wahl für das Homeoffice oder kleine Wohnungen.Ambitionierte Läufer, die höhere Geschwindigkeiten oder längere Laufflächen benötigen,sollten sich allerdings nach größeren Modellen umsehen",
    },
    rating: 3.4,
    // buyLink: ''
  },
  Cursor: {
    name: "Cursor",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/81juYFfAB9L._AC_SL1500_-removebg-preview.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview+(1).png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/Cursor-fitness-walking-pad-removebg-preview.png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curserrr-removebg-preview.png",
    ],
    productDescription: {
      en: {
        intro: "The Cursor Walking Pad is a compact treadmill for home and office use, particularly designed for users looking for a space-saving fitness device.",
        cards: [
          "A key feature of many Cursor models is the 2.5 HP motor, which provides sufficient power for walking workouts while operating relatively quietly. This combination of performance and low noise is especially important for users who want to use the device while working or in environments with limited sound insulation.",
          "The treadmill can reach speeds of approximately 0.5 to 6 km/h, making it ideal for walking workouts or light movement.",
          "Many models also include a shock absorption system and a multi-layer running surface, which can help reduce strain on the knees and joints. This design provides a more comfortable walking experience and makes longer training sessions more enjoyable.",
          "Additionally, Cursor walking pads feature a compact design for easy storage. Many devices can be stored under furniture or behind doors, making them especially suitable for smaller living spaces."
        ]
      },
      de: {
        intro: "Das Cursor Walking Pad ist ein kompaktes Laufband für Zuhause und Büro, das besonders für Nutzer entwickelt wurde, die ein platzsparendes Fitnessgerät suchen.",
        cards: [
          "Ein zentrales Merkmal vieler Cursor-Modelle ist der 2,5-PS-Motor, der ausreichend Leistung für Walking-Training bietet und gleichzeitig relativ leise arbeitet. Diese Kombination aus Leistung und Geräuscharmut ist besonders wichtig für Nutzer, die das Gerät während der Arbeit oder in Wohnungen mit begrenzter Geräuschisolierung verwenden möchten.",
          "Das Laufband kann Geschwindigkeiten von etwa 0,5 bis 6 km/h erreichen und ist damit ideal für Walking-Training oder leichtes Gehen geeignet.",
          "Viele Modelle verfügen außerdem über eine Stoßdämpfung und eine mehrschichtige Lauffläche, die dabei helfen kann, die Belastung auf Knie und Gelenke zu reduzieren. Diese Konstruktion sorgt für ein angenehmeres Laufgefühl und kann längere Trainingseinheiten komfortabler machen.",
          "Darüber hinaus verfügen Cursor-Walking-Pads über ein kompaktes Design, das eine einfache Lagerung ermöglicht. Viele Geräte können unter Möbeln oder hinter Türen verstaut werden, wodurch sie besonders für kleinere Wohnungen geeignet sind."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Cursor Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Schritte im Alltag sammeln möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für:",
        notSuitableFor: [
          "ambitionierte Läufer",
          "intensives Lauftraining",
          "lange Cardio-Sessions mit hoher Geschwindigkeit"
        ]
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Motorleistung",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "zusätzliche Funktionen"
          ]
        },
        middleText: "Das Cursor Walking Pad positioniert sich im Markt als kompaktes und benutzerfreundliches Walking Pad für Alltag und Homeoffice.",
        outro: "Viele Käufer entscheiden sich für solche Geräte, weil sie Bewegung in ihren Alltag integrieren möchten, ohne ein großes Fitnessgerät zu kaufen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Cursor Walking Pad ist ein kompaktes Laufband, das besonders für Walking-Training, Homeoffice-Nutzung und platzsparendes Heimtraining entwickelt wurde.",
        cardsTitle: "Zu den wichtigsten Stärken gehören:",
        cards: [
          "kompakte Bauweise",
          "relativ leiser Motor",
          "einfache Bedienung",
          "Stoßdämpfung für komfortables Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet, doch für Nutzer, die ihre tägliche Aktivität erhöhen möchten, bietet das Cursor Walking Pad eine praktische und platzsparende Lösung."
      }
    },
    features: {
      en: [
        "Slim, space-saving foldable frame",
        "Quiet motor suitable for office environments",
        "LED display for time, steps, speed, and calories",
        "Remote-control operation",
        "Walking-friendly speed range",
        "Anti-slip belt surface",
        "Easy transportation wheels",
        "Minimal assembly required",
        "Safety auto-stop feature",
        "App-free operation",
        "Lightweight build",
        "Easy to store under desks or sofas",
        "Basic tracking metrics",
      ],
      de: [
        {
          title: "Kompakte Bauweise",
          description: "Ein Hauptvorteil des Cursor Walking Pads ist seine kompakte Konstruktion. Viele Modelle sind bewusst so gebaut, dass sie wenig Platz benötigen und problemlos in kleinen Wohnungen genutzt werden können.",
          footer: "Diese Bauweise macht das Gerät besonders interessant für Menschen, die kein großes Fitnessgerät dauerhaft im Raum stehen haben möchten."
        },
        {
          title: "Leistungsstarker und leiser Motor",
          description: "Der 2,5-PS-Motor sorgt für eine stabile Leistung während des Trainings und arbeitet gleichzeitig relativ leise. Dadurch kann das Gerät auch während der Arbeit oder beim Fernsehen verwendet werden, ohne störende Geräusche zu verursachen."
        },
        {
          title: "Stoßdämpfungssystem",
          description: "Viele Cursor-Walking-Pads verfügen über eine mehrschichtige Lauffläche, die Stöße beim Gehen absorbieren kann. Diese Stoßdämpfung reduziert die Belastung auf Knie und Gelenke und erhöht den Trainingskomfort."
        },
        {
          title: "LED-Display und Trainingsdaten",
          description: "Das integrierte LED-Display zeigt wichtige Trainingsinformationen an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Distanz",
            "Trainingszeit",
            "Kalorienverbrauch",
          ],
          footer: "Diese Daten helfen Nutzern, ihre Fortschritte zu verfolgen und ihre Trainingsroutine anzupassen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Cursor-Walking-Pads werden über eine Fernbedienung gesteuert. Dadurch können Nutzer Geschwindigkeit und Einstellungen bequem anpassen, ohne ihr Training unterbrechen zu müssen."
        }
      ],
    },

    // name: 'Sportstech',
    model: "Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor Walking Pad is a compact, foldable walking treadmill designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das Cursor Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Walking Pads sind in den letzten Jahren immer populärer geworden, da viele Menschen versuchen, mehr Bewegung in ihren Alltag zu integrieren, ohne ein großes Fitnessgerät aufstellen zu müssen. Das Cursor Walking Pad gehört zu den Geräten, die besonders auf Walking-Training und Bewegung während der Arbeit ausgerichtet sind. Mit einer Geschwindigkeit von etwa 0,5 bis 6 km/h eignet sich das Laufband vor allem für Gehen oder leichtes Ausdauertraining. Gerade im Homeoffice kann ein Walking Pad eine praktische Lösung sein. ",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/wmremove-transformed.png",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Very compact and easy to store",
        "Quiet operation — doesn’t disturb others",
        "Beginner-friendly and simple to use",
      ],
      de: [
        {
          title: "Kompakt und platzsparend",
          description: "Das Cursor Walking Pad ist deutlich kleiner als traditionelle Laufbänder und eignet sich daher besonders für Wohnungen mit wenig Platz."
        },
        {
          title: "Gute Lösung für Homeoffice",
          description: "Viele Nutzer verwenden Walking Pads während der Arbeit. Das Cursor Modell ist für genau diesen Einsatz entwickelt worden."
        },
        {
          title: "Leiser Motor",
          description: "Dank des brushless-Motors arbeitet das Gerät relativ geräuscharm und eignet sich daher auch für Wohnungen oder Büros."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Laufband ist in der Regel sofort einsatzbereit und benötigt nur wenig Einrichtung."
        }
      ],
    },
    cons: {
      en: [
        "Limited speed range — not suitable for jogging",
        "Cushioning is minimal for longer walks",
        "Display features are quite basic",
        "Belt length may feel short for taller users",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Mit einer maximalen Geschwindigkeit von etwa 6 km/h eignet sich das Gerät eher für Walking als für intensives Lauftraining."
        },
        {
          title: "Kleinere Lauffläche",
          description: "Die Lauffläche ist kompakter als bei klassischen Laufbändern, was für größere Nutzer eventuell etwas weniger komfortabel sein kann."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Modelle bieten weniger vorinstallierte Trainingsprogramme als größere Fitnessgeräte."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Cursor Walking Pad joggen?",
        },
        answer: {
          de: "Die meisten Cursor Walking Pads sind für Walking und leichtes Training ausgelegt und erreichen Geschwindigkeiten bis etwa 6 km/h."
        }
      },
      {
        question: {
          de: "Ist das Gerät laut?",
        },
        answer: {
          de: "Der Motor arbeitet relativ leise und ist daher gut für Wohnungen oder Büros geeignet."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten werden angezeigt?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Viele Modelle sind kompakt und lassen sich leicht unter Möbeln oder in kleinen Räumen verstauen."
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite delivers exceptional value with its advanced cushioning system and solid build quality. While it may lack some premium features, it excels in the fundamentals that matter most for home fitness.",
      de: "Das CURSOR Walking Pad bietet eine solide Performance für leichtes bis moderates Training und punktet vor allem mit seiner 9-%-Steigung und der hohen Tragkraft. Für Nutzer, die ein flaches, preiswertes Walking Pad für regelmäßiges Walken oder gelegentliches Joggen suchen, ist es eine gute Wahl. Allerdings zeigt das Gerät Schwächen bei der Steigungsverstellung, der kurzen Lauffläche und der Stabilität bei höherem Tempo, weshalb es für anspruchsvollere Läufer weniger geeignet ist.",
    },
    rating: 3.8,
    // buyLink: ''
  },
  Cazvian: {
    name: "Cazvian",
    images: [
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfinal.jpg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfull (1).jpg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/Cazviansideview.jpg",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/wmremove-transformed (1).png",
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/Untitled design (1).png",
    ],
    productDescription: {
      de: {
        intro: "Das Cazvian Walking Pad ist ein platzsparendes Laufband für Zuhause, das sich durch seine einfache Nutzung und kompakte Konstruktion auszeichnet.",
        cards: [
          "Die Bauweise des Geräts ist darauf ausgelegt, möglichst wenig Platz zu beanspruchen. Dadurch lässt sich das Laufband auch in kleineren Wohnungen problemlos nutzen. Viele Nutzer entscheiden sich bewusst für Walking Pads, weil sie sich nach dem Training leicht verstauen lassen und nicht dauerhaft im Raum stehen müssen.",
          "Das Laufband bietet einen Geschwindigkeitsbereich für Walking-Training, der sowohl gemütliches Gehen als auch schnelleres Walking ermöglicht. Diese Flexibilität erlaubt es Nutzern, ihre Trainingsintensität individuell anzupassen.",
          "Das Gerät verfügt außerdem über ein LED-Display, das wichtige Trainingsinformationen anzeigt. Dazu gehören unter anderem Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch.",
          "Durch seine einfache Konstruktion eignet sich das Cazvian Walking Pad besonders für Menschen, die ein unkompliziertes Fitnessgerät suchen, das schnell einsatzbereit ist."
        ]
      }
    },
    targetAudience: {
      de: {
        title: "Für wen ist das Produkt geeignet?",
        suitableForLabel: "Das Cazvian Walking Pad eignet sich besonders für:",
        suitableFor: [
          "Homeoffice-Nutzer",
          "Menschen mit wenig Platz in der Wohnung",
          "Einsteiger im Heimfitnessbereich",
          "Personen, die mehr Bewegung in ihren Alltag integrieren möchten"
        ],
        notSuitableForLabel: "Weniger geeignet ist das Gerät für Nutzer, die intensives Lauftraining oder hohe Geschwindigkeiten benötigen."
      }
    },
    comparisonContext: {
      de: {
        title: "Vergleichs- und Kaufkontext",
        box1: {
          heading: "Beim Kauf eines Walking Pads sollten mehrere Faktoren berücksichtigt werden:",
          items: [
            "maximale Geschwindigkeit",
            "Größe der Lauffläche",
            "Geräuschentwicklung",
            "Zusatzfunktionen wie Apps oder Trainingsprogramme",
            "Platzbedarf"
          ]
        },
        middleText: "Das Cazvian Walking Pad gehört zu den einfacheren und preisorientierten Walking Pads auf dem Markt. Für viele Nutzer reicht diese Ausstattung völlig aus, insbesondere wenn das Gerät hauptsächlich für Walking-Training genutzt wird.",
        outro: "Wer dagegen ein Gerät für intensives Lauftraining oder sehr lange Trainingseinheiten sucht, sollte möglicherweise ein leistungsstärkeres Laufband in Betracht ziehen."
      }
    },
    conclusionEvaluation: {
      de: {
        title: "Fazit / Bewertung",
        intro: "Das Cazvian Walking Pad ist ein kompaktes Laufband, das besonders für alltägliche Bewegung, Homeoffice-Nutzung und platzsparendes Heimtraining entwickelt wurde.",
        cardsTitle: "Seine wichtigsten Stärken sind:",
        cards: [
          "kompakte Bauweise",
          "einfache Bedienung",
          "grundlegende Trainingsfunktionen",
          "geeignet für Walking-Training"
        ],
        outro: "Für intensives Lauftraining ist das Gerät weniger geeignet, doch für Nutzer, die mehr Bewegung in ihren Alltag integrieren möchten, kann es eine praktische Lösung sein."
      }
    },
    features: {
      en: [
        "User-friendly control panel",
        "Compact footprint",
        "Suitable for light daily walking",
        "Low-noise motor",
        "Basic speed adjustment",
        "Basic calorie & distance tracking",
        "Shock-reducing walking surface",
        "Transport wheels for mobility",
        "Foldable handle (in some versions)",
        "Easy setup",
        "Simple maintenance",
        "Energy-efficient motor",
        "Smooth belt movement",
      ],
      de: [
        {
          title: "Kompaktes Design",
          description: "Ein Hauptmerkmal des Cazvian Walking Pads ist seine kompakte Bauweise. Walking Pads sind speziell dafür entwickelt, wenig Platz zu benötigen und leicht zu transportieren zu sein.",
          footer: "Gerade in kleineren Wohnungen oder Büros kann ein großes Laufband schnell unpraktisch werden. Das Cazvian Modell bietet hier eine platzsparende Alternative."
        },
        {
          title: "Stoßdämpfende Laufoberfläche",
          description: "Das Laufband verfügt über eine stoßdämpfende Lauffläche, die Stöße beim Gehen absorbieren kann. Eine solche Konstruktion kann dazu beitragen, die Belastung auf Knie und Gelenke zu reduzieren.",
          footer: "Für Nutzer, die regelmäßig Walking-Training durchführen möchten, ist dieser Komfortfaktor besonders wichtig."
        },
        {
          title: "LED-Display für Trainingsdaten",
          description: "Das integrierte Display zeigt verschiedene Trainingswerte an, darunter:",
          bullets: [
            "Geschwindigkeit",
            "Trainingszeit",
            "zurückgelegte Distanz",
            "Kalorienverbrauch",
          ],
          footer: "Diese Informationen geben Nutzern einen Überblick über ihre Aktivität und helfen dabei, Fortschritte zu verfolgen."
        },
        {
          title: "Fernbedienung zur Steuerung",
          description: "Viele Walking Pads, darunter auch das Cazvian Modell, werden über eine Fernbedienung gesteuert. Damit können Nutzer Geschwindigkeit und Einstellungen bequem anpassen.",
          footer: "Diese einfache Bedienung macht das Gerät besonders für Einsteiger attraktiv."
        }
      ],
    },

    // name: 'Sportstech',
    model: "– Walking Pad für Zuhause & Büro",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Treadlite 2.0 is a lightweight treadmill designed for home users who want straightforward daily walking and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance.",
      de: "Das Cazvian Walking Pad ist ein kompaktes Laufband, das speziell für den Einsatz zu Hause oder im Büro entwickelt wurde. Walking Pads gehören zu den beliebtesten Heimfitness-Geräten der letzten Jahre, da sie eine einfache Möglichkeit bieten, Bewegung in den Alltag zu integrieren. Im Gegensatz zu großen Fitnessstudio-Laufbändern konzentrieren sich Walking Pads vor allem auf Gehen, leichtes Ausdauertraining und Bewegung während der Arbeit. Genau für diese Art der Nutzung ist auch das Cazvian Walking Pad konzipiert. Viele Menschen verbringen einen großen Teil ihres Tages im Sitzen, insbesondere im Homeoffice.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/flyerimagecazian (1).jpg",
    // features: {
    //   en: 'The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech F15 verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        "Lightweight and easy to move around",
        "Good for beginners",
        "Quiet and minimalistic design",
      ],
      de: [
        {
          title: "Platzsparendes Fitnessgerät",
          description: "Das Cazvian Walking Pad benötigt deutlich weniger Platz als ein klassisches Laufband und eignet sich daher besonders für kleine Wohnungen."
        },
        {
          title: "Gute Option für Homeoffice",
          description: "Walking Pads werden häufig während der Arbeit verwendet. Das Cazvian Modell ist ideal für langsames bis moderates Gehen, wodurch es sich gut für diesen Zweck eignet."
        },
        {
          title: "Einfache Bedienung",
          description: "Das Gerät ist unkompliziert aufgebaut und kann ohne komplexe Einstellungen genutzt werden."
        },
        {
          title: "Unterstützt tägliche Bewegung",
          description: "Viele Menschen nutzen Walking Pads, um ihre tägliche Aktivität zu erhöhen und mehr Schritte zu sammeln."
        }
      ],
    },
    cons: {
      en: [
        "Low max speed not suitable for fitness enthusiasts",
        "Display and features are quite basic",
        "Cushioning support could be improved",
      ],
      de: [
        {
          title: "Begrenzte Höchstgeschwindigkeit",
          description: "Wie viele Walking Pads ist auch dieses Modell vor allem für Gehen ausgelegt und weniger für intensives Lauftraining geeignet."
        },
        {
          title: "Kleinere Trainingsfläche",
          description: "Die Lauffläche ist kompakter als bei großen Laufbändern, was für größere Nutzer eventuell etwas weniger komfortabel sein kann."
        },
        {
          title: "Weniger Trainingsprogramme",
          description: "Einige Walking Pads bieten nur grundlegende Trainingsfunktionen ohne umfangreiche Programme."
        }
      ],
    },
    faq: [
      {
        question: {
          de: "Kann man mit dem Cazvian Walking Pad joggen?",
        },
        answer: {
          de: "Das Gerät ist hauptsächlich für Walking und leichtes Training gedacht."
        }
      },
      {
        question: {
          de: "Ist das Laufband für Homeoffice geeignet?",
        },
        answer: {
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu integrieren."
        }
      },
      {
        question: {
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und Kalorienverbrauch an."
        }
      },
      {
        question: {
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          de: "Ja. Dank seiner kompakten Bauweise lässt sich das Laufband relativ einfach verstauen."
        }
      }
    ],
    verdict: {
      en: "The Cazvian Treadlite 2.0 performs well for short, simple workouts. It’s suitable for users who prefer occasional walking but may feel too limited for those looking for long-duration training, higher speeds, or more versatile workout features.",
      de: "Das Cazvian Walking Pad ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für Walking-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
    },
    rating: 3.7,
    // buyLink: ''
  },
};

export async function generateStaticParams() {
  const slugs = Object.keys(brandData);

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const locale = "en";
  const brand = brandData[slug];

  if (!brand) {
    return {
      title: "Brand Not Found",
      description: "The requested brand page could not be found.",
      icons: {
        icon: "https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png",
      },
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, treadmill review, fitness equipment test`,
    icons: {
      icon: "https://walkingpadassets.s3.us-east-1.amazonaws.com/fav-icon.png",
    },
  };
}

export default function BrandPage({ params }) {
  const { slug } = params;
  const brand = brandData[slug];

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <BrandOverview brand={brand} />
      <ProductDescription brand={brand} />
      <ProductDetails brand={brand} />
      <ProsAndCons brand={brand} />
      <TargetAudience brand={brand} />
      <ComparisonContext brand={brand} />
      <FinalVerdict brand={brand} />
      <UserFeedback brand={brand} />
      <BrandFAQ brand={brand} />
      <ConclusionEvaluation brand={brand} />
    </div>
  );
}
