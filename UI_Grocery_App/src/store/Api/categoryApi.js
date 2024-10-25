import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategoryData = createAsyncThunk(
  "categoryApi/fetchCategoryData",
  async () => {
    try {
      const response = await axios.get("/api/product/categorytree");
      return (response.data.data);
    } catch (error) {
      console.error("error while fetching data from the server", error);
      throw error;
    }
  }
);

const categoryApi = createSlice({
  name: "categoryApi",
  initialState: { categories: [], error: null, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryData.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.status = "success";
      
    });
    builder.addCase(fetchCategoryData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchCategoryData.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default categoryApi.reducer;
