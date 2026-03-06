import { useState, useEffect } from "react";

const quotes = [
  { text: "Your most unhappy customers are your greatest source of learning.", author: "Bill Gates" },
  { text: "Don't comment bad code — rewrite it.", author: "Brian Kernighan" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" },
  { text: "Training is not an expense, but an investment in human capital.", author: "Roy H. Williams" },
];

export default function TextCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { text, author } = quotes[currentIndex];

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 px-4 text-center"
      style={{ opacity: fade ? 1 : 0, transition: "opacity 0.5s ease" }}
    >
      {/* Quote mark */}
      <span className="text-4xl text-gray-200 leading-none select-none">"</span>

      <p className="text-sm lg:text-base italic text-gray-600 leading-relaxed max-w-[220px]">
        {text}
      </p>

      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
        — {author}
      </p>

      {/* Dot indicators */}
      <div className="flex gap-1.5">
        {quotes.map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-4 h-1.5 bg-[#1877F2]" : "w-1.5 h-1.5 bg-[#E7F3FF]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}