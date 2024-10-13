import React, { useState } from "react";
import ReactDOM from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
import loginpageImg from "../../../assets/images/loginImg.png";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { loginToggleSwitch } from "../../../store/Feature/Ui_component/ToggleVisibility";
import axios from "axios";
import { isloggedin } from "../../../store/Feature/Basket/LoginSlice";
import { BasketApi } from "../../../store/Api/BasketApi";

function LoginPage() {
  const { productsData } = useSelector((state) => state.basketData);

  const [formData, setFormData] = useState({
    phoneNo: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });
  const [registerUser, setRegisterUser] = useState(false);
  function onChangeHandle(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function onSubmitHandle(e) {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/UserExist", formData);
      if (response?.data.data === "new User") {
        setRegisterUser(true);
      } else if (response?.data.data === "userExist") {
        const response = await axios.post("/api/users/login", formData);
        if (response.data.message === "log in successfull")
          dispatch(loginToggleSwitch());
        dispatch(isloggedin(true));
        const cartData = JSON.parse(localStorage?.getItem("cart"));
        if (cartData) {
          dispatch(
            BasketApi({ route: "addCacheProductoCart", cacheData: cartData })
          );
        }
      }
    } catch (error) {
      throw error;
    }
  }
  async function onRegisterSubmit(e) {
    e.preventDefault();
    try {
      const registerationResponse = await axios.post(
        "/api/users/registerUser",
        formData
      );

      if (
        registerationResponse.data.message !== "user successfully registered"
      ) {
        throw new Error("Registraton Failed");
      }
      const loginResponse = await axios.post("/api/users/login", formData);

      if (loginResponse.data.message !== "log in successfull") {
        throw new Error("login failed");
      }
      dispatch(loginToggleSwitch());
      dispatch(isloggedin(true));
      const cartData = JSON.parse(localStorage?.getItem("cart"));
      if (cartData && Object.keys(cartData)?.length !== 0) {
        dispatch(BasketApi({ route: "createNewCart", cacheData: cartData }));
      }
    } catch (error) {
      console.error("Error during registration or login:", error);
    }
  }
  const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <RemoveScroll>
      <div
        className="h-screen w-[102%] bg-black absolute bg-opacity-50 
    inset-0 flex flex-col justify-center items-center  z-20 backdrop-blur-sm "
      >
        <button
          className="ml-[40%] mb-1 "
          onClick={() => {
            dispatch(loginToggleSwitch());
          }}
        >
          <RxCross2 className=" text-[25px]" />
        </button>

        <div className=" z-30 flex flex-row w-[600px] h-[342px] ">
          {" "}
          <div className=" p-5 pt-7 pb-16 bg-[#EEEEEE]  rounded-l-lg w-[35%]">
            {" "}
            <img className="h-full w-full" src={loginpageImg} />
          </div>
          <div className="bg-black py-6 px-12 w-[65%] h-full rounded-r-lg">
            <span className=" text-lg font-bold text-white">
              Login/ Sign up
            </span>
            <p className="text-sm  font-regular text-white pb-1">
              Using Phone No.
            </p>
            <div className="border border-orange-500  rounded-lg w-20"></div>
            {registerUser ? (
              <form
                className="flex flex-col gap-7 w-72 pt-8 pb-2 rounded-md"
                onSubmit={onRegisterSubmit}
              >
                <div className="flex flex-row justify-between">
                  <input
                    placeholder="First Name "
                    type="text"
                    name="firstName"
                    required
                    className="p-2 text-[12px] rounded-sm w-32 outline-none "
                    onChange={onChangeHandle}
                  />
                  <input
                    required
                    type="text"
                    name="lastName"
                    className="p-2 text-[12px] w-32 rounded-sm outline-none"
                    placeholder="Last Name "
                    onChange={onChangeHandle}
                  />
                </div>

                <input
                  required
                  type="email"
                  name="email"
                  className="p-2 text-[12px] rounded-sm outline-none"
                  placeholder="abc@xyz.com"
                  onChange={onChangeHandle}
                />

                <button
                  type="submit"
                  className="text-white py-2 px-5 text-sm font-semibold bg-red-700 rounded-sm"
                >
                  Continue
                </button>
              </form>
            ) : (
              <form
                className="flex flex-col gap-7 w-72 pt-8 pb-2 rounded-md"
                onSubmit={onSubmitHandle}
              >
                <input
                  placeholder="Enter Phone number "
                  type="tel"
                  name="phoneNo"
                  pattern="[0-9]{10}"
                  required
                  className="p-2 text-[12px] rounded-sm  outline-none "
                  onChange={onChangeHandle}
                />
                <input
                  required
                  type="password"
                  name="password"
                  className="p-2 text-[12px] rounded-sm outline-none"
                  placeholder="Enter Your Password "
                  onChange={onChangeHandle}
                />
                <button
                  type="submit"
                  className="text-white py-2 px-5 text-sm font-semibold bg-red-700 rounded-sm"
                >
                  Continue
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </RemoveScroll>,
    document.body
  );
}
export default LoginPage;
