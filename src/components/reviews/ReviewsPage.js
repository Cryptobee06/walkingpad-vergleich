"use client";
import React, { useState, useRef, useEffect, Suspense } from "react";
import { useLocale } from "@/contexts/LanguageContext";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Star, Award, ArrowLeftToLine, ArrowRightToLine } from "lucide-react";

// All walking pads data
const allWalkingPadsData = [
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "sWalk Lite",
    slug: "sportstechswalklite",
    rating: 4.9,
    category: "both",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/treadmills/sportstech-treadmill.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "Modern LCD Display",
        de: "Modernes LCD-Display",
      },
      dimensions: {
        en: "127 x 56.5 x 11.5 cm",
        de: "127 x 56,5 x 11,5 cm",
      },
      weight: {
        en: "Up to 120 kg",
        de: "bis 120 kg",
      },
      resistance: {
        en: "Manual incline of 11.5%",
        de: "Manuelle Steigung von 11,5%",
      },
      programs: {
        en: "4 pre-installed programs (P01–P04)",
        de: "4 vorinstallierte Programme (P01–P04)",
      },
      heartRate: {
        en: "Hand Pulse Sensors + App",
        de: "Handpulssensoren + App",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5 HP",
      },
      speed: {
        en: "1-8 km/h",
        de: "1-8 km/h",
      },
    },
  },
  {
    id: "citysports",
    brand: "Citysports",
    model: "CS-WP6",
    slug: "Citysports",
    rating: 4.0,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-blue-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city04.png",
    price: "299.00",
    originalPrice: "349.00",
    features: {
      display: {
        en: "LED Display",
        de: "LED Display",
      },
      dimensions: {
        en: "123 x 49 x 12.1 cm",
        de: "123 x 49 x 12,1 cm",
      },
      weight: {
        en: "Up to 110 kg",
        de: "Bis 110 kg",
      },
      resistance: {
        en: "8%-10% Incline",
        de: "8%-10% Steigung",
      },
      programs: {
        en: "n/a",
        de: "n/a",
      },
      heartRate: {
        en: "n/a",
        de: "n/a",
      },
      motor: {
        en: "440 W",
        de: "440 Watt",
      },
      speed: {
        en: "Up to 6 km/h",
        de: "bis 6 km/h",
      },
    },
  },
  {
    id: "kiddoza",
    brand: "Kiddoza",
    model: "Under Desk Walking Pad",
    slug: "kiddoza",
    rating: 3.5,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-purple-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Kiddoza/kiddoza04.png",
    price: "449.00",
    originalPrice: "499.00",
    features: {
      display: {
        en: "LCD Display",
        de: "LCD Display",
      },
      dimensions: {
        en: "127.5 x 54.5 x 11.5 cm",
        de: "127.5x54.5x11.5cm",
      },
      weight: {
        en: "Up to 120 kg",
        de: "bis 120kg",
      },
      resistance: {
        en: "4% Incline",
        de: "4% Steigung",
      },
      programs: {
        en: "3 Programs",
        de: "3 Programme",
      },
      heartRate: {
        en: "n/a",
        de: "n/a",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5 PS",
      },
      speed: {
        en: "Up to 1-6 km/h",
        de: "bis 1-6 km/h",
      },
    },
  },
  {
    id: "superun",
    brand: "Superun",
    model: "B.A06-C",
    slug: "Superun",
    rating: 3.9,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-orange-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun04.png",
    price: "399.00",
    originalPrice: null,
    features: {
      display: {
        en: "LCD Display",
        de: "LCD Display",
      },
      dimensions: {
        en: "114 x 52 x 12 cm",
        de: "114 x 52 x 12 cm",
      },
      weight: {
        en: "Up to 136 kg",
        de: "bis 136 kg",
      },
      resistance: {
        en: "6% Incline",
        de: "6% Steigung",
      },
      programs: {
        en: "n/a",
        de: "n/a",
      },
      heartRate: {
        en: "n/a",
        de: "n/a",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5 PS",
      },
      speed: {
        en: "Up to 6 km/h",
        de: "Bis 6 km/h",
      },
    },
  },
  {
    id: "urevo",
    brand: "Urevo",
    model: "SpaceWalk E1L",
    slug: "Urevo",
    rating: 3.9,
    category: "advanced",
    badge: {
      en: "",
      de: "",
    },
    badgeColor: "bg-teal-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Urevo/ureo04.png",
    price: "379.00",
    originalPrice: "429.00",
    features: {
      display: {
        en: "LED Display",
        de: "LED Display",
      },
      dimensions: {
        en: "107 x 49 x 10.7 cm",
        de: "107 x 49 x 10.7 cm",
      },
      weight: {
        en: "Up to 120 kg",
        de: "bis 120kg",
      },
      resistance: {
        en: "n/a",
        de: "n/a",
      },
      programs: {
        en: "n/a",
        de: "n/a",
      },
      heartRate: {
        en: "n/a",
        de: "n/a",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5 HP",
      },
      speed: {
        en: "Up to 6 km/h",
        de: "bis 6 km/h",
      },
    },
  },
  {
    id: "sportstechwalkmate",
    brand: "Sportstech",
    model: "WalkMate",
    slug: "sportstechwalkmate",
    rating: 4.9,
    category: "both",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "/walkmate2.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LCD Display",
        de: "LCD Display",
      },
      dimensions: {
        en: "109.7 x 52.1 x 10.9 cm",
        de: "109,7 x 52,1 x 10,9 cm",
      },
      weight: {
        en: "120 kg",
        de: "120 kg",
      },
      resistance: {
        en: "5% Incline",
        de: "5% Steigung",
      },
      programs: {
        en: "4 pre-installed programs",
        de: "4 vorinstallierte Programme",
      },
      heartRate: {
        en: "Yes, via Bluetooth & App",
        de: "Ja, via Bluetooth & App",
      },
      motor: {
        en: "1 HP",
        de: "1 PS",
      },
      speed: {
        en: "6 km/h",
        de: "6 km/h",
      },
    },
  },
  {
    id: "Copant",
    brand: "Copant",
    model: "Raceable Walking Pad",
    slug: "Copant",
    rating: 3.5,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/copant/IMG_0009.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LCD display",
        de: "LCD-Display",
      },
      dimensions: {
        en: "107.8 x 51.4 x 10.5 cm",
        de: "107.8 x 51.4 x 10.5 cm",
      },
      weight: {
        en: "136 kg",
        de: "136 kg",
      },
      resistance: {
        en: "None",
        de: "ohne",
      },
      programs: {
        en: "None",
        de: "ohne",
      },
      heartRate: {
        en: "No data",
        de: "No data",
      },
      motor: {
        en: "No data",
        de: "No data",
      },
      speed: {
        en: "1-6 km/h",
        de: "1-6 km/h",
      },
    },
  },
  {
    id: "Merach",
    brand: "Merach",
    model: "T26B1 3-in-1 Treadmill",
    slug: "Merach",
    rating: 3.4,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/merach/IMG_0045.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED Display",
      },
      dimensions: {
        en: "1160 x 476 x 131 mm",
        de: "1160 x 476 x 131 mm",
      },
      weight: {
        en: "110 kg",
        de: "110 kg",
      },
      resistance: {
        en: "0%-5% Incline",
        de: "0%-5% Steigung",
      },
      programs: {
        en: "None",
        de: "ohne",
      },
      heartRate: {
        en: "No data",
        de: "No data",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5 HP",
      },
      speed: {
        en: "1-6 km/h",
        de: "1-6 km/h",
      },
    },
  },
  {
    id: "Cursor",
    brand: "Cursor",
    model: "Walking Pad",
    slug: "Cursor",
    rating: 3.8,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview.png",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED Display",
      },
      dimensions: {
        en: "114 x 55 x 11 cm",
        de: "114 x 55 x 11 cm",
      },
      weight: {
        en: "136 kg",
        de: "136 kg",
      },
      resistance: {
        en: "16% Incline",
        de: "16% Steigung",
      },
      programs: {
        en: "None",
        de: "ohne",
      },
      heartRate: {
        en: "No data",
        de: "No data",
      },
      motor: {
        en: "2.5 HP",
        de: "2.5HP",
      },
      speed: {
        en: "12 km/h",
        de: "12 km/h",
      },
    },
  },
  {
    id: "Cazvian",
    brand: "Cazvian",
    model: "Walking Pad",
    slug: "Cazvian",
    rating: 3.7,
    category: "amateur",
    badge: {
      en: "Test Winner 2025",
      de: "Testsieger 2025",
    },
    badgeColor: "bg-green-500",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfinal.jpg",
    price: "599.00",
    originalPrice: null,
    features: {
      display: {
        en: "LED Display",
        de: "LED Display",
      },
      dimensions: {
        en: "111 x 56 x 12 cm",
        de: "111 x 56 x 12 cm",
      },
      weight: {
        en: "110 kg",
        de: "110 kg",
      },
      resistance: {
        en: "5% Incline",
        de: "5% Steigung",
      },
      programs: {
        en: "1 Program",
        de: "1 program",
      },
      heartRate: {
        en: "No data",
        de: "No data",
      },
      motor: {
        en: "2.0 HP",
        de: "2.0HP",
      },
      speed: {
        en: "1-6 km/h",
        de: "1-6 km/h",
      },
    },
  },
];

