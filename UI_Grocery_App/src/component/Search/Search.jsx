import React, { useEffect, useState } from "react";
import { FiHome } from "react-icons/fi";
import { FaSliders } from "react-icons/fa6";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import CardLg from "../../Small_component/Cards/CardLg.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProducts } from "../../store/Api/fetchProductsByCategorySlice.js";
import somethingwentwrong from "../../assets/images/somethingwentwrong.png";
import { SearchApi } from "../../store/Api/SearchSlice.js";
import { RxCross2 } from "react-icons/rx";

function Search() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoverFilter, setHoverFilter] = useState(false);
  const [hoverRelevance, setHoverRelevance] = useState(false);
  const [filterToggle, setFilterToggle] = useState(true);
  const [showMore, setShowMore] = useState(false);
  const { status, productsData } = useSelector((state) => state.SearchSlice);
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q");
  useEffect(() => {
    dispatch(SearchApi(query));
  }, []);
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  let noOfProducts = 0;
  productsData?.forEach((product) => {
    if (Array.isArray(product.Products)) {
      noOfProducts += product.Products.length;
    }
  });
  let mainCategroyArr = productsData?.map((product) => product.mainCategory);

  const categroyArr = [];
  productsData.forEach((product) => {
    const setData = new Set();
    const mainCategory = product.mainCategory;
    product?.Products?.forEach((productData) => {
      setData.add(productData.category.level2);
    });
    categroyArr.push({
      subCategory: Array.from(setData),
      mainCategory: mainCategory,
    });
  });
  const [filterArr, setFilterArr] = useState([]);
  const filterlength = categroyArr.length;
  function addFilter(subCategoryItem) {
    const set = new Set([...filterArr, subCategoryItem]);
    console.log(Array.from(set));
    setFilterArr(Array.from(set));
  }
  function removeFilter(subCatgory) {
    if (filterArr.length == 1) {
      setFilterArr([]);
    }
    const set = new Set([...filterArr]);
    set.delete(subCatgory);
    console.log(Array.from(set));
    setFilterArr(Array.from(set));
  }
  return (
    <main className=" bg-[#f7f7f7]">
      {status == "success" ? (
        <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-48  flex flex-wrap justify-between bg-[#f7f7f7]">
          <div className="flex border-dotted border-b-2 w-full pb-3 pt-2">
            <span>
              {" "}
              <FiHome className="  m-1 " />
            </span>
            {/* Home button */}
            <button
              className="text-[15px] font-medium flex pt-[2px] "
              onClick={() => {
                navigate("/");
              }}
            >
              Home{" "}
              <span className="mx-2">
                {" "}
                <h1>/</h1>
              </span>
            </button>
            {/* Search results button */}
            <button className="text-[15px] font-semibold pt-[2px]">
              Search results
            </button>
          </div>
          {/* No of Product div */}
          <div className="flex w-full my-4 text-gray-700">
            <h1 className="text-base font-medium">
              <span className="font-bold text-lg">{noOfProducts}</span> result
              for "{query}"
            </h1>
          </div>
          {/* Show and relevance button */}
          <div className="flex flex-row  w-full justify-between">
            <button
              className={`flex py-1 px-6 border-[1px] rounded-[4px] w-[170px]
           border-gray-400 ${hoverFilter ? "bg-[#404040] " : "bg-white"}`}
              onMouseEnter={() => {
                filterToggle && setHoverFilter(true);
              }}
              onMouseLeave={() => {
                filterToggle && setHoverFilter(false);
              }}
              onClick={() => {
                setFilterToggle(!filterToggle);
              }}
            >
              <span>
                {filterToggle ? (
                  <LuEyeOff className="m-1 text-xl" />
                ) : (
                  <LuEye className="m-1 text-xl" />
                )}
              </span>

              {filterToggle ? (
                <h2
                  className={`text-[15px] font-semibold mt-1 ${hoverFilter && "text-white"} `}
                >
                  Hide Filter
                </h2>
              ) : (
                <h2 className={`text-[15px] font-semibold mt-1 text-white >`}>
                  Show Filter
                </h2>
              )}
            </button>
            <button
              className={`flex  py-1 px-6  w-[170px] border-[1px] rounded-[4px] border-gray-400 ${hoverRelevance ? "bg-[#404040] text-white" : "bg-white"}`}
              onMouseEnter={() => {
                setHoverRelevance(true);
              }}
              onMouseLeave={() => {
                setHoverRelevance(false);
              }}
            >
              <h2 className={`text-[15px] font-semibold mt-[5px]`}>
                Relevance
              </h2>
              <span>
                <FaSliders className="m-2 mt-2 text-base" />
              </span>
            </button>
          </div>
          {/* Main section */}
          <section className=" border-dotted border-t-2 mt-4 py-2 w-full flex    ">
            <div className="flex flex-wrap justify-between w-full relative">
              {filterToggle > 0 && (
                <div className=" overflow-y-auto h-[500px] w-[266px] sticky top-0 custom-scrollbar ">
                  {filterArr.length > 0 && (
                    <div className="mb-4 mt-3 bg-white p-2 flex flex-col">
                      <div className=" flex justify-between ">
                        <button className="text-sm font-semibold">
                          Filters
                        </button>
                        <button
                          className="text-xs text-[#CC0000] font-semibold"
                          onClick={() => {
                            setFilterArr([]);
                          }}
                        >
                          Clear
                        </button>
                      </div>
                      <div className="my-2  ">
                        {filterArr?.map((subCatgory, index) => (
                          <button
                            key={index}
                            className="text-xs bg-[#EEEEEE] flex my-1 justify-start p-[6px] rounded-md"
                            onClick={() => {
                              removeFilter(subCatgory);
                            }}
                          >
                            <span className="hover:line-through ">
                              {capitalizeWords(subCatgory)}
                            </span>
                            <span>
                              <RxCross2 className="text-[15px] mx-1" />
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mb-4 mt-6">
                    <h1 className="font-semibold text-[17px]">
                      Shop by Category
                    </h1>
                  </div>

                  <div className=" bg-white p-2  ">
                    <div>
                      {categroyArr.slice(0, 1).map((item) => {
                        return (
                          <div
                            className=" flex flex-col  "
                            key={item.mainCategory}
                          >
                            <button className="text-[#76B900] text-[15px] p-2 flex justy-start  pl-0 font-medium ">
                              <span> {capitalizeWords(item.mainCategory)}</span>
                            </button>
                            {item.subCategory.map((subCategory) => {
                              return (
                                <button
                                  key={subCategory}
                                  className="p-2   border-l-[1px] text-[15px]  flex justify-start font-normal border-gray-300  w-full"
                                  onClick={() => {
                                    addFilter(subCategory);
                                  }}
                                >
                                  <span>{capitalizeWords(subCategory)}</span>
                                </button>
                              );
                            })}
                          </div>
                        );
                      })}
                    </div>
                    {showMore && (
                      <div>
                        {categroyArr.slice(1).map((item) => {
                          return (
                            <div
                              className=" flex flex-col  "
                              key={item.mainCategory}
                            >
                              <button className="text-[#76B900] text-[15px] p-2 flex justy-start  pl-0 font-medium ">
                                <span>
                                  {" "}
                                  {capitalizeWords(item.mainCategory)}
                                </span>
                              </button>
                              {item.subCategory.map((subCategory) => (
                                <button
                                  key={subCategory}
                                  className="p-2   border-l-[1px] text-[15px]  flex justify-start font-normal border-gray-300  w-full"
                                  onClick={() => {
                                    addFilter(subCategory);
                                  }}
                                >
                                  <span>{capitalizeWords(subCategory)}</span>
                                </button>
                              ))}
                            </div>
                          );
                        })}{" "}
                      </div>
                    )}
                    {filterlength > 1 && (
                      <button
                        className=" rounded-md underline text-sm m-2 ml-0 font-medium"
                        onClick={() => {
                          setShowMore(!showMore);
                        }}
                      >
                        {showMore ? (
                          <span>Show less -</span>
                        ) : (
                          <span>Show more +</span>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
              <ul
                className={`flex flex-wrap  ${filterToggle ? "w-[846px] gap-6   " : noOfProducts == 2 || noOfProducts == 3 ? "w-full gap-6" : "w-full justify-between"} `}
              >
                {productsData?.map((productinfo) =>
                  productinfo?.Products.map((product) => (
                    <li key={product.id} className=" list-none ">
                      <CardLg product={product} />
                    </li>
                  ))
                )}
              </ul>
            </div>
          </section>
        </div>
      ) : (
        <div className="w-full h-max bg-[#E6F0FF] pb-[100px]">
          <div className="w-full h-max bg-[#E6F0FF]  flex  justify-center">
            <img src={somethingwentwrong} />
          </div>
          <div className=" flex justify-center m-2">
            <button
              className="border-[#0052CC] border-[1px] py-2 px-6 text-[#0052CC] rounded-md
               hover:bg-[#0052CC] hover:text-white font-semibold text-[15px] "
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Search;
