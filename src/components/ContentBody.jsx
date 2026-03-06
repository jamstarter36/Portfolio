import { IntroCarousel } from './IntroCarousel'
import { PersonalDetail } from './PersonalDetails';
import { InterestDetails } from './InterestDetails';
import { Hobbies } from './Hobbies';
import { Education } from './Education';
import { Hardware } from './Hardware';
import { Software } from './Software';
import { DeveloperEx } from './DeveloperEx';
import { BpoEx } from './BpoEx';
import { NonBpoEx } from './NonBpoEx';
import { Projects } from './Projects';
import { useRef, useState, useEffect } from "react";

export const ContentBody = ({ showSideItem }) => {
  const sideMap = {
    intro:     <IntroCarousel />,
    pdetails:  <PersonalDetail />,
    interests: <InterestDetails />,
    hobbies:   <Hobbies />,
    education: <Education />,
    chardware: <Hardware />,
    csoftware: <Software />,
    bpo:       <BpoEx />,
    nonbpo:    <NonBpoEx />,
    dev:       <DeveloperEx />,
    projects:  <Projects />,
  };

  const contentRef = useRef(null);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) setHeight(contentRef.current.scrollHeight);
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (contentRef.current) observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [showSideItem]);

  return (
    <div
      className="w-full rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm p-4 sm:p-6 overflow-hidden transition-all duration-500 ease-in-out"
      style={{ height: `${height}px` }}
    >
      <div ref={contentRef} className="pb-8">
        {sideMap[showSideItem] ?? (
          <div className="flex flex-col h-full items-center justify-center py-16 gap-2">
            <p className="text-gray-800 text-sm sm:text-base font-medium text-center">
              I build fast, thoughtful interfaces and clean systems.
            </p>
            <p className="text-gray-400 text-sm text-center">
              Use the navigation to explore my work.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};