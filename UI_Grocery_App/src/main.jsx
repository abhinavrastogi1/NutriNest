import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home/Home.jsx";
import Basket from "./component/Basket/Basket.jsx";
import ProductsBycategory from "./component/CategoryProducts/ProductsByMainCategory.jsx";
import ProductsBySubCategory from "./component/CategoryProducts/productsBySubCategory.jsx";
import ProductsBySubSubCategory from "./component/CategoryProducts/ProductsBySubSubCategory.jsx";
import noCategoryFound from "./component/CategoryProducts/noCategoryFound.jsx";
import Search from "./component/Search/Search.jsx";
import Product from "./component/Product/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/cd/:mainCategory",
        element: <ProductsBycategory />,
      },
      {
        path: "/cd/:mainCategory/:subCategory",
        element: <ProductsBySubCategory />,
      },
      {
        path: "/cd/:mainCategory/:subCategory/:subSubCategory",
        element: <ProductsBySubSubCategory />,
      },
      {
        path: "/No Category Found",
        element: <noCategoryFound />,
      },
      {
        path: "/search",
        element: <Search />,
      },{
        path:"/pd/:product",
       element:<Product/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
