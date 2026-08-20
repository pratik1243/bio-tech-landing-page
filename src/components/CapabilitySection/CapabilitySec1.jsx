import React from "react";

const CapabilitySec1 = ({ removeSection, activeSection, breakpoint }) => {
  return (
    <div
      className={`capability-section1 ${
        !breakpoint && removeSection == 4
          ? "reverse-animation7"
          : !breakpoint && activeSection == 4
            ? "animate-slide7"
            : ""
      }`}
    >
      <div className="capability-inner-sec1">
        <div className="head-sec">
          <span className="capability-txt">Capabilities</span>
          <h3 className="head-txt1">Scalable Research</h3>
          <h4 className="head-txt2">Biotech Solutions</h4>
        </div>
        <p className="para-txt">
          From early research to scalable manufacturing, we provide integrated capabilities to accelerate your innovation journey.
        </p>
      </div>
    </div>
  );
};

export default CapabilitySec1;
