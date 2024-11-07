import React, { useEffect, useRef, useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductPrice,
  initalProductPrice,
  subProductPrice,
} from "../../store/Feature/Basket/CheckOutSlice";
import {
  UpdateCart,
  deleteProductFromCart,
} from "../../store/Api/UpdateBasket";
import { productSliceApi } from "../../store/Api/productSlice";
import { useNavigate } from "react-router-dom";
function CartCard({ productDetails, removeCategory, removeProduct }) {
  if (!productDetails) {
    return null;
  }
  const { productId } = useSelector((state) => state.updateBasket);
  const dispatch = useDispatch();
  const image = productDetails.productId.images[0];
  const productName = productDetails.productId.productName;
  const id = productDetails.productId.id;
  const quantity = productDetails.quantity;
  const originalPrice = productDetails.originalPrice;
  const discountedPrice = productDetails.discountedPrice;
  const savedPrice = originalPrice - discountedPrice;
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [subTotal, setSubTotal] = useState(productQuantity * discountedPrice);
  const [Saved, setSaved] = useState(productQuantity * savedPrice);
  const isRendered = useRef(false);
  const [cartMsg, setCartMsg] = useState("Adding ...");
  const [loading, setLoading] = useState(false);
  const { items } = useSelector((state) => state.totalItemsSlice);
  const { deletingProduct } = useSelector((state) => state.loading.loading);

  const navigate = useNavigate();
  const totalItems = items?.totalItems;
  useEffect(() => {
    if (totalItems) {
      Object.keys(totalItems)?.forEach((key) => {
        if (key == id) {
          setProductQuantity(totalItems[key]);
        }
      });
    }
  }, [items]);
  useEffect(() => {
    setLoading(productId[id]);
  }, [productId]);
  useEffect(() => {
    setSubTotal(productQuantity * discountedPrice);
    setSaved(productQuantity * savedPrice);
  }, [productQuantity]);
  useEffect(() => {
    setLoading(false);
    if (isRendered.current && productQuantity != 0) {
      dispatch(
        UpdateCart({
          productQuantity: productQuantity,
          id: id,
        })
      );
    } else {
      isRendered.current = true;
      if (productQuantity !== 0) {
        dispatch(initalProductPrice({ subTotal, Saved }));
      }
    }
  }, [productQuantity]);
  useEffect(() => {
    if (productQuantity === 0 && !deletingProduct) {
      dispatch(
        deleteProductFromCart({
          id: id,
        })
      );
      removeCategory();
    }
  }, [productQuantity, deletingProduct]);
  useEffect(() => {
    if (productQuantity === 0) removeProduct(subTotal, Saved);
  }, [productQuantity, subTotal, Saved]);
  function removeSpecialChar(str) {
    return str.replace(/( & |, | and |\/| \/ | )/g, "-");
  }
  return (
    <>
      {productQuantity > 0 && (
        <div className="h-[170px] flex flex-row justify-between border-b-[1px] ">
          <div className="flex gap-7">
            <div
              className="h-full w-[168px] flex justify-center items-center "
              onClick={async () => {
                try {
                  await dispatch(
                    productSliceApi({
                      id: id,
                    })
                  ).unwrap();

                  navigate(`/pd/${id}/${removeSpecialChar(productName)}`);
                } catch (error) {
                  navigate("/");
                }
              }}
            >
              <img
                src={
                  image.startsWith("http:")
                    ? image.replace("http:", "https:")
                    : image // Use the original URL if it already has https
                }
                className="h-24 w-24"
                alt={productName}
              />
            </div>

            <div className="h-full w-[457px] flex flex-col justify-center">
              <div
                onClick={async () => {
                  try {
                    await dispatch(
                      productSliceApi({
                        id: id,
                      })
                    ).unwrap();

                    navigate(
                      `/pd/${slide.id}/${removeSpecialChar(slide.productName)}`
                    );
                  } catch (error) {
                    navigate("/");
                  }
                }}
              >
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
                {loading ? (
                  <div className=" h-11 w-full  flex justify-center items-center rounded-md p-2 border-[2px] bg-gray-200 hover:shadow-lg">
                    <h3 className="text-sm font-medium">{cartMsg}</h3>
                  </div>
                ) : (
                  <div className=" h-11 w-full  flex justify-between rounded-md p-2 border-[2px] hover:shadow-lg">
                    <button
                      className=" hover:bg-[#cc0000] hover:text-white p-2 px-4  rounded-md text-[#404040] 
            flex items-center justify-center"
                      onClick={() => {
                        if (productQuantity - 1 <= 0) {
                          setProductQuantity(0);
                        } else {
                          dispatch(
                            subProductPrice({ discountedPrice, savedPrice })
                          );
                          setProductQuantity(productQuantity - 1);
                          setCartMsg("Reducing ...");
                        }
                      }}
                    >
                      <FaMinus />{" "}
                    </button>
                    <h1>{productQuantity}</h1>
                    <button
                      className="hover:bg-[#cc0000] hover:text-white p-2 px-4  rounded-md text-[#404040] 
            flex items-center justify-center"
                      onClick={() => {
                        productQuantity + 1 >= 6
                          ? setProductQuantity(6)
                          : setProductQuantity(productQuantity + 1);

                        setCartMsg("Adding ...");
                        if (productQuantity != 6) {
                          dispatch(
                            addProductPrice({ discountedPrice, savedPrice })
                          );
                        }
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
                      setProductQuantity(0), setCartMsg("Deleting ...");
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
                <h3>₹{subTotal.toFixed(2)}</h3>{" "}
              </div>
              <div className="text-end text-[#476F00] text-sm font-medium">
                <h3> Saved :₹{Saved.toFixed(2)}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CartCard;
