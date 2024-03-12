// App.js
// This is the main component of our app. It contains the header, content and
// the scroll-to-top button.

import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Section from "./components/Section";
import vidOne from "./one.mp4";
import vidThree from "./three.mp4";
import vidTwo from "./two.mp4";
function App() {
  // We create three refs to the sections of our web app. These refs will be
  // passed to the Header component so that it can scroll to the respective
  // section when a link is clicked.
  const [warnung, setWarnung] = useState("");
  const homeRef = useRef(null);
  const [video, setVideo] = useState(vidOne);
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
    changeVid();
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

  const changeVid = () => {
    setVideo("erkennen");
    // make a timed changing
    setTimeout(() => {
      setVideo({vidOne});
    }, 1000);

    setTimeout(() => {
      setVideo({vidTwo});
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
        <video
          id="background-video"
          loop
          autoPlay
          muted
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
          <source src={vidTwo} type="video/mp4" />
          <source src={vidThree} type="video/mp4" />

          Your browser does not support the video tag.
        </video>
        <Section
          // We pass the ref to the Home section to the Section component so
          // that it can scroll to it when the link is clicked.
          //! Ozean Background
          title="Above the Surface"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100vw",
            height: "100vh",
          }}
          ref={homeRef}
        >
          {/* Video positioned behind the content */}

          {/* Content of the section */}
          <div style={{ position: "relative", zIndex: 1, color: "white" }}>
            Installationskunst
            <br />
            Yoon & Prell
          </div>
        </Section>

        <Section
          title="Gefahr Section"
          style={{ backgroundColor: "black", color: "white" }}
          ref={aboutRef}
        >
          <h2>Die Meere versinken im Müll</h2>
          <CCarousel
            controls
            indicators
            className="d-flex justify-content-center align-items-center"
            style={{ maxWidth: "500px", margin: "0 auto" }}
          >
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={ReactImg}
                alt="slide 1"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={VueImg}
                alt="slide 2"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={AngularImg}
                alt="slide 3"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </CCarouselItem>
          </CCarousel>
        </Section>
        <Section
          title="Warnung"
          style={{
            backgroundColor: "white",
            color: "#377f7e",
            fontWeight: "bold",
          }}
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
        {/*  
          Neue Section
          Einzelteil Verbindung
        */}
        <Section
          title="AIDA"
          style={{ backgroundColor: "#e3ddf3" }}
          ref={twoRef}
        >
          <div className="row">
            <div className="col-3">
              <p>One</p>
            </div>
            <div className="col-3">
              <p>Two</p>
            </div>
            <div className="col-3">
              <p>Three</p>
            </div>
            <div className="col-3">
              <p>Four</p>
            </div>
          </div>
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
