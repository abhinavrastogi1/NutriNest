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
import { IoIosArrowBack } from "react-icons/io";
function ProductsBySubSubCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoverFilter, setHoverFilter] = useState(false);
  const [hoverRelevance, setHoverRelevance] = useState(false);
  const [filterToggle, setFilterToggle] = useState(true);
  const [showMore, setShowMore] = useState(false);
  let mainCategoryParams = useParams().mainCategory;
  let subCategoryParams = useParams().subCategory;
  let subSubCategoryParams = useParams().subSubCategory;
  const { categories } = useSelector((state) => state.categoryApi);
  const { productsData, status } = useSelector(
    (state) => state.fetchProductsByCategory
  );
  function removeSpace(str) {
    return str.replace(/( & |, | and | )/g, "");
  }
  function removeSpecialChar(str) {
    return str.replace(/( & |, | and | )/g, "-");
  }
  useEffect(() => {
    if (!productsData.length) {
      const cleanedMainCategory = mainCategoryParams.replace(/[-]/g, "");
      const cleanedSubCategory = subCategoryParams.replace(/[-]/g, "");
      const cleanedSubSubCategory = subSubCategoryParams.replace(/[-]/g, "");
      // Find the main category
      const mainCategoryMatch = categories.find(
        (category) => removeSpace(category.mainCategory) === cleanedMainCategory
      );
      if (mainCategoryMatch) {
        // Find the subcategory
        const subCategoryMatch = mainCategoryMatch.subCategory.find(
          (subCategory) =>
            removeSpace(subCategory.level2) === cleanedSubCategory
        );

        if (subCategoryMatch) {
          // Find the sub-subcategory
          const subSubCategoryMatch = subCategoryMatch.subSubCategory.find(
            (subSubCategory) =>
              removeSpace(subSubCategory.level3) === cleanedSubSubCategory
          );
          if (subSubCategoryMatch) {
            // Fetch products once all categories are matched
            dispatch(
              fetchProducts({
                mainCategory: mainCategoryMatch.mainCategory,
                subCategory: subCategoryMatch.level2,
                subSubCategory: subSubCategoryMatch.level3,
              })
            );
          }
        }
      }
    }
  }, [categories, productsData]);

  const mainCategory = productsData[0]?.products[0]?.category.level1;
  const subCategory = productsData[0]?.products[0].category.level2;
  const subSubCategory = productsData[0]?.products[0].category.level3;
  const activesubSubCategory = subSubCategory;
  const mainCategoryobj = categories?.find(
    (category) => category.mainCategory === mainCategory
  );

  const subCategoryArr = mainCategoryobj?.subCategory.find(
    (subCategoryObj) => subCategoryObj.level2 === subCategory
  );

  const subSubCategoryArr = [];
  subCategoryArr?.subSubCategory.map((subSubCategory) => {
    subSubCategoryArr.push(subSubCategory.level3);
  });

  const noOfProducts = productsData[0]?.products.length;
  function capitalizeWords(str) {
    return str
      ?.split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }
  return (
    <main className=" bg-[#f7f7f7] flex justify-center">
      <div className="w-[1135px] flex flex-wrap justify-between bg-[#f7f7f7]">
        <div className="flex border-dotted border-b-2 w-full pb-3 pt-2">
          {/* Home icon */}
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
          <button
            className="text-[15px] font-medium flex pt-[2px] "
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({ mainCategory: mainCategory })
                ).unwrap();
                navigate(`/cd/${removeSpecialChar(mainCategory)}`);
              } catch (error) {
                navigate("/");
              }
            }}
          >
            {capitalizeWords(mainCategory)}
            <span className="mx-2">
              {" "}
              <h1>/</h1>
            </span>
          </button>
          <button
            className="text-[15px] font-medium flex pt-[2px] "
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                  })
                ).unwrap();
                navigate(
                  `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}`
                );
              } catch (error) {
                navigate("/");
              }
            }}
          >
            {capitalizeWords(subCategory)}
            <span className="mx-2">
              {" "}
              <h1>/</h1>
            </span>
          </button>
          <button
            className="text-[15px] font-semibold pt-[2px]"
            onClick={async () => {
              try {
                await dispatch(
                  fetchProducts({
                    mainCategory: mainCategory,
                    subCategory: subCategory,
                    subSubCategory: subSubCategory,
                  })
                ).unwrap();
                navigate(
                  `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}/${removeSpecialChar(subSubCategory)}`
                );
              } catch (error) {
                navigate("/");
              }
            }}
          >
            {capitalizeWords(subSubCategory)}
          </button>
        </div>
        <div className="flex w-full my-4 text-gray-700">
          <h1 className="text-lg">
            {capitalizeWords(subSubCategory)} <span>({noOfProducts})</span>
          </h1>
        </div>
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
            <h2 className={`text-[15px] font-semibold mt-[5px]`}>Relevance</h2>
            <span>
              <FaSliders className="m-2 mt-2 text-base" />
            </span>
          </button>
        </div>
        <section className=" border-dotted border-t-2 mt-4 py-2 w-full flex    ">
          <div className="flex flex-wrap justify-between w-full relative">
            {filterToggle && (
              <div className=" overflow-y-auto h-[250px] w-[266px] sticky top-0 custom-scrollbar ">
                <div className="mb-4 mt-6">
                  <h1 className="font-semibold text-[17px]">
                    Shop by Category
                  </h1>
                </div>
                <button
                  className="flex m-2 ml-1"
                  onClick={async () => {
                    try {
                      await dispatch(
                        fetchProducts({ mainCategory: mainCategory })
                      ).unwrap();
                      navigate(`/cd/${removeSpecialChar(mainCategory)}`);
                    } catch (error) {
                      navigate("/");
                    }
                  }}
                >
                  {" "}
                  <IoIosArrowBack className="m-2" />
                  <h1 className="font-semibold text-[15px] flex p-1">
                    {capitalizeWords(mainCategory)}
                  </h1>
                </button>
                <div className=" bg-white p-2  ">
                  <div className=" flex flex-col ">
                    <button
                      className="text-[#76B900] text-[15px] p-2 flex justy-start  pl-0 font-medium "
                      onClick={async () => {
                        try {
                          await dispatch(
                            fetchProducts({
                              mainCategory: mainCategory,
                              subCategory: subCategory,
                            })
                          ).unwrap();
                          navigate(
                            `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}`
                          );
                        } catch (error) {
                          navigate("/");
                        }
                      }}
                    >
                      <span> {capitalizeWords(subCategory)}</span>
                    </button>
                    {subSubCategoryArr?.slice(0, 2).map((subSubCategory) => (
                      <button
                        key={subSubCategory}
                        className={`p-2 border-l-[1px] text-[15px]  flex justify-start font-normal
                            w-full ${subSubCategory === activesubSubCategory ? "text-[#76B900] border-[#76B900] " : "text-[15px] border-gray-300"} `}
                        onClick={async () => {
                          try {
                            await dispatch(
                              fetchProducts({
                                mainCategory: mainCategory,
                                subCategory: subCategory,
                                subSubCategory: subSubCategory,
                              })
                            ).unwrap();
                            navigate(
                              `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}/${removeSpecialChar(subSubCategory)}`
                            );
                          } catch (error) {
                            navigate("/");
                          }
                        }}
                      >
                        <span>{capitalizeWords(subSubCategory)}</span>
                      </button>
                    ))}
                    {showMore &&
                      subSubCategoryArr?.slice(2).map((subSubCategory) => (
                        <button
                          key={subSubCategory}
                          className={`p-2 border-l-[1px] text-[15px]  flex justify-start font-normal
                              w-full ${subSubCategory === activesubSubCategory ? "text-[#76B900] border-[#76B900] " : "text-[15px] border-gray-300"} `}
                          onClick={async () => {
                            try {
                              await dispatch(
                                fetchProducts({
                                  mainCategory: mainCategory,
                                  subCategory: subCategory,
                                  subSubCategory: subSubCategory,
                                })
                              ).unwrap();
                              navigate(
                                `/cd/${removeSpecialChar(mainCategory)}/${removeSpecialChar(subCategory)}/${removeSpecialChar(subSubCategory)}`
                              );
                            } catch (error) {
                              navigate("/");
                            }
                          }}
                        >
                          <span>{capitalizeWords(subSubCategory)}</span>
                        </button>
                      ))}
                  </div>
                  {subSubCategoryArr.length > 2 && (
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

            {/* to render the products */}

            <ul
              className={`flex flex-wrap  ${filterToggle ? "w-[846px] gap-6   " : noOfProducts == 2 || noOfProducts == 3 ? "w-full gap-6" : "w-full justify-between"} `}
            >
              {productsData[0]?.products.map((product) => (
                <li key={product.id} className=" list-none ">
                  <CardLg product={product} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductsBySubSubCategory;
