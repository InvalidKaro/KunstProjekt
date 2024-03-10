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
import Sidebar from './Sidebar';
import logo from '../logoo.svg';

const Header = ({ homeRef, aboutRef, contactRef, scrollToSection }) => {
  return (
    // The header element contains the logo and the sidebar
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Sidebar
        // References to the sections
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        // The function to scroll to a specific section
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;

