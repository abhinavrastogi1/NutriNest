import React from 'react';
import bigbasket from "../../assets/images/bigbasket.png";
import search from "../../assets/images/search.png";
import compass from "../../assets/images/compass.png";
import profile from "../../assets/images/profile.png";
import cart from "../../assets/images/cart.png";
import arrow from "../../assets/images/arrow.png";
import dropdown from "../../assets/images/dropdown.png";
import offers from "../../assets/images/offers.png";
import smartbasket from "../../assets/images/smartbasket.png";

function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="grid grid-rows-2 mx-48 h-28 ">
        <div className="flex flex-row gap-3 m-2">
          <div>
            <img src={bigbasket} className="h-10 w-[110px]" alt="bigbasket logo" />
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
              <img src={profile} className="w-11 h-9" alt="profile icon" />
            </button>
          </div>
          <div>
            <button className="cart-color rounded-md px-2 py-1">
              <img src={cart} className="w-11 h-8" alt="cart icon" />
            </button>
          </div>
        </div>
        <div className="flex flex-row m-2 justify-between">
          <div className="p-1">
            <button className="bg-[#5E9400] py-2 rounded-[5px] w-[170px] flex flex-row ">
              <span className="text-white pl-3 text-[13px]">Shop by Category</span>
              <img className="w-5 h-5 ml-4" src={dropdown} alt="dropdown icon" />
            </button>
          </div>
          <div className="flex flex-row w-[65%] justify-between ">
            <ul className="flex flex-row justify-between text-center p-3 w-[95%] text-sm font-normal ">
              <li>
                <a href="./">
                  <span>Exotic Fruits &v...</span>
                </a>
              </li>
              <li>
                <a href="./">Tea</a>
              </li>
              <li>
                <a href="./">Ghee</a>
              </li>
              <li>
                <a href="./">Nandini</a>
              </li>
              <li>
                <a href="./">Fresh Vegetables</a>
              </li>
            </ul>
            <div className='mr-4'>
              <button className="pt-[11px]">
                <img className="w-5 h-5" src={arrow} alt="arrow icon" />
              </button>
            </div>
            <div className='bg-slate-200 w-[1px] h-6 mt-2' ></div>
          </div>
          <div className="flex flex-row justify-between w-40">
            <button>
              <a href="/">
                <img className="w-16 h-6 mx-1" src={smartbasket} alt="smart basket img" />
              </a>
            </button>
            <button>
              <a href="/">
                <img src={offers} className="w-16 h-[26px] mx-2" alt="offer img" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
