import React, { useState } from "react";
import { LandingIcon } from "./LandingIcon";
import { DotIcon } from "./Icons/DotIcon";

function CarouselNavbar({ dots, activeIndex, setActiveIndex}) {
  const dotsArray = [...Array(dots)].map((_, i) => (
    <button key={i} onClick={() => setActiveIndex(i)}>
    <DotIcon
      color="text-primary-blue"
      className={`${i === activeIndex ? "" : "opacity-50"} transition-all`}
    />
    </button>
  ));

  const handleRightClick = () => {
    if (activeIndex < dots - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleLeftClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className="flex gap-x-2 items-center justify-center mt-8">
      <button onClick={handleLeftClick} disabled={activeIndex === 0}>
        <LandingIcon
          type="leftArrow"
          className={`mx-4 ${activeIndex === 0 ? "opacity-50" : ""}`}
        />
      </button>
      {dotsArray}
      <button onClick={handleRightClick} disabled={activeIndex === dots - 1}>
        <LandingIcon
          type="rightArrow"
          className={`mx-4 ${activeIndex === dots - 1 ? "opacity-50" : ""}`}
        />
      </button>
    </div>
  );
}

export { CarouselNavbar };
