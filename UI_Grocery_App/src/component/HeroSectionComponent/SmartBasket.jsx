import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CardLg from "../../Small_component/Cards/CardLg";
import { useSelector } from "react-redux";
function SmartBasket() {
  const { productsData } = useSelector((state) => state.recomemdedProduct);
  const [slideShow, setSlideShow] = useState(0);
  const productArr = [];
  productsData &&
    productsData.length > 0 &&
    productsData.map((products) =>
      products.productData.map((product) => {
        productArr.push(product);
      })
    );
  const NoOfProduct = productArr.length;
  function onForwardClick() {
    console.log(slideShow);
    if (slideShow < Math.floor(NoOfProduct / 4)-1)
      setSlideShow(slideShow+1)
      ;
    else {
      setSlideShow((NoOfProduct / 4 )-1)
    }
  }
  function onBackwardClick() {
    if (slideShow < 1) setSlideShow(0);
    else {
      setSlideShow(slideShow - 1);
    }
  }

  return (
    <div className=" bg-[#F7F7F7] p-5 mt-8 z-10 ">
      <div className="flex justify-between px-3 mt-2">
        <div className="text-black font-bold text-[20px] h-full">
          <h1>My Smart Basket</h1>
        </div>
        <div className="flex items-center ">
          <Link to="">
            <span className=" text-gray-600 underline hover:text-black mx-5 font-semibold text-[15px]  ">
              View All
            </span>
          </Link>

          <div>
            <button
              className="rounded-md shadow-lg p-2 bg-white mx-3 "
              onClick={() => {
                onBackwardClick();
              }}
            >
              <IoIosArrowBack className="text-xl" />
            </button>
            <button
              className="rounded-md shadow-lg p-2 bg-white"
              onClick={() => {
                onForwardClick();
              }}
            >
              <IoIosArrowForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex  gap-[10px]  relative transition-transform duration-500   `}
        style={{ transform: `translateX(${-slideShow * 100}%)  ` }}
      >
        {productArr.slice(0,9).map((product) => {
          return <CardLg key={product.productId} product={product} />;
        })}
      </div>
    </div>
  );
}
export default SmartBasket;
