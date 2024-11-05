import React, { useEffect, useState } from "react";
import Basket from "../../../assets/images/cart.png";
import { useNavigate } from "react-router-dom";
import { loginToggleSwitch } from "../../../store/Feature/Ui_component/toggleVisibility";
import { useDispatch, useSelector } from "react-redux";
import { FetchBasket } from "../../../store/Api/FetchBasketSlice";

function BasketButon() {
  const { login } = useSelector((state) => state.loginSlice);
  const { items } = useSelector((state) => state.totalItemsSlice);
  const { productsData } = useSelector((state) => state.basketData);
  const [noOfProducts, setNoOfProduct] = useState(0);
  useEffect(() => {
    if (login) {
      setNoOfProduct(items?.countItems);
    } else {
      let count = 0;
      Object.keys(productsData).forEach((keys) => count++);
      setNoOfProduct(count);
    }
  }, [items, productsData]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="cart-color rounded-md px-2 py-1 relative"
        onClick={async () => {
          try {
            if (login) {
              await dispatch(FetchBasket()).unwrap();

              navigate("/basket");
            } else {
              dispatch(loginToggleSwitch());
            }
          } catch (error) {
            navigate("/");
          }
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
