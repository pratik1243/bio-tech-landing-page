import React from "react";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { BiAtom } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { IoMdSearch } from "react-icons/io";
import { LuFactory } from "react-icons/lu";
import { BiRecycle } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";

const CapabilitySec2 = ({ removeSection, activeSection, breakpoint }) => {
  return (
    <div
      className={`capability-section2 ${
        !breakpoint && removeSection == 4
          ? "reverse-animation8"
          : !breakpoint && activeSection == 4
            ? "animate-slide8"
            : ""
      }`}
    >
      <div className="capability-inner-section">
        <div className="capbility-card sec1">
          <AiOutlineMedicineBox size={25} color="#257bd1" />
          <h3>Drug Discovery</h3>
          <p>Target identification, validation & lead optimization</p>
        </div>
        <div className="capbility-card sec2">
          <BiAtom size={25} color="#257bd1" />
          <h3>Bio Development</h3>
          <p>Antibody engineering, recombinant proteins and more</p>
        </div>
        <div className="capbility-card sec3">
          <IoMdSearch size={25} color="#257bd1" />
          <h3>Diagnostics</h3>
          <p>Innovative assays & platforms for better detection</p>
        </div>
        <div className="capability-dot-line">
          <div className="content-sec">
            <div>
              <div className="icon-sec">
                <GoArrowSwitch color="#fff" size={20} />
              </div>
              <h2>Biotech Solutions</h2>
              <span>End-to-End</span>
            </div>
          </div>
          <div className="dot-line sec1"></div>
          <div className="dot-line sec2"></div>
          <div className="dot-line sec3"></div>
        </div>
        <div className="capbility-card sec4">
          <BiRecycle size={26} color="#257bd1" />
          <h3>Process</h3>
          <p>Scalable, efficient & regulatory-ready processes</p>
        </div>
        <div className="capbility-card sec5">
          <LuFactory size={23} color="#257bd1" />
          <h3>Manufacturingy</h3>
          <p>GMP-compliant production with quality assurance</p>
        </div>
        <div className="capbility-card sec6">
          <FaRegUser size={21} color="#257bd1" />
          <h3>Regulatory Support</h3>
          <p>Guiding you through regulatory pathways with confidence</p>
        </div>
      </div>
    </div>
  );
};

export default CapabilitySec2;
