import React from "react";
import arrow from "../../../assets/images/arrow.png";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../store/Api/fetchProductsByCategorySlice";
function LiItmes() {
  const dispatch = useDispatch();
  function removeSpecialChar(str) {
    return str.replace(/( & |, | and | )/g, "-");
  }
  const navigate = useNavigate();
  return (
    <div className="flex flex-row w-[65%] justify-between ">
      <ul className="flex flex-row justify-between text-center p-3 w-[95%] text-sm font-[400] ">
        <div>
          {" "}
          <li
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({
                    mainCategory: "fruits & vegitable",
                    subCategory: "exotic fruits & veggies",
                  })
                ).unwrap();
                navigate(
                  `/cd/${removeSpecialChar("fruits & vegitable")}/${removeSpecialChar("exotic fruits & veggies")}`
                );
              } catch (error) {
                navigate("/");
              }
            }}
          >
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Exotic Fruits &V...
            </div>
          </li>
        </div>
        <div>
          {" "}
          <li
            onClick={async () => {
              await dispatch(
                fetchProducts({
                  mainCategory: "beverages",
                  subCategory: "tea",
                })
              ).unwrap();
              navigate(
                `/cd/${removeSpecialChar("beverages")}/${removeSpecialChar("tea")}`
              );
            }}
          >
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Tea
            </div>
          </li>
        </div>
        <div>
          {" "}
          <li
            onClick={async () => {
              await dispatch(
                fetchProducts({
                  mainCategory: "foodgrains, oil & masala",
                  subCategory: "edible oils & ghee",
                  subSubCategory: "ghee & vanaspati",
                })
              ).unwrap();
              navigate(
                `/cd/${removeSpecialChar("foodgrains, oil & masala")}/${removeSpecialChar("edible oils & ghee")}/${removeSpecialChar("ghee & vanaspati")}`
              );
            }}
          >
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Ghee
            </div>
          </li>
        </div>
        <div>
          {" "}
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Nandini
            </div>
          </li>
        </div>
        <div>
          {" "}
          <li
            onClick={async () => {
              await dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "fresh vegetables",
                })
              ).unwrap();
              navigate(
                `/cd/${removeSpecialChar("fruits & vegitable")}/${removeSpecialChar("fresh vegetables")}`
              );
            }}
          >
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Fresh Vegetables
            </div>
          </li>
        </div>
      </ul>
      <div className="mr-4">
        <button className="pt-[11px]">
          <img className="w-5 h-5" src={arrow} alt="arrow icon" />
        </button>
      </div>
      <div className="bg-slate-200 w-[1px] h-6 mt-2"></div>
    </div>
  );
}

export default LiItmes;
