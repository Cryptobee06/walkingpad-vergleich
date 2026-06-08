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
      en: {
        intro: "The Sportstech sWalk Lite is a motorized walking pad for home use, specifically designed for space-saving workouts.",
        cards: [
          "The device has a speed range of 1 to 6 km/h, allowing both slow walking and faster-paced walking. This speed range is ideal for moderate exercise sessions or training while working.",
          "The treadmill supports a maximum user weight of 120 kg, providing a stable training platform for many users.",
          "With dimensions of approximately 122 × 53 × 12 cm, the device is one of the more compact treadmills on the market. Its flat design allows it to be stored under furniture or against a wall after use.",
          "Additionally, the sWalk Lite features transport wheels, making it relatively easy to move."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Sportstech sWalk Lite is especially suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals who want to incorporate more movement into their daily routine"
        ],
        notSuitableForLabel: "Less suitable for:",
        notSuitableFor: [
          "Ambitious runners",
          "Intensive running training",
          "Long, high-speed cardio sessions"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Running surface size",
            "Noise level",
            "Additional features, such as apps or training programs",
            "Space requirements"
          ]
        },
        middleText: "The Sportstech sWalk Lite positions itself as a compact and modern walking pad for everyday training.",
        outro: "Its combination of app integration, LED display, and space-saving design makes it particularly attractive for users seeking a simple fitness device for daily movement."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech sWalk Lite is a compact walking pad designed for everyday movement, home office training, and space-saving fitness solutions.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "LED display with training data",
          "App integration",
          "Easy operation",
          "Good stability"
        ],
        outro: "However, it is less suitable for intensive running workouts. For users who want to integrate more movement into their daily routine, the sWalk Lite offers a practical and space-efficient solution."
      }
    },
    features: {
      en: [
        {
          title: "LED Display with Training Data",
          description: " A standout feature of the sWalk Lite is its patented LED display, which shows real-time training data such as speed, steps, and heart rate.The LED display also changes color depending on the speed. This visual feature not only enhances the design but can also serve as motivation during workouts.",
        },
        {
          title: "Connection with the Sportstech Live App",
          description: " The walking pad can be connected via Bluetooth to the Sportstech Live App. Through the app, users can track training data and access various workout programs.The app offers features such as:",
          bullets: [
            "Training statistics",
            "Personalized recommendations",
            "Virtual training routes",
            "Community challenges",
          ],
          footer: "These features can increase motivation and make workouts more engaging."
        },
        {
          title: "Four Training Programs",
          description: " The sWalk Lite includes four pre-installed training programs with different speed profiles. These programs help structure workouts more effectively.",

        },
        {
          title: "Manual Incline Function",
          description: "The device also features a manual incline of approximately 6%, which can be adjusted using foldable incline supports. This incline increases workout intensity and activates additional muscle groups.",

        },
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "sWalk Lite",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The WalkMate is a compact treadmill for home use, specifically designed for limited living spaces and flexible usage. Its slim design makes it easy to store and bring out when needed.With dimensions of approximately 109.7 × 52.1 × 10.9 cm, the device is among the flatter walking pads on the market. This low height not only makes it easier to store under furniture or behind doors but also appeals to users who want to move it between rooms regularly.The treadmill weighs around 15.8 kg and features built-in transport wheels, making it relatively easy to move. This mobility is a key advantage compared to traditional treadmills, which are often much heavier and require a permanent setup location.The maximum user weight is 120 kg, making it suitable for a wide range of users.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/sportstech-banner.webp",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "Thanks to its flat construction, the sWalk Lite is easy to store and is ideal for homes with limited space."
        },
        {
          title: "Great Solution for Home Office",
          description: "Walking pads like the sWalk Lite are perfect for people who want to stay active while working."
        },
        {
          title: "App Integration and Modern Features",
          description: "The connection with the Sportstech Live App provides additional training options and allows detailed analysis of workout data."
        },
        {
          title: "Durable Build Quality",
          description: "Many user reviews highlight the device’s sturdy construction and solid build quality."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of 6 km/h, the device is more suited for walking workouts rather than intensive running."
        },
        {
          title: "Fewer Training Programs Compared to Larger Treadmills",
          description: "The device offers four programs, while larger treadmills often include significantly more training modes."
        },
        {
          title: "Focus on Home Use",
          description: "The sWalk Lite is mainly designed for home use and is less suitable for intensive gym-level training."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "What speed does the sWalk Lite offer?",
          de: "Welche Geschwindigkeit bietet das sWalk Lite?",
        },
        answer: {
          en: "The device reaches speeds of 1 to 6 km/h, which is ideal for walking workouts.",
          de: "Das Gerät erreicht Geschwindigkeiten von 1 bis 6 km/h, was ideal für Gehtraining ist.",
        }
      },
      {
        question: {
          en: "How much weight can the treadmill support?",
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          en: "The maximum user weight is 120 kg.",
          de: "Das maximale Benutzergewicht beträgt 120 kg.",
        }
      },
      {
        question: {
          en: "Does the treadmill have an incline?",
          de: "Hat das Laufband eine Steigung?",
        },
        answer: {
          en: "Yes, it features a manual incline of approximately 6%.",
          de: "Ja, es verfügt über eine manuelle Steigung von ca. 6 %.",
        }
      },
      {
        question: {
          en: "Can the treadmill be connected to an app?",
          de: "Kann das Laufband mit einer App verbunden werden?",
        },
        answer: {
          en: "Yes, the sWalk Lite can be connected via Bluetooth to the Sportstech Live App.",
          de: "Ja, das sWalk Lite kann über Bluetooth mit der Sportstech Live App verbunden werden.",
        }
      }
    ],
    verdict: {
      en: "The Sportstech sWalk Lite stands out in the walking pad comparison with its superior cushioning, solid build, and thoughtful smart features. While it may lack some advanced presets, it excels in core areas essential for home fitness: comfort, performance, and smart integration.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
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
      en: {
        intro: "The Citysports Walking Pad is a motorized treadmill for home use, specifically designed for space-saving workouts.",
        cards: [
          "Its construction is optimized to occupy minimal space, making it suitable even for smaller apartments. Many users prefer walking pads because they can be easily stored after use instead of taking up permanent space in a room.",
          "The treadmill offers a speed range suitable for walking workouts, allowing both relaxed walking and faster-paced movement. This flexibility enables users to adjust their training intensity individually.",
          "The device also features an LED display that shows key workout data, including: Speed, Training time, Distance covered, and Calories burned. These features allow users to track their activity at all times."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Citysports Walking Pad is especially suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals who want to incorporate more movement into their daily routine"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Ambitious runners",
          "Intensive running training",
          "Long, high-speed cardio sessions"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Size of the running surface",
            "Noise level",
            "Additional features such as apps or training programs",
            "Space requirements"
          ]
        },
        middleText: "The Citysports Walking Pad is positioned as an affordable and basic option in the market. For many users, these features are sufficient, especially if the device is mainly used for walking workouts.",
        outro: "However, those looking for intensive running training or longer sessions may need a more powerful treadmill."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Citysports Walking Pad is a compact treadmill designed for daily movement, home office use, and space-saving home workouts.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "Ease of use",
          "Basic training features",
          "Suitable for walking workouts"
        ],
        outro: "It is not ideal for intensive running training. However, for users looking to incorporate more movement into their daily routine, the Citysports Walking Pad is a practical and space-efficient solution."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "A major feature of the Citysports Walking Pad is its compact construction. Walking pads are intentionally designed to take up minimal space and be easy to store.Especially in smaller apartments or offices, a large treadmill can be impractical. The Citysports model offers a space-saving alternative.",
        },
        {
          title: "Quiet Motor Operation",
          description: " The treadmill is equipped with a relatively quiet motor, allowing it to be used while working or watching TV. This is particularly important for users who utilize walking pads in a home office setting.",

        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " The Citysports Walking Pad includes a shock-absorbing surface that helps reduce impact while walking. This design can help minimize stress on the knees and joints.Good cushioning contributes significantly to comfort, especially during regular walking workouts.",

        },
        {
          title: "LED Display for Training Data",
          description: " The integrated display shows important workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "This information helps users monitor progress and adjust their routines."

        },
        {
          title: "Remote Control Operation",
          description: " The device is operated via a remote control, allowing users to easily adjust speed and settings.This simple operation makes the walking pad particularly beginner-friendly.",
        },
      ],
      de: [
        "Intelligente LED-Konsole",
        "Klappbares Design",
        "Dämpfungssystem",
        "Leistungsstarker Motor",
        "Geräumige Lauffläche",
        "Leistungsstarker Motor mit 440 W",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "Mit Sicherheits-Handlauf",
        "Wartungsarm",
      ],
    },

    model: "CS-WP6",
    logo: "/images/brands/nordictrack-logo.png",
    description: {
      en: "Citysports brings functionality and convenience to your home or office workout routine with the CS-WP6 Walking Pad. Built for quiet operation and compact storage, it’s a smart choice for users looking to stay active while working or managing tight spaces.",
      de: "Das Citysports CS-WP6 Walking Pad ist ein beliebter Vertreter im Bereich Under-DeskTreadmills, häufig in Walking Pad-Tests und Laufband-Kaufberatung genannt. Ideal für Homeoffice oder begrenzten Raum, punktet es mit kompakter Bauweise, klappbarer Unterbringung und einem attraktiven Preis-Leistungs-Verhältnis.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/nor-banner.jpg",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Citysports Walking Pad requires significantly less space than a traditional treadmill, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Walking pads are often used while working, and this model is well-suited for that purpose."
        },
        {
          title: "Easy to Use",
          description: "The device can be set up quickly and does not require complicated configurations."
        },
        {
          title: "Supports Daily Activity",
          description: "Many users use walking pads to increase daily movement and step count."
        }
      ],
      de: [
        "Geräuscharmer Betrieb",
        "Kompakte Maße ",
        "Bluetooth & Display ",
        "Guter Preis ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of about 6 km/h, the device is more suitable for walking than for intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "As with most walking pads, the running surface is more compact compared to traditional treadmills."
        },
        {
          title: "Fewer Training Programs",
          description: "Some models offer only basic functions without advanced workout programs."
        }
      ],
      de: [
        "Ideal für Homeoffice & leises Training",
        "Perfekt für kleine Räume & Wohnbereiche",
        "Komfort & Motivation beim Training",
        "Top Budget-Option im Walkingpad-Test",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Citysports Walking Pad?",
          de: "Kann man auf dem Citysports Walking Pad joggen?",
        },
        answer: {
          en: "The device is mainly designed for walking and light workouts.",
          de: "Das Gerät ist hauptsächlich für Gehen und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the treadmill suitable for home office use?",
          de: "Ist das Laufband für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. Walking pads are commonly used during work to increase daily activity.",
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um die tägliche Aktivität zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Citysports CS-WP6 stands out as an affordable, fuss-free walking pad that fits small spaces without sacrificing quiet, reliable performance. It’s ideal for anyone looking to stay active inside, such as professionals working from home, light users, or first-time buyers.",
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
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Kiddoza Walking Pad is particularly suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals looking to incorporate more movement into their daily routine"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Serious runners",
          "Intensive running workouts",
          "Long, high-speed cardio sessions"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Size of the running surface",
            "Noise level",
            "Additional features",
            "Space requirements"
          ]
        },
        middleText: "The Kiddoza Walking Pad belongs to the simpler category of walking pads for home use. For many users, this level of functionality is entirely sufficient—especially if the device is primarily used for walking workouts.",
        outro: "However, those looking for intense running sessions or extended training may want to consider a more powerful treadmill."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Kiddoza Walking Pad is a compact treadmill designed for everyday movement, home office workouts, and space-saving home fitness.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "Ease of use",
          "Basic training features",
          "Suitable for walking workouts"
        ],
        outro: "It is less suitable for intensive running training. However, for users who want to integrate more movement into their daily routine, the Kiddoza Walking Pad is a practical and space-efficient solution."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "One of the main features of the Kiddoza Walking Pad is its space-saving construction. Walking pads are specifically designed to occupy minimal space and be easy to store.In smaller apartments, large treadmills can be impractical. The Kiddoza model provides a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The treadmill features a shock-absorbing surface that reduces impact while walking, helping to minimize strain on knees and joints.This cushioning can significantly improve comfort, especially during regular walking workouts.",
        },
        {
          title: "LED Display for Training Data",
          description: "The integrated display shows various workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These details give users a clear overview of their activity."
        },
        {
          title: "Remote Control Operation",
          description: "Many walking pads—including the Kiddoza model—are operated via remote control, allowing users to adjust speed and settings conveniently without interrupting their workout.",
        },
      ],
      de: [
        "4 % Steigung für bessere Fettverbrennung",
        "Leiser und leistungsstarker 2,5-PS-Motor",
        "Tragkraft bis zu 120 kg",
        "Fortschrittliches Stoßdämpfungssystem",
        "8 Silikonpads + 2 Dämpfer + 5-lagiges Anti-Rutsch-Walkingpad",
        "LCD-Display zeigt Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Duale Steuerung: Fernbedienung + Mobile App",
        "Kompakt & leicht (20 kg)",
        "Einfach unter Sofa/Bett/Schreibtisch verstaubar",
        "Keine Montage nötig – sofort einsatzbereit",
        "2-in-1 Geh- und Joggingmodus",
        "Geschwindigkeitsbereich: 1–6 km/h",
        "1 Jahr Garantie mit lebenslangem technischen Support",
      ],
    },
    model: "Under desk walking pad",
    logo: "/images/brands/proform-logo.png",
    description: {
      en: "Kiddoza brings versatility and innovation to your fitness routine with their 2-in-1 foldable walking pad treadmill—perfect for home workouts, office use, or small-space living.",
      de: "kiddoza,  ist das optimale Walking Pad für Zuhause, das hochwertige Ausstattung zum fairen Preis bietet. Mit iFit-Kompatibilität, smarter Steuerung und starker Leistung ist es eine Top-Wahl für alle, die ein leises Laufband unter dem Schreibtisch suchen.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/proform-banner.webp",

    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "The Kiddoza Walking Pad is much more compact than traditional treadmills, making it ideal for homes with limited space."
        },
        {
          title: "Great for Home Office Use",
          description: "Walking pads are often used while working. The Kiddoza model is suitable for slow to moderate walking, making it practical for use during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device is simple to operate and does not require complex setup or adjustments."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users use walking pads to increase their daily activity and step count."
        }
      ],
      de: [
        "Starke Motorleistung",
        "Gefälle- und Steigungsfähigkeit",
        "Gutes Dämpfungssystem",
        "iFit-Integration enthalten",
        "Wettbewerbsfähige Preisgestaltung",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like many walking pads, this model is mainly intended for walking rather than intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The walking area is more compact compared to large gym treadmills."
        },
        {
          title: "Fewer Training Programs",
          description: "Some walking pads offer only basic functions without advanced training programs."
        }
      ],
      de: [
        "Kleinerer Touchscreen als Premium-Modelle",
        "Bauqualität nicht so robust wie kommerzielle Qualität",
        "Begrenzte Garantieabdeckung",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Kiddoza Walking Pad?",
          de: "Kann man auf dem Kiddoza Walking Pad joggen?",
        },
        answer: {
          en: "The device is mainly designed for walking and light exercise.",
          de: "Das Gerät ist hauptsächlich für Gehen und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the treadmill suitable for home office use?",
          de: "Ist das Laufband für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. Walking pads are often used during work to add more movement to daily routines.",
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um mehr Bewegung in den Alltag zu bringen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display?",
        },
        answer: {
          en: "The LED display shows speed, workout time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Kiddoza Walking Pad Treadmill stands out as a top choice for users looking for a flexible, compact, and fitness-focused solution. Whether you are walking during video calls or upgrading to a jog, it offers convenience, effectiveness, and quality—all in one sleek machine.",
      de: "Das kiddoza Under desk Walkingpad findet eine ausgezeichnete Balance zwischen Features und Preis. Es bietet viele Premium-Fähigkeiten ohne den Premium-Preis und ist damit ideal für budgetbewusste Fitness-Enthusiasten.",
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
      en: {
        intro: "The Superun Walking Pad is a space-saving treadmill for home workouts, especially suitable for smaller apartments or home office environments.",
        cards: [
          "The design of the device focuses on minimizing space usage. Walking pads are intentionally built to be easy to store after use, for example, under furniture or behind doors.",
          "The treadmill offers a speed range specifically developed for walking workouts. Users can choose between relaxed walking and faster-paced walking.",
          "The device also features an LED display that shows important training information, including: Speed, Training time, Distance covered, and Calories burned. These metrics help users track their progress and better structure their workouts.",
          "With its simple construction, the Superun Walking Pad is ideal for users looking for a straightforward fitness device that is quick to set up and use."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Superun Walking Pad is particularly suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals looking to add more movement to their daily routine"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Serious runners",
          "Intensive running workouts",
          "Long, high-speed cardio sessions"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Size of the walking surface",
            "Noise level",
            "Additional features",
            "Space requirements"
          ]
        },
        middleText: "The Superun Walking Pad belongs to the category of simple and budget-friendly walking pads for home use. For many users, these features are sufficient—especially if the device is mainly used for walking workouts.",
        outro: "However, those looking for a treadmill for intensive running or long training sessions may want to consider a more powerful model."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Review",
        intro: "The Superun Walking Pad is a compact treadmill designed for everyday movement, home office workouts, and space-saving home fitness.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "Easy operation",
          "Basic training features",
          "Suitable for walking workouts"
        ],
        outro: "However, it is not ideal for intensive running training. For users looking to incorporate more movement into their daily routine, the Superun Walking Pad can be a practical and space-efficient solution."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "A key feature of the Superun Walking Pad is its space-saving construction. Walking pads are specifically designed to take up minimal space and be easy to store.In smaller apartments, a large treadmill can quickly become impractical. The Superun model offers a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: " The treadmill includes a shock-absorbing surface that helps reduce impact while walking. This can minimize strain on knees and joints.Good cushioning can significantly improve comfort, especially during regular walking workouts.",
        },
        {
          title: "LED Display for Training Data",
          description: " The integrated display shows various workout metrics, including:",
          bullets: [
            "Speed",
            "Workout duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These details give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: "Remote Control Operation",
          description: " Many walking pads—including Superun models—are controlled via a remote. This allows users to easily adjust speed and settings.This simple operation makes the device especially beginner-friendly.",
        },
      ],
      de: [
        "Klappbares Design mit integrierten Rollen",
        "Manuelle Steigungsverstellung (0 % – 6 %)",
        "Tragfähigkeit bis zu 160 kg",
        "Bürstenloser Motor mit 3 PS Leistung",
        "Geschwindigkeitsbereich: 1 – 16 km/h",
        "Kompatibel mit der PitPat-App (iOS & Android)",
        "Platzsparendes Design für kleine Räume",
        "Erfasst Distanz, Geschwindigkeit, Zeit und Kalorien",
        "Mit Handyhalterung und Sicherheitsverschluss",
        "Robuster Rahmen aus legiertem Stahl",
        "Leichtgewicht (39 kg)",
        "Lieferumfang: Werkzeug und Schmiermittel enthalten",
      ],
    },

    model: "B,A06-С",
    logo: "/images/brands/horizon-logo.png",
    description: {
      en: "The Superun Walking Pad blends innovation with convenience. Designed as a compact under-desk treadmill, it delivers solid performance and quiet operation perfect for home offices, small apartments, or busy workspaces.",
      de: "Superun ist bekannt für zuverlässige, gut gebaute Laufbänder, die sich auf Einfachheit und Haltbarkeit konzentrieren. Das B,A06-С AT repräsentiert ihr Engagement für Qualitätskonstruktion und benutzerfreundliches Design.",
    },

    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/horizon-banner.avif",

    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Superun Walking Pad is much more compact than traditional treadmills, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Walking pads are often used while working. The Superun model is suitable for slow to moderate walking during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device is quick to set up and does not require complicated configurations."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users use walking pads to increase their daily activity and step count."
        }
      ],
      de: [
        "Hervorragende Verarbeitungsqualität",
        "Ruhiger und stabiler Lauf ",
        "Effektive Dämpfung",
        "Lange Garantie",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like most walking pads, this model is mainly designed for walking workouts rather than intense running."
        },
        {
          title: "Smaller Running Surface",
          description: "The walking area is more compact compared to traditional treadmills."
        },
        {
          title: "Fewer Training Programs",
          description: "Some walking pads offer only basic training features without advanced programs."
        }
      ],
      de: [
        "Keine Touchscreen-Steuerung",
        "Wenige vorgefertigte Programme",
        "Eingeschränkte Smart-Funktionalität",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Superun Walking Pad?",
          de: "Kann man auf dem Superun Walking Pad joggen?",
        },
        answer: {
          en: "The device is mainly designed for walking and light exercise.",
          de: "Das Gerät ist hauptsächlich für Gehen und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is the treadmill suitable for home office use?",
          de: "Ist das Laufband für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. Walking pads are often used during work to increase daily movement.",
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What training data does the display show?",
          de: "Welche Trainingsdaten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, workout time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, the treadmill can be stored relatively easily.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Laufband relativ leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Superun Walking Pad stands out for its combination of portability, quiet strength, and minimal setup making it a solid fit for remote workers, fitness multitaskers, and compact living advocates.",
      de: "Das Superun B-A06-C steht im Vergleich für kompromisslose Stabilität. Ideal für alle, die ein Walking Pad für anspruchsvolle Nutzung suchen – benutzerfreundlich, solide verarbeitet und  mit Fokus auf das Wesentliche: Läuft ruhig, hält lange.",
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
      en: {
        intro: "The Urevo Walking Pad is a space-saving treadmill for home workouts, particularly suitable for smaller apartments or home office environments.",
        cards: [
          "The device is designed to take up minimal space. Walking pads are intentionally built so they can be easily stored after use, for example, under furniture or behind doors.",
          "The treadmill offers a speed range specifically developed for walking training, allowing users to switch between casual walking and faster-paced walking.",
          "Another key feature is the integrated LED display, which shows important workout data, including: Speed, Training time, Distance covered, and Calories burned. These metrics help users track progress and better structure their workouts.",
          "Due to its simple construction, the Urevo Walking Pad is especially suitable for individuals seeking a straightforward fitness device that is quick to set up and use."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Urevo Walking Pad is particularly suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals looking to add more movement to their daily routine"
        ],
        notSuitableForLabel: "Less suitable for:",
        notSuitableFor: [
          "Serious runners",
          "High-intensity running training",
          "Long cardio sessions at high speed"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison & Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Running surface size",
            "Noise level",
            "Additional features",
            "Space requirements"
          ]
        },
        middleText: "The Urevo Walking Pad belongs to the category of compact and budget-friendly walking pads for home use. For many users, this level of functionality is sufficient, especially if the device is mainly used for walking workouts.",
        outro: "However, those looking for intensive running training or long workout sessions may need a more powerful treadmill."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Final Assessment",
        intro: "The Urevo Walking Pad is a compact treadmill designed for everyday movement, home office use, and space-saving home fitness.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "Easy operation",
          "Essential training features",
          "Suitable for walking workouts"
        ],
        outro: "It is less suitable for intensive running training. However, for users who want to incorporate more movement into their daily routine, the Urevo Walking Pad offers a practical and space-efficient solution."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "One of the main features of the Urevo Walking Pad is its space-saving design. Walking pads are specifically created to occupy minimal space and be easy to store.Especially in smaller apartments, large treadmills can be impractical. The Urevo model provides a compact alternative.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The treadmill features a shock-absorbing surface that helps reduce the impact generated while walking. This can lower stress on the knees and joints.For regular walking workouts, good cushioning significantly improves comfort.",
        },
        {
          title: "LED Display for Training Data",
          description: "The integrated display shows key workout metrics, including:",
          bullets: [
            "Speed",
            "Duration",
            "Distance",
            "Calories burned",
          ],
          footer: "These insights give users a clear overview of their activity and help them track fitness goals."
        },
        {
          title: "Remote Control Operation",
          description: "Many walking pads—including Urevo models—are controlled via a remote. This allows users to easily adjust speed and settings.The simple operation makes the device especially beginner-friendly.",
        },
      ],
      de: [
        "Kompaktes Design mit größerer Lauffläche",
        "30 % mehr Trainingsfläche",
        "Ultraleiser bürstenloser Motor",
        "30 % Geräuschreduzierung",
        "Energiesparender Motor (15 % weniger Verbrauch)",
        "14 % automatische Steigung mit MegaLift-Technologie",
        "40 % effizientere Fettverbrennung",
        "8-Punkt-Stoßdämpfungssystem",
        "Reduziert die Kniebelastung um 30 %",
        "Integration mit der smarten UREVO-App",
        "Simulation von Outdoor-Läufen",
        "Automatische Steigungsanpassung über App",
        "Individuelle Fitnessziele & Datenverfolgung",
        "Mehrere Trainingsmodi mit kostenlosen Inhalten",
      ],
    },

    model: " SpaceWalk E1L",
    logo: "/images/brands/lifefitness-logo.png",
    description: {
      en: "Urevo offers stylish and functional walking pads designed for both home and office settings. Models like the SpaceWalk E1L and Strol 2E feature compact designs, quiet operation, and convenient app controls, ideal for users who want to integrate movement into their daily routine without sacrificing space or convenience.",
      de: "Urevo ist ein Premium-Fitnessgeräte-Hersteller mit jahrzehntelanger Erfahrung in kommerziellen Fitnessstudios. Das T5 Track Connect bringt kommerzielle Qualität in die Heimumgebung.",
    },

    bannerImage: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/life-banner.jpg",
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Equipment",
          description: "The Urevo Walking Pad is much more compact than traditional treadmills, making it ideal for small living spaces."
        },
        {
          title: "Great for Home Office Use",
          description: "Walking pads are often used while working. The Urevo model is suitable for slow to moderate walking during work hours."
        },
        {
          title: "Easy to Use",
          description: "The device can be set up quickly and does not require complex configurations."
        },
        {
          title: "Supports Daily Activity",
          description: "Many users use walking pads to increase their daily movement and step count."
        }
      ],
      de: [
        "Kommerzielle Verarbeitungsqualität",
        "Extrem leise & robust im Betrieb ",
        "Effiziente Dämpfung & Trainingsvielfalt ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like many walking pads, this model is mainly designed for walking rather than intensive running."
        },
        {
          title: "Smaller Running Surface",
          description: "The running area is more compact compared to traditional treadmills."
        },
        {
          title: "Fewer Training Programs",
          description: "Some walking pads offer only basic functions without advanced workout programs."
        }
      ],
      de: [
        "Premium-Preisgestaltung",
        "Technisch größer & schwerer",
        "Lässt nur wenige Entertainment-Funktionen zu",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Urevo Walking Pad?",
          de: "Kann man auf dem Urevo Walking Pad joggen?",
        },
        answer: {
          en: "The device is primarily designed for walking and light exercise.",
          de: "Das Gerät ist in erster Linie für Gehen und leichte Übungen konzipiert.",
        }
      },
      {
        question: {
          en: "Is it suitable for home office use?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. Walking pads are often used during work to increase daily movement.",
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is it easy to store?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, the treadmill can be stored easily.",
          de: "Ja. Dank seines kompakten Designs lässt sich das Laufband leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Urevo walking pads deliver excellent value with their compact design, quiet performance, and smart controls. Perfect for home-office integration and daily walking, they offer strong cushioning and all-in-one convenience. Taller users or serious runners may want a more spacious or higher-performance option.",
      de: "Das Urevo Walking Pad Track Connect bringt die Qualität kommerzieller Laufbänder ins Home-Gym. Metall Schwere Konstruktion, hohe Belastbarkeit und clevere Technik machen es zu einem Top-Kandidaten für alle, die ein leistungsstarkes, leises Laufband für Zuhause suchen.",
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
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Sportstech WalkMate is a compact walking pad designed primarily for everyday movement, home office use, and space-saving workouts at home.",
        cardsTitle: "Its strengths lie mainly in:",
        cards: [
          "its compact design",
          "ease of use",
          "the ability to integrate movement into daily life"
        ],
        outro: "Anyone looking for a device to walk regularly, track steps, and stay active will find the WalkMate a practical solution. However, it is less suitable for intensive running training or high speeds.\n\nOverall, the WalkMate is aimed at users who want a simple, space-saving fitness device for daily activity."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design for Home",
          description: "One of the most important features of the WalkMate is its space-saving construction. Many people don't have room for a large treadmill at home. Walking pads address this by being slimmer, lighter, and easier to store after use."
        },
        {
          title: "Speed for Walking Training",
          description: "The WalkMate offers a speed range of 1 to 6 km/h, which is ideal for:",
          bullets: [
            "casual walking",
            "brisk walking",
            "movement while working",
            "light endurance sessions"
          ],
          footer: "It is not designed for intensive jogging, which clearly defines its positioning."
        },
        {
          title: "Training Programs",
          description: "The treadmill includes multiple built-in training programs that allow for different intensity levels. These programs help make workouts more varied and structured."
        },
        {
          title: "Bluetooth and App Integration",
          description: "The WalkMate can connect to mobile devices via Bluetooth. When paired with a fitness app, users can track and analyze training data such as:",
          bullets: [
            "distance covered",
            "training duration",
            "step count",
            "estimated calorie burn"
          ],
          footer: "These features can boost motivation and help track progress over time."
        },
        {
          title: "Display of Training Data",
          description: "The integrated LCD display shows key workout metrics, including:",
          bullets: [
            "speed",
            "workout duration",
            "distance",
            "steps",
            "calories burned"
          ],
          footer: "This provides users with a clear overview of their activity and helps in tracking fitness goals."
        }
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "Walkmate",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Sportstech Walkmate is a compact walking pad designed for convenient indoor use, especially for home offices and small living spaces. It focuses on simple, consistent movement rather than high-intensity training. With its slim profile and easy storage design, Walkmate supports daily step goals and light cardio sessions, but it is not intended for running or advanced incline workouts.",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/Walkmate.jpg",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-saving and Easy to Store",
          description: "The biggest advantage of the WalkMate is its compact design. Compared to traditional treadmills, it takes up significantly less space and can be quickly stored when not in use."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Many users utilize walking pads while working. The WalkMate is particularly suitable for this, as it is designed for slow to moderate walking speeds."
        },
        {
          title: "Easy to Use",
          description: "The device is straightforward and does not require complex setup or adjustments, making it especially suitable for beginners."
        },
        {
          title: "Supports Daily Movement",
          description: "A walking pad helps integrate more steps into daily life. For people with sedentary lifestyles, it offers a simple way to increase activity levels."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "No High Running Speeds",
          description: "With a maximum speed of 6 km/h, the WalkMate is clearly designed for walking. Those who want to jog or run regularly may find this limiting."
        },
        {
          title: "Smaller Running Surface",
          description: "The 90 x 40 cm running area is sufficient for normal walking but smaller than many traditional treadmills. Taller users or those with longer strides may find this restrictive."
        },
        {
          title: "Focus on Light Training",
          description: "The device is ideal for moderate activity but not suitable for intense endurance training or advanced running programs."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Is the WalkMate a treadmill or a walking pad?",
          de: "Ist das WalkMate ein Laufband oder ein Walking Pad?",
        },
        answer: {
          en: "Technically, it is a walking pad designed specifically for walking and light exercise.",
          de: "Technisch gesehen handelt es sich um ein Walking Pad, das speziell zum Gehen und für leichte Übungen entwickelt wurde.",
        }
      },
      {
        question: {
          en: "Can you jog on it?",
          de: "Kann man darauf joggen?",
        },
        answer: {
          en: "With a maximum speed of 6 km/h, it is more suitable for walking and fast walking rather than jogging.",
          de: "Mit einer Maximalgeschwindigkeit von 6 km/h eignet es sich eher zum Gehen und schnellen Walken als zum Joggen.",
        }
      },
      {
        question: {
          en: "How much space does it require?",
          de: "Wie viel Platz wird benötigt?",
        },
        answer: {
          en: "Thanks to its compact design, it requires significantly less space than traditional treadmills.",
          de: "Dank seines kompakten Designs benötigt es deutlich weniger Platz als herkömmliche Laufbänder.",
        }
      },
      {
        question: {
          en: "Who should use a walking pad?",
          de: "Für wen ist ein Walking Pad geeignet?",
        },
        answer: {
          en: [
            "Walking pads are ideal for people who:",
            "• sit for long periods",
            "• want to exercise at home",
            "• have limited space",
            "• want to integrate movement into their daily routine"
          ],
          de: [
            "Walking Pads sind ideal für Menschen, die:",
            "• lange sitzen",
            "• zu Hause trainieren möchten",
            "• nur wenig Platz haben",
            "• Bewegung in ihren Alltag integrieren möchten"
          ],
        }
      }
    ],
    verdict: {
      en: "The Sportstech Walkmate is best suited for users who want to stay active without dedicating space to a full treadmill. It works well for slow-paced walking, step tracking, and maintaining movement throughout the day. However, users seeking running workouts, incline training, or extended cardio sessions may find it limited.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 4.7,
    buyLink: "https://www.sportstech.de/laufband/swalk-lite",
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
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Copant Walking Pad is particularly suitable for:",
        suitableFor: [
          "people working from home",
          "individuals with limited living space",
          "users who want to add more movement to their daily routine",
          "beginners in home fitness",
          "people who prefer light endurance training"
        ],
        notSuitableForLabel: "It is less suitable for users who require intensive running workouts or higher speeds.",
        notSuitableFor: []
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Context",
        box1: {
          heading: "When comparing different walking pads, several factors play an important role:",
          items: [
            "maximum speed",
            "motor power",
            "weight capacity",
            "additional smart features",
            "noise level"
          ]
        },
        middleText: "The Copant Walking Pad positions itself as an affordable, technology-oriented solution for everyday use. For many users, the combination of ease of use, app integration, and compact design is a key advantage.",
        outro: "Anyone mainly looking to walk and seeking a device for daily use will find this a solid option."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Copant Walking Pad is a modern and compact treadmill designed primarily for daily movement, walking workouts, and home office use.",
        cardsTitle: "Its strengths include:",
        cards: [
          "Compact design",
          "Easy operation",
          "App integration",
          "Sufficient motor power for walking workouts"
        ],
        outro: "It is less suitable for intensive running training, but for users looking to increase their daily activity, it can be a practical solution."
      }
    },
    features: {
      en: [
        {
          title: "App Control and Smart Features",
          description: " A standout feature of the Copant Walking Pad is its smart app integration. Users can track and analyze training data such as distance, workout time, and calories burned via a smartphone app.Additionally, the app enables features like virtual training scenarios or participation in digital running events. Users can connect with others and make their training more interactive."
        },
        {
          title: "Multiple Control Options",
          description: "The device can be controlled in various ways. In addition to the app, a remote control is available, allowing users to easily adjust speed and settings.This flexibility simplifies operation and makes it easy to adapt workouts to personal needs."
        },
        {
          title: "Shock Absorption and Non-Slip Running Surface",
          description: "The Copant Walking Pad features a shock-absorbing design and a non-slip running surface. This helps reduce stress on knees and joints while providing a more stable walking experience.Good cushioning can significantly improve comfort, especially during regular training."
        },
        {
          title: "Intelligent Technology",
          description: "The device is equipped with an intelligent chip that supports future updates and additional features, ensuring long-term compatibility with various smart devices.",

        },

      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "Raceable Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Copant Raceable Walking Pad is a slim walking pad designed primarily for light home and office walking sessions. It is suitable for users who want to add simple daily movement without needing a full treadmill. With a compact and foldable structure, it fits well in small spaces, but due to limited speed range and a shorter walking deck, it is not intended for jogging or advanced workouts. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/product1brandbanner.jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Design",
          description: "One of the biggest advantages is its compact construction."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Walking pads are often used while working, and this model is well-suited due to its speed range for slow to moderate walking."
        },
        {
          title: "Smart Features and App Integration",
          description: "Tracking workout data through an app can be motivating and helps users monitor progress effectively."
        },
        {
          title: "Ease of Use",
          description: "The device is simple to operate and requires no complex installation, making it ideal for beginners in home fitness."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a top speed of 6 km/h, the device is more suitable for walking than for intensive running training."
        },
        {
          title: "Focus on Light Training",
          description: "It is designed for users seeking moderate activity rather than high-performance runners."
        },
        {
          title: "Smaller Running Surface",
          description: "Like many walking pads, the running area is more compact compared to traditional gym treadmills."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Is the Copant Walking Pad suitable for home office use?",
          de: "Ist das Copant Walking Pad für das Home-Office geeignet?",
        },
        answer: {
          en: "Yes, many users use walking pads while working to incorporate more movement into their daily routine.",
          de: "Ja, viele Nutzer verwenden Walking Pads während der Arbeit, um mehr Bewegung in ihren Alltag zu integrieren.",
        }
      },
      {
        question: {
          en: "Can you jog on this device?",
          de: "Kann man auf diesem Gerät joggen?",
        },
        answer: {
          en: "The maximum speed of 6 km/h makes it more suitable for walking or brisk walking rather than jogging.",
          de: "Die Maximalgeschwindigkeit von 6 km/h macht es eher für Gehen oder schnelles Walken als für Joggen geeignet.",
        }
      },
      {
        question: {
          en: "What functions does the app offer?",
          de: "Welche Funktionen bietet die App?",
        },
        answer: {
          en: "The app allows users to track workout data and access additional training features.",
          de: "Die App ermöglicht es den Nutzern, Trainingsdaten zu verfolgen und auf zusätzliche Trainingsfunktionen zuzugreifen.",
        }
      },
      {
        question: {
          en: "How much weight can the treadmill support?",
          de: "Wie viel Gewicht kann das Laufband tragen?",
        },
        answer: {
          en: "The maximum user weight is 136 kg.",
          de: "Das maximale Benutzergewicht beträgt 136 kg.",
        }
      }
    ],
    verdict: {
      en: "The Copant Raceable Walking Pad is a practical choice for users who want a simple walking solution for home or office use. It’s ideal for staying lightly active during work or casual daily movement like slow walks or step sessions. However, it remains best suited for short and low-intensity workouts. Users expecting features for running, incline training, or longer stride support may find it limited.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 3.5,
    buyLink: "",
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
      en: {
        title: "Who Is This Product For?",
        suitableForLabel: "The MERACH Walking Pad is especially suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Users who want to combine walking and light jogging"
        ],
        notSuitableForLabel: "It is less suitable for serious runners or marathon training.",
        notSuitableFor: []
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison & Buying Context",
        box1: {
          heading: "When comparing walking pads, buyers should consider:",
          items: [
            "Maximum speed",
            "Training modes",
            "Shock absorption",
            "Smart features",
            "Space requirements"
          ]
        },
        middleText: "The MERACH model stands out for its versatility, as it supports both walking and running workouts.",
        outro: "For users seeking a device that supports daily movement as well as structured workouts, the 3-in-1 design can be a significant advantage."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The MERACH Walking Pad is a versatile home treadmill that can function as both a walking pad and a compact running machine.",
        cardsTitle: "Its key strengths include:",
        cards: [
          "3-in-1 design",
          "Higher maximum speed compared to many walking pads",
          "App integration and smart features",
          "Space-saving design"
        ],
        outro: "For users looking for a flexible home fitness solution that supports both walking and moderate running, the MERACH treadmill is a compelling option."
      }
    },
    features: {
      en: [
        {
          title: "3-in-1 Training Mode",
          description: "A central feature of the MERACH treadmill is its 3-in-1 functionality, offering multiple training modes:",
          bullets: [
            "Walking under a desk",
            "Light jogging",
            "Standard running",
          ],
          footer: "This flexibility makes it especially appealing for users looking for a versatile fitness solution."
        },
        {
          title: "Incline Function",
          description: "The treadmill offers an incline of approximately 6%, which can make workouts more challenging. Incline training increases intensity and can significantly boost calorie burn.Even moderate incline walking can enhance workout effectiveness without increasing speed.",

        },
        {
          title: "Shock Absorption System",
          description: "The MERACH Walking Pad uses a multi-layer shock absorption system that reduces impact during running and helps protect joints. This system includes a non-slip surface and shock-absorbing layers."
        },
        {
          title: "App Integration",
          description: "The device can be connected to the MERACH Fitness App, allowing users to track workout data and access training programs such as:",
          bullets: [
            "Workout statistics",
            "Virtual training scenarios",
            "Personalized workout plans",
          ],
          footer: "These features can improve motivation and help users achieve their fitness goals more effectively."
        },
        {
          title: "Remote Control and Display",
          description: "The treadmill can be controlled via a remote or an LED display, which shows key workout data such as:",
          bullets: [
            "Speed",
            "Time",
            "Distance",
            "Calories burned",
          ],
          footer: "This ensures users can easily monitor their activity."
        }
      ],
      de: [
        "Abmessungen: 127 x 56,5 x 11,5 cm",
        "Gewicht: 23 kg",
        "Maximales Benutzergewicht: 120 kg",
        "Inklusive Transportrollen für einfachen Transport",
        "Keine Montage erforderlich",
        "Geschwindigkeitsbereich: 1–8 km/h",
        "LED-Leuchten ändern je nach Geschwindigkeit ihre Farbe (7 Farben)",
        "Manuelle Steigung von 11,5 %",
        "4 voreingestellte Trainingsprogramme (P01–P04)",
        "Modernes LCD-Display",
        "Kompatibel mit der Sportstech Live App",
        "Geschwindigkeit einstellen, Programme ändern und LEDs über die App ein-/ausschalten",
        "Zeigt Trainingsdaten wie Geschwindigkeit, Schritte und Herzfrequenz in Echtzeit an",
        "Personalisierte Workouts mit Trainern in der App verfügbar",
        "Outdoor- und Landschafts-Workout-Videos in der App",
      ],
    },

    // name: 'Sportstech',
    model: "T26B1 3-in-1 Treadmill ",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Merach T26B1 is a compact 3-in-1 treadmill designed for walking, light jogging, and under-desk movement. Built for home users who need flexibility and minimal space usage, it can be used flat like a walking pad or with handles for light treadmill workouts. While it offers good versatility for basic fitness, the limited speed range and smaller running area make it less suitable for intensive running or long-duration training sessions. ",
      de: "Die innovativen Fitnessgeräte von Sportstech, insbesondere das sWalk Lite Walkingpad, stehen für durchdachtes Home-Fitness-Design. Mit smarten Funktionen wie App-Konnektivität, leiser Performance und platzsparender Bauweise gehört Sportstech zu den beliebtesten Marken im Walking Pad-Vergleich.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/Merachbrandimg2.jpg",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Versatile Usage",
          description: "The combination of walking pad and treadmill modes makes it more flexible than many compact treadmills."
        },
        {
          title: "Great for Home Office",
          description: "Many users utilize walking pads while working. With its low-speed capability and compact design, the MERACH model is well-suited for this purpose."
        },
        {
          title: "App Integration & Modern Features",
          description: "The app connection allows for detailed workout tracking and access to additional training programs."
        },
        {
          title: "Comfort & Joint Protection",
          description: "The shock absorption system helps reduce joint strain and improves overall workout comfort."
        }
      ],
      de: [
        "Leiser Motor & Stoßdämpfung",
        "Smarte App-Integration ",
        "Klappbar & mobil ",
        "LED & Steigung ",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Running Surface",
          description: "The running area is smaller compared to full-sized treadmills. It may feel restrictive for taller users or intense running sessions."
        },
        {
          title: "Primarily for Home Use",
          description: "The device is designed mainly for home workouts and not for heavy-duty gym-level training."
        },
        {
          title: "Not a Replacement for Professional Treadmills",
          description: "Users who run long distances or train intensively may prefer a more powerful, professional-grade treadmill."
        }
      ],
      de: [
        "Verarbeitungsqualität variabel",
        "Bluetooth-Verbindung instabil",
        "Manuelle Steigung wenig komfortabel",
        "Kundenservice nicht immer agil",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the MERACH Walking Pad?",
          de: "Kann man auf dem MERACH Walking Pad joggen?",
        },
        answer: {
          en: "Yes. With the handrail raised, the device can reach speeds of up to approximately 12 km/h.",
          de: "Ja. Bei hochgeklapptem Haltegriff kann das Gerät Geschwindigkeiten von bis zu ca. 12 km/h erreichen.",
        }
      },
      {
        question: {
          en: "Is it suitable for home office use?",
          de: "Ist es für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. In walking mode, it operates at low speeds, making it ideal for staying active while working.",
          de: "Ja. Im Walking-Modus läuft es mit niedrigen Geschwindigkeiten und ist ideal, um während der Arbeit aktiv zu bleiben.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Can it connect to an app?",
          de: "Kann es mit einer App verbunden werden?",
        },
        answer: {
          en: "Yes. It can sync with the MERACH Fitness App for tracking workouts and accessing training programs.",
          de: "Ja. Es kann mit der MERACH Fitness App synchronisiert werden, um Workouts zu verfolgen und auf Trainingsprogramme zuzugreifen.",
        }
      }
    ],
    verdict: {
      en: "The Merach T26B1 is a good choice for users who want a space-saving treadmill mainly for walking or light jogging at home. It works well for step-based indoor activity and everyday movement, especially in small apartments or office setups. However, users looking for higher speeds, incline workouts or extended comfort may find the machine limited for serious fitness training.",
      de: "Das Sportstech ssWalk Lite Walkingpad überzeugt als kompakter und leiser Homefitness-Trainer, ideal für das tägliche Training im Büro oder Zuhause. Mit robuster Dämpfung, Smart-App-Integration, platzsparendem Design und einem leisen Motor erreicht es eine Bewertung von 4,9 von 5 – Spitzenklasse im Walkingpad Test.",
    },
    rating: 3.4,
    buyLink: "",
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
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Cursor Walking Pad is particularly suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals who want to increase their daily step count"
        ],
        notSuitableForLabel: "It is less suitable for:",
        notSuitableFor: [
          "Ambitious runners",
          "Intensive running training",
          "Long, high-speed cardio sessions"
        ]
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Motor power",
            "Running surface size",
            "Noise level",
            "Additional features"
          ]
        },
        middleText: "The Cursor Walking Pad is positioned in the market as a compact and user-friendly solution for daily use and home office environments.",
        outro: "Many buyers choose such devices to integrate movement into their daily routines without investing in large fitness equipment."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Evaluation",
        intro: "The Cursor Walking Pad is a compact treadmill designed primarily for walking workouts, home office use, and space-saving home fitness.",
        cardsTitle: "Key strengths include:",
        cards: [
          "Compact design",
          "Relatively quiet motor",
          "Easy operation",
          "Shock absorption for comfortable training"
        ],
        outro: "While it is not suitable for intensive running workouts, it offers a practical and space-saving solution for users who want to increase their daily activity levels."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "One of the main advantages of the Cursor Walking Pad is its compact construction. Many models are specifically built to require minimal space and can be easily used in small apartments.",
        },
        {
          title: "Powerful and Quiet Motor",
          description: "The 2.5 HP motor ensures stable performance during workouts while remaining relatively quiet. This allows the device to be used while working or watching TV without causing disturbance.",

        },
        {
          title: "Shock Absorption System",
          description: "Many Cursor walking pads feature a multi-layer running surface that absorbs impact while walking. This reduces stress on the knees and joints and enhances training comfort."
        },
        {
          title: "LED Display and Training Data",
          description: "The integrated LED display shows important workout data, including:",
          bullets: [
            "Speed",
            "Distance",
            "Training time",
            "Calories burned",
          ],
          footer: "These metrics help users track their progress and adjust their workout routines."
        },
        {
          title: "Remote Control Operation",
          description: "Many Cursor walking pads are operated via a remote control, allowing users to conveniently adjust speed and settings without interrupting their workout.",
        }
      ],
      de: [
        "9 % manuelle Steigung: simuliert realistisches Berglaufgefühl; erhöht Kalorienverbrauch bis zu 60 %",
        "Dreifacher Dämpfungseffekt: 2-schichtige Platte, 7-schichtiger Gurt, Waben-Pads & Silikon-Dämpfer für gelenkschonendes Training",
        "Leiser 2,75-PS-Motor: bürstenlos, <45 dB, 3.500 Stunden Lebensdauer & energieeffizienter Betrieb",
        "Kompaktes Design (114×55×11 cm): leicht unter Bett/Sofa verstaubar; Rollen für einfaches Bewegen",
        "LED-Anzeige & 12 Programme: zeigt Zeit, Distanz, Kalorien & Geschwindigkeit; inklusive voreingestellter Trainingsmodi",
        "Bis zu 10 km/h Geschwindigkeit: geeignet für Walking & leichtes Jogging",
      ],
    },
    model: "Walking Pad",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cursor Walking Pad is a compact, foldable walking treadmill designed for home and office users who prefer light movement throughout the day. It focuses on simplicity, portability, and ease of use, making it suitable for beginners or those who want to stay active while working.",
      de: "Das CURSOR Walking Pad verbindet durchdachtes Design mit starker Leistung.Die 9 - % - Steigung macht das Training intensiver und realistischer,während die dreifache Dämpfung Laufkomfort auf Studio - Niveau bietet Der 2,75 - PS - Motor läuft leise und kraftvoll, wodurch sich das Gerät hervorragend für Wohnungen und Büros eignet Ein weiteres Highlight: Die hohen Maximalbelastung von 136 kg (Seite 3), wodurch das Gerät auch für schwerere Nutzer geeignet ist Die 114×55×11 cm Bauweise ermöglicht eine extrem platzsparende Nutzung.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/wmremove-transformed.png",
    // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Compact and Space-Saving",
          description: "The Cursor Walking Pad is significantly smaller than traditional treadmills, making it ideal for homes with limited space."
        },
        {
          title: "Ideal for Home Office Use",
          description: "Many users use walking pads while working, and the Cursor model is specifically designed for this purpose."
        },
        {
          title: "Quiet Operation",
          description: "Thanks to the brushless motor, the device operates with relatively low noise, making it suitable for apartments or offices."
        },
        {
          title: "Easy to Use",
          description: "The treadmill is generally ready to use immediately and requires minimal setup."
        }
      ],
      de: [
        "9 % Steigung für stark erhöhten Trainingsreiz",
        "2,75 - PS - bürstenloser Motor (<45 dB)",
        "Dreifache Dämpfung (7 - lagiger Belt, Silikon, Gummi - Pads)",
        "Bis 10 km/h – ideal zum Walken & Joggen",
        "Hohe Belastbarkeit: 136 kg",
        " Sehr flaches Design (11 cm Höhe)",
        "12 vorinstallierte Programme",
        "Kein Aufbau nötig (kommt montiert)",
        "Leicht zu verstauen dank Rollen",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "With a maximum speed of around 6 km/h, the device is more suitable for walking than for intensive running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The running surface is more compact than traditional treadmills, which may be slightly less comfortable for taller users."
        },
        {
          title: "Fewer Training Programs",
          description: "Some models offer fewer pre-installed workout programs compared to larger fitness equipment."
        }
      ],
      de: [
        "Steigung muss manuell eingestellt werden",
        "Lauffläche etwas kürzer als bei großen Studiogeräten",
        "Kein App-Tracking",
        "Die Steigungseinstellung benötigt Werkzeug",
        "Für sehr große Schritte beim schnellen Gehen etwas kurz",
        "Motor bei höherem Tempo nicht immer gleichmäßig",
        "Nutzer berichten über Verziehen des Laufbands bei schnellerem Tempo",
        "Bei intensiver Nutzung spürbar lauter als angegeben",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Cursor Walking Pad?",
          de: "Kann man auf dem Cursor Walking Pad joggen?",
        },
        answer: {
          en: "Most Cursor walking pads are designed for walking and light exercise, reaching speeds of up to around 6 km/h.",
          de: "Die meisten Cursor Walking Pads sind für Gehen und leichte Übungen konzipiert und erreichen Geschwindigkeiten von bis zu ca. 6 km/h.",
        }
      },
      {
        question: {
          en: "Is the device noisy?",
          de: "Ist das Gerät laut?",
        },
        answer: {
          en: "The motor operates relatively quietly, making it suitable for apartments or offices.",
          de: "Der Motor arbeitet relativ leise, so dass er sich für Wohnungen oder Büros eignet.",
        }
      },
      {
        question: {
          en: "What training data is displayed?",
          de: "Welche Trainingsdaten werden angezeigt?",
        },
        answer: {
          en: "The LED display shows speed, time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Zeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is the device easy to store?",
          de: "Ist das Gerät leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Many models are compact and can be easily stored under furniture or in small spaces.",
          de: "Ja. Viele Modelle sind kompakt und lassen sich leicht unter Möbeln oder in kleinen Räumen verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Cursor Walking Pad works well for light walking routines, especially indoors or during work hours. It’s best for users looking for a simple, compact solution without advanced workout expectations. Those who prefer versatility, longer sessions, or higher speed options may feel limited.",
      de: "Das CURSOR Walking Pad mit 9 % Steigung überzeugt mit starker Leistung, robuster Bauweise und vielseitigem Einsatz.Durch die Kombination aus Steigung, 10 km/h Top - Speed, extrem leisem Motor und dreifacher Dämpfung ist es eines der stärksten Walking Pads in seiner Preisklasse.",
    },
    rating: 3.8,
    buyLink: "",
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
      en: {
        intro: "The Cazvian Walking Pad is a space-saving treadmill for home use, characterized by its simplicity and compact construction.",
        cards: [
          "The device is designed to occupy minimal space, making it suitable even for smaller apartments. Many users prefer walking pads because they can be easily stored after use instead of taking up permanent space.",
          "It offers a speed range suitable for walking workouts, allowing both relaxed walking and faster-paced walking. This flexibility enables users to adjust their training intensity individually.",
          "The treadmill also features an LED display that shows essential workout data, including speed, training time, distance, and calories burned.",
          "With its simple construction, the Cazvian Walking Pad is ideal for people looking for a straightforward fitness device that is ready to use quickly."
        ]
      }
    },
    targetAudience: {
      en: {
        title: "Who Is This Product Suitable For?",
        suitableForLabel: "The Cazvian Walking Pad is especially suitable for:",
        suitableFor: [
          "Home office users",
          "People with limited living space",
          "Beginners in home fitness",
          "Individuals who want to add more movement to their daily routine"
        ],
        notSuitableForLabel: "It is less suitable for users who require high-speed or intensive running workouts.",
        notSuitableFor: []
      }
    },
    comparisonContext: {
      en: {
        title: "Comparison and Buying Considerations",
        box1: {
          heading: "When purchasing a walking pad, several factors should be considered:",
          items: [
            "Maximum speed",
            "Size of the walking surface",
            "Noise level",
            "Additional features such as apps or training programs",
            "Space requirements"
          ]
        },
        middleText: "The Cazvian Walking Pad falls into the more basic and budget-friendly category. For many users, these features are sufficient, especially if the device is primarily used for walking workouts.",
        outro: "However, those looking for intense running or long workout sessions may need to consider a more powerful treadmill."
      }
    },
    conclusionEvaluation: {
      en: {
        title: "Conclusion / Review",
        intro: "The Cazvian Walking Pad is a compact treadmill designed for everyday movement, home office use, and space-saving home workouts.",
        cardsTitle: "Its key strengths include:",
        cards: [
          "Compact design",
          "Easy operation",
          "Basic training features",
          "Suitable for walking workouts"
        ],
        outro: "While it is not ideal for intensive running, it is a practical solution for users who want to stay active and incorporate more movement into their daily routine."
      }
    },
    features: {
      en: [
        {
          title: "Compact Design",
          description: "One of the main features of the Cazvian Walking Pad is its compact build. Walking pads are specifically designed to save space and be easy to move.This makes it a practical alternative to bulky treadmills, especially in smaller homes or offices.",
        },
        {
          title: "Shock-Absorbing Running Surface",
          description: "The treadmill includes a shock-absorbing surface that reduces impact while walking.This can help minimize stress on knees and joints, which is especially important for regular users.",

        },
        {
          title: "LED Display for Training Data",
          description: "The built-in display shows key workout metrics such as:",
          bullets: [
            "Speed",
            "Distance",
            "Training time",
            "Calories burned",
          ],
          footer: "These metrics help users monitor their activity and track progress."
        },
        {
          title: "Remote Control Operation",
          description: "Like many walking pads, the Cazvian model is controlled via a remote.Users can easily adjust speed and settings, making it especially beginner-friendly.",

        },
      ],
      de: [
        "Manuelle 5-%-Steigung für intensiveres Walking; mechanisch einstellbar und nicht während des Trainings veränderbar.",
        "Leiser Motor für 1–6 km/h mit stabilem Stahlrahmen für ruhigen Betrieb und hohe Langlebigkeit.",
        "5-lagiger rutschfester Laufgurt mit Stoßdämpfung, 38×90-cm Fläche und 6-cm Sicherheitsrändern.",
        "LED-Anzeige und zuverlässige Fernbedienung; minimalistische Ausstattung ohne Programme oder App.",
        " Extrem kompakt mit 16 kg und 10,5 cm Höhe; Platzsparend, aber weniger stabil und mit kürzerer Lauffläche.",
      ],
    },

    model: "Walking pad for home & office",
    logo: "/images/brands/treadmill1.jpg",
    description: {
      en: "The Cazvian Treadlite 2.0 is a lightweight treadmill designed for home users who want straightforward daily walking and light cardio. It focuses on portability and simple functionality rather than heavy-duty performance. ",
      de: "Das Cazvian Walking Pad kombiniert ein kompaktes Design mit hoher Funktionalität und flexiblem Einsatzbereich. Mit 5 % Steigung, einem strömungsleisen Motor und einem stoßdämpfenden Laufgurt bietet es ein natürliches, gelenkschonendes Laufgefühl – ideal für Homeoffice, tägliche Schrittziele und leichte Fitness-Einheiten. Dank der sehr flachen Bauweise lässt sich das Gerät mühelos verstauen und passt perfekt in kleine Räume oder Büros.",
    },
    // image: '/images/treadmills/sportstech-treadmill.jpg',
    bannerImage: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/flyerimagecazian (1).jpg", // features: {
    //   en: 'The Sportstech sWalk features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface. The advanced cushioning system reduces joint impact by up to 40%. Smart features include Bluetooth connectivity, heart rate monitoring, and compatibility with fitness apps.The Sportstech F15 features a powerful 2.5 HP motor, 15% maximum incline, and a spacious 125x40cm running surface.The advanced cushioning system reduces joint impact by up to 40%.',
    //   de: 'Das Sportstech sWalk verfügt über einen leistungsstarken 2,5 PS Motor, 15% maximale Steigung und eine geräumige 125x40cm Lauffläche. Das fortschrittliche Dämpfungssystem reduziert die Gelenkbelastung um bis zu 40%. Smart-Features umfassen Bluetooth-Konnektivität, Herzfrequenzüberwachung und Kompatibilität mit Fitness-Apps.'
    // },
    pros: {
      en: [
        {
          title: "Space-Saving Fitness Device",
          description: "The Cazvian Walking Pad requires significantly less space than traditional treadmills, making it ideal for small apartments."
        },
        {
          title: "Great for Home Office Use",
          description: "Walking pads are often used while working. This model is suitable for slow to moderate walking, making it perfect for this purpose."
        },
        {
          title: "Easy to Use",
          description: "The device is simple to operate and does not require complex setup or configuration."
        },
        {
          title: "Supports Daily Movement",
          description: "Many users use walking pads to increase their daily activity and step count."
        }
      ],
      de: [
        "Sehr kompaktes, flaches Design",
        "Geringes Gewicht (16,25 kg)",
        "Einfache Bedienung per Fernbedienung",
        "5-%-Steigung für leicht erhöhten Trainingsreiz",
        "Gute Geräuschwerte für Homeoffice",
        "Sofort einsatzbereit ohne Montage",
      ],
    },
    cons: {
      en: [
        {
          title: "Limited Maximum Speed",
          description: "Like most walking pads, this model is designed mainly for walking and not for intense running workouts."
        },
        {
          title: "Smaller Running Surface",
          description: "The walking area is more compact than that of larger treadmills, which may be less comfortable for taller users."
        },
        {
          title: "Fewer Training Programs",
          description: "Some walking pads only offer basic features without advanced workout programs."
        }
      ],
      de: [
        "Steigung nur manuell und nicht während des Trainings verstellbar",
        "Lauffläche relativ kurz (38×90 cm) für größere Personen",
        "Kein Joggen möglich (max. 6 km/h)",
        "Keine App-Integration oder Trainingsprogramme",
        "Etwas einfacher Motor, der bei höherer Last spürbar wird",
        "Materialqualität wirkt eher auf Einsteiger-Niveau",
      ],
    },
    faq: [
      {
        question: {
          en: "Can you jog on the Cazvian Walking Pad?",
          de: "Kann man auf dem Cazvian Walking Pad joggen?",
        },
        answer: {
          en: "The device is mainly designed for walking and light workouts.",
          de: "Das Gerät ist hauptsächlich für Gehen und leichte Trainingseinheiten konzipiert.",
        }
      },
      {
        question: {
          en: "Is the treadmill suitable for home office use?",
          de: "Ist das Laufband für das Home Office geeignet?",
        },
        answer: {
          en: "Yes. Walking pads are commonly used during work to increase daily movement.",
          de: "Ja. Walking Pads werden häufig während der Arbeit verwendet, um die tägliche Bewegung zu erhöhen.",
        }
      },
      {
        question: {
          en: "What data does the display show?",
          de: "Welche Daten zeigt das Display an?",
        },
        answer: {
          en: "The LED display shows speed, training time, distance, and calories burned.",
          de: "Das LED-Display zeigt Geschwindigkeit, Trainingszeit, Distanz und verbrannte Kalorien an.",
        }
      },
      {
        question: {
          en: "Is it easy to store?",
          de: "Ist es leicht zu verstauen?",
        },
        answer: {
          en: "Yes. Thanks to its compact design, it can be stored easily.",
          de: "Ja. Dank seines kompakten Designs lässt es sich leicht verstauen.",
        }
      }
    ],
    verdict: {
      en: "The Cazvian Treadlite 2.0 performs well for short, simple workouts. It’s suitable for users who prefer occasional walking but may feel too limited for those looking for long-duration training, higher speeds, or more versatile workout features.",
      de: "Das Cazvian Walking Pad ist eine gute Lösung für leichte, alltägliche Bewegung im Homeoffice — besonders für Nutzer, die ein leichtes, flaches, unkompliziertes Gerät suchen.Es ist ideal für Walking-Sessions bis 6 km/h und kurze Nutzungseinheiten.Weniger geeignet ist es für größere Personen, intensives Training oder Nutzer, die ein sehr stabiles und komfortables Laufgefühl erwarten",
    },
    rating: 3.7,
    buyLink: "",
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
    };
  }

  return {
    title: `${brand.name} ${brand.model} Review - Expert Testing & Analysis`,
    description: brand.description[locale],
    keywords: `${brand.name}, ${brand.model}, Walkingpad review, fitness equipment test`,
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
