import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

import carrot from "../../assets/images/carrot.png";

function CardLg({product}) {

if (!product) {
  return null 
}

  const imageAlt=product.imageAlt;
  const images = product.images[0];
  const url = "https://google.com";
  const brand = product.brand;
  const productName =product.productName
  const weight = "1kg";
  const discountedPrice = "98";
  const price = "115";
  const offer = 27;
  const rating = 207;
  const stars = 4.1;
  return (
  <> { 
    (<div className="h-[551px] w-[266px] p-[10px] my-3 bg-white flex flex-col justify-evenly shadow-xl rounded-xl ">
      <div className="h-[250px] w-[246px] p-6 border-gray-300 border-[1px] rounded-md relative">
        <div className="absolute top-0 left-0 rounded-tl-md rounded-br-md bg-[#476F00] ">
          <p className="text-white font-medium text-[12px] px-2 py-[3px]">
            {offer}% OFF
          </p>
        </div>
        <div className="img h-fulll w-full">
          <a href={url}>
            <img src={images} alt={imageAlt} />
          </a>
        </div>
      </div>
      <div>
        <div className="text-[13px]">
          <h6>{brand}</h6>
        </div>
        <div className="h-[45px] text-[14px] flex flex-wrap font-medium">
          <p>{productName}</p>
        </div>

        <div className="h-5 flex flex-row mb-2">
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
              {" "}
              {rating} Ratings
            </p>
          </div>
        </div>
        <div>
          <button className="flex justify-between h-[30px] w-full p-1 text-gray-600 text-sm border-gray-600 border-[1px] rounded-md">
            <span>{weight}</span>
            <IoIosArrowDown
              className="mr-2 mt-1"
              style={{
                color: "#606060",
                fontSize: "15px",
                strokeWidth: "40px",
              }}
            />
          </button>
          <div className="flex gap-2 h-6 text-[13px]  items-center">
            <p className="font-semibold ">{`₹${discountedPrice}`}</p>
            <span>
              <p className="line-through text-gray-600 text-sm ">
                {`₹${price}`}
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="py-3"></div>
      <div>
        <div className="bg-gradient-to-l from-[rgb(228,241,204)] to-[rgba(255,255,255,1)] h-[30px] border-[1px] border-[#ADD566]">
          <button className="flex flex-row  w-full h-full justify-between  ">
            <span className="text-[#476F00] text-[13px] font-semibold mt-1 ml-14">
              {" "}
              Har Din Sasta!{" "}
            </span>
            <span className="mt-2 mr-2">
              <IoIosArrowDown
                style={{
                  color: "#476F00",
                  fontSize: "15px",
                  strokeWidth: "40px",
                }}
              />
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-4">
        <button className="h-[35px] w-[17%]   rounded-md border-[1px] border-gray-600">
          <CiBookmark
            className="justify-center "
            style={{ strokeWidth: "1.5px", fontSize: "18px", width: "40px" }}
          />
        </button>
        <button className="text-[#CC0000] text-center w-[80%] rounded-md border-[1px] font-semibold border-[#CC0000]">
          Add
        </button>
      </div>
    </div>)}</>
  );
}

export default CardLg;
