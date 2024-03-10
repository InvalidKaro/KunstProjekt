// ScrollToTopButton.js
//
// This is a stateless functional component (also called a presentational component)
// because it only renders stuff based on the props it receives.
//
// It's a button that says "Scroll to Top" and when clicked it calls the onClick
// function that was passed to it as a prop.

import React from 'react';

const ScrollToTopButton = ({ onClick }) => {
  // This is the JSX syntax for creating HTML elements. It's like HTML
  // but it's inside curly braces because it's inside JavaScript.
  return (
    // The <button> element is an HTML button element
    <button
      // The onClick attribute is an HTML attribute that runs some JavaScript
      // code when the button is clicked
      onClick={onClick}
      // The className attribute is an HTML attribute that sets the class name
      // for the button. This CSS class is defined in the CSS file.
      className="scroll-btn"
    >
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;

