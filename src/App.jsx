import { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { HeaderSection } from './components/HeaderSection';
import { FooterSection } from './components/FooterSection';
import { MainBody } from './components/MainBody';

function App() {
  const [mainKey, setMainKey] = useState(0);
  const [sideOption, setSideOption] = useState(null);

  const resetHome = () => {
    setMainKey(prev => prev + 1);
    setSideOption(null);
  };

  const handleNavChange = (value) => {
    setSideOption(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation
        setSideOption={handleNavChange}
        resetHome={resetHome}
      />
      <HeaderSection
        onViewProjects={() => setSideOption("projects")}
        visible={!sideOption}
      />
      <div className="flex-1">
        <MainBody
          key={mainKey}
          resetHome={resetHome}
          sideOptionFromApp={sideOption}
          setSideOptionFromApp={setSideOption}
        />
      </div>
      <FooterSection />
    </div>
  );
}

export default App;