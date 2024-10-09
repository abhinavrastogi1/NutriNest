import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, replace, useNavigate } from "react-router-dom";
import { scrolltoggle } from "../../../store/Feature/Ui_component/ToggleVisibility.js";
import { fetchProducts } from "../../../store/Api/fetchProductsByCategorySlice.js";
import { subSubCategoryReducer } from "../../../store/Feature/CategoriesActiveState.js";

function ShopByCategory() {
  const { categories } = useSelector((state) => state.categoryApi);
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);
  const [activeUl1, SetActiveUl1] = useState("beverages");
  const [activeUl2, SetActiveUl2] = useState("tea");
  const [activeUl3, SetActiveUl3] = useState("leaf & dust tea");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
  return (
    <>
      <div
        className={`transition-transform duration-700 ease-in-out transform ${
          isVisible ? "scale-100" : "scale-0"
        } origin-top-left z-30  absolute top-10 left-2 rounded-lg`}
      >
        {isVisible && (
          <div className={`bg-black  rounded-lg 
               `}
          >
            <div className="flex rounded-lg">
              <ul className="bg-[#202020] w-[227px] text-xs text-white rounded-tl-lg rounded-bl-lg">
                {categories.map((item) => {
                  const category = activeUl1.replace(/( & |, | and | )/g, "-");
                  return (
                    <li
                      key={item.mainCategory}
                      className={`m-2 p-2 ${activeUl1 === item.mainCategory ? "bg-[#404040] font-semibold" : "text-xs text-white"} rounded-md  `}
                      onMouseEnter={() => {
                        SetActiveUl1(item.mainCategory);
                        SetActiveUl2(item.subCategory[0].level2);
                        SetActiveUl3(
                          item.subCategory[0].subSubCategory[0].level3
                        );
                      }}
                      onClick={() => {
                        dispatch(scrolltoggle(false));
                        dispatch(fetchProducts({ mainCategory: activeUl1 }));
                        navigate(`/${category}`);
                      }}
                    >
                      {capitalizeWords(item.mainCategory)}
                    </li>
                  );
                })}
              </ul>
              <ul className="bg-[#EEEEEE] w-[227px] text-xs  text-black">
                {categories.map(
                  (item) =>
                    item.mainCategory === activeUl1 &&
                    item.subCategory.map((subCategory) => {
                      const subcategory = subCategory.level2.replace(
                        /( & |, | and | )/g,
                        "-"
                      );
                      const category = activeUl1.replace(
                        /( & |, | and | )/g,
                        "-"
                      );
                      return (
                        <Link
                          to={`${category}/${subcategory}`}
                          key={subCategory.level2}
                        >
                          {" "}
                          <li
                            className={`m-2 p-2 ${activeUl2 === subCategory.level2 ? "bg-[#FFF] font-semibold" : "text-xs  text-black"} rounded-md `}
                            onMouseEnter={() => {
                              SetActiveUl2(subCategory.level2);
                              SetActiveUl3(
                                subCategory.subSubCategory[0].level3
                              );
                            }}
                            onClick={() => {
                              dispatch(scrolltoggle(false));
                              dispatch(
                                fetchProducts({
                                  mainCategory: activeUl1,
                                  subCategory: activeUl2,
                                })
                              );
                            }}
                          >
                            {capitalizeWords(subCategory.level2)}
                          </li>
                        </Link>
                      );
                    })
                )}
              </ul>
              <ul className="bg-[#FFF] w-[227px] text-xs  text-black rounded-tr-lg rounded-br-lg">
                {categories.map((item) =>
                  item.subCategory.map(
                    (subCategory) =>
                      subCategory.level2 === activeUl2 &&
                      subCategory.subSubCategory?.map((subSubCategory) => {
                        const category = activeUl1.replace(
                          /( & |, | and | )/g,
                          "-"
                        );
                        const subcategory = activeUl2.replace(
                          /( & |, | and | )/g,
                          "-"
                        );

                        const subsubcategory = subSubCategory.level3.replace(
                          /( & |, | and | )/g,
                          "-"
                        );
                        return (
                          <Link
                            to={`${category}/${subcategory}/${subsubcategory}`}
                            key={subSubCategory.level3}
                          >
                            <li
                              className={`m-2 p-2 ${activeUl3 === subSubCategory.level3 ? "bg-[#EEEEEE] font-semibold" : "text-xs text-black"} rounded-md  `}
                              onMouseEnter={() => {
                                SetActiveUl3(subSubCategory.level3);
                              }}
                              onClick={() => {
                                dispatch(scrolltoggle(false));
                                dispatch(
                                  fetchProducts({
                                    mainCategory: activeUl1,
                                    subCategory: activeUl2,
                                    subSubCategory: activeUl3,
                                  })
                                );
                                dispatch(
                                  subSubCategoryReducer({
                                    mainCategory: activeUl1,
                                    subCategory: activeUl2,
                                    subSubCategory: activeUl3,
                                  })
                                );
                              }}
                            >
                              {capitalizeWords(subSubCategory.level3)}
                            </li>
                          </Link>
                        );
                      })
                  )
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopByCategory;
