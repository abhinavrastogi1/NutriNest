import React from "react";
import Basket from "../../../assets/images/cart.png";
import { Link } from "react-router-dom";

  

function BasketButon() {
  return (
    <div>
      <Link to="/basket">
        <button className="cart-color rounded-md px-2 py-1">
          <img src={Basket} className="w-11 h-8" alt="cart icon" />
        </button>
      </Link>
    </div>
  );
}
export default BasketButon;
