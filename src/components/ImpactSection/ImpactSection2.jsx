import React from "react";
import { IoFlaskOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

const ImpactSection2 = ({ activeSection, removeSection, breakpoint }) => {
  return (
    <div
      className={`impact-section-2 ${
        !breakpoint && removeSection ===5
          ? "reverse-animation6"
          : !breakpoint && activeSection ===5
            ? "animate-slide6"
            : ""
      }`}
    >
      <div>
        <h3 className="head-txt-1">Our Impact</h3>
        <h3 className="head-txt-2">Science That Creates Real Impact</h3>
        <div className="impact-cards-section">
          <div className="impact-card sec1">
            <div className="icon-sec">
              <IoFlaskOutline size={20} color="#257bd1" />
            </div>
            <h3> </h3>
            <span>Research Projects Completed</span>
          </div>
          <div className="impact-card sec2">
            <div className="icon-sec">
              <HiOutlineUsers size={20} color="#257bd1" />
            </div>
            <h3> </h3>
            <span>Global Partnerships</span>
          </div>
          <div className="impact-card sec3">
            <div className="icon-sec">
              <AiOutlineGlobal size={21} color="#257bd1" />
            </div>
            <h3> </h3>
            <span>Countries Reached</span>
          </div>
          <div className="impact-card sec4">
            <div className="icon-sec">
              <IoDocumentTextOutline size={21} color="#257bd1" />
            </div>
            <h3> </h3>
            <span>Patents Filed Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection2;
