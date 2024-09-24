import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryData } from "./store/Api/categoryApi";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryData());
  }, [dispatch]);
  const { categories, status, error } = useSelector(
    (state) => state.categoryApi
  );
  return (
    <>
      <div>
        {status === "success" && <Header />}
        {status === "success" &&    <Outlet />}
        {status === "success" && <Footer />}
      </div>
    </>
  );
}

export default App;
