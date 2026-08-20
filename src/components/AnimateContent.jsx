import React from "react";
import HeroSection1 from "./HeroSection/HeroSection1";
import HeroSection2 from "./HeroSection/HeroSection2";
import AboutSection1 from "./AboutSection/AboutSection1";
import AboutSection2 from "./AboutSection/AboutSection2";
import TechSection from "./TechnologySection/TechSection";
import ImpactSection1 from "./ImpactSection/ImpactSection1";
import ImpactSection2 from "./ImpactSection/ImpactSection2";
import CapabilitySec2 from "./CapabilitySection/CapabilitySec2";
import CapabilitySec1 from "./CapabilitySection/CapabilitySec1";

const AnimateContent = ({ activeStep }) => {
  return (
    <div className={`animate-content-sec slab-${activeStep.activeSection}`}>
      {!activeStep.breakpoint && activeStep.activeSection === 1 && (
        <>
          <HeroSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection}
            breakpoint={activeStep.breakpoint}
          />
          <HeroSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {activeStep.breakpoint && (
        <>
          <HeroSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection}
            breakpoint={activeStep.breakpoint}
          />
          <HeroSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {!activeStep.breakpoint && activeStep.activeSection === 2 && (
        <>
          <AboutSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection1}
            breakpoint={activeStep.breakpoint}
          />
          <AboutSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection1}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {activeStep.breakpoint && (
        <>
          <AboutSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection1}
            breakpoint={activeStep.breakpoint}
          />
          <AboutSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection1}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {!activeStep.breakpoint && activeStep.activeSection === 3 && (
        <TechSection
          activeSection={activeStep.activeSection}
          removeSection={activeStep.removeSection2}
          breakpoint={activeStep.breakpoint}
        />
      )}

      {activeStep.breakpoint && (
        <TechSection
          activeSection={activeStep.activeSection}
          removeSection={activeStep.removeSection2}
          breakpoint={activeStep.breakpoint}
        />
      )}

      {!activeStep.breakpoint && activeStep.activeSection === 4 && (
        <>
          <CapabilitySec1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection3}
            breakpoint={activeStep.breakpoint}
          />
          <CapabilitySec2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection3}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {activeStep.breakpoint && (
        <>
          <CapabilitySec1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection3}
            breakpoint={activeStep.breakpoint}
          />
          <CapabilitySec2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection3}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {!activeStep.breakpoint && activeStep.activeSection === 5 && (
        <>
          <ImpactSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection4}
            breakpoint={activeStep.breakpoint}
          />
          <ImpactSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection4}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}

      {activeStep.breakpoint && (
        <>
          <ImpactSection1
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection4}
            breakpoint={activeStep.breakpoint}
          />
          <ImpactSection2
            activeSection={activeStep.activeSection}
            removeSection={activeStep.removeSection4}
            breakpoint={activeStep.breakpoint}
          />
        </>
      )}
    </div>
  );
};

export default AnimateContent;
