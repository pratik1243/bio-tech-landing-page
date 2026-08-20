import React from "react";

const AboutSection1 = ({ activeSection, removeSection, breakpoint }) => {
  return (
    <div
      className={`about-section-1 ${
        !breakpoint && removeSection == 2
          ? "reverse-animation3"
          : !breakpoint && activeSection == 2
            ? "animate-slide3"
            : ""
      }`}
    >
      <div className="about-inner-sec1">
        <div className="head-sec">
          <span className="about-txt">About Us</span>
          <h3 className="head-txt1">Science Driven</h3>
          <h4 className="head-txt2">Purspose Led</h4>
        </div>
        <p className="para-txt">
          We are a biotechnology company dedicated to advancing life sciences
          through innovation, collaboration, and integrity. Our mission is to
          translate complex biology into impactful solutions that improve lives.
        </p>
      </div>
    </div>
  );
};

export default AboutSection1;
