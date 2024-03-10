// App.js
// This is the main component of our app. It contains the header, content and
// the scroll-to-top button.

import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  // We create three refs to the sections of our web app. These refs will be
  // passed to the Header component so that it can scroll to the respective
  // section when a link is clicked.
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // This function is passed to the Header component so that it can call it
  // when a link is clicked. The function will scroll to the section that the
  // ref points to using the smooth scrolling behaviour.
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // This function is called when the scroll-to-top button is clicked. It
  // scrolls to the top of the page using the smooth scrolling behaviour.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <Header
        // We pass the refs to the Header so that it can scroll to the
        // respective sections when a link is clicked.
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        // We pass the scrollToSection function to the Header so that it can
        // call it when a link is clicked.
        scrollToSection={scrollToSection}
      />
      <div className="content">
        <Section
          // We pass the ref to the Home section to the Section component so
          // that it can scroll to it when the link is clicked.
          title="Home Section"
          ref={homeRef}
        >
          <p>This is where our website could be.</p>
        </Section>
        <Section
          title="About Section"
          ref={aboutRef}
        >
          <p>Learn React</p>
        </Section>
        <Section
          title="Contact Section"
          ref={contactRef}
        >
          <p>Contact us here.</p>
        </Section>
        <ScrollToTopButton
          // When the button is clicked, the scrollToTop function is called.
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
}

export default App;

