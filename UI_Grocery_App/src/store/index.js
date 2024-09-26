import { configureStore } from "@reduxjs/toolkit";
import toggleVisibility from "./Feature/Ui_component/ToggleVisibility.js";
import categoryApi from "./Api/categoryApi.js";
import recomemdedProduct from "./Api/recomendedProduct.js"

const store = configureStore({
  reducer: {
    toggleVisibility: toggleVisibility,
    categoryApi: categoryApi,
    recomemdedProduct:recomemdedProduct,
  },
});
export default store;
