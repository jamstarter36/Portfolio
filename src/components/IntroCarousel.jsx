import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import chillRide from '../images/chillRide.png';
import foodieFizz from '../images/foodieFizz.png';
import gearHead from '../images/gearhead.png';
import noToHeights from '../images/noToHeights.png';
import deep from '../images/deep.png';
import gamingSetup from '../images/gamingSetup.png';

const slides = [
  { img: gearHead,    title: "Gearhead",                     text: "Cars call to me; I crave their story, every wheel, every light, every glory.",              color: "#DC2626", bg: "#FEE2E2" },
  { img: chillRide,   title: "After-hours chill ride",        text: "Gliding through the city or past its edge, windows open, the night and breeze entwined.",   color: "#7C3AED", bg: "#EDE9FE" },
  { img: foodieFizz,  title: "Foodie Frizz",                  text: "Cheese stretches, soda fizzes — pure happiness in every bite and sip.",                     color: "#EA580C", bg: "#FFEDD5" },
  { img: gamingSetup, title: "Games · Movies · Anime · Code", text: "I wander realms of pixels and plot, from games to anime, films, and lines of code that never stop.", color: "#1D4ED8", bg: "#DBEAFE" },
  { img: noToHeights, title: "No thanks, height",             text: "I dream of flying, yet my legs freeze, the sky too wide, my heart too small.",              color: "#DB2777", bg: "#FCE7F3" },
  { img: deep,        title: "That deep? Nope!",              text: "I long to dive, yet tremble still, the deep's cold fingers curling around my will.",         color: "#1E3A5F", bg: "#DBEAFE" },
];

export const IntroCarousel = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-2 w-full">

      {/* Caption list */}
      <div className="flex flex-col gap-1 lg:basis-1/3 justify-start">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => swiperRef.current?.slideToLoop(idx)}
            className={`px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
              activeIndex === idx ? "scale-105 shadow-sm" : "scale-100 hover:bg-gray-50"
            }`}
            style={activeIndex === idx ? { backgroundColor: slide.bg } : {}}
          >
            <p className="text-xs font-semibold transition-colors duration-300"
              style={{ color: activeIndex === idx ? slide.color : "#9ca3af" }}>
              {slide.title}
            </p>
            <p className="text-xs italic leading-relaxed transition-colors duration-300"
              style={{ color: activeIndex === idx ? "#6b7280" : "#d1d5db" }}>
              {slide.text}
            </p>
          </div>
        ))}
      </div>

      {/* Swiper */}
      <div className="lg:basis-2/3 rounded-2xl overflow-hidden shadow-sm bg-black" style={{ aspectRatio: "4/3" }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true, bulletClass: "swiper-bullet", bulletActiveClass: "swiper-bullet-active" }}
          className="w-full h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        .swiper-bullet {
          display: inline-block;
          width: 6px; height: 6px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.5);
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-bullet-active {
          width: 16px;
          background: white;
        }
        .swiper-pagination { bottom: 10px !important; }
      `}</style>
    </div>
  );
};