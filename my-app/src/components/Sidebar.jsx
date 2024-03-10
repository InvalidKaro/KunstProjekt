// Sidebar.js

import React, { useEffect, useState } from 'react';
import '../style/Sidebar.css'; // Assuming you have a separate CSS file for sidebar styles
const Sidebar = ({ homeRef, aboutRef, contactRef, scrollToSection }) => {
    const [activeSection, setActiveSection] = useState(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
  
        if (scrollPosition < aboutRef.current.offsetTop) {
          setActiveSection(homeRef);
        } else if (scrollPosition >= aboutRef.current.offsetTop && scrollPosition < contactRef.current.offsetTop) {
          setActiveSection(aboutRef);
        } else {
          setActiveSection(contactRef);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [homeRef, aboutRef, contactRef]);
  
    const handleItemClick = (ref) => {
      scrollToSection(ref);
      setActiveSection(ref);
    };
  
    return (
      <div className="sidebar">
        <ul>
          <li className={activeSection === homeRef ? 'active' : ''} onClick={() => handleItemClick(homeRef)}>Home</li>
          <li className={activeSection === aboutRef ? 'active' : ''} onClick={() => handleItemClick(aboutRef)}>About</li>
          <li className={activeSection === contactRef ? 'active' : ''} onClick={() => handleItemClick(contactRef)}>Contact</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;