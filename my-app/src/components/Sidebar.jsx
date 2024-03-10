// Sidebar.js
// This is a sidebar component for our application.
// It receives refs to the three main sections of the page (home, about, contact)
// and a scrollToSection function as props.

import React, { useEffect, useState } from 'react';
import '../style/Sidebar.css'; // Assuming you have a separate CSS file for sidebar styles
const Sidebar = ({ homeRef, aboutRef, contactRef, scrollToSection }) => {
    // We'll use this state variable to keep track of which section
    // is currently active, so we can set the appropriate CSS class
    // on the corresponding list item.
    const [activeSection, setActiveSection] = useState(null);
   
    // The useEffect hook allows us to run some code when the component
    // mounts or when certain values change. In this case, we want to
    // run some code whenever the scroll position changes.
    useEffect(() => {
      // When the component mounts or whenever the scroll position changes,
      // we'll run this function to update the activeSection state variable.
      const handleScroll = () => {
        // We use window.scrollY to get the current scroll position.
        const scrollPosition = window.scrollY;
        
        // If the scroll position is less than the offsetTop of the about
        // section, we know we're currently on the home section.
        if (scrollPosition < aboutRef.current.offsetTop) {
          setActiveSection(homeRef);
        }
        // If the scroll position is greater than or equal to the offsetTop
        // of the about section but less than the offsetTop of the contact
        // section, we know we're currently on the about section.
        else if (scrollPosition >= aboutRef.current.offsetTop && scrollPosition < contactRef.current.offsetTop) {
          setActiveSection(aboutRef);
        }
        // Otherwise, we know we're currently on the contact section.
        else {
          setActiveSection(contactRef);
        }
      };
  
      // When the component mounts, we add a scroll event listener to the window
      // object. When the scroll position changes, we'll run the handleScroll
      // function to update the activeSection state variable.
      window.addEventListener('scroll', handleScroll);
  
      // When the component unmounts, we remove the scroll event listener.
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    // We want to run the handleScroll function whenever the scroll position
    // changes, or when the refs to the sections change. We pass an array
    // of dependencies as the second argument to useEffect.
    }, [homeRef, aboutRef, contactRef]);
  
    // This function will be called when a user clicks on one of the list
    // items in the sidebar. It will scroll the page to the corresponding
    // section.
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
            About
          </li>
          <li
            className={activeSection === contactRef ? 'active' : ''}
            onClick={() => handleItemClick(contactRef)}
          >
            Contact
          </li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;
