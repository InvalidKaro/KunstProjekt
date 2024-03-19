import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import {
  faEye,
  faHandHoldingHeart,
  faLightbulb,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import "./App.css";
import bg from "./bg.mp4";
import Header from "./components/Header";
import PasswordComponent from "./components/Password";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Section from "./components/Section";
import konzeptNull from "./images/konzept_0.png";
import konzeptTop from "./images/konzept_1.jpg";
import konzeptBottom from "./images/konzept_2.jpg";
import rightImage from "./images/konzept_3.png";
import oceanPlastic from "./images/ocean-bound-plastic-1024x536.jpg";
import plasticIsland from "./images/plasticisland.jpg";
import plasticTruck from "./images/plasticjunktruck.jpeg";
/**
 * We create three refs to the sections of our web app. These refs will be
 * passed to the Header component so that it can scroll to the respective
 * section when a link is clicked.
 */
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
  const xRef = useRef(null);
  // This function is passed to the Header component so that it can call it
  // when a link is clicked. The function will scroll to the section that the
  // ref points to using the smooth scrolling behaviour.
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const changeWarnung = useCallback(() => {
    setWarnung("erkennen");
    // make a timed changing
    setTimeout(() => {
      setWarnung(" aufklären");
    }, 1000);

    setTimeout(() => {
      setWarnung("handeln");
    }, 3000);
    // Loop
    setTimeout(() => {
      changeWarnung();
    }, 5000);
  }, []); // No dependencies for useCallback, as it doesn't reference any external variables

  useEffect(() => {
    // Call changeWarnung function on mount
    changeWarnung();
  }, [changeWarnung]); // Include changeWarnung in the dependency array

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
    <PasswordComponent>
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
          xRef={xRef}
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
            playsInline
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
            <source src={bg} type="video/mp4" />
            Ihr Browser unterstützt leider das `video` Tag nicht. Bitte
            versuchen Sie einen anderen Browser.
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
              zIndex: -1,
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
            title="Die Meere versinken im Müll"
            style={{ backgroundColor: "black", color: "white" }}
            ref={aboutRef}
          >
            <h2> </h2>
            <CCarousel
              controls
              interval={3000}
              className="d-flex justify-content-center align-items-end"
              style={{ maxWidth: "1000px", marginLeft: "150px" }}
            >
              <CCarouselItem>
                <CImage
                  className="d-block w-800"
                  src={oceanPlastic}
                  alt="slide 1"
                  style={{
                    maxHeight: "550px",
                    objectFit: "fill",
                    borderRadius: "10px",
                    marginLeft: "130px",
                  }}
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-800"
                  src={plasticIsland}
                  alt="slide 2"
                  style={{
                    maxHeight: "550px",
                    objectFit: "fill",
                    borderRadius: "10px",
                    marginLeft: "130px",
                  }}
                />
              </CCarouselItem>
              <CCarouselItem>
                <CImage
                  className="d-block w-800"
                  src={plasticTruck}
                  alt="slide 3"
                  style={{
                    maxHeight: "550px",
                    objectFit: "fill",
                    borderRadius: "10px",
                    marginLeft: "130px",
                  }}
                />
              </CCarouselItem>
            </CCarousel>
          </Section>
          <Section
            title="Wir müssen"
            style={{
              backgroundColor: "white",
              color: "#377f7e",
              fontWeight: "bold",
            }}
            ref={contactRef}
          >
            <Fade direction="up" in>
              {warnung}
            </Fade>
          </Section>
          <Section
            title="Konzept"
            ref={xRef}
          >
                          <div style={{ alignContent: "center"}}>
                          <p style={{display:"contents"}}>Above the Surface</p>

                <img src={rightImage} alt="konzept" style={{marginLeft: "180px",maxWidth: "800px", height: "600px"}}/>
              </div>
          </Section>
          <Section
            title="Konzept"
            style={{ backgroundColor: "#e3ddf3" }}
            ref={oneRef}
            // Name titel bild
          >
            <div class="container">
              <div class="pic1">
              <img src={konzeptTop} alt="konzept" style={{maxWidth: "200px", height: "200px"}}/>

              </div>
              <div class="pic2">
              <img src={konzeptBottom} alt="konzept" style={{maxWidth: "200px", height: "200px"}}/>

              </div>
              <div class="plus">+</div>
              <div class="equals">ICON HERE</div>
              <div class="pic3">
                <img src={konzeptNull} alt="konzept" style={{maxWidth: "400px", height: "300px"}}/>
              </div>
            </div>
            {/* Concept Graph */}
          </Section>
          {/*  
          Neue Section
          Einzelteil Verbindung
        */}
          <Section title="" style={{ backgroundColor: "#e3ddf3" }} ref={twoRef}>
            {/* AIDA Graph Text add*/}
            <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faEye} />
                <p>Attention</p>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faQuestion} />
                <p>Interest</p>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faLightbulb} />
                <p>Desire</p>
              </div>
              <div className="col-3">
                <FontAwesomeIcon icon={faHandHoldingHeart} />
                <p>Action</p>
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
    </PasswordComponent>
  );
}

export default App;
