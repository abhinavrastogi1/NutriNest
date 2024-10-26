import { configureStore } from "@reduxjs/toolkit";

import toggleVisibility from "./Feature/Ui_component/toggleVisibility.js";
import categoryApi from "./Api/categoryApi.js";
import recomemdedProduct from "./Api/recomendedProduct.js";
import basketData from "./Feature/Basket/basketData.js";
import fetchProductsByCategory from "./Api/fetchProductsByCategorySlice.js";
import CategoriesActiveState from "./Feature/CategoriesActiveState.js";
import loginSlice from "./Feature/Basket/LoginSlice.js";
import BasketApiSlice from "./Api/BasketApi.js";
import FetchBasketSlice from "./Api/FetchBasketSlice.js";
import SearchSlice from "./Api/SearchSlice.js";
import productSlice from "./Api/productSlice.js";
import checkOutSlice from "./Feature/Basket/CheckOutSlice.js";
import loading from "./Feature/Ui_component/Loading.js";
import updateBasket from "./Api/UpdateBasket.js";
import totalItemsSlice from "./Api/TotalItems.js";
const store = configureStore({
  reducer: {
    toggleVisibility: toggleVisibility,
    categoryApi: categoryApi,
    recomemdedProduct: recomemdedProduct,
    basketData: basketData,
    fetchProductsByCategory: fetchProductsByCategory,
    CategoriesActiveState: CategoriesActiveState,
    loginSlice: loginSlice,
    BasketApiSlice: BasketApiSlice,
    FetchBasketSlice: FetchBasketSlice,
    SearchSlice: SearchSlice,
    productSlice: productSlice,
    checkOutSlice: checkOutSlice,
    loading: loading,
    updateBasket: updateBasket,
    totalItemsSlice: totalItemsSlice,
  },
});
export default store;
