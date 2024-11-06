import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const fetchProductData = createAsyncThunk(
  "recomemdedProduct/fetchProductData",
  async (_, { dispatch }) => {
    dispatch(loadingBar(true));
    try {
      const response = await axios.get("https://grocery-clone.onrender.com/api/product/recomemdedProduct");
      return response.data.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch(loadingBar(false));
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
