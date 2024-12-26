import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const totalItems = createAsyncThunk(
  "totalItemsSlice/totalItems",
  async (_, { dispatch }) => {
    dispatch(loadingBar(true));

    try {
      const response = await axios.get(
        "https://nutrinest.onrender.com/api/users/totalItems",
        { withCredentials: true }
      );
      return response.data.data;
    } catch (error) {
      console.error("error while fetching total no of items", error);
    } finally {
      dispatch(loadingBar(false));
    }
  }
);

const totalItemsSlice = createSlice({
  name: "totalItemsSlice",
  initialState: {
    items: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(totalItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = "status";
    });
    builder.addCase(totalItems.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(totalItems.rejected, (state, action) => {
      state.error = action.error.message;
      state.status = "error";
    });
  },
});

export default totalItemsSlice.reducer;
