// App.js
// This is the main component of our app. It contains the header, content and
// the scroll-to-top button.

import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from 'react-awesome-reveal';
import "./App.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Section from "./components/Section";
function App() {
  // We create three refs to the sections of our web app. These refs will be
  // passed to the Header component so that it can scroll to the respective
  // section when a link is clicked.
  const [warnung, setWarnung] = useState("");
  const homeRef = useRef(null);
  
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);
  const ReactImg =
    "https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg";
  const VueImg =
    "https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg";
  const AngularImg =
    " https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg";

  // This function is passed to the Header component so that it can call it
  // when a link is clicked. The function will scroll to the section that the
  // ref points to using the smooth scrolling behaviour.
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    changeWarnung();
  }, []);
  const changeWarnung = () => {
    setWarnung("erkennen");
    // make a timed changing
    setTimeout(() => {
      setWarnung(" aufklären");
    }, 1000);

    setTimeout(() => {
      setWarnung("Handeln");
    }, 3000);
    // Loop
    setTimeout(() => {
      changeWarnung();
    }, 5000);
  };
 // TODO: Fade in out etc

  
  // This function is called when the scroll-to-top button is clicked. It
  // scrolls to the top of the page using the smooth scrolling behaviour.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        oneRef={oneRef}
        twoRef={twoRef}
        threeRef={threeRef}
        // We pass the scrollToSection function to the Header so that it can
        // call it when a link is clicked.
        scrollToSection={scrollToSection}
      />
      <div className="content">
        <Section
          // We pass the ref to the Home section to the Section component so
          // that it can scroll to it when the link is clicked.

//! Ozean Background

          title="Home Section"
          style={{ backgroundColor: "grey" }}
          ref={homeRef}
        >
          <p>This is where our website could be.</p>
        </Section>
        <Section
          title="Gefahr Section"
          style={{ backgroundColor: "black", color: "white" }}
          ref={aboutRef}
        >
          <h2>Die Meere versinken im Müll</h2>
          <CCarousel controls indicators>
            <CCarouselItem>
              <CImage className="d-block w-50 h-100" src={ReactImg} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
              <CImage className="d-block w-1000 h-100" src={VueImg} alt="slide 2" />
            </CCarouselItem> 
            <CCarouselItem>
              <CImage
                className="d-block w-100 h-100"
                src={AngularImg}
                alt="slide 3"
              />
            </CCarouselItem>
          </CCarousel>
        </Section>
        <Section
          title="Warnung"
          style={{ backgroundColor: "white", color: "#377f7e", fontWeight: "bold" }}
          ref={contactRef}
        >
          Wir müssen
          <Fade direction="up" in>
          {warnung}
          </Fade>
        </Section>
        
        <Section
          title="Konzept"
          style={{ backgroundColor: "#e3ddf3" }}
          ref={oneRef}
          // Name titel bild
        >
          

          {/* Concept Graph */}
          
        </Section>
        <Section
          title="+2 Section"
          style={{ backgroundColor: "#e3ddf3" }}
          ref={twoRef}
        >
          <p>Contact us here.</p>
        </Section>
        <Section
          title="+3 Section"
          style={{ backgroundColor: "#e3ddf3" }}
          ref={threeRef}
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
