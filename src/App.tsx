
import './App.css'
import Header from "./components/Header.tsx";
import HeroSection from "./components/HeroSection.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import ConnectSection from "./components/ConnectSection.tsx";
import ComingSoon from "./components/ComingSoon.tsx";
import ResourcesAndApps from "./components/ResourcesAndApps.tsx";
import Footer from "./components/Footer.tsx";
import About from './components/About.tsx';

function App() {
  // Updated by kenn changes
  return (
    <div className="flex flex-col h-full gap-0 scroll-smooth">
        {/* HERO FRAME — 100vh on desktop */}
        <div className="lg:h-screen flex flex-col">
          <Header />
          <HeroSection />
        </div>
        <About/>
        <ConnectSection/>
        <HowItWorks/>
        <ComingSoon/>
        <ResourcesAndApps/>
        <Footer/>
    </div>
  )
}

export default App
