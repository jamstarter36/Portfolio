import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { ContentBody } from "./ContentBody";

export const MainBody = ({ resetHome, sideOptionFromApp, setSideOptionFromApp }) => {
  const [showSideItem, setShowSideItem] = useState(null);
  const [sideOption, setSideOption] = useState(sideOptionFromApp);

  // Sync when nav changes sideOption from App
  useEffect(() => {
    setSideOption(sideOptionFromApp);
    setShowSideItem(sideOptionFromApp);
  }, [sideOptionFromApp]);

  const handleSideOption = (value) => {
    setSideOption(value);
    setShowSideItem(value);
    setSideOptionFromApp(value);
  };

  return (
    <div className="flex flex-col md:flex-row px-4 py-2 gap-3">
      {/* Sidebar */}
      <div className="w-full md:w-64 lg:w-72 flex-shrink-0 self-start">
        <Sidebar
          sideOption={sideOption}
          showSideItem={showSideItem}
          setShowSideItem={setShowSideItem}
        />
      </div>

      {/* Content */}
      <ContentBody showSideItem={showSideItem} />
    </div>
  );
};