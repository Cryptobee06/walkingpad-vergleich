"use client";
import { useTranslations, useLocale } from "@/contexts/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const treadmillsData = [
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "sWalk Lite",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/images/products/treadmill-sportstech.webp",
    rating: 4.9,
    badge: "testWinner",
    badgeColor: "bg-yellow-500",
    link: "https://www.sportstech.de/laufband/swalk-lite",
  },
  {
    id: "Citysports",
    brand: "Citysports",
    model: "CS-WP6",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/CITYSPORTS/city04.png",
    rating: 4.0,
    badge: "",
    badgeColor: "bg-blue-500",
    // link: '/warningpage'
  },
  {
    id: "Superun",
    brand: "Superun",
    model: "B,A06-С",
    image:
      "https://walkingpadassets.s3.us-east-1.amazonaws.com/Superun+Raceable+Walking+Pad/superun05.png",
    rating: 3.9,
    badge: "",
    badgeColor: "bg-gray-500",
    //  link: '/warningpage'
  },
  {
    id: "sportstech",
    brand: "Sportstech",
    model: "WalkMate",
    image:
      "/100-WalkMate.jpg",
    rating: 4.9,
    badge: "testWinner",
    badgeColor: "bg-yellow-500",
    link: "https://www.sportstech.de/laufband/walkmate",
  },
  {
    id: "Cursor",
    brand: "Cursor",
    model: "Walking Pad",
    image: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/cursor/curser-removebg-preview+(1).png",
    rating: 3.8,
    badge: "",
    badgeColor: "bg-red-500",
  },
  {
    id: "Cazvian",
    brand: "Cazvian",
    model: "Walking Pad für Zuhause",
    image: "https://walkingpadassets.s3.us-east-1.amazonaws.com/walkingpad+assets/Cazvian/cazianfinal.jpg",
    rating: 3.7,
    badge: "",
    badgeColor: "bg-red-500",
  },
];

const getBadgeText = (badgeType, t) => {
  if (badgeType === "testWinner") {
    return t("sportstech.badge");
  }
  return "";
};

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 mt-2">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">
          ★
        </span>
      ))}
      {hasHalfStar && <span className="text-yellow-400 text-lg">☆</span>}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={i} className="text-gray-300 text-lg">
          ★
        </span>
      ))}
      <span className="text-sm text-gray-600 ml-2">{rating}</span>
    </div>
  );
};

export default function BestTreadmills() {
  const t = useTranslations("homepage.bestTreadmills");
  const locale = useLocale();

  return (
    <section id="best-treadmills" className="py-24 bg-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t("title")}
          </h2>
          {/* <div>            <a  className="text-gray-300 hover:text-primary-400 transition-colors" href='/warning'>hello</a></div> */}
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p> */}
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation
          pagination={{ clickable: true }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false
          // }}
          observer={true}
          observeParents={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          className="pb-20"
        >
          {treadmillsData.map((treadmill, index) => (
            <SwiperSlide key={`${treadmill.id}-${treadmill.model}-${index}`}>
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col overflow-hidden card-height">
                <div className="relative">
                  {treadmill.badge === "testWinner" && (
                    <span
                      className={`absolute top-4 left-4 ${treadmill.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow z-10`}
                    >
                      {getBadgeText(treadmill.badge, t)}
                    </span>
                  )}
                  <img
                    src={treadmill.image}
                    alt={`${treadmill.brand} ${treadmill.model}`}
                    className="w-full h-60 object-contain bg-white p-5"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {treadmill.brand} {treadmill.model}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                   {t(`${treadmill.id}.description`) || "No description available"}
                  </p>
                  <StarRating rating={treadmill.rating} />
                  <div className="mt-auto pt-5">
                    <a
                      href={treadmill.link}
                      target={treadmill.link !== "#" ? "_blank" : "_self"}
                      rel={treadmill.link !== "#" ? "noopener noreferrer" : ""}
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-2.5 rounded-lg font-semibold transition"
                    >
                      {t("buyNow")}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
