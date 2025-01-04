import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { FetchBasket } from "./FetchBasketSlice";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const BasketApi = createAsyncThunk(
  "BasketApiSlice/BasketApi",
  async ({ route, cacheData }, { dispatch }) => {
    dispatch(loadingBar(true));
    try {
      await axios.post(
        `https://nutrinest-r77n.onrender.com/api/users/${route}`,
        cacheData,
        { withCredentials: true }
      );
      dispatch(FetchBasket());
      return null;
    } catch (error) {
      console.error("error while creating Cart", error);
    } finally {
      dispatch(loadingBar(false));
    }
  }
);
const BasketApiSlice = createSlice({
  name: "BasketApiSlice",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(BasketApi.fulfilled, (state) => {
      state.status = "success";
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
