 import React from 'react'
 import arrow from "../../../assets/images/arrow.png";
 
 function LiItmes() {
   return (
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
    <div className="mr-4">
      <button className="pt-[11px]">
        <img className="w-5 h-5" src={arrow} alt="arrow icon" />
      </button>
    </div>
    <div className="bg-slate-200 w-[1px] h-6 mt-2"></div>
  </div>
   )
 }
 
 export default LiItmes