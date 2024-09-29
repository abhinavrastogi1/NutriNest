import React, { useEffect } from "react";
import bigbasket from "../../assets/images/bigbasket.png";
import search from "../../assets/images/search.png";
import compass from "../../assets/images/compass.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import offers from "../../assets/images/offers.png";
import smartbasket from "../../assets/images/smartbasket.png";
import {
  scrolltoggle,
  toggleSwitch,
} from "../../store/Feature/Ui_component/ToggleVisibility";
import { useDispatch, useSelector } from "react-redux";
import CategoryButton from "./HeaderComponent/CategoryButton";
import ShopByCategory from "./HeaderComponent/ShopByCategory";
import LiItmes from "./HeaderComponent/LiItmes";

function Header() {
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);
  const dispatch = useDispatch();
  const handleScroll = () => {
    // Check if the window has been scrolled down by any amount
    if (window.scrollY > 0) {
      // Set the state to true when scrolled
      dispatch(scrolltoggle(false));
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
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
          <div className="flex flex-row gap-3 m-2">
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
            <div className="gap-x-10 pt-1 mx-3">
              <button className="button-bg-color rounded-md flex justify-center flex-row space-x-2 p-2 w-52">
                <img src={compass} className="w-5 h-5" alt="compass icon" />
                <span className="text-sm">Search Location</span>
              </button>
            </div>
            <div>
              <button className="button-bg-color rounded-md px-2 pt-1">
                <img src={profile} className="w-12 h-19" alt="profile icon" />
              </button>
            </div>
            <div>
              <button className="cart-color rounded-md px-2 py-1">
                <img src={cart} className="w-11 h-8" alt="cart icon" />
              </button>
            </div>
          </div>
          <div className="flex flex-row m-2 justify-between relative">
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
