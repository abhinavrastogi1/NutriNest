import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchBasket } from "../../../store/Api/FetchBasketSlice";
import { useNavigate } from "react-router-dom";
import { profileToggleSwitch } from "../../../store/Feature/Ui_component/toggleVisibility";
import axios from "axios";
import { isloggedin } from "../../../store/Feature/Basket/LoginSlice";

function Profile() {
  const { items } = useSelector((state) => state.totalItemsSlice);
  const [noOfProducts, setNoOfProduct] = useState(items?.countItems);
  useEffect(() => {
    setNoOfProduct(items?.countItems);
  }, [items]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function logout() {
    try {
      await axios.post("https://grocery-clone.onrender.com/api/users/logout");
      dispatch(isloggedin(false));
      window.location.reload(false);
    } catch (error) {
      console.error("error while Logging out", error);
    }
  }
  return (
    <div className="bg-[#202020] w-72  rounded-md  flex flex-col p-2">
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
      >
        My Account
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-between items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
        onClick={() => {
          navigate("/basket");
          dispatch(FetchBasket());
          dispatch(profileToggleSwitch());
        }}
      >
        My Basket
        <span className="bg-[#D63333] text-[10px] py-[3px] px-2 rounded-2xl font-medium">
          {" "}
          {noOfProducts} items
        </span>
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
     text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
      >
        My Orders
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
      >
        My Smart Basket
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
      >
        My Wallet
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
      >
        Contact Us
      </button>
      <button
        className="text-white h-9 p-3 w-full my-1 flex justify-start items-center
      text-[13px]
       hover:bg-[#404040] rounded-md hover:font-medium"
        onClick={() => {
          logout();
          dispatch(profileToggleSwitch());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
