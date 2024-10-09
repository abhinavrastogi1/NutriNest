import React from "react";
import ReactDOM from "react-dom";
import { RemoveScroll } from "react-remove-scroll";
import loginpageImg from "../../../assets/images/loginImg.png";
function LoginPage() {
  return ReactDOM.createPortal(
    <RemoveScroll>
      <div
        className="h-screen w-[102%] bg-black absolute bg-opacity-50 
    inset-0 flex justify-center items-center z-20 backdrop-blur-sm "
      >
        <div className=" z-30 flex flex-row w-[600px] h-[342px] ">
          {" "}
          <div className=" p-5 pt-7 pb-16 bg-[#EEEEEE]  rounded-l-lg w-[35%]">
            {" "}
            <img className="h-full w-full" src={loginpageImg} />
          </div>
          <div className="bg-black w-[65%] h-full rounded-r-lg"> 
           <form  className="flex flex-col gap-7 text-[10px]" >
          <input placeHolder="Enter Phone number" className="p-2"/>
          <input type="password" placeHolder="  Enter Your Password"/>
          <button type="submit" className="text-white py-2 px-5 bg-red-700"> Continue</button>
           </form>
          </div>
        </div>
      </div>
    </RemoveScroll>,
    document.body
  );
}
export default LoginPage;
