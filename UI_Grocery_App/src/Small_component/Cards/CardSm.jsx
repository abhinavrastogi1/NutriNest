import React from "react";
import flour from "../../assets/images/flour.png";
function CardSm({ type, offer }) {
  type = "Atta & Flour";
  offer = " UPTO 27% OFF";
  return (
    <div className="h-[126px] w-[167px] hover:shadow-2xl p-1 pl-0  rounded-lg shadow-md">
      <div className="h-[90px]">
        <img
          src={flour}
          alt=""
          className="w-full h-full rounded-tr-lg rounded-br-lg"
        />
      </div>
      <div>
        <p className="ml-4 text-[10px]">{type}</p>
      </div>
      <div className="flex">
        <span className="bg-[#DD1F26] h-3 px-[1px]  w-1"></span>
        <h1 className="font-semibold text-xs ml-3 "> {offer} </h1>
      </div>
    </div>
  );
}

export default CardSm;
