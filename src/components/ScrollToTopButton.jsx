// ScrollToTopButton.js
//
// This is a stateless functional component (also called a presentational component)
// because it only renders stuff based on the props it receives.
//
// It's a button that says "Scroll to Top" and when clicked it calls the onClick
// function that was passed to it as a prop.

import React from "react";
import "./scroll.css";

const ScrollToTopButton = ({ onClick }) => {
  // This is the JSX syntax for creating HTML elements. It's like HTML
  // but it's inside curly braces because it's inside JavaScript.
  return (
    // The <button> element is an HTML button element

    <button class="button" onClick={onClick}>
      <svg class="svgIcon" viewBox="0 0 384 512">
        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
