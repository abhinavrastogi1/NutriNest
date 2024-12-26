import React from "react";
function Moreinfo() {
  return (
    <div className=" grid grid-cols-3  ">
      <div className="pt-12">
        <div>
          <h4 className=" text-white  text-[14px] font-normal pl-3 ">
            NutriNest
          </h4>
        </div>
        <ul className="text-white text-[13px] flex flex-col justify-between font-light p-3 space-y-2">
          <li className="hover:underline">
            <a href="./">About us</a>
          </li>
          <li className="hover:underline">
            <a href="./">Become A NutriNest Rider</a>{" "}
          </li>
          <li className="hover:underline">
            <a href="./">In News</a>
          </li>
          <li className="hover:underline">
            <a href="./">Green NutriNest</a>
          </li>
          <li className="hover:underline">
            <a href="./">privacy Policy</a>
          </li>
          <li className="hover:underline">
            <a href="./">Terms and conditions</a>
          </li>
          <li className="hover:underline">
            <a href="./">Careers At NutriNest</a>
          </li>
          <li className="hover:underline">
            <a href="./">NN Instant</a>
          </li>
          <li className="hover:underline">
            <a href="./">NN Daily</a>
          </li>
          <li className="hover:underline">
            <a href="./">NN Blog</a>
          </li>
          <li className="hover:underline">
            <a href="./">NNnow</a>
          </li>
        </ul>
      </div>
      <div className="pt-12">
        <div>
          <h4 className=" text-white  text-[14px] font-normal pl-3 ">Help</h4>
        </div>
        <ul className="text-white text-[13px] flex flex-col justify-between font-light p-3 space-y-2">
          <li className="hover:underline">
            <a href="./">FAQs</a>
          </li>
          <li className="hover:underline">
            <a href="./">Contact Us</a>{" "}
          </li>
          <li className="hover:underline">
            <a href="./">NN Wallet FAQs</a>
          </li>
          <li className="hover:underline">
            <a href="./">NN Wallet T&Cs</a>
          </li>
          <li className="hover:underline">
            <a href="./">Vendor COntact</a>
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Moreinfo;
