import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../../Small_component/Cards/CartCard";
function Basket() {
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  const { productData } = useSelector((state) => state.FetchBasketSlice);
  console.log("productData", productData);
  return (
    <div>
      {productData?.length !== 0 ? (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 my-8 ">
          <div>
            <div className="mb-5">
              <h1 className="text-2xl font-bold">Your Basket</h1>
            </div>
            <div className="bg-[#202020] h-[86px] rounded-lg flex justify-between items-center px-5 mb-5 ">
              <div className="flex flex-col ">
                <div>
                  <h2 className="text-white px-2 text-base font-semibold">
                    Subtotal (5 items) : ₹ 1219.26
                  </h2>
                </div>
                <div>
                  <h2
                    className=" bg-gradient-to-r from-[#202020] to-[#3F3F3F]
                   inline-block text-[#91C733] py-1 px-2 rounded-md  
                   text-sm font-semibold"
                  >
                    Savings:
                    <span className="font-semibold text-base"> ₹ 500.70</span>
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
            {productData?.map((products) => {
              return (
                <div key={products?.mainCategory}>
                  <div className="ml-3 mt-4">
                    <h1 className="text-[15px] font-semibold">
                      {capitalizeWords(products?.mainCategory)}
                    </h1>
                    <div className="bg-[#FF8800] h-[2px] w-10 mt-2"></div>
                  </div>
                  {products?.item.map((productDetails) => (
                    <CartCard
                      productDetails={productDetails}
                      key={productDetails.productId.id}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>empty</div>
      )}
    </div>
  );
}

export default Basket;
