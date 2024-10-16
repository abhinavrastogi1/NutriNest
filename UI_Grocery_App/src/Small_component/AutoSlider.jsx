import React, { useState, useEffect } from "react";
import Surfexcel from "../assets/images/Surfexcel.png";
import Dove from "../assets/images/Dove.png";
import { Link } from "react-router-dom";

function AutoSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    { id: 1, url: Surfexcel, href: "/" },
    { id: 2, url: Dove, href: "/" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl my-5 shadow-xl">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          // Problematic width calculation
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="flex-shrink-0 w-full">
            
             <Link to="/"> <img
                src={slide.url}
                className="w-full h-full object-cover"
                alt={`Slide ${slide.id}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlider;
