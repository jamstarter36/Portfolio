import { useState, useEffect } from "react";

const texts = [
  "Your most unhappy customers are your greatest source of learning. —Bill Gates",
  "Don't comment bad code - rewrite it.   —Brian Kernighan",
  "Programming isn't about what you know; it's about what you can figure out. —Chris Pine",
  "Training is not an expense, but an investment in human capital. —Roy H. Williams",
];

export default function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % texts.length);
        setFade(true);
      }, 500);  
    }, 5000);  

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center text-sm lg:text-lg fontfamily italic">
      <span
        className={`transition-opacity duration-500`}
        style={{ opacity: fade ? 1 : 0 }}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
}