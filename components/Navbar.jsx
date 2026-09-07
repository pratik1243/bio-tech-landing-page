"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ activeStep, containerRef, breakpoint, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  function onNavClick(e, id, scrollId) {
    e.preventDefault();
    if (breakpoint) {
      let node = document.getElementById(scrollId);
      const scrollOptions = {
        top: id === 3 ? node.offsetTop + 20 : node.offsetTop - 100,
        behavior: "smooth",
      };
      if (typeof window !== "undefined") {
        window.scrollTo(scrollOptions);
      }
      setMenuOpen(false);
      setActiveSection(id);
    } else {
      let currentSection = containerRef?.current[id];
      currentSection?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }

  return (
    <div className="navbar-section">
      <div className="nav-logo">
        <Image src="/images/nexus-nav-logo.png" width={140} height={51} alt="nav-logo" />
      </div>

      <div
        className="menu-mobile-btn"
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        <RxHamburgerMenu size={23} />
      </div>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => {
            setMenuOpen(false);
          }}
        ></div>
      )}

      <div className={`nav-btn-sec ${menuOpen ? "open" : ""}`}>
        <div
          className="close-menu-btn"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <IoClose size={24} />
        </div>
        <div
          className={`nav-link ${activeStep === 1 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 1, "hero-section")}
        >
          <a href="#home">Home</a>
        </div>
        <div
          className={`nav-link ${activeStep === 2 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 2, "about-section")}
        >
          <a href="#about">About</a>
        </div>
        <div
          className={`nav-link ${activeStep === 3 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 3, "tech-section")}
        >
          <a href="#technology">Technology</a>
        </div>
        <div
          className={`nav-link ${activeStep === 4 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 4, "capability-section")}
        >
          <a href="#capabilities">Capabilities</a>
        </div>
        <div
          className={`nav-link ${activeStep === 5 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 5, "impact-section")}
        >
          <a href="#impact">Impact</a>
        </div>
        {/* <div
          className={`nav-link ${activeStep ===6 ? "active" : ""}`}
          onClick={(e) => onNavClick(e, 6)}
        >
          <a href="#">Contact</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
