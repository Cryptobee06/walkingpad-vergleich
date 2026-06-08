// Convert a 5-star rating (0-5) into a German school grade (1.0 best – 6.0 worst)
// and a localized label (e.g. "Sehr gut" / "Very Good").

export function ratingToGrade(rating) {
  const r = Number(rating);
  if (Number.isNaN(r)) return { value: "-", key: "n/a" };

  // Clamp to 0-5
  const clamped = Math.max(0, Math.min(5, r));

  // Linear mapping: 5 -> 1.0, 0 -> 6.0
  const raw = 6 - clamped;

  // Round to 1 decimal, keep within 1.0 - 6.0
  const grade = Math.max(1.0, Math.min(6.0, Math.round(raw * 10) / 10));

  let key;
  if (grade <= 1.5) key = "veryGood";
  else if (grade <= 2.5) key = "good";
  else if (grade <= 3.5) key = "satisfactory";
  else if (grade <= 4.5) key = "sufficient";
  else if (grade <= 5.5) key = "poor";
  else key = "insufficient";

  return { value: grade.toFixed(1), key };
}

const LABELS = {
  veryGood: { en: "Very Good", de: "Sehr gut" },
  good: { en: "Good", de: "Gut" },
  satisfactory: { en: "Satisfactory", de: "Befriedigend" },
  sufficient: { en: "Sufficient", de: "Ausreichend" },
  poor: { en: "Poor", de: "Mangelhaft" },
  insufficient: { en: "Insufficient", de: "Ungenügend" },
  "n/a": { en: "n/a", de: "k. A." },
};

const HEADINGS = {
  en: "Grade",
  de: "Note",
};

export function getGradeLabel(key, locale = "en") {
  return (LABELS[key] && LABELS[key][locale]) || LABELS[key]?.en || "";
}

export function getGradeHeading(locale = "en") {
  return HEADINGS[locale] || HEADINGS.en;
}

export function formatGradeValue(value, locale = "en") {
  if (value === null || value === undefined) return "-";
  const str = String(value);
  return locale === "de" ? str.replace(".", ",") : str;
}

// Color classes by grade key (Tailwind text colors)
export function getGradeColor(key) {
  switch (key) {
    case "veryGood":
      return "text-green-700";
    case "good":
      return "text-lime-700";
    case "satisfactory":
      return "text-yellow-700";
    case "sufficient":
      return "text-orange-600";
    case "poor":
      return "text-red-600";
    case "insufficient":
      return "text-red-800";
    default:
      return "text-gray-600";
  }
}

// Background pill classes
export function getGradeBgClass(key) {
  switch (key) {
    case "veryGood":
      return "bg-green-100 text-green-800 border-green-300";
    case "good":
      return "bg-lime-100 text-lime-800 border-lime-300";
    case "satisfactory":
      return "bg-yellow-100 text-yellow-800 border-yellow-300";
    case "sufficient":
      return "bg-orange-100 text-orange-800 border-orange-300";
    case "poor":
      return "bg-red-100 text-red-800 border-red-300";
    case "insufficient":
      return "bg-red-200 text-red-900 border-red-400";
    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
}
