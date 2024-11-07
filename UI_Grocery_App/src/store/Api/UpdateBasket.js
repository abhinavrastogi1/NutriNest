import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { totalItems } from "./TotalItems";
import { loadingBar } from "../Feature/Ui_component/Loading";

export const UpdateCart = createAsyncThunk(
  "updateBasket/UpdateCart",
  async ({ productQuantity, id }, { dispatch }) => {
    try {
      await axios.patch(
        "https://grocery-clone.onrender.com/api/users/updateCart",
        null,
        {
          params: {
            id: id,
            quantity: productQuantity,
          },
          withCredentials: true,
        }
      );
      dispatch(totalItems());
      return { id };
    } catch (error) {
      console.error("error while updating cart", error);
    }
  }
);
export const deleteProductFromCart = createAsyncThunk(
  "updateBasket/deleteProductFromCart",
  async ({ id }, { dispatch }) => {
    dispatch(loadingBar(true));

    try {
      await axios.patch(
        "https://grocery-clone.onrender.com/api/users/deleteProductFromCart",
        null,
        {
          params: {
            id: id,
          },
          withCredentials: true,
        }
      );
      dispatch(totalItems());
      return { id };
    } catch (error) {
      console.error("error while Deleting item", error);
    } finally {
      dispatch(loadingBar(false));
    }
  }
);
export const addProductInCart = createAsyncThunk(
  "updateBasket/addProductInCart",
  async (
    { id, quantity, _id, discountedPrice, offer, originalPrice },
    { dispatch }
  ) => {
    try {
      await axios.patch(
        "https://grocery-clone.onrender.com/api/users/addProductInCart",
        {
          id: id,
          quantity: quantity,
          _id: _id,
          discountedPrice: discountedPrice,
          originalPrice: originalPrice,
          offer: offer,
        },
        { withCredentials: true }
      );
      dispatch(totalItems());
      return { id };
    } catch (error) {
      console.error("error while adding item", error);
    }
  }
);

const updateBasket = createSlice({
  name: "updateBasket",
  initialState: {
    productId: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UpdateCart.pending, (state, action) => {
      const { id } = action.meta.arg;
      state.status = "pending";
      state.productId[id] = true;
    });
    builder.addCase(UpdateCart.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.status = "success";
      state.productId[id] = false;
    });
    builder.addCase(UpdateCart.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(deleteProductFromCart.pending, (state, action) => {
      const { id } = action.meta.arg;
      state.status = "pending";
      state.productId[id] = true;
    });
    builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.status = "success";
      state.productId[id] = false;
    });

    builder.addCase(deleteProductFromCart.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
    builder.addCase(addProductInCart.pending, (state, action) => {
      const { id } = action.meta.arg;
      state.status = "pending";
      state.productId[id] = true;
    });
    builder.addCase(addProductInCart.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.status = "success";
      state.productId[id] = false;
    });

    builder.addCase(addProductInCart.rejected, (state, action) => {
      state.status = "rejected";
      state.error = action.error.message;
    });
  },
});

export default updateBasket.reducer;
