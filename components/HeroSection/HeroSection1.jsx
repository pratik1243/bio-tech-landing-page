import React from "react";
import { LuHandshake } from "react-icons/lu";
import { IoFlaskOutline } from "react-icons/io5";

const HeroSection1 = ({ removeSection, activeSection, breakpoint }) => {
  return (
    <div
      id="hero-section"
      className={`hero-section-1 ${
        !breakpoint && removeSection === 1
          ? "reverse-animation1"
          : !breakpoint && activeSection === 1
          ? "animate-slide1"
          : ""
      }`}
    >
      <div className="hero-inner-section-1">
        <h3 className="head-txt-1">Innovating Biology.</h3>
        <h3 className="head-txt-2">Transforming Lives.</h3>
        <p className="para-txt">
          BioNexus Biotech is redefining the future of health through
          cutting-edge science, breakthrough innovations, and an unwavering
          commitment to human well-being.
        </p>
        <div className="hero-cta-section">
          <button className="hero-cta">
            <IoFlaskOutline size={17} /> Discover Science
          </button>
          <button className="hero-cta second">
            <LuHandshake size={17} /> Partner With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection1;
