// ScrollToTopButton.js

import React from 'react';

const ScrollToTopButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="scroll-btn">
      Scroll to Top
    </button>
  );
};

export default ScrollToTopButton;
