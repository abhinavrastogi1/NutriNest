import React, { useState } from "react";

import { useSelector } from 'react-redux';

function ShopByCategory() {

  const {categories}=useSelector((state)=>(state.categoryApi))
  console.log(categories)
  const isVisible=useSelector((state)=>(state.toggleVisibility.toggle))
  const [activeUl2, SetActiveUl2] = useState("Apparel");
  const [activeUl3, SetactiveUl3] = useState("Boy'S Wear");
  const ul1 = [
    "Apparel",
    "Fruits & Vegetable",
    "Foodgrains, Oil & Masala",
    "Bakery, Cakes & Dairy",
    "Beverages",
    "Snacks & Branded Foods",
    "Beauty & Hygiene",
    "Cleaning & Household",
    "Kitchen, Garden & pets",
    "Lunch Boxes & Bags",
    "Umbrellas & Rainwear",
    "Eggs, Meat & Fish",
    "Gourmet & World Food",
    "Baby Care",
  ];

  const ul2 = {
    Apparel: ["Boy'S Wear", "Girl'S Wear", "Men'S Apparel", "Women'S Apparel"],
    "Fruits & Vegetable": [
      "Cuts & Sprouts",
      "Exotic Fruits & Veggies",
      "Flower Bouquets, Bunches",
      "Fresh Fruits",
      "Fresh Vegetables",
      "Herbs & Seasonings",
      "Organic Fruits & Vegetables",
    ],
    "Foodgrains, Oil & Masala": [
      "Atta, Flours & Sooji",
      "Dals & Pulses",
      "Dry Fruits",
      "Edible Oils & Ghee",
      "Masalas & Spices",
      "Organic Staples",
      "Rice & Rice Products",
      "Salt, Sugar & Jaggery",
    ],
    "Bakery, Cakes & Dairy": [
      "Bakery Snacks",
      "Breads & Buns",
      "Cakes & Pastries",
      "Cookies, Rusk & Khari",
      "Dairy",
      "Gourmet Breads",
      "Ice Creams & Desserts",
      "Non Dairy",
    ],
    Beverages: [
      "Coffee",
      "Energy & Soft Drinks",
      "Fruit Juices & Drinks",
      "Health Drink, Supplement",
      "Tea",
      "Water",
    ],
    "Snacks & Branded Foods": [
      "Biscuits & Cookies",
      "Breakfast Cereals",
      "Chocolates & Candies",
      "Frozen Veggies & Snacks",
      "Indian Mithai",
      "Noodle, Pasta, Vermicelli",
      "Pickles & Chutney",
      "Ready To Cook & Eat",
      "Snacks & Namkeen",
      "Spreads, Sauces, Ketchup",
    ],
    "Beauty & Hygiene": [
      "Bath & Hand Wash",
      "Feminine Hygiene",
      "Fragrances & Deos",
      "Hair Care",
      "Health & Medicine",
      "Makeup",
      "Men's Grooming",
      "Oral Care",
      "Skin Care",
    ],
    "Cleaning & Household": [
      "All Purpose Cleaners",
      "Bins & Bathroom Ware",
      "Car & Shoe Care",
      "Detergents & Dishwash",
      "Disposables, Garbage Bag",
      "Fresheners & Repellents",
      "Mops, Brushes & Scrubs",
      "Party & Festive Needs",
      "Pooja Needs",
      "Sports & Fitness",
      "Stationery",
      "Toys & Games",
    ],
    "Kitchen, Garden & pets": [
      "Appliances & Electricals",
      "Bakeware",
      "Cookware & Non Stick",
      "Crockery & Cutlery",
      "Electronics & Devices",
      "Flask & Casserole",
      "Gardening",
      "Kitchen Accessories",
      "Pet Food & Accessories",
      "Steel Utensils",
      "Storage & Accessories",
    ],
    "Umbrellas & Rainwear": [],
    "Eggs, Meat & Fish": [],
    "Gourmet & World Food": [],
    "Baby Care": [
      "Baby Accessories",
      "Baby Bath & Hygiene",
      "Baby Food & Formula",
      "Diapers & Wipes",
      "Feeding & Nursing",
      "Mothers & Maternity",
    ],
  };

  const ul3 = {
    "Boy'S Wear": ["Boy'S Innerwear"],
    "Girl'S Wear": ["Girl'S Innerwear"],
    "Men'S Apparel": [
      "Men's Accessories",
      "Men's Bottom Wear",
      "Men's Sports, Active Wear",
      "Men's Top Wear",
      "Men's Innerwear",
    ],
    "Women'S Apparel": [],
  };

  return (
    <>
      <div>
        {isVisible && (
          <div className="bg-slate-600 absolute top-10 left-2 z-10">
            <div className="flex">
              <ul className="bg-[#202020] w-[227px] text-xs text-white ">
                {ul1.map((item, index) => (
                  <li
                    key={index}
                    className="m-2 p-2 hover:bg-[#404040] hover:font-semibold rounded-md  "
                    onMouseEnter={() => SetActiveUl2(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="bg-[#EEEEEE] w-[227px] text-xs  text-black">
                {activeUl2 &&
                  (ul2?.[activeUl2] || []).map((item, index) => (
                    <li
                      key={index}
                      className="m-2 p-2 hover:bg-[#FFF] hover:font-semibold rounded-md "
                      onMouseEnter={() => {
                        SetactiveUl3(item);
                      }}
                    >
                      {" "}
                      {item}
                    </li>
                  ))}
              </ul>
              <ul className="bg-[#FFF] w-[227px] text-xs  text-black ">
                {activeUl3 &&
                  (ul3?.[activeUl3] || []).map((item, index) => (
                    <li
                      key={index}
                      className={`m-2 p-2 hover:bg-[#EEEEEE] hover:font-semibold rounded-md ${ul3?.[activeUl3][0] === item && "bg-[#EEEEEE]"} `}
                    >
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ShopByCategory;
