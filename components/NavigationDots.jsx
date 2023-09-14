import { useState, useEffect } from "react";
// import "./NavigationDots.scss";

const NavigationDots = () => {
  const [activeID, setActiveID] = useState("header");

  // useEffect(() => {
  //   const isInViewport = (element) => {
  //     const rect = element.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <=
  //         (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   };

  //   const updateCurrentActiveId = () => {
  //       if(!isInViewport(document.getElementById("landing"))) {
  //           console.log("element not aligned")
  //       }
  //   }

  //   window.addEventListener("scroll", updateCurrentActiveId, false);

  //   return () => {
  //     window.removeEventListener("scroll", updateCurrentActiveId);
  //   };
  // }, []);

  return (
    <div
      className="app__navigation sticky z-50 transition-all xl:left-95-5% md:left-92-5% left-85%"
      style={{ bottom: "40%", width: "50px" }}
    >
      {["header", "features", "needs", "faq", "footer"].map((item, index) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a
          key={item + index}
          className={`app__navigation-dot ${
            activeID === item && "shadow-themeGlowBlue"
          }`}
          style={activeID === item ? { backgroundColor: "#015FF3" } : {}}
          href={`#${item}`}
          onClick={() => {
            setActiveID(item);
          }}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
