import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk(
  "recomemdedProduct/fetchProductData",
  async () => {
    try {
      const response = await axios.get("/api/product/recomemdedProduct");
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

const recomemdedProduct = createSlice({
  name: "recomemdedProduct",
  initialState: {
    productsData: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductData.fulfilled, (state, action) => {
        state.productsData = action.payload;
        state.status = "success";
      })

      .addCase(fetchProductData.rejected, (state, action) => {
        state.error = action.error;
        state.status = "rejected";
      })

      .addCase(fetchProductData.pending, (state) => {
        state.status = "pending";
      });
  },
});

export default recomemdedProduct.reducer;
