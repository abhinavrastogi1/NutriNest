import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHome } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../store/Api/fetchProductsByCategorySlice";
function Product() {
  const { productData } = useSelector((state) => state.productSlice);
  if (productData.length === 0) {
    return null;
  }
  const productDetails = productData[0];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("product data", productDetails);
  function removeSpecialChar(str) {
    return str.replace(/( & |, | and | )/g, "-");
  }
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  const mainCategory = productDetails?.category.level1;
  const subCategory = productDetails?.category.level2;
  const subSubCategory = productDetails?.category.level3;
  const images = productDetails?.images;
  const productName = productDetails?.productName;
  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 mb-8 ">
      <div className="flex  w-full pb-3 pt-2">
        {/* Home icon */}
        <span>
          {" "}
          <FiHome className="  m-1 " />
        </span>
        {/* Home button */}
        <button
          className="text-[15px] font-medium flex pt-[2px] "
          onClick={() => {
            navigate("/");
          }}
        >
          Home{" "}
          <span className="mx-2">
            {" "}
            <h1>/</h1>
          </span>
        </button>
        <button
          className="text-[15px] font-medium flex pt-[2px] "
          onClick={() => {
            dispatch(fetchProducts({ mainCategory: mainCategory }));
            navigate(`/cd/${removeSpecialChar(mainCategory)}`);
          }}
        >
          {capitalizeWords(mainCategory)}
          <span className="mx-2">
            {" "}
            <h1>/</h1>
          </span>
        </button>
        <button
          className="text-[15px] font-medium flex pt-[2px] "
          onClick={() => {
            dispatch(
              fetchProducts({
                mainCategory: mainCategory,
                subCategory: subCategory,
              })
            );
            navigate(
              `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}`
            );
          }}
        >
          {capitalizeWords(subCategory)}
          <span className="mx-2">
            {" "}
            <h1>/</h1>
          </span>
        </button>
        <button
          className="text-[15px] font-semibold pt-[2px]"
          onClick={() => {
            dispatch(
              fetchProducts({
                mainCategory: mainCategory,
                subCategory: subCategory,
                subSubCategory: subSubCategory,
              })
            );
            navigate(
              `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}/${removeSpecialChar(subSubCategory)}`
            );
          }}
        >
          {capitalizeWords(subSubCategory)}
        </button>
      </div>
      <div className="  grid grid-cols-2 mt-2 gap-3 pt-2 relative">
        <div className=" sticky pt-20 top-0 self-start">
          {" "}
          <div className="flex h-[460px] gap-3 flex-row  ">
            <div className=" h-full w-[15%]  flex flex-col gap-3 ">
              {images?.map((image, index) => (
                <div
                  key={index}
                  className={`h-[84px] p-1  border-[1px] rounded-md contain-content ${currentImage === image && "border-[#6B970F] shadow-lg"}  `}
                  onClick={() => {
                    setCurrentImage(image);
                  }}
                >
                  <img
                    src={image}
                    alt={`${productName} image `}
                    className="h-full w-full "
                  />
                </div>
              ))}
            </div>
            <div className=" h-full w-[85%] p-5 border-2 rounded-md contain-content ">
              <img
                src={currentImage}
                alt={`${productName} image `}
                className="h-full w-full  "
              />
            </div>
          </div>
        </div>
        <div className="h-[1000px] bg-black"></div>
      </div>
    </div>
  );
}

export default Product;
