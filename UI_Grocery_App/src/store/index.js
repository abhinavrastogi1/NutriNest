import { configureStore } from "@reduxjs/toolkit";
import toggleVisibility from "./Feature/Ui_component/ToggleVisibility.js";
import categoryApi from "./Api/categoryApi.js";
const store = configureStore({
  reducer: {
    toggleVisibility: toggleVisibility,
    categoryApi: categoryApi,
  },
});
export default store;