// Category definitions
const categoryDefinitions = {
  amateur: {
    name: { en: "Amateur Walking Pads", de: "Amateur-Walking Pads" },
    ids: ["sportstechwalkmate", "Copant", "Merach", "Cursor", "Cazvian"],
  },
  advanced: {
    name: { en: "Advanced Walking Pads", de: "Advanced Walking Pads" },
    ids: ["sportstechswalklite", "citysports", "kiddoza", "superun", "urevo"],
  },
};

function ReviewsContent() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const category = categoryParam && categoryDefinitions[categoryParam] ? categoryParam : "amateur";
  const tableRef = useRef(null);

  // Filter walking pads based on category
  const getFilteredWalkingPads = () => {
    if (!category || !categoryDefinitions[category]) {
      return allWalkingPadsData;
    }

    const categoryIds = categoryDefinitions[category].ids;
    return allWalkingPadsData.filter(
      (pad) => categoryIds.includes(pad.id) || categoryIds.includes(pad.slug),
    );
  };

  const walkingPadsData = getFilteredWalkingPads();

  const renderStars = (rating) => {
    return (
      <div className="flex items-center justify-center gap-1">
        {[...Array(5)].map((_, i) => {
          const filled = i < Math.floor(rating);
          const half = !filled && i < rating;

          return (
            <span key={i} className="relative inline-block w-4 h-4">
              {/* Background (empty) star */}
              <Star className="w-4 h-4 text-gray-300 absolute inset-0" />

              {/* Half-fill overlay using clip */}
              {half && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </span>
              )}

              {/* Full-fill star */}
              {filled && (
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 absolute inset-0" />
              )}
            </span>
          );
        })}
        <span className="ml-1 text-sm font-semibold text-gray-700">
          {rating}
        </span>
      </div>
    );
  };

  const scrollToFirstColumn = () => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = 0;
    }
  };

  const scrollToLastColumn = () => {
    if (tableRef.current) {
      const lastColumn = tableRef.current.querySelector("th:last-child");
      if (lastColumn) {
        tableRef.current.scrollTo({
          left: lastColumn.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const featureRows = [
    {
      label: { en: "Display", de: "Display" },
      key: "display",
    },
    {
      label: { en: "Dimensions", de: "Abmessungen" },
      key: "dimensions",
    },
    {
      label: { en: "Max Weight Capacity", de: "bis Körpergewicht" },
      key: "weight",
    },
    {
      label: { en: "Incline/Resistance", de: "Widerstand" },
      key: "resistance",
    },
    {
      label: { en: "Training Programs", de: "Trainingsprogramme" },
      key: "programs",
    },
    {
      label: { en: "Heart Rate Monitoring", de: "Pulsmessung" },
      key: "heartRate",
    },
    {
      label: { en: "Motor", de: "Motor" },
      key: "motor",
    },
    {
      label: { en: "Speed Range", de: "Geschwindigkeit" },
      key: "speed",
    },
  ];

  const getCategoryTitle = () => {
    if (category && categoryDefinitions[category]) {
      return categoryDefinitions[category].name[locale];
    }
    return null;
  };

  const pageText = {
    title: {
      en: "Walking Pad Comparison 2025",
      de: "Walking Pad Vergleich 2025",
    },
    subtitle: {
      en: "Compare the best walking pads to find your perfect home fitness solution",
      de: "Die besten Walking Pads im direkten Vergleich",
    },
    model: {
      en: "Model",
      de: "Model",
    },
    readReview: {
      en: "Read Review",
      de: "Test lesen",
    },
    recommendation: category === "amateur" ? {
      title: {
        en: "Our Recommendation: Sportstech WalkMate - Winner 2025",
        de: "Empfehlung: Sportstech WalkMate - Testsieger 2025",
      },
      text: {
        en: "The Sportstech WalkMate stands out with the best features, high build quality, and an incredibly compact design. With up to 5% incline, an intuitive LCD display, and speeds up to 6 km/h, it's the premium choice for beginners and home office environments.",
        de: "Das Sportstech WalkMate überzeugt mit der besten Ausstattung, hoher Verarbeitungsqualität und einem extrem kompakten Design. Mit 5% Steigung, einem intuitiven LCD-Display und Geschwindigkeiten bis 6 km/h ist es die Premium-Wahl für Einsteiger und Homeoffice-Umgebungen.",
      },
    } : {
      title: {
        en: "Our Recommendation: Sportstech sWalk Lite - Winner 2025",
        de: "Empfehlung: Sportstech sWalk Lite - Testsieger 2025",
      },
      text: {
        en: "The Sportstech sWalk Lite stands out with the best features, highest quality, and most comprehensive functionality. With 11.5% manual incline, a modern LCD display, and speeds up to 8 km/h, it's the premium choice for demanding users seeking professional-grade home fitness equipment.",
        de: "Das Sportstech sWalk Lite überzeugt mit der besten Ausstattung, höchster Qualität und umfangreichsten Features. Mit 11,5% Steigung, modernem LCD-Display und Geschwindigkeiten bis 8 km/h ist es die Premium-Wahl für anspruchsvolle Nutzer und sportliche Heimanwender.",
      },
    },
    allWalkingPads: {
      en: "All Walking Pads",
      de: "Alle Walking Pads",
    },
  };

  const getBasePath = () => {
    return locale === "de" ? "/de" : "";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 treadmill-bacgroundimage">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-xl-5">
          <div className="text-center margin-banner mt-xl-5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageText.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {pageText.subtitle[locale]}
            </p>

          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 py-4">

            <Link
              href={`${getBasePath()}/reviews/?category=amateur`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === "amateur"
                ? "bg-primary-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {categoryDefinitions.amateur.name[locale]}
            </Link>
            <Link
              href={`${getBasePath()}/reviews/?category=advanced`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${category === "advanced"
                ? "bg-primary-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {categoryDefinitions.advanced.name[locale]}
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12">
        <div className="min-h-screen bg-gray-50 px-2 sm:px-4 lg:px-6">
          <div className="max-w-8xl mx-auto">
            {/* Mobile Cards View (< 768px) */}
            <div className="text-right mb-6 flex justify-between items-center"></div>
            <div className="md:hidden space-y-4 mb-6">
              {walkingPadsData.map((brand, index) => (
                <div
                  key={brand.id}
                  className={`bg-white rounded-lg shadow-lg p-4 border transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${brand.id === "sportstech"
                    ? "border-green-500 ring-1 ring-green-200 hover:ring-2 hover:ring-green-300"
                    : "border-gray-200 hover:border-gray-300"
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Badge for mobile */}
                  {brand.id === "sportstech" && brand.badge[locale] && (
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                        {brand.badge[locale]}
                      </div>
                      <div className="bg-green-500 text-white p-1 rounded-full">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="text-center mb-4">
                    <div className="w-full h-32 mb-3 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden p-2">
                      <img
                        src={brand.image}
                        alt={`${brand.brand} ${brand.model}`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">
                      {brand.brand} {brand.model}
                    </h3>
                    <div className="mb-3">{renderStars(brand.rating)}</div>
                  </div>

                  {/* Features List for Mobile */}
                  <div className="space-y-3 mb-4">
                    {featureRows.map((feature) => (
                      <div
                        key={feature.key}
                        className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium text-gray-700 text-sm flex-1 pr-3">
                          {feature.label[locale]}
                        </span>
                        <span
                          className={`text-sm text-right flex-1 ${brand.id === "sportstech"
                            ? "text-green-800 font-medium"
                            : "text-gray-700"
                            }`}
                        >
                          {brand.features[feature.key][locale]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Review Button for Mobile */}
                  <div className="mt-4">
                    <Link
                      href={`${getBasePath()}/brands/${brand.slug}`}
                      className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${brand.id === "sportstech"
                        ? "bg-green-600 text-white hover:bg-green-700"
                        : "bg-primary-600 text-white hover:bg-primary-700"
                        }`}
                    >
                      {pageText.readReview[locale]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>



            {/* Desktop Table View (>= 1024px) */}
            <div className="hidden md:block bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full relative">
                {/* TABLE WRAPPER */}
                <div className="w-full overflow-x-auto" ref={tableRef}>
                  <table className="border-collapse">
                    {/* HEADER */}
                    <thead>
                      <tr className="bg-gray-100">
                        {/* FIXED FIRST COLUMN */}
                        <th className="sticky left-0 z-30 bg-gray-100 border-r w-[260px] p-3 text-center font-semibold text-gray-700">
                          <span className="text-lg">
                            {pageText.model[locale]}
                          </span>
                        </th>

                        {/* SCROLLABLE BRAND COLUMNS */}
                        {walkingPadsData.map((brand, index) => (
                          <th
                            key={brand.id}
                            className="p-2 text-center align-top w-[300px]"
                          >
                            <div
                              className={`relative bg-white rounded-lg p-4 shadow-md border transition-all duration-500
                    ${brand.id === "sportstech"
                                  ? "border-green-500 ring-1 ring-green-200 hover:ring-2 hover:ring-green-300"
                                  : "border-gray-200 hover:border-gray-300"
                                }`}
                            >
                              {/* Badge only for Sportstech */}
                              {brand.id === "sportstech" &&
                                brand.badge[locale] && (
                                  <>
                                    <div className="absolute bg-green-500 text-white text-xs px-2 rounded-full font-semibold z-10">
                                      {brand.badge[locale]}
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-green-500 text-white p-1 rounded-full">
                                      <Award className="w-4 h-4" />
                                    </div>
                                  </>
                                )}

                              {/* Product Image */}
                              <div className="pt-2">
                                <div className="w-full h-32 mb-4 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden">
                                  <img
                                    src={brand.image}
                                    alt={`${brand.brand} ${brand.model}`}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-base mb-3 text-gray-800 leading-tight h-[70px]">
                                  {brand.brand} {brand.model}
                                </h3>

                                {/* Rating */}
                                <div className="mb-3">
                                  {renderStars(brand.rating)}
                                </div>

                                {/* Review Button */}
                                <Link
                                  href={`${getBasePath()}/brands/${brand.slug}`}
                                  className={`inline-block w-full text-center py-2 px-3 rounded-lg font-semibold text-sm transition-colors ${brand.id === "sportstech"
                                    ? "bg-green-600 text-white hover:bg-green-700"
                                    : "bg-primary-600 text-white hover:bg-primary-700"
                                    }`}
                                >
                                  {pageText.readReview[locale]}
                                </Link>
                              </div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* BODY ROWS */}
                    <tbody>
                      {featureRows.map((feature, index) => (
                        <tr
                          key={feature.key}
                          className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                            } border-t`}
                        >
                          {/* FIXED FEATURE NAME COLUMN */}
                          <td className="sticky left-0 z-20 bg-gray-100 border-r w-[260px] p-4 font-semibold text-gray-700">
                            <span className="text-base">
                              {feature.label[locale]}
                            </span>
                          </td>

                          {/* SCROLLABLE BRAND FEATURE COLUMNS */}
                          {walkingPadsData.map((brand) => (
                            <td
                              key={brand.id}
                              className={`p-4 text-center text-base w-[300px] ${brand.id === "sportstech"
                                ? "bg-green-50 text-green-800 font-medium"
                                : "text-gray-700"
                                }`}
                            >
                              {brand.features[feature.key][locale]}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* BOTTOM SUMMARY */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 border-t">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      {pageText.recommendation.title[locale]}
                    </h3>
                    <p className="text-green-700 text-lg max-w-3xl mx-auto">
                      {pageText.recommendation.text[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">Loading...</div>}>
      <ReviewsContent />
    </Suspense>
  );
}
