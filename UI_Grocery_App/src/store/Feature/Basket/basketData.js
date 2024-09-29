import { createSlice } from "@reduxjs/toolkit";

const basketData = createSlice({
  name: "basketData",
  initialState: {
    productsData: [],
  },
  reducers: {
    addData: (state, action) => {
      console.log(state.productsData);
      state.productsData.push(action.payload);
    },
    removeData:(state,action)=>{
        state.productsData.pop()
    }
  },
});
export const { addData } = basketData.actions;
export default basketData.reducer;
