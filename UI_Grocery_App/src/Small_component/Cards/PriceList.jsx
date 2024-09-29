import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { FcCheckmark } from "react-icons/fc";
function PriceList({
  productsWeight,
  setShowprice,
  setweight,
  setIsHovered,
  weight,
  isHovered,
  location,
  product,
}) {
  let top = 0;
  let left = 0;
  if (location.current) {
    const locationInfo = location.current.getBoundingClientRect();
    top = locationInfo.top + 30 + window.scrollY; // Include scroll position if needed
    left = locationInfo.left + window.scrollX; // Include scroll position if needed
  }
  return ReactDOM.createPortal(
    <>
      <div style={{ left: `${left}px`, top: `${top}px`, position: "absolute" }}>
        <div
          className="bg-white w-80 z-50   top-7 transition-all duration-1000 ease-in-out
               transform  border-gray-300 border-[1px]  rounded-md px-[10px] mt-1 overflow-ellipsis"
        >
          {productsWeight?.map((weights, index) => (
            <div
              key={index}
              className={`h-16 w-[300px] bg-white my-2 p-2   
                  ${weights === weight ? "border-[#76B900]" : "border-gray-300"}  border-[1px] rounded-md hover:shadow-md`}
              onClick={() => {
                setweight(weights);
                setShowprice(false);
              }}
              onMouseEnter={() => {
                setIsHovered(index);
              }}
              onMouseLeave={() => {
                setIsHovered(null);
              }}
            >
              <div className="flex justify-between ">
                <div className="text-[12px] font-medium text-gray-600 ">
                  <h3>{weights}</h3>
                </div>
                {weights === weight && (
                  <div>
                    <FcCheckmark
                      style={{
                        strokeWidth: "2px",
                        color: "#76B900",
                        fontSize: "14px",
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <div className="flex">
                  <div className="py-1 ">
                    <h2 className="bg-[#F1F8E6] text-[#476F00] text-[11px] p-[2px] font-semibold">
                      {product.discount[weights]}% oFF
                    </h2>
                  </div>
                  <div className="flex gap-2 h-6 text-[14px]  items-center ml-1">
                    <p className="font-semibold pt-[3px] ">{`₹${product.discountedPriceWithWeight[weights]}`}</p>
                    <span>
                      <p className="line-through text-gray-600 text-[12px] pt-[3px]">
                        {`₹${product.originalPriceWithWeight[weights]}`}
                      </p>
                    </span>
                  </div>
                </div>
                <div>
                  {isHovered === index && (
                    <button
                      className="bg-[#CC0000]  text-white text-xs rounded-sm py-[2px] px-2 font-medium"
                      onClick={() => {
                        console.log("HELLO");
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>,
    document.body
  );
}

export default PriceList;
