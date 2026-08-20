import React from "react";
import techCardImg3 from "../../assets/images/ai-powered.jpg";
import techCardImg1 from "../../assets/images/genetic-engineeing.jpg";
import techCardImg4 from "../../assets/images/advance-analytics.jpg";
import techCardImg2 from "../../assets/images/cell-research.jpg";
import { RiDnaLine } from "react-icons/ri";
import { RiRobot2Line } from "react-icons/ri";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineBiotech } from "react-icons/md";
import { LuMicroscope } from "react-icons/lu";

const TechSection = ({ activeSection, removeSection, breakpoint }) => {
  return (
    <div
      id="tech-section"
      className={`tech-section ${
        !breakpoint && removeSection === 3
          ? "reverse-animation5"
          : !breakpoint && activeSection === 3
          ? "animate-slide5"
          : ""
      }`}
    >
      <div className="tech-section-1">
        <h3 className="tech-txt1">
          Where Biology Meets <span>Breakthroughs</span>
        </h3>
        <p className="tech-para-txt">
          We are a biotechnology company dedicated to advancing life sciences
          through innovation, collaboration, and integrity. Our mission is to
          translate complex biology into impactful solutions that improve lives.
        </p>
      </div>

      <div className="tech-section-2">
        <div className="tech-cards-section">
          <div className="tech-card sec1">
            <img
              src={techCardImg1}
              alt="tech-sec"
              loading="lazy"
              decoding="async"
            />
            <div className="tech-inner-card">
              <LuMicroscope size={26} color="#2fa2eb" />
              <h3>Genetic Engineering</h3>
              <span>Precision tools for gene editing and regulation</span>
            </div>
          </div>
          <div className="tech-card sec2">
            <img
              src={techCardImg3}
              alt="tech-sec"
              loading="lazy"
              decoding="async"
            />
            <div className="tech-inner-card">
              <RiRobot2Line size={28} color="#2fa2eb" />
              <h3>AI-Powered Discovery</h3>
              <span>
                Data-driven insights for faster and smarter breakthroughs
              </span>
            </div>
          </div>
          <div className="tech-card sec3">
            <img
              src={techCardImg2}
              alt="tech-sec"
              loading="lazy"
              decoding="async"
            />
            <div className="tech-inner-card">
              <RiDnaLine size={29} color="#2fa2eb" />
              <h3>Cell & Protein Research</h3>
              <span>Understanding biology at a deeper level</span>
            </div>
          </div>
          <div className="tech-card sec4">
            <img
              src={techCardImg4}
              alt="tech-sec"
              loading="lazy"
              decoding="async"
            />
            <div className="tech-inner-card">
              <GrAnalytics size={26} color="#2fa2eb" />
              <h3>Advanced Analytics</h3>
              <span>Transforming complex data into actionable solutions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechSection;
