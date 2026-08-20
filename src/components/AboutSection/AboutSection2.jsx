import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
//import { GiMaterialsScience } from "react-icons/gi";
import { SiSecurityscorecard } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

const AboutSection2 = ({ activeSection, removeSection, breakpoint }) => {
  return (
    <div
      className={`about-section-2 ${
        !breakpoint && removeSection ===2
          ? "reverse-animation4"
          : !breakpoint && activeSection ===2
            ? "animate-slide4"
            : ""
      }`}
    >
      <div className="about-dot-section"></div>
      <div className="about-cards-section">
        <div>
          {" "}
          <div className="about-card sec1">
            <div className="icon-sec">
              <RiReactjsLine size={26} color="#008000ad" />
            </div>
            <h5 className="card-txt">Innovation</h5>
            <span className="card-txt2">
              Pushing boundaries with bold ideas
            </span>
          </div>
        </div>
        <div>
          {" "}
          <div className="about-card sec2">
            <div className="icon-sec">
              <SiSecurityscorecard size={26} color="#800080a3" />
            </div>
            <h5 className="card-txt">Integrity</h5>
            <span className="card-txt2">Science and ethics at our core</span>
          </div>
        </div>
        <div>
          <div className="about-card sec3">
            <div className="icon-sec">
              <AiOutlineGlobal size={26} color="#0000ff82" />
            </div>
            <h5 className="card-txt">Impact</h5>
            <span className="card-txt2">
              Delivering real-world health outcomes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection2;
