import React from "react";
import { useEffect, useState } from "react";
import cakes from "../assets/images/cakes.png";
import pet_food from "../assets/images/pet_food.png";
import suppliments from "../assets/images/suppliments.png";
import baby_cosmetics from "../assets/images/baby_cosmetics.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  { id: 1, url: cakes, href: "./" },
  { id: 2, url: baby_cosmetics, href: "./" },
  { id: 3, url: pet_food, href: "./" },
  { id: 4, url: suppliments, href: "./" },
];

function Bottom_autoSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="slider-container rounded-xl my-5 shadow-md h-[400px] ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full">
            <a href={slide.href}>
              <img
                src={slide.url}
                className=" h-[410px] w-[105%] object-cover rounded-xl  "
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Bottom_autoSlider;
