import React from "react";
import footerBBlogo from "../../../assets/images/footer_bb_logo.png";
function Moreinfo() {
  return (
    <div className="mx-48 grid grid-cols-3  ">
      <div className="pt-12">
        <div>
          <h4 className=" text-white  text-[14px] font-normal pl-3 ">
            Bigbasket
          </h4>
        </div>
        <ul className="text-white text-[13px] flex flex-col justify-between font-light p-3 space-y-2">
          <li className="hover:underline">
            <a href="./">About us</a>
          </li>
          <li className="hover:underline">
            <a href="./">Become A bigbasket Rider</a>{" "}
          </li>
          <li className="hover:underline">
            <a href="./">In News</a>
          </li>
          <li className="hover:underline">
            <a href="./">Green bigbasket</a>
          </li>
          <li className="hover:underline">
            <a href="./">privacy Policy</a>
          </li>
          <li className="hover:underline">
            <a href="./">Terms and conditions</a>
          </li>
          <li className="hover:underline">
            <a href="./">Careers At bigbasket</a>
          </li>
          <li className="hover:underline">
            <a href="./">bb Instant</a>
          </li>
          <li className="hover:underline">
            <a href="./">bb Daily</a>
          </li>
          <li className="hover:underline">
            <a href="./">bb Blog</a>
          </li>
          <li className="hover:underline">
            <a href="./">bbnow</a>
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
            <a href="./">bb Wallet FAQs</a>
          </li>
          <li className="hover:underline">
            <a href="./">bb Wallet T&Cs</a>
          </li>
          <li className="hover:underline">
            <a href="./">Vendor COntact</a>
          </li>
        </ul>
      </div>
      <div className="pt-12">
        <div>
          <img src={footerBBlogo} className="h-30 w-60" alt="big basket logo" />
        </div>
       
      </div>
    </div>
  );
}

export default Moreinfo;
