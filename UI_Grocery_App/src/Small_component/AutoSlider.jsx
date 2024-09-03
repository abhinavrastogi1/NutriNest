import React, { useState, useEffect } from "react";
import Surfexcel from "../assets/images/Surfexcel.png";
import Dove from "../assets/images/Dove.png";

function AutoSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    { id: 1, url: Surfexcel, href: "https://google.com" },
    { id: 2, url: Dove, href: "./" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl my-5">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          // Problematic width calculation
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex-shrink-0 w-full">
            <a href={slide.href}>
              <img
                src={slide.url}
                className="w-full h-full object-cover"
                alt={`Slide ${slide.id}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlider;
