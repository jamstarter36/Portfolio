// import { useState, useEffect } from "react";
// import chillRide from '../images/chillRide.png';
// import foodieFizz from '../images/foodieFizz.png';
// import gearHead from '../images/gearhead.png';
// import noToHeights from '../images/noToHeights.png';
// import deep from '../images/deep.png';
// import gamingSetup from '../images/gamingSetup.png';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
// export const IntroCarousel = () => {
//   const images = [
//     gearHead,
//     chillRide,
//     foodieFizz,
//     gamingSetup,
//     noToHeights,
//     deep
//   ];
//   const extendedImages = [...images, images[0]];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [enableTransition, setEnableTransition] = useState(true);
//   const [isPaused, setIsPaused] = useState(false);
//   const slideWidth = 800;
//   const nextSlide = () => {
//     setCurrentIndex(prev => prev + 1);
//   };
//   const prevSlide = () => {
//     if (currentIndex === 0) {
//       setEnableTransition(false);
//       setCurrentIndex(images.length - 1);
//       requestAnimationFrame(() => {
//         requestAnimationFrame(() => setEnableTransition(true));
//       });
//     } else {
//       setCurrentIndex(prev => prev - 1);
//     }
//   };
//   useEffect(() => {
//     if (currentIndex === images.length) {
//       setTimeout(() => {
//         setEnableTransition(false);
//         setCurrentIndex(0);
//         requestAnimationFrame(() => {
//           requestAnimationFrame(() => setEnableTransition(true));
//         });
//       }, 1000);
//     }
//   }, [currentIndex, images.length]);

//   useEffect(() => {
//     if (isPaused) return;
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, [isPaused]);
//   return (
//     <div className="flex p-2 rounded-md">
//       <div className="basis-100 grid grid-row fontfamily text-gray-600 gap-5 italic items-center p-3">
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 0 ? "scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">Gearhead:</p>Cars call to me; I crave their story,
//         every wheel, every light, every glory.</span>
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 1 ? "scale-110 scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">After-hours chill ride:</p> Gliding through the city or past its edge,
//         windows open, the night and breeze entwined.</span>
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 2 ? "scale-110 scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">Foodie Frizz:</p>Cheese stretches, soda fizzes,
//         slice in one hand, fizz in the other, pure happiness in every bite and sip.</span>
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 3 ? "scale-110 scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">Games Movies Anime Code:</p>I wander realms of pixels and plot,
//         from games to anime, films, and lines of code that never stop.</span>
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 4 ? "scale-110 scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">No thanks height:</p>I dream of flying, yet my legs freeze,
//         the sky too wide, my heart too small.</span>
//         <span onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className={`p-1 transition-transform duration-500 ${
//         currentIndex === 5 ? "scale-110 scale-110 rounded-md bg-gray-100 shadow-md" : "scale-100"}`}><p className="font-bold">That deep? Nope!:</p>I long to dive, yet tremble still,
//         the deep's cold fingers curling around my will.</span>
//       </div>
//       <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} style={styles.container}>
//         <button onClick={prevSlide}>
//           <FaArrowAltCircleLeft className="text-[30px] hover:text-blue-600" />
//         </button>
//         <div style={styles.carouselContainer}>
//           <div
//             style={{
//               ...styles.slideWrapper,
//               transition: enableTransition ? "transform 1s ease-in-out" : "none",
//               transform: `translateX(-${currentIndex * slideWidth}px)`
//             }}
//           >
//             {extendedImages.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={img}
//                 alt={`slide-${idx}`}
//                 style={styles.image}
//               />
//             ))}
//           </div>
//         </div>

//         <button onClick={nextSlide}>
//           <FaArrowAltCircleRight className="text-[30px] hover:text-blue-600" />
//         </button>
//       </div>
//     </div>
//   );
// };
// const styles = {
//   container: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     justifyContent: "right",
//   },
//   carouselContainer: {
//     width: "800px",
//     overflow: "hidden",  
//     backgroundColor: "black",
//     borderRadius: "10px",
//     boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//   },
//   slideWrapper: {
//     display: "flex",
//     transition: "transform 1s ease-in-out",
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     borderRadius: "10px",
//   },
// };



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



