import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHome } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/Api/fetchProductsByCategorySlice";
import { productSliceApi } from "../../store/Api/productSlice";
import { MdBookmarkAdded } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
function Product() {
  const { productData } = useSelector((state) => state.productSlice);
  const { id } = useParams();
  useEffect(() => {
    dispatch(productSliceApi({ id: id }));
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productDetails = productData[0];
  console.log(productDetails);
  let productsWeight = [];

  if (productData?.length != 0) {
    productsWeight = Object.keys(productDetails?.discount);
  }
  const [weight, setweight] = useState(productsWeight[0]);
  useEffect(() => {
    if (productsWeight.length > 0) {
      setweight(productsWeight[0]);
    }
  }, [productData]);
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
  const [currentImage, setCurrentImage] = useState(images?.[0]);
  const brand = productDetails?.brand;

  useEffect(() => {
    if (images?.length > 0) {
      setCurrentImage(images[0]);
    }
  }, [images]);

  const [offer, setOffer] = useState(productDetails?.discount[weight]);

  const [discountedPrice, setDiscountedPrice] = useState(
    productDetails?.discountedPriceWithWeight[weight]
  );
  const [originalPrice, setOriginalPrice] = useState(
    productDetails?.originalPriceWithWeight[weight]
  );
  useEffect(() => {
    setOffer(productDetails?.discount[weight]),
      setDiscountedPrice(productDetails?.discountedPriceWithWeight[weight]);
    setOriginalPrice(productDetails?.originalPriceWithWeight[weight]);
  }, [weight]);

  return (
    <>
      {productData?.length != 0 && (
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
            <div className=" sticky pt-2 top-0 self-start">
              {" "}
              <div className="flex h-[460px] gap-3 flex-row  ">
                <div className=" h-full w-[15%]  flex flex-col gap-3 ">
                  {images?.map((image, index) => (
                    <div
                      key={index}
                      className={`h-[84px] p-1  border-[1px] rounded-md contain-content
                     ${currentImage === image && "border-[#6B970F] shadow-lg"}  `}
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
            <div className=" flex flex-col pt-2">
              <div>
                <h3 className="text-[#696969] underline text-[15px] font-[450] ">
                  {brand}
                </h3>
                <h1 className="pt-2">
                  {productName},{weight}
                </h1>
                <h3>
                  MRP: ₹<span className="line-through">{originalPrice}</span>
                </h3>
                <h2>Price:₹{discountedPrice}</h2>
                <h3>
                  You Save:<span>{offer}% OFF</span>
                </h3>
                <h4>(inclusive of all taxes)</h4>
              </div>
              <div className="flex">
                <div className="w-[60%]">
                  <button>Add to basket</button>
                </div>
                <div className="w-[40%] flex">
                  <span>
                    {" "}
                    <MdBookmarkBorder /> Save for later
                  </span>
                </div>
              </div>
              {productsWeight.length > 1 && (
                <div>
                  <h3>Pack Sizes</h3>
                  {productsWeight?.map((weights, index) => (
                    <div
                      key={index}
                      className={`h-16 w-full bg-white my-2 p-2   
                  ${weights === weight ? "border-[#76B900]" : "border-gray-300"}  border-[1px] rounded-md hover:shadow-md`}
                      onClick={() => {
                        setweight(weights);
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
                              {productDetails.discount[weights]}% oFF
                            </h2>
                          </div>
                          <div className="flex gap-2 h-6 text-[14px]  items-center ml-1">
                            <p className="font-semibold pt-[3px] ">{`₹${productDetails.discountedPriceWithWeight[weights]}`}</p>
                            <span>
                              <p className="line-through text-gray-600 text-[12px] pt-[3px]">
                                {`₹${productDetails.originalPriceWithWeight[weights]}`}
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mt-8 border-t-2 border-dotted text-[#202020] ">
            <h1 className="text-xl font-bold mt-5">{productName}</h1>
            <div className="p-2 border-[1px] rounded-md mt-3">
              <div className="pl-3 mt-3 ">
                <h4 className="text-sm font-semibold">About the product</h4>
              </div>
              <div className=" p-2 border-b-[1px] mx-5">
                <p className="text-[14px] font-medium flex-wrap">
                  {productDetails?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Product;
