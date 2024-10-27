import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchbestSellerData = createAsyncThunk(
  "bestSeller/fetchbestSellerData",
  async () => {
    try {
      const response = await axios.get("/api/product/bestSellers");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const bestSeller = createSlice({
  name: "bestSeller",
  initialState: {
    productsData: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchbestSellerData.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.status = "success";
      })

      .addCase(fetchbestSellerData.rejected, (state, action) => {
        state.error = action.error;
        state.status = "rejected";
      })

      .addCase(fetchbestSellerData.pending, (state) => {
        state.status = "pending";
      });
  },
});

export default bestSeller.reducer;
