// Section.js

import React from 'react';

const Section = React.forwardRef(({ title, children }, ref) => {
  return (
    <section ref={ref} className="section">
      <h1>{title}</h1>
      {children}
    </section>
  );
});

export default Section;
