import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiHome } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/Api/fetchProductsByCategorySlice";
import { productSliceApi } from "../../store/Api/productSlice";
import { MdBookmarkAdded } from "react-icons/md";
import { MdBookmarkBorder } from "react-icons/md";
import { FcCheckmark } from "react-icons/fc";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import {
  addProductInCart,
  deleteProductFromCart,
  UpdateCart,
} from "../../store/Api/UpdateBasket";
import { addData, removeData } from "../../store/Feature/Basket/basketData";

function Product() {
  const { productData } = useSelector((state) => state.productSlice);
  const productDetails = productData[0];
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(productData.length);
    if (!productData.length) dispatch(productSliceApi({ id: id }));
  }, [dispatch]);

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
  const productName = productDetails?.productName;
  const [currentImage, setCurrentImage] = useState(images?.[0]);
  const brand = productDetails?.brand;
  const [noOfproduct, setNoOfproduct] = useState(0);
  const [saveforLater, setSaveForLater] = useState(false);
  const { items } = useSelector((state) => state.totalItemsSlice);
  const { login } = useSelector((state) => state.loginSlice);
  const totalItems = items?.totalItems;
  const [images, setImages] = useState(productDetails?.images);
  const { productsData } = useSelector((state) => state.basketData);

  useEffect(() => {
    if (login && totalItems) {
      Object.keys(totalItems)?.forEach((key) => {
        if (key == id) {
          setNoOfproduct(totalItems[key]);
        }
      });
    } else if (!login && productsData) {
      Object.keys(productsData)?.forEach((key) => {
        if (key == id) {
          setNoOfproduct(productsData[key].quantity);
        }
      });
    }
  }, [items, login, productsData]);

  useEffect(() => {
    if (images?.length > 0) {
      // Create a new array to store the modified image URLs
      const updatedImages = images.map((image) =>
        image.startsWith("http:") ? image.replace("http:", "https:") : image
      );

      // Update the state with the new array of images
      setCurrentImage(updatedImages[0]);
      setImages(updatedImages); // Assuming you have a setImages function to update the state
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

  function addProduct() {
    if (noOfproduct < 6) setNoOfproduct(noOfproduct + 1);
  }

  function removeProduct() {
    if (noOfproduct - 1 == 0) {
      dispatch(removeData({ id: id }));
    }
    if (noOfproduct > 0) setNoOfproduct(noOfproduct - 1);
  }
  useEffect(() => {
    if (noOfproduct !== 0 && !login)
      dispatch(
        addData({
          id: id,
          item: {
            productName: productName,
            quantity: noOfproduct,
            _id: productDetails?._id,
            discountedPrice: discountedPrice,
            originalPrice: originalPrice,
            offer: offer,
            id: id,
          },
        })
      );
  }, [noOfproduct, login]);
  const isRendered = useRef(false);
  useEffect(() => {
    if (login && isRendered.current && noOfproduct != 0 && noOfproduct != 1) {
      dispatch(
        UpdateCart({
          productQuantity: noOfproduct,
          id: id,
        })
      );
    }
    if (login && noOfproduct === 0 && isRendered.current) {
      dispatch(
        deleteProductFromCart({
          id: id,
        })
      );
    } else {
      isRendered.current = true;
    }
  }, [noOfproduct, login]);
  const { productId } = useSelector((state) => state.updateBasket);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(productId[id]);
  }, [productId]);
  return (
    <>
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
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({ mainCategory: mainCategory })
                ).unwrap();
                navigate(`/cd/${removeSpecialChar(mainCategory)}`);
              } catch (error) {
                navigate("/");
              }
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
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                  })
                ).unwrap();
                navigate(
                  `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}`
                );
              } catch (error) {
                navigate("/");
              }
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
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                    subSubCategory: subSubCategory,
                  })
                ).unwrap();
                navigate(
                  `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}/${removeSpecialChar(subSubCategory)}`
                );
              } catch (error) {
                navigate("/");
              }
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
          <div className=" flex flex-col mt-2 ml-4">
            <div>
              <h3 className="text-[#696969] underline text-[15px] font-[450] ">
                {brand}
              </h3>
              <h1 className="mt-2 font-semibold text-lg">
                {productName},{weight}
              </h1>
              <h3 className="text-[#A3A3A3] text-xs mt-1">
                MRP: ₹<span className="line-through">{originalPrice}</span>
              </h3>
              <h2 className="text-[15px] font-semibold mt-1">
                Price:₹{discountedPrice}
              </h2>
              <h3 className="text-[#476F00] text-xs mt-1 ">
                You Save:<span className="font-medium">{offer}% OFF</span>
              </h3>
              <h4 className=" text-[#A3A3A3] text-xs pt-1">
                (inclusive of all taxes)
              </h4>
            </div>
            <div className="flex mt-4 justify-between">
              {noOfproduct == 0 ? (
                <div className="w-[60%] h-14">
                  <button
                    className={`bg-[#CC0000] text-center h-full w-full rounded-md border-[1px]
             font-semibold border-[#CC0000] text-white  
             } origin-bottom`}
                    onClick={() => {
                      if (!loading) {
                        if (login) {
                          dispatch(
                            addProductInCart({
                              quantity: 1,
                              _id: productDetails._id,
                              discountedPrice: discountedPrice,
                              originalPrice: originalPrice,
                              offer: offer,
                              id: id,
                            })
                          );
                        }
                        addProduct();
                      }
                    }}
                  >
                    Add to basket
                  </button>
                </div>
              ) : (
                <div className="w-[60%] h-14  flex  rounded-md ">
                  <button
                    className="bg-[#CC0000] w-1/3 text-white pl-12  rounded-tl-md rounded-bl-md 
                     
                 "
                    onClick={() => {
                      if (!loading) {
                        removeProduct();
                        if (login && noOfproduct === 2) {
                          dispatch(
                            UpdateCart({
                              productQuantity: 1,
                              id: id,
                            })
                          );
                        }
                      }
                    }}
                  >
                    {" "}
                    <FaMinus />
                  </button>
                  <div
                    className=" w-1/3 border-[#CC0000] border-2  text-[#CC0000]  font-medium flex
                justify-center items-center relative"
                  >
                    <h3 className=" text-center absolute">{noOfproduct}</h3>
                    {loading && (
                      <div className="h-5 w-5 rounded-full border-[#CC0000] border-t-2 animate-spin   "></div>
                    )}
                  </div>
                  <button
                    className="bg-[#CC0000] w-1/3 text-white pl-12  
                rounded-br-md rounded-tr-md "
                    onClick={() => {
                      if (!loading) addProduct();
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              )}
              <div
                className="w-[35%] flex border-[1px] border-[#B3B3B3] rounded-md "
                onClick={() => {
                  setSaveForLater(!saveforLater);
                }}
              >
                {saveforLater ? (
                  <div className=" flex justify-center items-center w-full">
                    <div className="text-[25px] mr-2">
                      <MdBookmarkBorder />{" "}
                    </div>

                    <div className="text-[15px] font-[550] ">
                      Save for later
                    </div>
                  </div>
                ) : (
                  <div className=" flex justify-center items-center w-full">
                    <div className="text-[25px] mr-2">
                      <MdBookmarkAdded />{" "}
                    </div>

                    <div className="text-[15px] font-[550] ">Saved</div>
                  </div>
                )}
              </div>
            </div>
            {productsWeight.length > 1 && (
              <div>
                <h3 className="my-4  text-sm font-semibold">Pack Sizes</h3>
                {productsWeight?.map((weights, index) => (
                  <div
                    key={index}
                    className={`h-[66px] w-full bg-white my-2 p-2   
                  ${weights === weight ? "border-[#76B900]" : "border-gray-300"}  border-[1px] rounded-md hover:shadow-md`}
                    onClick={() => {
                      setweight(weights);
                    }}
                  >
                    <div className="flex justify-between ">
                      <div className="flex justify-between w-[70%]">
                        <h3 className="text-[14px] font-semibold  ">
                          {weights}
                        </h3>
                        <div className="flex justify-between">
                          <div>
                            <div>
                              <h2 className="font-semibold  ">{`₹${productDetails.discountedPriceWithWeight[weights]}`}</h2>
                            </div>
                            <div className="flex gap-2 h-6 text-[14px]  mt-1 items-center ml-1">
                              <h2 className="bg-[#F1F8E6] text-[#476F00] text-[11px] pl-2  font-semibold">
                                {productDetails.discount[weights]}% oFF
                              </h2>
                              <span>
                                <p className="line-through text-gray-600 text-[12px] pt-[3px]">
                                  {`₹${productDetails.originalPriceWithWeight[weights]}`}
                                </p>
                              </span>
                            </div>
                          </div>
                        </div>
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
    </>
  );
}

export default Product;
