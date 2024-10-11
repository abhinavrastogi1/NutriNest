import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "./store/Api/categoryApi";
import { fetchProductData } from "./store/Api/recomendedProduct";
import { UpdateFromLocalStorage } from "./store/Feature/Basket/basketData";
import { BasketApi } from "./store/Api/BasketApi";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
    dispatch(fetchProductData());
    dispatch(BasketApi(JSON.parse(localStorage?.getItem("cart"))))
  }, [dispatch]);
  useEffect(() => {
    if (localStorage?.getItem("cart"))
      dispatch(
        UpdateFromLocalStorage(JSON.parse(localStorage?.getItem("cart")))
      );
  }, [dispatch]);

  const categoriesData = useSelector((state) => state.categoryApi);
  const productsData = useSelector((state) => state.recomemdedProduct);

  return (
    <>
      {categoriesData.status === "success" &&
        productsData.status === "success" && (
          <div>
            <Header />
            <Outlet />
            <Footer />
          </div>
        )}
    </>
  );
}

export default App;
