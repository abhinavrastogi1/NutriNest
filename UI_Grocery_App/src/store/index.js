import { configureStore } from "@reduxjs/toolkit";
import toggleVisibility from "./Feature/Ui_component/ToggleVisibility.js";
import categoryApi from "./Api/categoryApi.js";
import recomemdedProduct from "./Api/recomendedProduct.js";
import basketData from "./Feature/Basket/basketData.js";
import fetchProductsByCategory from "./Api/fetchProductsByCategorySlice.js";
import CategoriesActiveState from "./Feature/CategoriesActiveState.js";

const store = configureStore({
  reducer: {
    toggleVisibility: toggleVisibility,
    categoryApi: categoryApi,
    recomemdedProduct: recomemdedProduct,
    basketData: basketData,
    fetchProductsByCategory: fetchProductsByCategory,
    CategoriesActiveState: CategoriesActiveState,
  },
});
export default store;
