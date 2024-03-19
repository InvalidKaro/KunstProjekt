import React, { useEffect, useState } from 'react';
import '../style/Sidebar.css';

const Sidebar = ({ homeRef, aboutRef, contactRef, xRef, oneRef, twoRef, threeRef, scrollToSection }) => {
    const [activeSection, setActiveSection] = useState(null);
   
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition < aboutRef.current.offsetTop) {
          setActiveSection(homeRef);
        } else if (scrollPosition >= aboutRef.current.offsetTop && scrollPosition < contactRef.current.offsetTop) {
          setActiveSection(aboutRef);
        } else if (scrollPosition >= contactRef.current.offsetTop && scrollPosition < oneRef.current.offsetTop) {
          setActiveSection(contactRef);
        } else if (scrollPosition >= xRef.current.offsetTop && scrollPosition < contactRef.current.offsetTop) {
          setActiveSection(xRef);
        } else if (scrollPosition >= oneRef.current.offsetTop && scrollPosition < twoRef.current.offsetTop) {
          setActiveSection(oneRef);
        } else if (scrollPosition >= twoRef.current.offsetTop && scrollPosition < threeRef.current.offsetTop) {
          setActiveSection(twoRef);
        } else {
          setActiveSection(threeRef);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [homeRef, aboutRef, contactRef, xRef, oneRef, twoRef, threeRef]);
  
    const handleItemClick = (ref) => {
      scrollToSection(ref);
      setActiveSection(ref);
    };
  
    return (
      <div className="sidebar">
        <ul>
          <li
            className={activeSection === homeRef ? 'active' : ''}
            onClick={() => handleItemClick(homeRef)}
          >
            Home
          </li>
          <li
            className={activeSection === aboutRef ? 'active' : ''}
            onClick={() => handleItemClick(aboutRef)}
          >
            Gefahr
          </li>
          <li
            className={activeSection === contactRef ? 'active' : ''}
            onClick={() => handleItemClick(contactRef)}
          >
            Warnung
          </li>
          <li
            className={activeSection === oneRef ? 'active' : ''}
            onClick={() => handleItemClick(oneRef)}
          >
            Konzept
          </li>
          <li
            className={activeSection === twoRef ? 'active' : ''}
            onClick={() => handleItemClick(twoRef)}
          >
            Two
          </li>
          <li
            className={activeSection === threeRef ? 'active' : ''}
            onClick={() => handleItemClick(threeRef)}
          >
            Three
          </li>
        </ul>
      </div>
    );
};

export default Sidebar;
