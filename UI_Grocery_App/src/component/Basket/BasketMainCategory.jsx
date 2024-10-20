import React, { useState } from "react";
import CartCard from "../../Small_component/Cards/CartCard";

function BasketMainCategory({ products }) {
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
          {products?.item.map((productDetails) => (
            <CartCard
              productDetails={productDetails}
              removeCategory={removeCategory}
              key={productDetails.productId.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default BasketMainCategory;
