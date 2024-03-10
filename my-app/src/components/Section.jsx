// Section.js
//
// This is a React functional component that renders a section element
// with an h1 title and any children passed in via props.
// We are using React.forwardRef to get a reference to the section
// element so we can scroll to it when the user clicks on a link.

import React from 'react';
import { Fade } from 'react-awesome-reveal';
const Section = React.forwardRef(function SectionComponent({ title, style, children }, ref) {
  // The function passed to React.forwardRef is called with the props
  // passed to the component, in this case the title and children
  // from the parent component

  // We return a new JSX element with the type "section" (a HTML5
  // element), with a class of "section" and a ref attribute that
  // is set to the ref passed in by React.forwardRef
  return (
    <section ref={ref} className="section" style={style}>
      {/* Any children passed in will be rendered inside this
          section, we use the JSX syntax {children} to insert them */
      }
      <Fade  direction='up' cascade delay={100}>
        <div>
      <h1>{title}</h1>
      {children}
      </div>
      </Fade>
    </section>
  );
});

export default Section;

