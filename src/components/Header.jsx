// Header.js
//
// This component renders the header element of our app. It takes four props:
//
//   - homeRef: a reference to the home section
//   - aboutRef: a reference to the about section
//   - contactRef: a reference to the contact section
//   - scrollToSection: a function to scroll to a specific section
//
// The Header component is responsible for rendering the logo and passing these
// references and function to the Sidebar component.

import React from 'react';
import '../App.css';
import Sidebar from './Sidebar';

document.title = "Above the Surface";

const Header = ({ homeRef, aboutRef, contactRef, oneRef, twoRef, threeRef, lawRef, scrollToSection }) => {
  return (
    // The header element contains the logo and the sidebar
    <header className="App-header">
      
      
      <Sidebar
        // References to the sections
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        oneRef={oneRef}
        twoRef={twoRef}
        threeRef={threeRef}
        lawRef={lawRef}
        // The function to scroll to a specific section
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;

