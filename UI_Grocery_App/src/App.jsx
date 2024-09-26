import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "./store/Api/categoryApi";
import { fetchProductData } from "./store/Api/recomendedProduct";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
    dispatch(fetchProductData());
  }, [dispatch]);
  const categoriesData = useSelector((state) => state.categoryApi);
  const productsData = useSelector((state) => state.recomemdedProduct);
  const productDataStatus = productsData.status;
  const categoryDataStatus = categoriesData.status;
  return (
    <>
  {  ( categoryDataStatus === "success" &&
          productDataStatus === "success")    &&
      <div>
        <Header/>
        <Outlet/>
        <Footer />
      </div>}
    </>
  );
}

export default App;
