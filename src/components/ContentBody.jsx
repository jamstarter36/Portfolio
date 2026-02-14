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
export const ContentBody=({ showSideItem })=> {
  const sideMap = {
    intro: <IntroCarousel />,
    pdetails: <PersonalDetail />,
    interests: <InterestDetails />,
    hobbies: <Hobbies/>,
    education: <Education />,
    chardware: <Hardware />,
    csoftware: <Software />,
    bpo: <BpoEx />,
    nonbpo: <NonBpoEx />,
    dev: <DeveloperEx />,
    projects: <Projects/>,
  }
   const contentRef = useRef(null);
  const [height, setHeight] = useState(100);
  useEffect(() => {
    const updateHeight = () => {
      if (contentRef.current) {
        setHeight(contentRef.current.scrollHeight);
      }
    };
    updateHeight();
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [showSideItem]);
  return (
    
    <div
      className="w-full rounded-xl contentbgcolor p-3 sm:p-5 shadow-lg overflow-hidden transition-all duration-1000 ease-in-out"
      style={{ height: `${height}px` }}
    >
      <div ref={contentRef} className="pb-10">
        {sideMap[showSideItem] ?? (
          <div className="flex h-full items-center justify-center">
            <p className="fontfamily max-w-md text-center text-sm sm:text-base italic leading-relaxed text-black/60">
              I build fast, thoughtful interfaces and clean systems.
              <span className="block mt-2 text-black/40">
                Use the navigation to explore my work.
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
    
  );
};