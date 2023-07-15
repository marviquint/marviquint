import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Particle from './components/Particle';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoadingParticles, setIsLoadingParticles] = useState(true);
  

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#082567' : '#F9F6EE';
    document.body.style.color = isDarkMode ? 'white' : '';
  };

  useEffect(() => {
    setIsLoadingParticles();
  
    const body = document.body;
    if (!isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);
  

  return (
    <>
      <Particle isDarkMode={isDarkMode} />
      <div style={{ visibility: isLoadingParticles ? 'hidden' : 'visible' }}>
        <Header isDarkMode={isDarkMode} />
        <Nav toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <About />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
