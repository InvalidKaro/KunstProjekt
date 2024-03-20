import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import {
  faEye,
  faHandHoldingHeart,
  faLightbulb,
  faQuestion,
  faRightLong,
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
import A from "./images/gefahr2-A.png";
import B from "./images/gefahr2-B.png";
import C from "./images/gefahr2-C.png";
import konzeptNull from "./images/konzept_0.png";
import konzeptTop from "./images/konzept_1.jpg";
import konzeptBottom from "./images/konzept_2.jpg";
import rightImage from "./images/konzept_3.png";

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
    setWarnung("Wir müssen erkennen");
    // make a timed changing
    setTimeout(() => {
      setWarnung("Wir müssen aufklären");
    }, 1000);

    setTimeout(() => {
      setWarnung("Wir müssen handeln");
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
          oneRef={oneRef}
          twoRef={twoRef}
          threeRef={threeRef}
          xRef={xRef}
          contactRef={contactRef}

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
              color: "white",
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
            title="  "
            style={{ backgroundColor: "black", color: "white", height:"200vh" }}
            ref={aboutRef}
          >            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h2> Die Meere versinken im Müll </h2>
            <br></br>            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* Carousel  add text here*/}
            <CCarousel
              controls
              interval={3000}
              className="d-flex justify-content-center align-items-end"
              style={{ maxWidth: "2000px", marginLeft: "" }}
            >
              <CCarouselItem>
                <CImage
                  className="d-block w-800"
                  src={A}
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
                  src={B}
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
                  src={C}
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

          {/* Alles auf eine höhe, gleiche fontsize, centered */}
          <Section
            title=" "
            style={{
              backgroundColor: "white",
              color: "#377f7e",
              fontWeight: "bold",
              display: "flex"
            }}
            ref={contactRef}
          >
            <Fade direction="up" in style={{ maxWidth: "800px", fontSize:"2em", display:"flex"}}>
             {warnung}
            </Fade>
          </Section>
          <Section title=" " ref={contactRef}>
            <div style={{ alignContent: "center" }}>
              <p
                style={{
                  display: "contents",
                  fontSize: "2em",
                  letterSpacing: "0.1em",
                }}
              >
                Above the Surface
              </p>

              <img
                src={rightImage}
                alt="konzept"
                style={{
                  marginLeft: "100px",
                  maxWidth: "800px",
                  height: "600px",
                }}
              />
            </div>
          </Section>
          <Section
            title=" "
            style={{ backgroundColor: "white" }}
            ref={oneRef}
            // Name titel bild
          >
            <div class="container">
              <div class="pic1">
                <img
                  src={konzeptTop}
                  alt="konzept"
                  style={{ maxWidth: "200px", height: "200px" }}
                />
              </div>
              <div class="pic2">
                <img
                  src={konzeptBottom}
                  alt="konzept"
                  style={{ maxWidth: "200px", height: "200px" }}
                />
              </div>
              <div class="plus" style={{ fontSize: "2em" }}>
                +
              </div>
              <div class="equals">
                <FontAwesomeIcon icon={faRightLong} size="2x" />
              </div>
              <div class="pic3">
                <img
                  src={konzeptNull}
                  alt="konzept"
                  style={{ maxWidth: "400px", height: "300px" }}
                />
              </div>
            </div>
            {/* Concept Graph */}
          </Section>
          {/*  
          Neue Section
          Einzelteil Verbindung
        */}
          <Section title="" style={{ backgroundColor: "white" }} ref={twoRef}>
            {/* AIDA Graph Text add*/}
            <div className="row"style={{marginLeft: "-200px",flexWrap: "nowrap", gap:"1.5em" }}>

  <div className="col-3 mb-4" style={{ textAlign: "center" }}>
    <FontAwesomeIcon icon={faEye} />
    <p style={{ marginTop: "10px" }}>Attention</p>
    <p style={{ marginTop: "10px" }}>Auffälligkeit der schwebenden Elemente</p>

  </div>
  <div className="col-3 mb-4" style={{ textAlign: "center" }}>
    <FontAwesomeIcon icon={faQuestion} />
    <p style={{ marginTop: "10px" }}>Interest</p>
    <p style={{ marginTop: "10px" }}>Besonderheit der Mülltüten am Teich</p>

  </div>
  <div className="col-3 mb-4" style={{ textAlign: "center" }}>
    <FontAwesomeIcon icon={faLightbulb} />
    <p style={{ marginTop: "10px" }}>Desire</p>
    <p style={{ marginTop: "10px" }}>Message: Warnung vor Mülldystopie</p>

  </div>
  <div className="col-3 mb-4" style={{ textAlign: "center" }}>
    <FontAwesomeIcon icon={faHandHoldingHeart} />
    <p style={{ marginTop: "10px" }}>Action</p>
    <p style={{ marginTop: "10px" }}>Motivation zur Handlung</p>

  </div>
</div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <footer style={{ }}>
            <p>Created by invalidkaro &middot; &copy; 2024</p>
<p> All rights reserved.</p>
<p> Made with love.</p>


            </footer>
          </Section>

        
<Section
  title="Contact Us"
  style={{ backgroundColor: "#f2f2f2" }}
  ref={xRef}
>

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
