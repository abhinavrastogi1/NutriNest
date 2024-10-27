import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSliceApi = createAsyncThunk(
  "productSlice/productSliceApi",
  async ({ id }) => {
    try {
      const response = await axios.post(
        "/api/findProduct/productDetails",
        null,
        {
          params: {
            id: id,
          },
        }
      );
      return response.data.data;
    } catch (error) {
      console.error(
        "something went wrong while fetching product details",
        error
      );
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productSliceApi.fulfilled, (state, action) => {
      state.status = "success";
      state.productData = action.payload;
    });
    builder.addCase(productSliceApi.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(productSliceApi.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
