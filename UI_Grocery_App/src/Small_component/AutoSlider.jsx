import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { productSliceApi } from "../store/Api/productSlice";
import { useDispatch } from "react-redux";

function AutoSlider() {
  const [imageIndex, setImageIndex] = useState(0);

  const slides = [
    {
      id: 1,
      url: "http://res.cloudinary.com/dpgaqghmr/image/upload/v1730008471/tf00tvojgmxdcsceccre.png",
      productId: 56,
      productName: "Surf Excel Matic Top Load Liquid Detergent",
    },
    {
      id: 2,
      url: "http://res.cloudinary.com/dpgaqghmr/image/upload/v1730008471/aldhg8ulw0z0afgwslms.png",
      productId: 55,
      productName: "Dove Hair Fall Rescue Shampoo",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);
  function removeSpecialChar(str) {
    return str.replace(/( & |, | and |\/| \/ | )/g, "-");
  }
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="relative w-full overflow-hidden rounded-xl my-5 shadow-xl">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${imageIndex * 100}%)`,
          // Problematic width calculation
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="flex-shrink-0 w-full"
            onClick={async () => {
              try {
                await dispatch(
                  productSliceApi({
                    id: slide.productId,
                  })
                ).unwrap();
                navigate(
                  `/pd/${slide.productId}/${removeSpecialChar(slide.productName)}`
                );
              } catch (error) {
                navigate("/");
              }
            }}
          >
            <img
              src={slide.url}
              className="w-full h-full object-cover"
              alt={`Slide ${slide.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutoSlider;
