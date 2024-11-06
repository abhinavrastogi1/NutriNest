import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const fetchCategoryData = createAsyncThunk(
  "categoryApi/fetchCategoryData",
  async (_,{dispatch}) => {
    dispatch(loadingBar(true))

    try {
      const response = await axios.get("https://grocery-clone.onrender.com/api/product/categorytree");
      return response.data.data;
    } catch (error) {
      console.error("error while fetching data from the server", error);
      throw error;
    }finally {
      dispatch(loadingBar(false));
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
