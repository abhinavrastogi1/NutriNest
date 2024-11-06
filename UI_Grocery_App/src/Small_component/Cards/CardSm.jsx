import React from "react";
function CardSm({ type, offer, img }) {
  return (
    <div className="h-[126px] w-[167px] hover:shadow-2xl p-1 pl-0  rounded-lg shadow-md">
      <div className="h-[90px] mb-[1px]">
        <img
          src={img}
          alt=""
          className="w-full h-full rounded-tr-lg rounded-br-lg "
        />
      </div>
      <div>
        <p className="ml-2 text-[10px] text-[#171717]">{type}</p>
      </div>
      {offer && (
        <div className="flex">
          <span className="bg-[#DD1F26] h-3 px-[1px]  w-1"></span>
          <h1 className="font-semibold text-xs ml-1 text-[#1B1914]">
            {" "}
            {offer}{" "}
          </h1>
        </div>
      )}
    </div>
  );
}

export default CardSm;
