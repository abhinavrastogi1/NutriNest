import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "./store/Api/categoryApi";
import { fetchProductData } from "./store/Api/recomendedProduct";
import { UpdateFromLocalStorage } from "./store/Feature/Basket/basketData";
import { FetchBasket } from "./store/Api/FetchBasketSlice";
import { fetchbestSellerData } from "./store/Api/BestSeller";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
    dispatch(FetchBasket());
    dispatch(fetchProductData());
    dispatch(fetchbestSellerData());
  }, []);
  useEffect(() => {
    if (!localStorage?.getItem("cart")) {
      localStorage.setItem("cart", JSON.stringify({}));
    }
    dispatch(UpdateFromLocalStorage(JSON.parse(localStorage?.getItem("cart"))));
  }, []); // Consider adding `localStorage` data as a dependency

  let { status } = useSelector((state) => state.categoryApi);
  return (
    <>
      {status === "success" && (
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
