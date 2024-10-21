import { createSlice } from "@reduxjs/toolkit";

const checkOutSlice = createSlice({
  name: "checkOutSlice",
  initialState: {
    subTotal: 0,
    savings: 0,
  },
  reducers: {
    initalProductPrice: (state, action) => {
      const { subTotal, Saved } = action.payload;
      state.subTotal += parseFloat(subTotal);
      state.savings += parseFloat(Saved);
    },
    removeProductPrice: (state, action) => {
      const { subTotal, Saved } = action.payload;
      console.log("before",subTotal, Saved)
      state.subTotal -= parseFloat(subTotal);
      state.savings -= parseFloat(Saved);
      console.log("after",subTotal, Saved)

      
    },
    addProductPrice: (state, action) => {
      const { savedPrice, discountedPrice } = action.payload;
      state.subTotal += parseFloat(discountedPrice);
      state.savings += parseFloat(savedPrice);
    },
    subProductPrice: (state, action) => {
      const { savedPrice, discountedPrice } = action.payload;
      state.subTotal -= parseFloat(discountedPrice);
      state.savings -= parseFloat(savedPrice);
    },
  },
});
export const {
  addProductPrice,
  subProductPrice,
  initalProductPrice,
  removeProductPrice,
} = checkOutSlice.actions;

export default checkOutSlice.reducer;
