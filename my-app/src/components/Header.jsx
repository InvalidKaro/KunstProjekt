// Header.js

import React from 'react';
import Sidebar from './Sidebar';
import logo from '../logoo.svg';

const Header = ({ homeRef, aboutRef, contactRef, scrollToSection }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Sidebar
        homeRef={homeRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        scrollToSection={scrollToSection}
      />
    </header>
  );
};

export default Header;
