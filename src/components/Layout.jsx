import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import AnimateContent from "./AnimateContent";

const getBreakpoint = () => {
  if (typeof window == "undefined") {
    return false;
  }

  return window.innerWidth < 1200;
};

const Layout = () => {
  const containerRef = useRef([]);
  const contentCount = [1, 2, 3, 4, 5, 6];
  const [activeSection, setActiveSection] = useState(1);
  const [removeSection, setRemoveSection] = useState();
  const [removeSection1, setRemoveSection1] = useState();
  const [removeSection2, setRemoveSection2] = useState();
  const [removeSection3, setRemoveSection3] = useState();
  const [removeSection4, setRemoveSection4] = useState();
  const [removeSection5, setRemoveSection5] = useState();
  const [breakpoint, setBreakpoint] = useState(getBreakpoint);

  const handleScroll = () => {
    const section1Position1 = containerRef.current[1]?.getBoundingClientRect().top;
    const section1Position2 = containerRef.current[2]?.getBoundingClientRect().top;
    const section1Position3 = containerRef.current[3]?.getBoundingClientRect().top;
    const section1Position4 = containerRef.current[4]?.getBoundingClientRect().top;
    const section1Position5 = containerRef.current[5]?.getBoundingClientRect().top;

    if (section1Position1 === 0) {
      setActiveSection(1);
      setRemoveSection();
    } else if (section1Position1 < 0) {
      setRemoveSection(1);
    } else if (section1Position1 > 0) {
      setRemoveSection(1);
    }

    if (section1Position2 === 0) {
      setActiveSection(2);
      setRemoveSection1();
    } else if (section1Position2 < 0) {
      setRemoveSection1(2);
    } else if (section1Position2 > 0) {
      setRemoveSection1(2);
    }

    if (section1Position3 === 0) {
      setActiveSection(3);
      setRemoveSection2();
    } else if (section1Position3 < 0) {
      setRemoveSection2(3);
    } else if (section1Position3 > 0) {
      setRemoveSection2(3);
    }

    if (section1Position4 === 0) {
      setActiveSection(4);
      setRemoveSection3();
    } else if (section1Position4 < 0) {
      setRemoveSection3(4);
    } else if (section1Position4 > 0) {
      setRemoveSection3(4);
    }

    if (section1Position5 === 0) {
      setActiveSection(5);
      setRemoveSection4();
    } else if (section1Position5 < 0) {
      setRemoveSection4(5);
    } else if (section1Position5 > 0) {
      setRemoveSection4(5);
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1200px)");
    const handleBreakpointChange = (event) => {
      setBreakpoint(event.matches);
    };
    setBreakpoint(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleBreakpointChange);
    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <div className="layout-sec" onScroll={handleScroll}>
      <Navbar
        activeStep={activeSection}
        ref={containerRef}
        breakpoint={breakpoint}
        setActiveSection={setActiveSection}
      />

      <AnimateContent
        activeStep={{
          activeSection,
          removeSection,
          removeSection1,
          removeSection2,
          removeSection3,
          removeSection4,
          removeSection5,
          breakpoint,
        }}
      />

      {contentCount.map((el, i) => (
        <div
          key={i}
          className="content-slab"
          ref={(el) => (containerRef.current[i + 1] = el)}
        />
      ))}
    </div>
  );
};

export default Layout;