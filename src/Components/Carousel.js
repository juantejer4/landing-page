import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import { CarouselNavbar } from "./CarouselNavbar";

function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {items.map((item, index) => (
        <CarouselItem
          key={index}
          name={item.name}
          company={item.company}
          profilePic={item.profilePic}
          comment={item.comment}
          className={`${index === items.length-1 ? "relative" : "absolute"} ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <CarouselNavbar dots={items.length} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
}

export { Carousel };
