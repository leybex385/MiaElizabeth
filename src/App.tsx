import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import InvestmentSectors from './components/InvestmentSectors';
import Leadership from './components/Leadership';
import InvestmentDoctrine from './components/InvestmentDoctrine';
import GlobalFootprint from './components/GlobalFootprint';
import IntelligenceUnit from './components/IntelligenceUnit';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <Overview />
      <InvestmentSectors />
      <Leadership />
      <InvestmentDoctrine />
      <GlobalFootprint />
      <IntelligenceUnit />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
