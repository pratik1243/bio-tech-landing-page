import React from "react";
import { BiLeaf } from "react-icons/bi";
import impactSec1Img from "../../assets/images/impact-bg-img.png";

const ImpactSection1 = ({ activeSection, removeSection, breakpoint }) => {
  return (
    <div
      id="impact-section"
      className={`impact-section-1 ${
        !breakpoint && removeSection === 5
          ? "reverse-animation6"
          : !breakpoint && activeSection === 5
          ? "animate-slide6"
          : ""
      }`}
    >
      <div className="inner-impact-section-1">
        <img
          src={impactSec1Img}
          alt="impact-sec"
          loading="lazy"
          decoding="async"
        />
        <div className="impact-card-sec">
          <div className="icon-sec">
            <BiLeaf size={18} color="#fff" />
          </div>
          <div>
            <h4>Innovation for life</h4>
            <p>
              Every discovery we make brings us closer to a better healtier
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection1;
