import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import PriceList from "./PriceList.jsx";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../../store/Feature/Basket/basketData.js";
function CardLg({ product }) {
  if (!product) {
    return null;
  }
  const productsWeight = Object.keys(product.discount);
  if (productsWeight.length == 0) return null;
  const [weight, setweight] = useState(productsWeight[0]);

  const [offer, setOffer] = useState(product.discount[weight]);
  const [discountedPrice, setDiscountedPrice] = useState(
    product.discountedPriceWithWeight[weight]
  );
  const [originalPrice, setOriginalPrice] = useState(
    product.originalPriceWithWeight[weight]
  );
  const [isHovered, setIsHovered] = useState(null);
  const [showPrice, setShowprice] = useState(null);
  const imageAlt = product.imageAlt;
  const images = product.images[0];
  const brand = product.brand;
  const productName = product.productName;
  const rating = "";
  const stars = "";
  useEffect(() => {
    setOffer(product.discount[weight]),
      setDiscountedPrice(product.discountedPriceWithWeight[weight]);
    setOriginalPrice(product.originalPriceWithWeight[weight]);
  }, [weight]);
  const location = useRef();

const dispatch=useDispatch()
  return (
    <>
      {
        <div className="h-[551px] w-[266px] p-[10px] my-3 bg-white flex flex-col justify-evenly shadow-xl rounded-xl overflow-visible ">
          <div className="h-[250px] w-[246px] p-6 border-gray-300 border-[1px] rounded-md relative ">
            <div className="absolute top-0 left-0 rounded-tl-md rounded-br-md bg-[#476F00] ">
              <p className="text-white font-medium text-[12px] px-2 py-[3px]">
                {offer}% OFF
              </p>
            </div>
            <div className="img h-fulll w-full">
              {
                <Link to="/">
                  <img src={images}  loading="lazy"  alt={imageAlt} />
                </Link>
              }
            </div>
          </div>
          <div>
            <div className="text-[13px]">
              <h6>{brand}</h6>
            </div>
            <div className="h-[45px] text-[14px] flex flex-wrap font-medium">
              <p>{productName}</p>
            </div>
            {rating && stars && (
              <div className="h-5 flex flex-row ">
                <div className="bg-[#E4F1CC] rounded-lg flex px-1">
                  <div className="text-[#476F00] font-semibold text-[11px]  mt-[4px]">
                    {stars}
                  </div>
                  <div>
                    <TiStarFullOutline className="text-[#476F00] text-[13px] mt-1 " />
                  </div>
                </div>
                <div>
                  <p className=" ml-2 text-[11px] font-normal mt-1">
                    {rating} Ratings
                  </p>
                </div>
              </div>
            )}
          </div>
          {/* price data */}
          <div   ref={location}>
            <button
              className={`flex justify-between h-[30px] w-full py-1 pl-2  relative
             text-gray-600  text-[12px] font-medium  border-gray-300 border-[1px] rounded-md
              hover:border-gray-600 ${showPrice && productsWeight.length !== 1 && "bg-[#404040]"} ${ productsWeight.length === 1 &&"bg-[#F7F7F7]"}`}
              onClick={() => {
                setShowprice(!showPrice);
              }}
            >
              <span
                className={`${showPrice && productsWeight.length !== 1 && "text-white"}`}
              >
                {weight}
              </span>
              {productsWeight.length !== 1 && (
                <IoIosArrowDown
                  className={`mr-2 mt-1 transition-transform duration-0 
                   ${showPrice ? "text-white  transition-transform duration-100 scale-y-[-1]" : "text-[#606060]"}`}
                  style={{
                    fontSize: "15px",
                    strokeWidth: "40px",
                  }}
                />
              )}
            </button>

            {showPrice && productsWeight.length !== 1 && (
              <PriceList
                productsWeight={productsWeight}
                setweight={setweight}
                setShowprice={setShowprice}
                setIsHovered={setIsHovered}
                isHovered={isHovered}
                weight={weight}
                location={location}
                setOffer={setOffer}
                product={product}
              />
            )}
            <div className="flex gap-2 h-6 text-[14px]  items-center">
              <p className="font-semibold ">{`₹${discountedPrice}`}</p>
              <span>
                <p className="line-through text-gray-600 text-[12px] ">
                  {`₹${originalPrice}`}
                </p>
              </span>
            </div>
          </div>
          {/* for har din sasta part */}
          <div className="py-3"></div>
          <div>
            <div className="bg-gradient-to-l from-[rgb(228,241,204)] to-[rgba(255,255,255,1)] h-[30px] border-[1px] border-[#ADD566]">
              <button className="flex flex-row  w-full h-full justify-between  ">
                <span className="text-[#476F00] text-[13px] font-semibold mt-1 ml-14">
                  Har Din Sasta!
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <button className="h-[35px] w-[17%]   rounded-md border-[1px] border-gray-600">
              <CiBookmark
                className="justify-center "
                style={{
                  strokeWidth: "1.5px",
                  fontSize: "18px",
                  width: "40px",
                }}
              />
            </button>
            <button className="text-[#CC0000] text-center w-[80%] rounded-md border-[1px]
             font-semibold border-[#CC0000] "onClick= {()=>{dispatch(addData(product))}}>
              Add
            </button>
          </div>
        </div>
      }
    </>
  );
}

export default CardLg;
