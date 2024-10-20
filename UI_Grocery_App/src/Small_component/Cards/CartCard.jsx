import React, { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
function CartCard({ productDetails, removeCategory }) {
  if (!productDetails) {
    return null;
  }
  const { productData } = useSelector((state) => state.FetchBasketSlice);

  const image = productDetails.productId.images;
  const productName = productDetails.productId.productName;
  const quantity = productDetails.quantity;
  const originalPrice = productDetails.originalPrice;
  const discountedPrice = productDetails.discountedPrice;
  const savedPrice = originalPrice - discountedPrice;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [subTotal, setSubTotal] = useState(
    (productQuantity * discountedPrice).toFixed(2)
  );
  const [Saved, setSaved] = useState((productQuantity * savedPrice).toFixed(2));
  useEffect(() => {
    setSubTotal((productQuantity * discountedPrice).toFixed(2));
    setSaved((productQuantity * savedPrice).toFixed(2));
  }, [productQuantity]);

  function maxQuantity() {
    if (productQuantity + 1 >= 6) {
      setProductQuantity(6);
    } else {
      setProductQuantity(productQuantity + 1);
    }
  }
  function minQuantity() {
    if (productQuantity - 1 <= 0) {
      setProductQuantity(0);
    } else {
      setProductQuantity(productQuantity - 1);
    }
  }
  const [Loading, setLoading] = useState(false);
  const isRendered = useRef(false);
  console.log(isRendered.current);
  useEffect(() => {
    if (isRendered.current) {
      async function updateCart() {
        setLoading(true);
        try {
          const response = await axios.patch(
            "/api/users/addProductToCart",
            null,
            {
              params: {
                _id: productDetails._id,
                quantity: productQuantity,
                Cart_id: productData[0]._id,
              },
            }
          );
          console.log("response", response);
        } catch (error) {
          console.error("error while updating cart", error);
        } finally {
          setLoading(false);
        }
      }
      updateCart();
    } else {
      isRendered.current = true;
    }
  }, [productQuantity]);

  return (
    <>
      {productQuantity > 0 && (
        <div className="h-[170px] flex flex-row justify-between border-b-[1px] ">
          <div className="flex gap-7">
            <div className="h-full w-[168px] flex justify-center items-center ">
              <img src={image} className="h-24 w-24" alt={productName} />
            </div>
            <div className="h-full w-[457px] flex flex-col justify-center">
              <div>
                {" "}
                <h2 className="text-sm font-medium text-gray-800 py-1">
                  {productName}
                </h2>
              </div>
              <div>
                <h2 className="text-sm font-medium ">
                  {` ₹${discountedPrice}`}{" "}
                  <span className="line-through text-xs text-gray-500">{`₹${originalPrice}`}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="flex gap-7  ">
            <div className="   h-full w-[168px] flex pt-16">
              <div className="flex flex-col w-full">
                {Loading ? (
                  <div>hello</div>
                ) : (
                  <div className=" h-11 w-full  flex justify-between rounded-md p-2 border-[2px] hover:shadow-lg">
                    <button
                      className=" hover:bg-[#cc0000] hover:text-white p-2 px-4  rounded-md text-[#404040] 
            flex items-center justify-center"
                      onClick={() => {
                        if (productQuantity - 1 === 0) {
                          removeCategory();
                        }
                        minQuantity();
                      }}
                    >
                      <FaMinus />{" "}
                    </button>
                    <h1>{productQuantity}</h1>
                    <button
                      className="hover:bg-[#cc0000] hover:text-white p-2 px-4  rounded-md text-[#404040] 
            flex items-center justify-center"
                      onClick={() => {
                        maxQuantity();
                      }}
                    >
                      <FaPlus />
                    </button>
                  </div>
                )}
                <div className="flex justify-center mt-3">
                  <button
                    className="text-xs p-1 border-r-[1px]"
                    onClick={() => {
                      setProductQuantity(0);
                    }}
                  >
                    Delete
                  </button>
                  <button className="text-xs p-1">Save for later</button>
                </div>
              </div>
            </div>

            <div className="h-full w-[168px] flex flex-col justify-end pb-9 pr-4 ">
              <div className="text-end font-semibold pb-2">
                {" "}
                <h3>₹{subTotal}</h3>{" "}
              </div>
              <div className="text-end text-[#476F00] text-sm font-medium">
                <h3> Saved :₹{Saved}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartCard;
