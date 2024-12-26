import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { isloggedin } from "../Feature/Basket/LoginSlice";
import { totalItems } from "./TotalItems";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const FetchBasket = createAsyncThunk(
  "FetchBasketSlice/FetchBasket",
  async (_, { dispatch }) => {
    dispatch(loadingBar(true));

    try {
      const response = await axios.get(
        `https://nutrinest.onrender.com/api/users/getCart`,
        { withCredentials: true }
      );
      dispatch(totalItems());
      dispatch(isloggedin(true));
      localStorage.setItem("cart", JSON.stringify({}));
      return response.data.data;
    } catch (error) {
      console.log("error while fetching Cart", error);
    } finally {
      dispatch(loadingBar(false));
    }
  }
);
const FetchBasketSlice = createSlice({
  name: "FetchBasketSlice",
  initialState: {
    productData: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(FetchBasket.fulfilled, (state, action) => {
      state.status = "success";
      state.productData = action.payload;
    });
    builder.addCase(FetchBasket.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(FetchBasket.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default FetchBasketSlice.reducer;
