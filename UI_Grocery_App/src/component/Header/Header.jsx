import React, { useEffect, useState } from "react";
import bigbasket from "../../assets/images/bigbasket.png";
import search from "../../assets/images/search.png";
import compass from "../../assets/images/compass.png";
import offers from "../../assets/images/offers.png";
import smartbasket from "../../assets/images/smartbasket.png";
import { FaCircleUser } from "react-icons/fa6";

import {
  loginToggleSwitch,
  scrolltoggle,
  toggleSwitch,
} from "../../store/Feature/Ui_component/ToggleVisibility";
import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./HeaderComponent/CategoryButton";
import ShopByCategory from "./HeaderComponent/ShopByCategory";
import LiItmes from "./HeaderComponent/LiItmes";
import BasketButon from "./HeaderComponent/BasketButon";
import LoginPage from "./HeaderComponent/LoginPage";

function Header() {
  const { loginToggle } = useSelector((state) => state.toggleVisibility);
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);
  const { login } = useSelector((state) => state.loginSlice);
  const [profileDetails, setProfileDetails] = useState(false);
  const dispatch = useDispatch();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      dispatch(scrolltoggle(false));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    dispatch(toggleSwitch());
  };
  return (
    <>
      <header className="bg-white shadow-lg ">
        {isVisible && (
          <div
            className="absolute inset-y-[-150px] inset-x-0 bg-black opacity-50 z-20"
            onClick={onClose}
          ></div>
        )}
        <div className="grid grid-rows-2 mx-48 sm:mx-8 md:mx-16 lg:mx-48 h-28 ">
          <div className="flex flex-row gap-3 my-2">
            <div>
              <img
                src={bigbasket}
                className="h-10 w-[110px]"
                alt="bigbasket logo"
              />
            </div>
            <div className="flex flex-row border-[1px] border-border-color rounded-md w-[60%]">
              <img src={search} className="h-5 m-2" alt="search" />
              <input
                type="text"
                placeholder="Search for Products ..."
                className="outline-none col-span-full text-[12px]"
              />
            </div>
            <div className="gap-x-10 h-full mx-3">
              <button className="button-bg-color rounded-md flex justify-center flex-row space-x-2 p-2 h-full w-52">
                <img src={compass} className="w-5 h-5" alt="compass icon" />
                <span className="text-sm">Search Location</span>
              </button>
            </div>
            <div>
              {!login ? (
                <button
                  className="bg-black rounded-md px-6 py-1"
                  onClick={() => {
                    dispatch(loginToggleSwitch());
                  }}
                >
                  <h2 className="text-white text-[10px] font-semibold ">
                    Login/ Sign Up
                  </h2>
                </button>
              ) : (
                <button className="rounded-md bg-[#EEEEEE]  h-full w-[64px] flex justify-center items-center">
                  <FaCircleUser className="text-[21px]" />
                </button>
              )}
            </div>
            <div> {loginToggle && <LoginPage />}</div>
            <BasketButon />
          </div>

          <div className="flex flex-row mt-2 justify-between relative">
            <CategoryButton />
            <ShopByCategory />
            <LiItmes />
            <div className="flex flex-row justify-between w-40">
              <button>
                <a href="/">
                  <img
                    className="w-16 h-6 mx-1"
                    src={smartbasket}
                    alt="smart basket img"
                  />
                </a>
              </button>
              <button>
                <a href="/">
                  <img
                    src={offers}
                    className="w-16 h-[26px] mx-2"
                    alt="offer img"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
