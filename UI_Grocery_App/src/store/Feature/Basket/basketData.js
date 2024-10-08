import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

const basketData = createSlice({
  name: "basketData",
  initialState: {
    productsData: {},
  },
  reducers: {
    addData: (state = initialState, action) => {
      const { id, item } = action.payload;
      state.productsData[id] = item;
      localStorage.setItem("cart", JSON.stringify(state.productsData));
    },
    removeData: (state, action) => {
      const { id } = action.payload;
      delete state.productsData[id];
      localStorage.setItem("cart", JSON.stringify(state.productsData));
    },
    UpdateFromLocalStorage:(state,action)=>{
    state.productsData=action.payload
    }
  },
});
export const { addData, removeData ,UpdateFromLocalStorage} = basketData.actions;
export default basketData.reducer;
