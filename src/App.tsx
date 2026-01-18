import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const { activeSection, setActiveSection } = useActiveSection();
  // Updated components

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Achievements />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;