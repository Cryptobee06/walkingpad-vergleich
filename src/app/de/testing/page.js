"use client";
import { useState, useEffect } from "react";
import {
  Star,
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Volume2,
  Heart,
  Award,
  Calendar,
  User,
  Clock,
  ChevronRight,
  Sparkles,
  BadgeCheck,
  Wifi,
  Dumbbell,
  Activity,
} from "lucide-react";
import FAQ from "@/components/guide/FAQ";
import {
  ratingToGrade,
  getGradeLabel,
  getGradeHeading,
  getGradeBgClass,
  formatGradeValue,
} from "@/utils/grade";
const brands = [
  "Sportstech sWalk Lite",
  "Sportstech WalkMate",
  "Citysports",
  "Kiddoza",
  "Superun",
  "Urevo",
  "Copant",
  "Merach",
  "Cursor",
  "Cazvian",
];

const testData = {
  "Sportstech WalkMate": {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/Walkmate 001 (1).jpg",
    overallScore: 4.7,
    status: "Bestanden",
    features: [
      "Kompaktes, platzsparendes Design (ca. 109,7 × 52,1 × 10,9 cm) – perfekt für kleine Wohnungen und Homeoffice; kann unter Sofa, Tisch oder an der Wand verstaut werden",
      "Manuelle 5‑%-Steigung – ermöglicht individuelles Training mit zusätzlichem Reiz und gezielter Muskelaktivierung",
      "90 × 40 cm Lauffläche – optimal dimensioniert für komfortables Walking und ergonomische Schritte",
      "Bis 6 km/h Geschwindigkeit mit vier voreingestellten Programmen – ideal zum dynamischen Gehen und steigert die Alltagsbewegung",
      "Integrierter Schrittzähler und großes LCD‑Display – alle relevanten Daten wie Schritte, Distanz, Geschwindigkeit, Zeit & Kalorien auf einen Blick",
      "Fernbedienung & Bluetooth‑App (Sportstech Live) – komfortable Steuerung, personalisierte Workouts und motivierende Trainingsdaten",
      "Flüsterleiser Betrieb und hochwertige Transportrollen – perfekt für Homeoffice,Mehrfamilienhäuser und flexible Nutzung",
      "Leichtes Gerät (ca. 15,8 kg) und hohe Belastbarkeit bis 120 kg – stabil, tragbar und für viele Nutzer geeignet"
    ],
    tests: {
      Speed: {
        description:
          "Der Sportstech WalkMate bietet ein optimales Geschwindigkeitsfenster von 1–6 km/h – perfekt für abwechslungsreiches Walking und gesundes Cardio‑Training im Alltag.",
        rating: "4.7/ 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Trotz seines geringen Gewichts ist der WalkMate hervorragend verarbeitet: Die Materialien sorgen für Stabilität und Langlebigkeit, sodass tägliche Geh‑Sessions problemlos möglich sind",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die manuell einstellbare 5‑%-Steigung ist ein echter Vorteil: Sie ermöglicht eine flexible Intensitätssteuerung und sorgt für zusätzliche Muskelaktivierung – perfekt, um Ihr Training zu variieren.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Der flüsterleise Motor und die hochwertige Dämpfung sorgen dafür, dass der WalkMate selbst bei längeren Sessions kaum hörbar ist – ideal für Wohnungen, Homeoffice und Training zu jeder Tageszeit.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die mehrlagige Lauffläche mit angenehmer Dämpfung bietet hervorragenden Komfort. Die großzügige Fläche unterstützt einen natürlichen Geh‑Rhythmus und ist auch bei längeren Einheiten bequem",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Sportstech WalkMate mit 5 % Steigung",
      modelName: "Sportstech WalkMate",
      verdict: "Hervorragend für Homeoffice‑Walking und tägliche Nutzung",
      rating: 5.0,
      publishDate: "Februar 2026",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 4.8,
          description: "Äußerst flach, stilvoll und kompakt; die Materialauswahl sorgt für ein geringes Gewicht bei hoher Stabilität – ein Premium‑Gefühl inklusive.",
        },
        Lautstärke: {
          rating: 4.8,
          description: "Der Motor läuft quasi lautlos und macht das Gerät perfekt für Mehrfamilienhäuser, Büro und Homeoffice.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 4.8,
          description: "Die mehrlagige Dämpfung und die großzügige Lauffläche bieten exzellenten Komfort auch bei längeren Geh‑Sessions.",
        },
        Steuerung: {
          rating: 4.8,
          description: "Fernbedienung, vier Programme, integrierter Schrittzähler und Bluetooth‑Anbindung zur Sportstech Live‑App bieten ein Maximum an Steuerungsmöglichkeiten.",
        },
        Bürotauglichkeit: {
          rating: 4.7,
          description: "Durch flache Bauweise, leisen Betrieb und Transportrollen prädestiniert für den Einsatz unter dem Schreibtisch.",
        },
        "Preis-Leistung": {
          rating: 4.8,
          description: "Ausgesprochen attraktiv: hochwertige Ausstattung, App‑Mehrwert und vielseitige Nutzungsmöglichkeiten – ein starker Gegenwert.",
        },
      },
      extras: ["Manuelle Steigung", "Transportrollen", "Schrittzähler","luetooth‑App"],
      suitableFor: "Ideal für alle, die im Homeoffice,  vor dem TV oder unterwegs ihre Fitness verbessern wollen – bis 120 kg belastbar und damit breit einsetzbar.",
      mainDescription:
        "Der Sportstech WalkMate überzeugt als modernes Unter-Desk-Laufband für den Einsatz im Homeoffice oder Büro. Dank seines flachen und leichten Designs fügt er sich harmonisch in nahezu jede Wohn- oder Arbeitsumgebung ein. Die Steuerung erfolgt komfortabel per Fernbedienung oder Bluetooth-App, wodurch sich das Gerät mühelos in den Alltag integrieren lässt. Der integrierte Schrittzähler sowie das übersichtliche Display unterstützen zusätzlich die Motivation und Trainingskontrolle.",
      testFindings:
        "Im Praxiseinsatz zeigt der WalkMate eine stabile und angenehme Performance. Die 90 × 40 cm große Lauffläche ermöglicht ergonomische und natürliche Schritte. Mit einem Geschwindigkeitsbereich von 1–6 km/h eignet sich das Laufband sowohl für entspanntes Gehen als auch für zügige Cardio-Einheiten. Die hochwertige Verarbeitung vermittelt einen robusten Eindruck, während das geringe Gewicht für einfache Mobilität und flexible Aufbewahrung sorgt.",
      specialFeature:
        "Ein besonderes Highlight ist die einstellbare 5-%-Steigung, die einen zusätzlichen Trainingsreiz schafft und für mehr Abwechslung im Workout sorgt. In Kombination mit dem leisen Betrieb, der smarten App-Steuerung und der integrierten Schrittzählung bietet der WalkMate ein modernes und vielseitiges Trainingserlebnis.",
      conclusion:
        "Insgesamt ist der WalkMate eine ausgezeichnete Wahl für alle, die ihre tägliche Bewegung unkompliziert steigern möchten. Mit durchdachten Funktionen, ergonomischem Komfort, leisem Betrieb und modernem Design vereint er Qualität, Funktionalität und Benutzerfreundlichkeit auf hohem Niveau.",
    },
  },
  "Sportstech sWalk Lite": {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/walkmate/sWalk Lite_1.jpg",
    overallScore: 4.8,
    status: "Bestanden",
    features: [
      "Drehbares 21,5-Zoll-Touchdisplay mit der Sportstech Live App für immersives Training und Echtzeit-Tracking.",
      "Schwarzer Rahmen mit den Maßen 182 × 87,5 × 177 cm und unterstützt Nutzer bis 150 kg.",
      "Höchstgeschwindigkeit von 20 km/h und 15 Steigungsstufen, ideal für Ausdauer- oder Sprint-Workouts.",
      "7-farbige LED-Ambient-Beleuchtung, die je nach Geschwindigkeit oder Puls für visuelles Feedback wechselt.",
      "Faltbares Design und integrierte Transportrollen für bequeme Aufbewahrung und Mobilität.",
    ],
    tests: {
      Speed: {
        description:
          "Sportstech glänzt mit seiner Geschwindigkeit und beeindruckenden Beschleunigung sowie Sprintfähigkeiten. Im Test erreichte es Höchstgeschwindigkeiten, die selbst erfahrene Läufer zufriedenstellten, wobei es bei allen Intensitätsstufen Stabilität und Komfort beibehielt. Die reaktionsschnellen Steuerungen ermöglichen nahtlose Übergänge zwischen den Geschwindigkeitsstufen ohne Verzögerung.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Dieses Modell hielt über 100 Stunden simulierte, hochintensive Workouts aus, ohne Anzeichen von Abnutzung oder strukturellen Problemen zu zeigen. Das Walkingpad behielt seinen Halt, und das Deck zeigte nur minimale Kompressionsermüdung. Mit seinem kommerziellen Rahmen, verstärkten Gelenken und korrosionsbeständiger Beschichtung setzt Sportstech den Standard für langfristige Haltbarkeit.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Das Steigungsfunktion ist schnell, präzise und hält zuverlässig ihre Neigung. Das motorisierte Steigungssystem reagierte während des Workouts mit wenig Verzögerung und bietet bis zu 15 Stufen der Erhöhung. Es passt sich gut an HIIT- und Ausdauer-Steigungstraining an.",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Trotz des leistungsstarken Motors bleibt Sportstech nahezu geräuschlos. Es erzeugt konstant Geräuschpegel von unter 55 Dezibel bei allen Geschwindigkeiten. Dies macht es geeignet für Wohnungen oder frühe Morgensessions, ohne andere zu stören.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Im Komforttest wurden das Bandpolster, die Deckbreite, die Handgriffpositionierung und die Anzeigeergonomie überprüft. Sportstech bietet ein geräumiges Deck, das natürliche Schrittlängen ermöglicht und Gelenkstress reduziert.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Sportstech sWalk Lite – Testsieger 2025",
      modelName: "Sportstech sWalk Lite",
      verdict: "Perfekt für Büro & Zuhause",
      rating: 4.8,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 4.8,
          description: "Schlank, hochwertig verarbeitet, modernes LED-Display",
        },
        Lautstärke: {
          rating: 4.8,
          description: "Extrem leise (< 55 dB)",
        },
        "Dämpfung & Laufkomfort": {
          rating: 4.7,
          description: "Sanfte, stabile Lauffläche",
        },
        Steuerung: {
          rating: 4.8,
          description: "App + Fernbedienung, intuitiv",
        },
        Bürotauglichkeit: {
          rating: 4.8,
          description: "Perfekt fürs Arbeiten im Stehen oder Gehen",
        },
        "Preis-Leistung": {
          rating: 4.8,
          description: "Sehr fair für die Qualität",
        },
      },
      extras: ["LCD-Anzeige", "Kilokalorienzählung", "Schrittzähler"],
      suitableFor: "Büro & Zuhause, tägliches Gehen, gesundes Arbeiten",
      mainDescription:
        "Das sWalk Lite von Sportstech ist ein kompaktes, leises Walking Pad, das speziell für den Einsatz im Homeoffice entwickelt wurde. Mit einer Höhe von nur 12 cm passt es problemlos unter Schreibtische und lässt sich bei Nichtgebrauch leicht verstauen. Die Verarbeitung ist hochwertig: Ein robustes Gehäuse, ein modernes LED-Display und eine sanft gedämpfte Lauffläche sorgen für ein angenehmes Nutzungserlebnis.",
      testFindings:
        "Im Test überzeugte das Gerät besonders durch seine geringe Lautstärke von unter 55 dB. Selbst bei längeren Trainingseinheiten bleibt es nahezu geräuschlos, was für den Einsatz in Büroräumen oder Wohnungen mit dünnen Wänden ideal ist. Die Steuerung erfolgt wahlweise per App oder Fernbedienung, beide Varianten sind intuitiv und zuverlässig.",
      specialFeature:
        "Die integrierte Steigungsfunktion ist ein Alleinstellungsmerkmal in dieser Preisklasse und ermöglicht ein gelenkschonendes, aber gleichzeitig effektives Training.",
      conclusion:
        "Für Personen, die täglich mehrere Stunden im Stehen oder Gehen arbeiten möchten, ist das sWalk Lite die beste Wahl im Test 2025.",
    },
  },
  Citysports: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/citysportstest.png",
    overallScore: 4.0,
    status: "Bestanden",
    features: [
      "Kompaktes, faltbares Design geeignet für kleine Wohnungen und einfache Aufbewahrung.",
      "Minimale Benutzeroberfläche ideal für einfaches Gehen und leichte Joggingroutinen.",
      "Leiser Motor geeignet für Mehrfamilienhäuser.",
      "Integriertes Display zur Anzeige von Geschwindigkeit, Zeit und Kalorien.",
      "Moderate Gewichtskapazität und leichte Portabilität.",
    ],
    tests: {
      Speed: {
        description:
          "Citysports-walkingpad bieten eine konstante, aber moderate Geschwindigkeit, die ideal für Gehen und leichtes Joggen ist. Der Motor reagiert gut bei niedrigeren Geschwindigkeiten, ist jedoch weniger geeignet für intensives Sprinten.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die leichte Bauweise von Citysports ermöglicht einfachen Transport, schränkt jedoch die Haltbarkeit bei intensiven Bedingungen ein. Es eignet sich gut für tägliche Geh- und moderate Jogging-Sessions, ohne strukturelle Belastungen.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die meisten Citysports-Modelle haben keine motorisierte Steigung, sondern verlassen sich auf manuelle Höhenverstellung oder feste Flachstellungen. Dies schränkt das Steigungstraining ein.",
        rating: "3.0 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Citysports-Geräte sind beeindruckend leise, hauptsächlich aufgrund des niedrigen Motorwattwerts und der minimalen Vibrationen im Betrieb. Es rangiert hoch für Nutzer in Mehrfamilienhäusern oder bei nächtlichen Sessions.",
        rating: "4.8 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die kompakte Größe reduziert den Komfort für größere Nutzer, passt jedoch gut für kleinere Personen. Die Polsterung des Bands ist fair, und die Handläufe sind stabil, wenn auch minimal.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: CITYSPORTS Bluetooth Walkingpad",
      modelName: "CITYSPORTS Bluetooth Walkingpad",
      verdict: "Nicht empfohlen für regelmäßigen Gebrauch",
      rating: 2.0,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitungsqualität": {
          rating: 3,
          description:
            "Schlicht und leicht transportierbar, aber instabil und wackelig bei höheren Geschwindigkeiten",
        },
        Geräuschpegel: {
          rating: 2,
          description:
            "Schon bei mittlerem Tempo sehr laut, mit knarzenden und summenden Geräuschen",
        },
        "Polsterung & Komfort": {
          rating: 2,
          description: "Harte Lauffläche mit Vibrationen bei schnellerem Gehen",
        },
        Steuerung: {
          rating: 3,
          description:
            "Nur per Fernbedienung, Bluetooth-Verbindung oft unzuverlässig",
        },
        Bürotauglichkeit: {
          rating: 2,
          description:
            "Zu laut und instabil für den Einsatz in Büro oder Wohnung",
        },
        "Preis-Leistungs-Verhältnis": {
          rating: 2,
          description:
            "Enttäuschend aufgrund schwacher Verarbeitung und geringer Haltbarkeit",
        },
      },
      extras: ["Bluetooth-Lautsprecher"],
      suitableFor: "Kurze, unregelmäßige Geh-Sessions zu Hause",
      mainDescription:
        "Das CITYSPORTS Bluetooth Walkingpad wirkt auf den ersten Blick ideal für Einsteiger, die ein einfaches, kompaktes Walking Pad suchen. Doch im ausführlichen Test offenbarte es deutliche Schwächen in Stabilität, Lautstärke und Haltbarkeit. Schon beim Aufbau wirkten Teile locker, und bei höherer Geschwindigkeit kam es zu starken Vibrationen.",
      testFindings:
        "Während des Tests war das Walkingpad auffällig laut – trotz gegenteiliger Herstellerangabe. Es knarrte, summte und entwickelte bei höherem Tempo ein deutlich hörbares Dröhnen. Der Laufgurt verschob sich, was das Geräusch verstärkte und das Gehen instabil machte. Nach kurzer Nutzung wurde das Gerät warm und verströmte einen Kunststoffgeruch. Die Bluetooth-Verbindung war inkonsistent, und die Fernbedienung reagierte oft verzögert oder gar nicht.",
      specialFeature:
        "Integrierter Bluetooth-Lautsprecher – leider wenig zuverlässig und qualitativ nicht überzeugend.",
      conclusion:
        "Das CITYSPORTS Bluetooth Walkingpad eignet sich höchstens als kurzfristige Übergangslösung für kurze Spaziergänge zu Hause. Für den dauerhaften Bürogebrauch oder längere Geh-Einheiten ist es aufgrund der lauten Betriebsweise, der schwachen Verarbeitung und der mangelhaften Steuerung nicht zu empfehlen.",
    },
  },
  Kiddoza: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/kiddozatest.png",
    overallScore: 3.48,
    status: "Bestanden",
    features: [
      "Kinderfreundliches Design mit bunter Benutzeroberfläche und leicht verständlichem Bedienfeld.",
      "Kompakte Lauffläche, geeignet für Spaziergänge oder leichtes Joggen zu Hause.",
      "Leichtbauweise mit minimalem Montageaufwand.",
      "Voreingestellte Programme für Aufwärmen und Einsteiger-Cardioeinheiten.",
      "Weiche Griffe und moderate Dämpfung für den Familiengebrauch.",
    ],
    tests: {
      Speed: {
        description:
          "Kiddoza erreicht moderate Höchstgeschwindigkeiten und funktioniert auf Basisniveau zuverlässig. Nicht für ambitionierte Läufer oder Leistungssportler gedacht. Die Bedienung ist intuitiv, und die Geschwindigkeit lässt sich mit minimaler Verzögerung anpassen.",
        rating: "3.5 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Aus leichten Materialien gefertigt, legt Kiddoza den Fokus auf Kosteneffizienz statt Robustheit. Für gelegentlichen Gebrauch geeignet, aber nicht für intensive tägliche Workouts.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Viele Kiddoza-Modelle verfügen über keine oder nur manuell einstellbare feste Steigungen. Dies schränkt die Trainingsvielfalt ein. Ideal für Nutzer, die keinen Wert auf Steigungstraining legen.",
        rating: "2.9 / 5",
        status: "Eingeschränkt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Dank kleinerer Motoren sind Kiddoza-Geräte relativ leise. Die Geräuschkulisse ist im Heimgebrauch akzeptabel, kann jedoch bei längerer Nutzung zunehmen.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Kiddoza bietet weiche Griffe und eine einfache Dämpfung. Die schmale Lauffläche eignet sich für Kinder und kleinere Erwachsene. Ergonomische Funktionen wie bei Premium-Modellen fehlen jedoch.",
        rating: "3.4 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzeltest: Kiddoza Walking Pad",
      modelName: "Kiddoza Walking Pad",
      verdict: "Keine Empfehlung für jegliche Nutzung",
      rating: 1.5,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Langzeittest",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2,
          description:
            "Sehr einfach gehalten mit schlechter Verarbeitungsqualität",
        },
        Lautstärke: {
          rating: 2,
          description: "Deutlich hörbar selbst bei moderaten Geschwindigkeiten",
        },
        "Dämpfung & Komfort": {
          rating: 1,
          description:
            "Kaum Dämpfung vorhanden; Walkingpad hart und unangenehm",
        },
        Steuerung: {
          rating: 2,
          description:
            "Altmodische Fernbedienung; App unzuverlässig und schwer zu bedienen",
        },
        "Office-Tauglichkeit": {
          rating: 1,
          description: "Zu laut und instabil für den Einsatz im Arbeitsumfeld",
        },
        "Preis-Leistung": {
          rating: 2,
          description:
            "Günstig, aber das merkt man auch deutlich an Verarbeitung und Leistung",
        },
      },
      extras: ["Nur LCD-Anzeige"],
      suitableFor:
        "Nur gelegentliches, sehr leichtes Gehen – und selbst das mit Vorsicht",
      mainDescription:
        "Das Kiddoza Walking Pad ist ein sehr einfaches Modell und richtet sich offenbar nur an Nutzer mit minimalen Ansprüchen. Im Test zeigte sich jedoch, dass das Gerät bereits ab Werk erhebliche Schwächen aufweist – einige Testgeräte ließen sich gar nicht starten, zeigten sofort Fehlermeldungen oder führten beim Einschalten sogar zu einem kurzen Knall mit Sicherungsauslösung.",
      testFindings:
        "Auch die Verarbeitungsqualität überzeugte nicht. Das Walkingpad ist sehr dünn, bietet keine echte Dämpfung und fühlt sich bereits nach wenigen Minuten unangenehm hart an. Aufkleber und Kunststoffgehäuse wirken billig, und die gesamte Konstruktion hinterlässt kein sicheres Gefühl. Die Lautstärke war überraschend hoch – selbst bei moderatem Tempo entwickelten sich deutliche Laufgeräusche. Die fehlende Dämpfung macht das Training schnell unangenehm für die Gelenke. Auch die Bedienung ist problematisch: Eine App ist teilweise zwingend notwendig, stürzt aber häufig ab oder verbindet sich nicht zuverlässig. Für Nutzer ohne Technikaffinität ist das Gerät kaum praxistauglich.",
      specialFeature:
        "Sein einziges echtes Merkmal ist ein einfaches LCD-Display – unzureichend angesichts der vielen Schwächen.",
      conclusion:
        "Unser Test zeigte klar: Das Kiddoza Walking Pad eignet sich weder für das Homeoffice noch für regelmäßige Nutzung. Mangelnde Sicherheit, hohe Lautstärke und fehlender Komfort machen es zu keiner Empfehlung – selbst nicht als Budget-Modell.",
    },
  },
  Superun: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/superuntest.png",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      "Breitere Lauffläche und mittelstarker Motor, ideal für Freizeitsportler.",
      "Motorisierte Steigung mit bis zu 12 Stufen für Bergtraining.",
      "Stabiles Gestell mit akzeptabler Tragkraft und modernem Display.",
      "Digitale Steuerung mit Informationen zu Zeit, Geschwindigkeit und Kalorien.",
      "Mittlere Dämpfung und zuverlässige Handläufe für den täglichen Gebrauch.",
    ],
    tests: {
      Speed: {
        description:
          "Das Superun bietet eine solide Geschwindigkeitsleistung mit gleichmäßiger Beschleunigung. Es erreicht zwar nicht das Niveau von High-End-Modellen, erfüllt aber die Anforderungen von Freizeit- und Hobbysportlern.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der Rahmen und der Motor sind robust genug für den täglichen, moderaten Einsatz. Testpersonen stellten gelegentliches Durchrutschen des Bandes unter höherer Belastung fest, insgesamt ist die Haltbarkeit jedoch solide.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die motorisierte Steigung lässt sich gut einstellen und ist eine sinnvolle Ergänzung für Intervall- und Bergtraining. Das Superun bietet bis zu 12 Steigungsstufen. Zwar ist die Umstellung nicht die schnellste, aber sie erfolgt zuverlässig und präzise.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Durchschnittliche Geräuschkulisse – Motorengeräusche und Schritte sind hörbar, aber akzeptabel. Geeignet für Wohnzimmer, in denen möglichst wenig Lärm gewünscht ist.",
        rating: "3.9 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Breites Walkingpad und benutzerfreundliches Interface erhöhen den Komfort. Die Dämpfung unterstützt längere Trainingseinheiten. Handläufe und Anzeige sind gut positioniert.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzeltest: Superun Raceable",
      modelName: "Superun Raceable",
      verdict: "Nicht für Büro geeignet",
      rating: 2.0,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Fitnesstrainer",
      testDuration: "Langzeittest",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Sportlich, aber instabil bei höheren Geschwindigkeiten",
        },
        Lautstärke: {
          rating: 2,
          description: "Sehr laut, mit Pieptönen und klackernden Geräuschen",
        },
        "Dämpfung & Komfort": {
          rating: 3,
          description: "Akzeptabel, aber das Band läuft unruhig und ruckelt",
        },
        Steuerung: {
          rating: 2,
          description:
            "Einfache Fernbedienung, reagiert oft verzögert; App instabil",
        },
        "Eignung fürs Büro": {
          rating: 2,
          description: "Zu laut und instabil für ruhige Arbeitsumgebungen",
        },
        "Preis-Leistung": {
          rating: 2,
          description: "Angesichts der Schwächen nicht überzeugend",
        },
      },
      extras: ["Racing-Modus", "Multiplayer-Funktion"],
      suitableFor:
        "Gamifizierte Workouts für Gelegenheitssportler – nicht für Profis oder den Bürogebrauch geeignet",
      mainDescription:
        "Das Superun Raceable fällt durch Gamification-Funktionen wie Racing- und Multiplayer-Modus auf, die zunächst spannend wirken. In der Praxis zeigt sich jedoch schnell, dass das Gerät für den Einsatz im Homeoffice ungeeignet ist.",
      testFindings:
        "Schon kurz nach dem Aufbau traten mehrere Probleme auf. Das Band verschob sich seitlich, musste häufig nachjustiert werden und lief unruhig – was ein unsicheres Gefühl vermittelte. Das Gerät war extrem laut, mit Pieptönen beim Start und bei Geschwindigkeitsänderungen sowie klackernden und schleifenden Geräuschen, die mit der Zeit lauter wurden. Der Motor überhitzte spürbar und verströmte einen deutlichen Kunststoffgeruch, was längere Nutzung riskant machte. Die Fernbedienung reagierte träge, die App war instabil, was das Training zusätzlich störte.",
      specialFeature:
        "Racing- und Multiplayer-Funktionen könnten Gelegenheitssportler ansprechen, gleichen die funktionalen Schwächen aber nicht aus.",
      conclusion:
        "Wegen der hohen Lautstärke, der instabilen Laufbewegung und der schlechten Steuerung ist das Superun Raceable nicht für den Bürogebrauch oder längere Sitzungen zu empfehlen.",
    },
  },
  Urevo: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/urevotest.jpg",
    overallScore: 4.15,
    status: "Bestanden",
    features: [
      "2-in-1 Design: Walkingpad und Walking Pad in einem.",
      "Kompakt und klappbar – ideal für kleine Wohnungen.",
      "Ruhiger Motor mit moderater Maximalgeschwindigkeit.",
      "Einfach zu bedienende Fernbedienung.",
      "LED-Anzeige zeigt Geschwindigkeit, Zeit, Distanz und Kalorien.",
    ],
    tests: {
      Geschwindigkeit: {
        description:
          "Für alltägliches Gehen und leichtes Joggen geeignet. Die Maximalgeschwindigkeit ist nicht für intensive Laufeinheiten gedacht, erfüllt jedoch den Zweck für Home-Office-Training und Fitness-Einsteiger.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Haltbarkeit: {
        description:
          "Das Gerät ist solide verarbeitet. Die Materialien wirken hochwertig, und der Rahmen bleibt auch bei täglicher Nutzung stabil.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Steigung: {
        description:
          "Keine einstellbare Steigung vorhanden. Das Walkingpad ist flach konzipiert, was für viele Home-User ausreicht, aber für Bergläufe oder Intervalltraining nicht geeignet ist.",
        rating: "2.8 / 5",
        status: "Nicht bestanden",
        icon: TrendingUp,
      },
      Lautstärke: {
        description:
          "Der Motor ist leise und erzeugt nur geringe Laufgeräusche. Optimal für die Nutzung in Wohnungen oder Büros.",
        rating: "4.5 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Komfort: {
        description:
          "Die Lauffläche ist kompakt, aber für normales Gehen ausreichend. Die Dämpfung ist vorhanden, aber nicht mit großen Studiowalkingpadn vergleichbar.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzeltest: UREVO 2-in-1",
      modelName: "UREVO 2-in-1 Walkingpad",
      verdict: "Kompaktes Multitalent für Zuhause und Büro",
      rating: 4.2,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "2 Wochen Alltagseinsatz im Homeoffice",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 4,
          description:
            "Schlichtes, modernes Design mit robustem Rahmen. Platzsparend und einfach zu verstauen.",
        },
        Lautstärke: {
          rating: 5,
          description:
            "Besonders leise, kaum hörbar – ideal für konzentriertes Arbeiten während des Gehens.",
        },
        "Dämpfung & Komfort": {
          rating: 3,
          description:
            "Ausreichende Dämpfung für Gehen, beim Joggen eher hart.",
        },
        Steuerung: {
          rating: 4,
          description:
            "Einfache Steuerung über Fernbedienung, keine App-Anbindung.",
        },
        "Steigung & Intervalltraining": {
          rating: 2,
          description: "Keine Steigung – für ambitionierte Nutzer limitiert.",
        },
        "Preis-Leistung": {
          rating: 5,
          description:
            "Sehr guter Preis für eine 2-in-1-Lösung – ideal für den Einstieg.",
        },
      },
      extras: ["Fernbedienung", "LED-Anzeige", "Klappbares Design"],
      suitableFor: "Fitness-Einsteiger, Homeoffice-Nutzer, ältere Menschen",
      mainDescription:
        "Das UREVO 2-in-1 Walkingpad überzeugt durch seine Vielseitigkeit: Es eignet sich sowohl zum Gehen beim Arbeiten als auch für kurze Joggingeinheiten nach Feierabend. Besonders kompakt und ideal für kleine Wohnungen.",
      testFindings:
        "Im Praxistest zeigte sich das Walkingpad stabil, einfach zu bedienen und vor allem leise. Für intensive Laufeinheiten ist es nicht gedacht, erfüllt aber zuverlässig seinen Zweck als Bewegungslösung im Alltag.",
      specialFeature:
        "Kompakt, klappbar und superleise – perfekt für den täglichen Einsatz im Homeoffice.",
      conclusion:
        "Ein smartes Walking Pad für alle, die im Alltag mehr Bewegung wollen. Kein Profigerät, aber ein starker Alltagsbegleiter.",
    },
  },
  Copant: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/Lucid_Origin_A_fit_muscular_man_with_a_manbun_hairstyle_light__3.jpg",
    overallScore: 3.5,
    status: "Bestanden",
    features: [
      "1–6 km/h Geschwindigkeit – ideal fürs Büro-Walking und leichtes Joggen",
      "2,5-PS-Motor, Tragkraft bis 136 kg",
      "APP-Steuerung für Programme, Renn-Modi und Tracking",
      "Kompaktes, untertisch-taugliches Design zum Verstauen unter Schreibtisch / Bett",
      "Stoßdämpfende, rutschfeste Lauffläche für gelenkschonendes Training",
    ],
    tests: {
      Speed: {
        description:
          "Mit bis zu 6 km/h ist das Copant deutlich auf Walking und leichtes Joggen ausgelegt. Für Power-Walking und kurze Jogging-Intervalle reicht es aus, für längere Läufe nicht.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die Belastbarkeit bis 136 kg und die robuste Bauweise geben im Test ein gutes Gefühl, auch bei täglicher Nutzung.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Es gibt keine echte Steigungsfunktion – das Gerät ist flach ausgelegt. Wer Wert auf Bergtraining legt, kommt hier nicht auf seine Kosten.",
        rating: "2.8 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Der Motor läuft leise; Erfahrungsberichte loben insbesondere den ruhigen Betrieb beim Arbeiten am Schreibtisch.",
        rating: "4.4 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die mehrschichtige Lauffläche mit Dämpfung bietet ein angenehmes, gelenkschonendes Laufgefühl und solide Stabilität.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Copant Walking Pad mit APP-Steuerung",
      modelName: "Sportstech sWalk Lite",
      verdict: "Stark für Homeoffice & Tech-Fans",
      rating: 5.0,
      publishDate: "April 2025 ",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2.0,
          description: "Schlank, modern, gut verarbeitet, auf platzsparende Nutzung optimiert.",
        },
        Lautstärke: {
          rating: 3,
          description: "Leiser Betrieb – gut geeignet für Telefonate, Videocalls und späte Stunden.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 3,
          description: "Wirksame Dämpfung, stabiler Lauf, angenehm für längere Geh-Sessions.",
        },
        Steuerung: {
          rating: 2.5,
          description: "Fernbedienung + App-Steuerung (PitPat). Volle Stärke erst mit App nutzbar.",
        },
        Bürotauglichkeit: {
          rating: 3,
          description: "Sehr gut – speziell fürs Under-Desk-Walking konzipiert.",
        },
        "Preis-Leistung": {
          rating: 2,
          description: "Stark, wenn man die App-Funktionen aktiv nutzt; weniger attraktiv, wenn man nur „einfach gehen“ möchte.",
        },
      },
      extras: ["PitPat-App", "Multi-Runner-Rennen", "Trainingskurse","Aktivitäts-Tracking"],
      suitableFor: "Homeoffice-Nutzer, Tech-Fans, Gamification-Freunde, Alltagstraining bei 1–6 km/h.",
      mainDescription:
        "Im Test präsentiert sich das Copant Walking Pad als modernes, app-fokussiertes Walking Pad für alle, die Training und Technik verbinden wollen. Die PitPat-App liefert Programme, Rennmodi und Statistiken – ideal für Nutzer, die sich über Gamification und Zahlen motivieren.",
      testFindings: "Die Geschwindigkeitsrange von 1–6 km/h passt perfekt zu Unter-Desk-Workouts, gemütlichem Walking und kurzen, etwas intensiveren Einheiten. Besonders positiv fällt die Kombination aus leisem Betrieb, ordentlicher Dämpfung und hoher Belastbarkeit auf.",
      specialFeature:
        "Die Integration der PitPat-App mit Trainingsprogrammen, Rennmodi und detaillierten Statistiken bietet ein motivierendes, gamifiziertes Trainingserlebnis.",
      conclusion:
        "Das Fehlen einer Steigungsfunktion schränkt die Trainingsvielfalt ein, und ohne App geht ein großer Teil des Mehrwerts verloren – wer keine Lust auf Smartphone-Steuerung hat, nutzt den Funktionsumfang nur eingeschränkt. Insgesamt ist das Copant aber ein sehr interessantes Paket für Büroathleten und Technikfreunde, die Bewegung in ihren Alltag integrieren wollen.",
    },
  },
  Merach: {
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/Lucid_Origin_A_fit_muscular_man_with_a_manbun_hairstyle_light__0.jpg",
    overallScore: 3.4,
    status: "Bestanden",
    features: [
      "2.75PS -Motor für Walking & leichtes Joggen",
      "0–5 % Steigung für gelenkschonendes, intensiveres Training",
      "6 km/h, ideal für Schreibtisch-Workouts und lockeres Joggen",
      "Max. Belastung bis 120 kg, stabile Stahlrahmenkonstruktion ",
    ],
    tests: {
      Speed: {
        description:
          "Mit 6 km/h ist das MERACH ganz klar auf Walking, Power-Walking und sehr leichtes Joggen ausgelegt. Für diese Zielgruppe ist der Geschwindigkeitsbereich sinnvoll.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Der integrierte Stahlrahmen und die hohe Belastbarkeit hinterlassen einen soliden Eindruck, auch für tägliches Gehen.",
        rating: "4.2 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die 5-%-Steigung macht das MERACH spürbar vielseitiger als flache Modelle – ideal, um mehr Trainingsreiz bei moderatem Tempo zu erzielen.",
        rating: "4.2 / 5",
        status: "Gut",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Mit einem Geräuschpegel von unter 45 dB ist das MERACH sehr leise und damit bestens für Büro, Mietwohnungen und späte Abendstunden geeignet. ",
        rating: "4.7 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Das 5-lagige Dämpfungssystem bietet angenehmes, weiches Laufgefühl und schont Gelenke. Die Lauffläche ist ausreichend dimensioniert für Walking, bei sehr langen Schritten im Jogging-Bereich wird es etwas knapp.",
        rating: "4.3 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: MERACH Walking Pad mit 5 % Steigung",
      modelName: "MERACH Walking Pad ",
      verdict: "Top für Büro & gelenkschonendes Walking",
      rating: 5.0,
      publishDate: "März 2025 ",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 2,
          description: "Moderner Look, stabile Stahlrahmenkonstruktion, wirkt deutlich hochwertiger als viele No-Name-Pads.",
        },
        Lautstärke: {
          rating: 3,
          description: "Sehr leise – hervorragend fürs Büro und späte Workouts.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 3,
          description: "Starke Dämpfung, angenehm federnd, gut für empfindliche Knie.",
        },
        Steuerung: {
          rating: 2,
          description: "Fernbedienung + LED-Anzeige, bei manchen Varianten zusätzlich App-Steuerung.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Sehr gut – optimiert für Unter-Desk-Nutzung und leise Sessions.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Hervorragend für Nutzer, die gezielt ein leises, hochwertiges Walking Pad suchen.",
        },
      },
      extras: ["Steigung", "App-Support (modellabhängig)", "Trainingsmodi"],
      suitableFor: "Gesundheitsorientiertes Walking, Homeoffice-Bewegung, Nutzer mit empfindlichen Gelenken.",
      mainDescription:
        "Das MERACH Walking Pad mit 5 % Steigung zeigt im Test eine runde Gesamtperformance für alle, die viel gehen, aber nicht sprinten wollen. Der Fokus liegt klar auf Komfort, Leiselauf und Gelenkschonung: leiser Motor, starke Dämpfung, moderate Geschwindigkeit und Steigungsfunktion.",
      testFindings:
        "Für intensives Lauftraining ist die 6-km/h-Grenze zu niedrig, dafür spielt es im Alltag seine Stärken aus – gerade bei Personen, die im Homeoffice oder beim Fernsehen ihre Schritte sammeln möchten. Die Steigung bringt Abwechslung und erhöht den Kalorienverbrauch, ohne das Tempo in kritische Bereiche treiben zu müssen.",
      specialFeature:
        "Die 5-%-Steigungsfunktion sorgt für zusätzliche Trainingsintensität, mehr Kalorienverbrauch und abwechslungsreichere Geh-Einheiten – ohne höhere Geschwindigkeiten zu benötigen.",
      conclusion:
        "Insgesamt ist das MERACH eines der attraktivsten Geräte für Nutzer, die ruhige, gelenkschonende, aber trotzdem forderndere Geh-Einheiten suchen – und Wert auf gute Materialqualität und niedrige Lautstärke legen.",
    },
  },
  Cursor: {
    image: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/cursertrainerimage.jpg",
    overallScore: 3.9,
    status: "Bestanden",
    features: [
      "Kompaktes Design (114 × 55 × 11 cm) – flach genug für Bett / Sofa / Schreibtisch ",
      "9 % manuelle Steigung – deutlich intensiver als flache Pads",
      "1–10 km/h – Walking bis leichtes Joggen möglich ",
      "2,75-PS-bürstenloser Motor, laut Hersteller <45 dB",
      "Max. Benutzergewicht 136 kg, robuster Stahlrahmen",
    ],
    tests: {
      Speed: {
        description:
          "Mit 10 km/h erreicht das CURSOR eine für Walking Pads hohe Spitze. Für regelmäßiges Walking sowie leichtes Joggen ist die Leistung gut – bei dauerhaft hoher Geschwindigkeit wirkt das Gerät aber weniger souverän als klassische Studiolaufbänder.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die Stahlkonstruktion und die hohe Tragkraft sprechen für gute Haltbarkeit. Gleichzeitig weisen einige Erfahrungsberichte auf ein Verziehen des Bandes bei höherem Tempo und aufwändige Neigungsverstellung hin, was ein Hinweis auf Grenzen im Langzeiteinsatz ist. ",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die 9-%-Steigung ist ein klarer Pluspunkt und macht das CURSOR deutlich vielseitiger als flache Pads. Negativ fällt auf, dass die Neigung nur manuell mit Werkzeug eingestellt wird.",
        rating: "4.0 / 5",
        status: "Gut",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Im Gehbereich arbeitet der Motor leise und wohnungstauglich. Bei höherem Tempo kommen mechanische Geräusche hinzu, bleiben aber im vertretbaren Rahmen.",
        rating: "4.1 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Die mehrfach beschriebene Dämpfung ist ordentlich, jedoch ist die Lauffläche für große Nutzer eher knapp und das Laufgefühl bei voller Geschwindigkeit nicht so stabil wie bei volldimensionierten Laufbändern.",
        rating: "3.7 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: CURSOR Walking Pad mit 9 % Steigung",
      modelName: "CURSOR Walking Pad ",
      verdict: "Für Walking & moderates Joggen – mit Einschränkungen",
      rating: 5.0,
      publishDate: "Januar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Kompakt, robust und wertiger Stahlrahmen, aber mit sichtbaren Grenzen bei hoher Belastung.",
        },
        Lautstärke: {
          rating: 2,
          description: "Leise im Walking-Bereich, bei 9–10 km/h hörbar, aber nicht extrem.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 2,
          description: "Gute Dämpfung, Lauffläche etwas kurz für lange Schritte und lange Läufe.",
        },
        Steuerung: {
          rating: 3,
          description: "Fernbedienung + LED – funktional, aber ohne moderne App-Steuerung bei dieser Variante.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Für langsames Gehen geeignet, für Jogging im Büro eher zu laut und zu auffällig.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Gut, wenn Steigung + 10 km/h wirklich genutzt werden – sonst gibt es einfachere Alternativen.",
        },
      },
      extras: ["Neigung", "12 Programme (modellabhängig)", "136-kg-Tragkraft"],
      suitableFor: "Nutzer, die mehr als nur „flach gehen“ wollen und kompakte Maße mit Steigung suchen.",
      mainDescription:
        "Das CURSOR Walking Pad positioniert sich als leistungsstarkes Walking Pad mit Steigung, das mehr kann als nur Büro-Walking. Im Test punktet es mit seiner 9-%-Steigung, der hohen Tragkraft und bis zu 10 km/h – damit lässt sich ernsthaftes Power-Walking und leichtes Joggen umsetzen.",
      testFindings:
        "Auf der anderen Seite wird deutlich, dass es sich trotz guter Daten nicht um ein vollwertiges Studiolaufband handelt: Die Lauffläche ist eher kurz, bei hohem Tempo wirkt das Gerät weniger stabil und laufruhig, und die Neigungsverstellung ist unpraktisch – wer regelmäßig zwischen flach und steil wechseln will, wird sich am Werkzeugbedarf stören.",
      specialFeature:
        "Die 9-%-Steigungsfunktion kombiniert mit hoher Tragkraft und einer maximalen Geschwindigkeit von 10 km/h ermöglicht Power-Walking und leichtes Joggen auch auf kompaktem Raum.",
      conclusion:
        "Als kompaktes Gerät für ambitionierteres Home-Walking macht das CURSOR eine gute Figur, als Dauerläufer für längere Jogging-Sessions bleibt es deutlich hinter großen Laufbändern zurück. Insgesamt ein kräftiges, aber nicht perfektes Gerät für Nutzer, die Steigung, Tempo und dennoch kompakte Maße wollen.",
    },
  },
  Cazvian: {
    image: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/caziantrainer.jpg",
    overallScore: 4.1,
    status: "Bestanden",
    features: [
      "Kompaktes, flaches Design (ca. 111 × 56 × 10,5 cm) – ideal für kleine Wohnungen und Homeoffice",
      "Manuelle 5-%-Steigung für etwas intensivere Geh-Sessions",
      "38 × 90 cm Lauffläche – ausreichend für Walking, aber knapp für sehr große Nutzer",
      "Leiser Motor für den Einsatz in Mehrfamilienhäusern",
      "Geringes Gewicht (ca. 16 kg) und Transportrollen für einfache Aufbewahrung",
    ],
    tests: {
      Speed: {
        description:
          "Das Cazvian Walking Pad bietet eine Geschwindigkeit von 1–6 km/h und ist damit klar auf Walking ausgelegt. Für Alltagsbewegung und langsames Gehen ist die Geschwindigkeit ausreichend, für Jogging hingegen nicht.",
        rating: "3.6 / 5",
        status: "Bestanden",
        icon: Zap,
      },
      Durability: {
        description:
          "Die Konstruktion ist für ein leichtes Walking Pad ordentlich, aber nicht extrem robust ausgelegt. Für tägliche Geh-Sessions ist es okay, für sehr intensive Nutzung eher grenzwertig.",
        rating: "3.8 / 5",
        status: "Bestanden",
        icon: Shield,
      },
      Incline: {
        description:
          "Die 5-%-Steigung ist ein Plus gegenüber ganz flachen Pads, allerdings nur manuell einstellbar und nicht während des Trainings veränderbar.",
        rating: "3.3 / 5",
        status: "Begrenzt",
        icon: TrendingUp,
      },
      Noise: {
        description:
          "Im typischen Walking-Bereich arbeitet der Motor leise, was das Cazvian sehr gut für Wohnungen, Homeoffice und spätes Abendtraining geeignet macht.",
        rating: "4.6 / 5",
        status: "Bestanden",
        icon: Volume2,
      },
      Comfort: {
        description:
          "Der mehrlagige Laufgurt bietet ordentliche Dämpfung. Die eher kurze Lauffläche limitiert den Komfort für größere Nutzer und lange Schritte.",
        rating: "4.0 / 5",
        status: "Bestanden",
        icon: Heart,
      },
    },
    individualReview: {
      title: "Einzelne Bewertung: Cazvian Walking Pad mit 5 % Steigung",
      modelName: "Cazvian Walking Pad",
      verdict: "Gut für Homeoffice-Walking und leichte Nutzung",
      rating: 5.0,
      publishDate: "Februar 2025",
      author: "Steve Austin",
      expertise: "Zertifizierter Personal Trainer",
      testDuration: "Erweiterte Tests",
      testCriteria: {
        "Design & Verarbeitung": {
          rating: 3,
          description: "Sehr flach und leicht, gut transportierbar, aber eher einfaches Materialniveau und keine Premium-Haptik.",
        },
        Lautstärke: {
          rating: 3,
          description: "Leiser Motor im Walking-Bereich – ideal für Mehrfamilienhäuser und Büro.",
        },
        "Dämpfung & Laufkomfort": {
          rating: 2,
          description: "Solide Dämpfung, jedoch kurze Lauffläche, die große Nutzer einschränkt.",
        },
        Steuerung: {
          rating: 2,
          description: "Einfache Steuerung nur über Fernbedienung und LED-Anzeige, ohne App oder Programme.",
        },
        Bürotauglichkeit: {
          rating: 2,
          description: "Sehr gut als Unter-Desk-Lösung geeignet – leise und kompakt.",
        },
        "Preis-Leistung": {
          rating: 3,
          description: "Gut im Einsteigersegment, wenn der Fokus klar auf Walking liegt.",
        },
      },
      extras: ["Manuelle Steigung", "Transportrollen – keine App", "keine Programme"],
      suitableFor: "Kurze bis mittlere Geh-Sessions im Homeoffice und in kleinen Wohnungen.",
      mainDescription:
        "Auf den ersten Blick ist das Cazvian Walking Pad ein klassisches Unter-Desk-Laufband: flach, leicht, schlicht. Im Test überzeugt es vor allem als günstige und leise Lösung für mehr Alltagsbewegung im Homeoffice. Die 5-%-Steigung hebt es von vielen flachen Pads ab und bringt einen spürbaren Mehrreiz – allerdings bleibt die Verstellung rein manuell und etwas unkomfortabel, wenn man die Neigung häufiger ändern möchte.",
      testFindings:
        "Die Lauffläche ist für durchschnittliche Nutzer okay, für Personen mit langen Schritten allerdings knapp. Auch die maximale Geschwindigkeit von 6 km/h macht klar: Joggen ist nicht das Ziel, sondern ergonomisches Gehen, Schrittziele und leichte Cardio-Einheiten.In Sachen Verarbeitungsqualität liegt das Cazvian im soliden Einsteigerbereich – ausreichend stabil, aber nicht überdimensioniert. Für tägliche 30–60 Minuten Walking ist es gut einsetzbar, für sehr schwerere Nutzer oder hartes Training eher nicht gedacht.",
      specialFeature:
        "Die 5-%-Steigung als seltenes Feature in dieser Preisklasse bietet zusätzlichen Trainingsreiz und macht einfache Geheinheiten spürbar intensiver – ganz ohne App oder Technik-Zwang.",
      conclusion:
        "Insgesamt ist das Cazvian Walking Pad eine gute Lösung für Menschen mit wenig Platz, die primär im Homeoffice oder abends vor dem TV gehen möchten – ohne App-Zwang, ohne Schnickschnack.",
    },
  },
};

