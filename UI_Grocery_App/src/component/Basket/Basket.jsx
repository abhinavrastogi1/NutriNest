import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BasketMainCategory from "./BasketMainCategory";
import emptyBasket from "../../assets/images/empty_basket.png";
import { Link } from "react-router-dom";
function Basket() {
  const { productData } = useSelector((state) => state.FetchBasketSlice);
  const { subTotal, savings } = useSelector((state) => state.checkOutSlice);
  const { items } = useSelector((state) => state.totalItemsSlice);
  const [noOfProducts, setNoOfProduct] = useState(items?.countItems);
  useEffect(() => {
    setNoOfProduct(items?.countItems);
  }, [items]);
  return (
    <div>
      {noOfProducts ? (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 my-8 ">
          <div>
            <div className="mb-5">
              <h1 className="text-2xl font-bold">Your Basket</h1>
            </div>
            <div className="bg-[#202020] h-[86px] rounded-lg flex justify-between items-center px-5 mb-5 ">
              <div className="flex flex-col ">
                <div>
                  <h2 className="text-white px-2 text-base font-semibold">
                    Subtotal (5 items) : ₹ {subTotal.toFixed(2)}
                  </h2>
                </div>
                <div>
                  <h2
                    className=" bg-gradient-to-r from-[#202020] to-[#3F3F3F]
                   inline-block text-[#91C733] py-1 px-2 rounded-md  
                   text-sm font-semibold"
                  >
                    Savings:
                    <span className="font-semibold text-base">
                      {" "}
                      ₹ {savings.toFixed(2)}
                    </span>
                  </h2>
                </div>
              </div>
              <div>
                <button className=" text-white bg-[#cc0000]  text-base font-semibold rounded-md px-16 py-2 ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="ml-3">
              <h2 className="text-[#969696] font-semibold text-sm">
                items ({`3`} items)
              </h2>
            </div>
            <div className="flex">
              <div className="mr-40">
                <h2 className="text-[#969696]  font-semibold text-sm">
                  Quantity
                </h2>
              </div>
              <div className="mr-3">
                <h2 className="text-[#969696]  font-semibold text-sm">
                  Sub-total({`3`})
                </h2>
              </div>
            </div>
          </div>
          <div>
            {productData?.map((products) => (
              <BasketMainCategory
                products={products}
                key={products?.mainCategory}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 my-8 ">
          <div className="border-b-2 border-dotted mb-4">
            <div className="my-12 h-72 bg-[#F1F8E6] rounded-md flex py-6 items-center flex-col ">
              <img src={emptyBasket} alt="empty basket img" className="w-28 " />
              <div>
                <h1 className="text-xl text-[#2F4A00] mt-5">
                  Let's fill the empty{" "}
                  <span className="text-[#76B900]">Basket</span>
                </h1>
                <div className="mt-5 flex justify-center">
                  <Link to="/">
                    <button className="py-3 px-8 bg-[#CC0000] text-white rounded-[4px] text-sm font-medium">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
