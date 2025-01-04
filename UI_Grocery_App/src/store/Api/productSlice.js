import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const productSliceApi = createAsyncThunk(
  "productSlice/productSliceApi",
  async ({ id }, { dispatch }) => {
    try {
      dispatch(loadingBar(true));
      const response = await axios.post(
        "https://nutrinest-r77n.onrender.com/api/findProduct/productDetails",
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
    } finally {
      dispatch(loadingBar(false));
    }
  }
);
const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    productData: [],
    status: "idle",
    error: null,
    loadingProduct: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productSliceApi.fulfilled, (state, action) => {
      state.productData = action.payload;
      state.status = "success";
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
