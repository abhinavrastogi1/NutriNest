import React from "react";
import arrow from "../../../assets/images/arrow.png";
import { Link, useNavigate } from "react-router-dom";
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
        <div
        >
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
        <Link
          to={`/cd/${removeSpecialChar("beverages")}/${removeSpecialChar("tea")}`}
        >
          {" "}
          <li
            onClick={() => {
              dispatch(
                fetchProducts({
                  mainCategory: "beverages",
                  subCategory: "tea",
                })
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
        </Link>
        <Link
          to={`/cd/${removeSpecialChar("foodgrains, oil & masala")}/${removeSpecialChar("edible oils & ghee")}/${removeSpecialChar("ghee & vanaspati")}`}
        >
          {" "}
          <li
            onClick={() => {
              dispatch(
                fetchProducts({
                  mainCategory: "foodgrains, oil & masala",
                  subCategory: "edible oils & ghee",
                  subSubCategory: "ghee & vanaspati",
                })
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
        </Link>
        <Link to="/">
          {" "}
          <li onClick={() => {}}>
            <div
              className="hover:text-[#cc0000] 
             transition-all duration-300 ease-linear hover:bg-gradient-to-t from-[rgb(247,214,214)] via-white to-white
             "
            >
              Nandini
            </div>
          </li>
        </Link>
        <Link
          to={`/cd/${removeSpecialChar("fruits & vegitable")}/${removeSpecialChar("fresh vegetables")}`}
        >
          {" "}
          <li
            onClick={() => {
              dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "fresh vegetables",
                })
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
        </Link>
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
