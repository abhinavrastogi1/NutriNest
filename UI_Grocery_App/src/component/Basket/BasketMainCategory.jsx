import React, { useState } from "react";
import CartCard from "../../Small_component/Cards/CartCard";
import {
  removeProductPrice,
} from "../../store/Feature/Basket/CheckOutSlice";
import { useDispatch } from "react-redux";

function BasketMainCategory({ products }) {
  const dispatch = useDispatch();
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  const [removeMainCategory, setRemoveMainCategory] = useState(
    products?.item.length
  );
  function removeCategory() {
    setRemoveMainCategory(removeMainCategory - 1);
  }
  
  function removeProduct(subTotal, Saved) {
    dispatch(removeProductPrice({ subTotal, Saved }));
  }
  return (
    <>
      {removeMainCategory > 0 && (
        <div>
          <div className="ml-3 mt-4">
            <h1 className="text-[15px] font-semibold">
              {capitalizeWords(products?.mainCategory)}
            </h1>
            <div className="bg-[#FF8800] h-[2px] w-10 mt-2"></div>
          </div>
          {products?.item.map((productDetails,index) => (
            <CartCard
              productDetails={productDetails}
              removeCategory={removeCategory}
              removeProduct={removeProduct}
              key={productDetails.productId.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default BasketMainCategory;
