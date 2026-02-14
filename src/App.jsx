import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderSection } from './components/HeaderSection'
import { FooterSection } from './components/FooterSection'
import { Navigation } from './components/Navigation'
import { MainBody } from './components/MainBody'

function App() {

  const [mainKey, setMainKey] = useState(0);

  const resetHome = () => {
    setMainKey(prev => prev + 1);
  };

  return (
    <>
      <HeaderSection />
      <MainBody key={mainKey} resetHome={resetHome} />
      <FooterSection />
    </>
  )
}
export default App
