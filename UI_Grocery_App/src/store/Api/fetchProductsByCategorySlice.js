import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "fetchProductsByCategorySLice/fetchProducts",
  async ({ mainCategory, subCategory, subSubCategory }) => {
    try {
      let response = undefined;
      if (mainCategory && !subCategory && !subSubCategory) {
        response = await axios.get(`/api/findProduct/${mainCategory}`);
        return response.data.data;
      } else if (mainCategory && subCategory && !subSubCategory) {
        response = await axios.get(
          `/api/findProduct/${mainCategory}/${subCategory}`
        );
        return response.data.data;
      } else if (mainCategory && subCategory && subSubCategory) {
        response = await axios.get(
          `/api/findProduct/${mainCategory}/${subCategory}/${subSubCategory}`
        );
        return response.data.data;
      }
    } catch (error) {
      throw error;
    }
  }
);
const fetchProductsByCategory = createSlice({
  name: "fetchProductsByCategory",
  initialState: {
    status: "idle",
    productsData: [],
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.status = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.status = "success"), (state.productsData = action.payload);
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.status = "rejected"), (state.error = action.error.message);
      });
  },
});

export default fetchProductsByCategory.reducer;
