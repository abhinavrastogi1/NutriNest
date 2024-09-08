import React from "react";

function PopularCatagory() {
  return (
    <>
      <div className="mx-48 mt-4 grid grid-cols-2 pb-6">
        <div className="grid">
          <h4 className=" text-white py-2 text-[14px] font-normal">
            {" "}
            Popular categories
          </h4>
          <div className="grid grid-cols-3 ">
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Sunflower Oils</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Milk</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Organic F&V</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Floor Cleaner</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Frozen Veg Food</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">White Atta</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Health Drinks</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Namkeen</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Other Juices</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Diapers & Wipes</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Ghee</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Flakes</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Eggs</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Leafy Vegitables</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid">
          <h4 className=" text-white py-2 text-[14px] font-normal">
            {" "}
            Popular Brands
          </h4>
          <div className="grid grid-cols-3 ">
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Amul</a>
                </li>
                <li className="hover:underline">
                  <a href="./">RED BULL</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yummiez</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Britannia</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Haldiram's</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">Nescafe</a>
                </li>
                <li className="hover:underline">
                  <a href="./">elite cake</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yera</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Wow! Momo</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Ferrero</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white text-[13px] flex flex-col justify-between font-light py-2 space-y-1">
                <li className="hover:underline">
                  <a href="./">MTR</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Pediasure</a>{" "}
                </li>
                <li className="hover:underline">
                  <a href="./">Yakult</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Fortune</a>
                </li>
                <li className="hover:underline">
                  <a href="./">Lay's</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-48 mb-4">
        <div className="flex flex-row justify-center ">
          <button className="text-white text-center font-light text-[13px] underline  ">
            Show More +
          </button>
        </div>
      </div>
    </>
  );
}

export default PopularCatagory;
