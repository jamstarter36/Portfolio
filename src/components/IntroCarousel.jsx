import { useState, useEffect, useRef } from "react";
import chillRide from '../images/chillRide.png';
import foodieFizz from '../images/foodieFizz.png';
import gearHead from '../images/gearhead.png';
import noToHeights from '../images/noToHeights.png';
import deep from '../images/deep.png';
import gamingSetup from '../images/gamingSetup.png';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export const IntroCarousel = () => {
  const images = [gearHead, chillRide, foodieFizz, gamingSetup, noToHeights, deep];
  const extendedImages = [...images, images[0]];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const carouselRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  useEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) setSlideWidth(carouselRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => setCurrentIndex(prev => prev + 1);
  const prevSlide = () => {
    if (currentIndex === 0) {
      setEnableTransition(false);
      setCurrentIndex(images.length - 1);
      requestAnimationFrame(() => requestAnimationFrame(() => setEnableTransition(true)));
    } else {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    if (currentIndex === images.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setEnableTransition(true)));
      }, 1000);
    }
  }, [currentIndex, images.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const captions = [
    { title: "Gearhead", text: "Cars call to me; I crave their story, every wheel, every light, every glory." },
    { title: "After-hours chill ride", text: "Gliding through the city or past its edge, windows open, the night and breeze entwined." },
    { title: "Foodie Frizz", text: "Cheese stretches, soda fizzes, slice in one hand, fizz in the other, pure happiness in every bite and sip." },
    { title: "Games Movies Anime Code", text: "I wander realms of pixels and plot, from games to anime, films, and lines of code that never stop." },
    { title: "No thanks height", text: "I dream of flying, yet my legs freeze, the sky too wide, my heart too small." },
    { title: "That deep? Nope!", text: "I long to dive, yet tremble still, the deep's cold fingers curling around my will." },
  ];

  return (
    <div className="flex flex-col lg:flex-row p-2 gap-4">
      <div className="grid gap-1 fontfamily text-gray-600 italic items-center p-4 md:basis-1/3 text-sm">
        {captions.map((cap, idx) => (
          <span
            key={idx}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`p-1 transition-transform duration-500 ${
              currentIndex === idx ? "scale-105 rounded-md bg-gray-100 shadow-md" : "scale-100"
            }`}
          >
            <p className="font-bold">{cap.title}:</p>
            {cap.text}
          </span>
        ))}
      </div>
      <div
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative md:basis-2/3 flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-2 z-10 text-2xl md:text-3xl text-gray-800 hover:text-blue-600">
          <FaArrowAltCircleLeft />
        </button>
        <div className="overflow-hidden w-full rounded-lg shadow-md bg-black" style={{ aspectRatio: "4/3" }}>
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              transition: enableTransition ? "transform 1s ease-in-out" : "none",
            }}>
            {extendedImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`slide-${idx}`}
                className="flex-shrink-0 w-full h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-2 z-10 text-2xl md:text-3xl text-gray-800 hover:text-blue-600"
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
};



