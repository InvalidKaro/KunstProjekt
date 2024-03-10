// App.js

import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
      <div className="content">
        <Section title="Home Section" ref={homeRef}>
          <p>Hier könnte unsere Website sein.</p>
        </Section>
        <Section title="About Section" ref={aboutRef}>
          <p>Learn React</p>
        </Section>
        <Section title="Contact Section" ref={contactRef}>
          <p>Contact us here.</p>
        </Section>
        <ScrollToTopButton onClick={scrollToTop} />
      </div>
    </div>
  );
}

export default App;
