import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const BasketApi = createAsyncThunk(
  "BasketApiSlice/BasketApi",
  async (localStorage) => {
    try {
      const response = await axios.post("/api/users/cart", localStorage);
      console.log(response.data);
    } catch (error) {
      throw error;
    }
  }
);

const BasketApiSlice = createSlice({
  name: "BasketApiSlice",
  initialState: {
    productData: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BasketApi.fulfilled, (state, action) => {
      state.status = "success";
      state.productData = action.payload;
    });
    builder.addCase(BasketApi.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(BasketApi.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default BasketApiSlice.reducer;
