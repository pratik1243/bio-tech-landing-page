import React from "react";
import Image from "next/image";
import { BsGlobe } from "react-icons/bs";
import { BsHeartPulse } from "react-icons/bs";
import { IoFlaskOutline } from "react-icons/io5";

const HeroSection2 = ({ removeSection, activeSection, breakpoint }) => {
  return (
    <div
      className={`hero-section-2 ${
        !breakpoint && removeSection === 1
          ? "reverse-animation2"
          : !breakpoint && activeSection === 1
          ? "animate-slide2"
          : ""
      }`}
    >
      <div className="float-main-section">
        <Image
          src="/images/hero-section-img1.png"
          height={380}
          width={380}
          alt="hero-sec"
        />

        <div className="float-section sec1">
          <IoFlaskOutline size={22} color="#2fa2eb" />
          <h5>25+</h5>
          <span>scientific researches</span>
        </div>

        <div className="float-section sec2">
          <BsHeartPulse size={23} color="#2fa2eb" />
          <h5>10M+</h5>
          <span>lives impacted</span>
        </div>

        <div className="float-section sec3">
          <BsGlobe size={22} color="#2fa2eb" />
          <h5>15+</h5>
          <span>global partners</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
