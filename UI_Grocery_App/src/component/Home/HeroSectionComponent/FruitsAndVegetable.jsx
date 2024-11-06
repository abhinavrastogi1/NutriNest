import React from "react";
import CardMd from "../../../Small_component/Cards/CardMd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../../store/Api/fetchProductsByCategorySlice.js";

function FruitsAndVegetable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <section className="mt-8">
      <div className="h-[46px]">
        <h1 className="text-2xl  font-bold">Fruits and Vegetable</h1>
      </div>
      <div className="flex gap-7">
        <div
          onClick={async () => {
            try {
              await dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "fresh vegetables",
                })
              ).unwrap();
              navigate(`/cd/fruits & vegitable/fresh vegetables`);
            } catch (error) {
              navigate("/");
            }
          }}
        >
          <CardMd
            type="Fresh Vegetables"
            offer="MIN 27% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730913958/t5u22v6ycumnmz8usuza.png"
          />
        </div>
        <div
          onClick={async () => {
            try {
              await dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "fresh fruits",
                })
              ).unwrap();
              navigate(`/cd/fruits & vegitable/fresh fruits`);
            } catch (error) {
              navigate("/");
            }
          }}
        >
          <CardMd
            type="Fresh Fruits"
            offer="MIN 27% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730913958/x2osmoayifp7ddmgmklk.png"
            link="/"
          />
        </div>
        <div
          onClick={async () => {
            try {
              await dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "exotic fruits & veggies",
                })
              ).unwrap();
              navigate(`/cd/fruits & vegitable/exotic fruits & veggies`);
            } catch (error) {
              navigate("/");
            }
          }}
        >
          <CardMd
            type="Cuts & Exotics"
            offer="MIN 27% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730913959/kkftmyz8i5vnxqgcdp9v.png"
            link="/"
          />
        </div>
        <div
          onClick={async () => {
            try {
              await dispatch(
                fetchProducts({
                  mainCategory: "fruits & vegitable",
                  subCategory: "herbs & seasonings",
                })
              ).unwrap();
              navigate(`/cd/fruits & vegitable/herbs & seasonings`);
            } catch (error) {
              navigate("/");
            }
          }}
        >
          {" "}
          <CardMd
            type="Herbs & Seasonings"
            offer="MIN 27% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730913959/kuq25bakli3iaaygsshs.png"
            link="/"
          />
        </div>
      </div>
    </section>
  );
}

export default FruitsAndVegetable;
