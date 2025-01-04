import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const fetchbestSellerData = createAsyncThunk(
  "bestSeller/fetchbestSellerData",
  async (_, { dispatch }) => {
    dispatch(loadingBar(true));
    try {
      const response = await axios.get(
        "https://nutrinest-r77n.onrender.com/api/product/bestSellers"
      );
      return response.data.data;
    } catch (error) {
      throw error;
    } finally {
      dispatch(loadingBar(false));
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
