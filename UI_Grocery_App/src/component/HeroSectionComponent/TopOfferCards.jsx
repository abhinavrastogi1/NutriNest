import React from "react";
import { Link } from "react-router-dom";

function TopOfferCards() {
  const cardsData = [
    {
      top: "DEALS OF",
      bottom: "THE WEEK",
      Url: "/",
    },
    {
      top: "BIG PACK",
      bottom: "BIGGER DISCOUNTS",
      Url: "/",
    },
    {
      top: "COMBO",
      bottom: "YOU  CAN'T MISS",
      Url: "/",
    },
    {
      top: "THE",
      bottom: "₹30 CORNER",
      url: "/",
    },
  ];
  return (
    <>
      <div className="mt-8">
        <div className="h-[46px]">
          <h1 className="text-2xl  font-bold">Top Offers</h1>
        </div>
        <div className="flex  gap-7 ">
          {cardsData.map((card) => (
            <div key={card.url}>
              <Link to={card.url}>
                {" "}
                <div className="h-[197px] w-[263px]  relative  rounded-lg shadow-md">
                  <div className="bg-[#DD1F26] w-full h-[70%] rounded-tl-lg rounded-tr-lg pt-[72px] pl-7">
                    <h1 className="text-white font-bold text-xl ">
                      {card.top}
                    </h1>
                  </div>
                  <div className="bg-white h-[50%] w-[260px] flex flex-col justify-between rounded-bl-lg rounded-br-lg roun absolute bottom-0 right-0  pl-6 pb-2 ">
                    <h1 className="text-black  font-bold text-xl flex-wrap w-[150px] ">
                      {card.bottom}
                    </h1>
                    <div className="text-[12px] font-medium ">
                      <p>
                        view offers <span>&gt;</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopOfferCards;
