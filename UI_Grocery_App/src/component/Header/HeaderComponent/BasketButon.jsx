import React, { useEffect, useState } from "react";
import Basket from "../../../assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import { loginToggleSwitch } from "../../../store/Feature/Ui_component/ToggleVisibility";
import { useDispatch, useSelector } from "react-redux";
import { FetchBasket } from "../../../store/Api/FetchBasketSlice";

function BasketButon() {
  const { login } = useSelector((state) => state.loginSlice);
  const { items } = useSelector((state) => state.totalItemsSlice);
  const [noOfProducts, setNoOfProduct] = useState(items?.countItems);
  useEffect(() => {
    setNoOfProduct(items?.countItems);
  }, [items]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="cart-color rounded-md px-2 py-1 relative"
        onClick={() => {
          login ? navigate("/basket") : dispatch(loginToggleSwitch());
          dispatch(FetchBasket());
        }}
      >
        {noOfProducts > 0 && (
          <div className="bg-black absolute border-2 border-white top-4 left-5 rounded-md">
            <h5 className="text-white text-[10px] rounded-md  px-2 py-[2px]">
              {noOfProducts}
            </h5>
          </div>
        )}
        <img src={Basket} className="w-11 h-8" alt="cart icon" />
      </button>
    </div>
  );
}
export default BasketButon;