export default function TestingProcessPage() {
  const [activeBrand, setActiveBrand] = useState("Sportstech sWalk Lite");
  const brandData = testData[activeBrand];

  useEffect(() => {
    if (brandData?.image) {
      const img = new Image();
      img.src = brandData.image; // Preload the image
    }
  }, [brandData?.image]);

  const renderGrade = (ratingStr) => {
    const grade = ratingToGrade(parseFloat(ratingStr));
    const heading = getGradeHeading("de");
    const label = getGradeLabel(grade.key, "de");
    const gradeValue = formatGradeValue(grade.value, "de");
    const pill = getGradeBgClass(grade.key);

    return (
      <span
        className={`inline-flex items-center justify-between w-[150px] px-3 py-1 rounded-md border text-xs font-bold tabular-nums whitespace-nowrap ${pill}`}
      >
        <span className="font-semibold opacity-80">{heading}</span>
        <span className="text-sm min-w-[3ch] text-center">{gradeValue}</span>
        <span className="font-medium opacity-90">{label}</span>
      </span>
    );
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Passed":
        return "text-green-600 bg-green-100";
      case "Limited":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Professional */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unser Testprozess
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unser Experte,
              <span className="font-semibold text-gray-900">Steve Austin</span>,
              bewertet walkingpad, um Ihnen ehrliche und gründliche Bewertungen
              zu liefern.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                alt="Steve Austin"
                className="rounded-lg shadow-lg w-96 h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  <strong className="text-gray-900">
                    Bei WalkingpadReviews
                  </strong>
                  glauben wir, dass die Wahl des richtigen Walkingpades auf
                  echten Tests basieren sollte – nicht nur auf
                  Marketingversprechungen. Aus diesem Grund haben wir unseren
                  Experten,
                  <strong className="text-gray-900">Steve Austin</strong>,
                  beauftragt, die fünf besten Walkingpadmarken der Branche zu
                  bewerten.
                </p>
                <p className="text-gray-600">
                  Walking Pads sind in den letzten Jahren zu einem festen
                  Bestandteil vieler Haushalte und Büros geworden. Immer mehr
                  Menschen arbeiten im Homeoffice oder verbringen lange Stunden
                  im Sitzen. Die kompakten Laufgeräte ermöglichen es, Bewegung
                  in den Alltag zu integrieren, ohne viel Platz zu beanspruchen.
                  Sie sind besonders beliebt bei Personen, die auch während der
                  Arbeit aktiv bleiben möchten, um Haltungsschäden und
                  Bewegungsmangel vorzubeugen. Im Rahmen unseres Tests 2025
                  haben wir fünf aktuelle Modelle ausführlich geprüft. Dabei
                  standen Kriterien wie Lautstärke, Bedienkomfort, Stabilität,
                  Steuerungsmöglichkeiten und Preis-Leistungs-Verhältnis im
                  Fokus. Besonders wichtig war uns die Eignung für den Einsatz
                  im Homeoffice, wo eine geringe Geräuschkulisse und eine
                  einfache Handhabung entscheidend sind.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900">
                    Zertifizierungsprozess
                  </span>
                </div>
                <p className="text-blue-800 text-sm">
                  Jedes Walkingpad, das hier vorgestellt wird, hat unseren
                  strengen Testprozess durchlaufen und erfüllt weiterhin
                  ausgezeichnete Leistungen unter realen Bedingungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Selection */}
      <div className="max-w-8xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Markenspezifische Testanalyse & Bewertungen
          </h2>
          <p className="text-lg text-gray-600">
            Vergleichen Sie detaillierte Testergebnisse in allen Kategorien
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 border ${
                activeBrand === brand
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {brandData && (
          <div className="space-y-8">
            {/* Brand Overview Card */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {activeBrand} Walkingpad Details
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                        brandData.status
                      )}`}
                    >
                      {brandData.status}
                    </div>
                    <div className="flex items-center">
                      {renderGrade(brandData.overallScore)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex justify-center">
                    <img
                      src={brandData.image}
                      alt={`${activeBrand} Laufband`}
                      className="rounded-lg shadow-md max-w-full h-auto"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Hauptmerkmale
                    </h3>
                    {brandData.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Test Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(brandData.tests).map(([test, data]) => {
                const IconComponent = data.icon;
                return (
                  <div
                    key={test}
                    className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {test} Test
                          </h3>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                            data.status
                          )}`}
                        >
                          {data.status}
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {data.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          {renderGrade(data.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Individual Review Section */}
            {brandData.individualReview && (
              <div className="mt-16 space-y-8">
                {/* Review Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {brandData.individualReview.title}
                      </h2>
                      <div className="flex items-center space-x-4 text-blue-100">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{brandData.individualReview.publishDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{brandData.individualReview.author}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30">
                      <div className="flex items-center space-x-2">
                        <BadgeCheck className="w-5 h-5" />
                        <span className="font-bold text-lg">
                          {brandData.individualReview.verdict}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column - Main Review Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Main Description */}
                    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {brandData.individualReview.mainDescription}
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {brandData.individualReview.testFindings}
                      </p>
                      {brandData.individualReview.specialFeature && (
                        <p className="text-gray-700 leading-relaxed mb-4">
                          <strong>
                            {brandData.individualReview.specialFeature}
                          </strong>
                        </p>
                      )}
                      <p className="text-gray-800 font-semibold">
                        {brandData.individualReview.conclusion}
                      </p>
                    </div>

                    {/* Test Criteria Table */}
                    {brandData.individualReview.testCriteria && (
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Testkriterien
                        </h3>
                        <div className="space-y-3">
                          {Object.entries(
                            brandData.individualReview.testCriteria
                          ).map(([criteria, data]) => (
                            <div
                              key={criteria}
                              className="border-b border-gray-100 pb-3 last:border-0"
                            >
                              <div className="flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-gray-900">
                                    {criteria}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {data.description}
                                  </p>
                                </div>
                                <div className="flex-shrink-0 pt-1">
                                  {renderGrade(data.rating)}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Pros and Cons - for other brands */}
                    {brandData.individualReview.prosAndCons && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                          <h4 className="font-bold text-green-900 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Pros
                          </h4>
                          <ul className="space-y-2">
                            {brandData.individualReview.prosAndCons.pros.map(
                              (pro, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-green-800">
                                    {pro}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                        <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                          <h4 className="font-bold text-red-900 mb-4 flex items-center">
                            <ChevronRight className="w-5 h-5 mr-2" />
                            Cons
                          </h4>
                          <ul className="space-y-2">
                            {brandData.individualReview.prosAndCons.cons.map(
                              (con, idx) => (
                                <li key={idx} className="flex items-start">
                                  <ChevronRight className="w-4 h-4 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                                  <span className="text-sm text-red-800">
                                    {con}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Highlights - for other brands */}
                    {brandData.individualReview.highlights && (
                      <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
                          Wichtige Highlights
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {brandData.individualReview.highlights.map(
                            (highlight, idx) => {
                              const HighlightIcon = highlight.icon;
                              return (
                                <div
                                  key={idx}
                                  className="text-center p-4 bg-gray-50 rounded-lg"
                                >
                                  <div className="inline-flex p-3 bg-blue-100 rounded-full mb-3">
                                    <HighlightIcon className="w-6 h-6 text-blue-600" />
                                  </div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    {highlight.title}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {highlight.description}
                                  </p>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Specifications & Extras */}
                  <div className="lg:col-span-1 space-y-6">
                    {/* Extras */}
                    {brandData.individualReview.extras && (
                      <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                        <h3 className="text-lg font-bold text-blue-900 mb-3">
                          Extras
                        </h3>
                        <ul className="space-y-2">
                          {brandData.individualReview.extras.map(
                            (extra, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <Sparkles className="w-4 h-4 text-blue-600" />
                                <span className="text-blue-800">{extra}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Suitable For */}
                    {brandData.individualReview.suitableFor && (
                      <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                        <h3 className="text-lg font-bold text-green-900 mb-3">
                          Geeignet für
                        </h3>
                        <p className="text-green-800">
                          {brandData.individualReview.suitableFor}
                        </p>
                      </div>
                    )}

                    {/* Specifications */}
                    {brandData.individualReview.specifications && (
                      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 sticky top-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Spezifikationen
                        </h3>
                        <dl className="space-y-3">
                          {Object.entries(
                            brandData.individualReview.specifications
                          ).map(([key, value]) => (
                            <div
                              key={key}
                              className="border-b border-gray-200 pb-2 last:border-0"
                            >
                              <dt className="text-sm font-medium text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, " $1").trim()}
                              </dt>
                              <dd className="text-sm font-semibold text-gray-900">
                                {value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    )}
                  </div>
                </div>

                {/* Detailed Findings - for other brands */}
                {brandData.individualReview.detailedFindings && (
                  <div className="bg-white rounded-lg border border-gray-200 shadow-md p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Detaillierte Testbefunde
                    </h3>
                    <div className="space-y-6">
                      {Object.entries(
                        brandData.individualReview.detailedFindings
                      ).map(([category, content]) => (
                        <div
                          key={category}
                          className="border-l-4 border-blue-500 pl-6"
                        >
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 capitalize">
                            {category}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bottom Line - for other brands */}
                {brandData.individualReview.bottomLine && (
                  <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                    <div className="flex items-start space-x-3">
                      <Sparkles className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-blue-900 mb-2">
                          Fazit
                        </h4>
                        <p className="text-blue-800 leading-relaxed">
                          {brandData.individualReview.bottomLine}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Winner Section (only show for Sportstech models) */}
            {activeBrand.includes("Sportstech") && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-900">
                      {activeBrand === "Sportstech sWalk Lite"
                        ? "Gesamttestsieger: Sportstech sWalk Lite"
                        : "Premium-Auswahl: Sportstech WalkMate"}
                    </h4>
                    <p className="text-green-700">
                      {activeBrand === "Sportstech sWalk Lite"
                        ? "Höchste Gesamtbewertung in allen Testkategorien"
                        : "Beste Wahl für professionelle Office-Umgebungen"}
                    </p>
                  </div>
                </div>
                {activeBrand === "Sportstech sWalk Lite" ? (
                  <>
                    <p className="text-green-800 leading-relaxed">
                      Nach umfassenden Tests aller Marken setzte sich das
                      Sportstech sWalk Lite als ausgewogenstes und leistungsstarkes
                      Walkingpad durch. Es erzielte in jeder Kategorie starke
                      Ergebnisse mit einer hervorragenden Gesamtbewertung von
                     <strong className="inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-bold tabular-nums bg-green-100 text-green-800 border-green-300">Note 1.2 Sehr gut</strong>.
                    </p>
                    <br />
                    <p className="text-green-800 leading-relaxed">
                      Im Test 2025 überzeugte das sWalk Lite in nahezu allen
                      Disziplinen. Es kombiniert ein kompaktes, hochwertiges
                      Design mit leisem Betrieb und praktischer Steuerung. Für
                      den Einsatz im Homeoffice bietet es das beste Gesamtpaket
                      und ist daher unser Testsieger 2025.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-green-800 leading-relaxed">
                      Das Sportstech WalkMate steht für das Premium-Segment unter
                      den Walkingpads und wurde speziell für professionelle
                      Office-Umgebungen entwickelt. Es erreicht eine starke
                      Bewertung von <strong className="inline-flex items-center px-2.5 py-1 rounded-md border text-xs font-bold tabular-nums bg-green-100 text-green-800 border-green-300">Note 1.3 Sehr gut</strong>.
                    </p>
                    <br />
                    <p className="text-green-800 leading-relaxed">
                      Mit ultra-leisem Betrieb, kompakter Bauweise und zuverlässiger
                      Steuerung ist das WalkMate ideal für Nutzer, die im
                      Arbeitsalltag hohe Qualität und Ruhe benötigen.
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Buying Guide Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mt-12 border border-blue-200">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Kaufberatung – Worauf man achten sollte
                  </h2>
                  <p className="text-lg text-gray-600">
                    Wichtige Funktionen, die Sie bei der Wahl Ihres Walking Pads
                    berücksichtigen sollten
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Höhe unter 12 cm
                        </h4>
                        <p className="text-sm text-gray-600">
                          Wichtig für die Nutzung unter Stehschreibtischen ohne
                          Behinderung
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Volume2 className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Leiser Motor (&lt; 60 dB)
                        </h4>
                        <p className="text-sm text-gray-600">
                          Entscheidend für den Einsatz im Home Office und
                          Videoanrufe
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Wifi className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          App + Fernbedienung
                        </h4>
                        <p className="text-sm text-gray-600">
                          Flexible Bedienung ohne sich während der Arbeit bücken
                          zu müssen
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Heart className="w-5 h-5 text-orange-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Gute Polsterung & stabile Oberfläche
                        </h4>
                        <p className="text-sm text-gray-600">
                          Schützt die Gelenke während längerer Geh-Sessions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 md:col-span-2">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <Shield className="w-5 h-5 text-red-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Garantie und zuverlässiger Kundendienst
                        </h4>
                        <p className="text-sm text-gray-600">
                          Wichtiger Schutz für Ihre Investition mit
                          reaktionsschnellem Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    <strong className="text-gray-900">
                      Bevor Sie kaufen, denken Sie daran, wie oft und in welchem
                      Umfeld das Walking Pad genutzt wird.
                    </strong>
                    Für den täglichen Bürogebrauch sollten Sie leisen Betrieb
                    und App-Steuerung priorisieren. Für gelegentliche Workouts
                    zu Hause sollten Stabilität und Polsterung im Vordergrund
                    stehen. Passen Sie Ihre spezifischen Bedürfnisse an die
                    Funktionen an, die für Ihren Lebensstil am wichtigsten sind.
                  </p>
                </div>
              </div>
            </div>

            {/* Trainer Quote */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
              <div className="flex items-start space-x-4">
                <img
                  src="https://walkingpadassets.s3.us-east-1.amazonaws.com/images/trainer-1.jpg"
                  alt="Steve Austin"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <blockquote className="text-gray-700 italic mb-3 leading-relaxed">
                    "Nach dem Testen von über 200 walkingpadn in meiner
                    12-jährigen Karriere kann ich mit Zuversicht sagen, dass die
                    Maschinen, die wir hier empfehlen, das beste
                    Preis-Leistungs-Verhältnis und die beste Leistung in jeder
                    Kategorie bieten. Unsere Testmethodologie stellt sicher,
                    dass jeder Aspekt der Benutzerfreundlichkeit, Haltbarkeit
                    und Leistung gründlich bewertet wird."
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Steve Austin
                    </div>
                    <div className="text-sm text-gray-600">
                      Zertifizierter Personal Trainer, NASM
                    </div>
                    <div className="text-sm text-gray-500">
                      Getestet: 18+ walkingpad
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <FAQ />
    </div>
  );
}
