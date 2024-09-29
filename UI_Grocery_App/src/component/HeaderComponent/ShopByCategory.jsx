import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
function ShopByCategory() {
  const { categories } = useSelector((state) => state.categoryApi);
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);
  const [activeUl1, SetActiveUl1] = useState("beverages");
  const [activeUl2, SetActiveUl2] = useState("tea");
  const [activeUl3, SetActiveUl3] = useState("leaf & dust tea");
  return (
    <>
      <div>
        {isVisible && (
          <div className="bg-slate-600 absolute top-10 left-2 z-30">
            <div className="flex">
              <ul className="bg-[#202020] w-[227px] text-xs text-white ">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={`m-2 p-2 ${activeUl1 === item.mainCategory ? "bg-[#404040] font-semibold" : "text-xs text-white"} rounded-md  `}
                    onMouseEnter={() => {
                      SetActiveUl1(item.mainCategory);
                      SetActiveUl2(item.subCategory[0].level2);
                      SetActiveUl3(
                        item.subCategory[0].subSubCategory[0].level3
                      );
                    }}
                  >
                    {item.mainCategory}
                  </li>
                ))}
              </ul>
              <ul className="bg-[#EEEEEE] w-[227px] text-xs  text-black">
                {categories.map(
                  (item) =>
                    item.mainCategory === activeUl1 &&
                    item.subCategory.map((subCategory, index) => (
                      <li
                        key={index}
                        className={`m-2 p-2 ${activeUl2 === subCategory.level2 ? "bg-[#FFF] font-semibold" : "text-xs  text-black"} rounded-md `}
                        onMouseEnter={() => {
                          SetActiveUl2(subCategory.level2);
                          SetActiveUl3(subCategory.subSubCategory[0].level3);
                        }}
                      >
                        {subCategory.level2}
                      </li>
                    ))
                )}
              </ul>
              <ul className="bg-[#FFF] w-[227px] text-xs  text-black ">
                {categories.map((item) =>
                  item.subCategory.map(
                    (subCategory) =>
                      subCategory.level2 === activeUl2 &&
                      subCategory.subSubCategory?.map(
                        (subSubCategory, index) => (
                          <li
                            key={index}
                            className={`m-2 p-2 ${activeUl3 === subSubCategory.level3 ? "bg-[#EEEEEE] font-semibold" : "text-xs text-black"} rounded-md  `}
                            onMouseEnter={() => {
                              SetActiveUl3(subSubCategory.level3);
                            }}
                          >
                            {subSubCategory.level3}
                          </li>
                        )
                      )
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
