import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchBasket = createAsyncThunk(
  "FetchBasketSlice/FetchBasket",
  async () => {
    try {
      const response = await axios.get(`/api/users/getCart`);
      return response.data.data;
    } catch (error) {
      console.log("error while fetching Cart", error);
    }
  }
);
const FetchBasketSlice = createSlice({
  name: "FetchBasketSlice",
  initialState: {
    productData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchBasket.fulfilled, (state, action) => {
      state.status = "success";
      state.productData = action.payload;
    });
    builder.addCase(FetchBasket.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(FetchBasket.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default FetchBasketSlice.reducer;
