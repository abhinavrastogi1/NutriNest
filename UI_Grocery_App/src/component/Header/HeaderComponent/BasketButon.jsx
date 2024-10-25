import React from "react";
import Basket from "../../../assets/images/cart.png";
import {  useNavigate } from "react-router-dom";
import { loginToggleSwitch } from "../../../store/Feature/Ui_component/ToggleVisibility";
import { useDispatch, useSelector } from "react-redux";

function BasketButon() {
  const { login } = useSelector((state) => state.loginSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="cart-color rounded-md px-2 py-1"
        onClick={() => {
          login ? navigate("/basket") : dispatch(loginToggleSwitch());
        }}
      >
        <img src={Basket} className="w-11 h-8" alt="cart icon" />
      </button>
    </div>
  );
}
export default BasketButon;
