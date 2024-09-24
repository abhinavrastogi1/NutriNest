import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function ShopByCategory() {
  const { categories } = useSelector((state) => state.categoryApi);
  const isVisible = useSelector((state) => state.toggleVisibility.toggle);

  const [activeUl2, SetActiveUl2] = useState("beverages");
  const [activeUl3, SetactiveUl3] = useState("tea");
  useEffect(() => {
    

  }, [activeUl2,activeUl3])
  
  return (
    <>
      <div>
        {isVisible && (
          <div className="bg-slate-600 absolute top-10 left-2 z-10">
            <div className="flex">
              <ul className="bg-[#202020] w-[227px] text-xs text-white ">
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className="m-2 p-2 hover:bg-[#404040] hover:font-semibold rounded-md  "
                    onMouseEnter={() => {SetActiveUl2(item.mainCategory)
                      SetactiveUl3(item.subCategory[0].level2);
                    }}
                  >
                    {item.mainCategory}
                  </li>
                ))}
              </ul>
              <ul className="bg-[#EEEEEE] w-[227px] text-xs  text-black">
                {categories.map(
                  (item) =>
                    item.mainCategory === activeUl2 &&
                    item.subCategory.map((subCategory, index) => (
                      <li
                        key={index}
                        className="m-2 p-2 hover:bg-[#FFF] hover:font-semibold rounded-md "
                        onMouseEnter={() => {
                          SetactiveUl3(subCategory.level2);
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
                      subCategory.level2 === activeUl3 &&
                      subCategory.subSubCategory?.map(
                        (subSubCategory, index) => (
                          <li
                            key={index}
                            className={`m-2 p-2 hover:bg-[#EEEEEE] hover:font-semibold rounded-md } `}
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
