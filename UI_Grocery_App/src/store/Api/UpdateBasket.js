import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const UpdateCard = createAsyncThunk(
  "updateBasket/UpdateCard",
  async ({ productQuantity, id }) => {
    try {
      await axios.patch("/api/users/updateCart", null, {
        params: {
          id: id,
          quantity: productQuantity,
        },
      });
      return { id };
    } catch (error) {
      console.error("error while updating cart", error);
    }
  }
);
export const deleteProductFromCart = createAsyncThunk(
  "updateBasket/deleteProductFromCart",
  async ({ id }) => {
    try {
      await axios.patch("/api/users/deleteProductFromCart", null, {
        params: {
          id: id,
        },
      });
      return { id };
    } catch (error) {
      console.error("error while Deleting item", error);
    } finally {
      removeCategory();
    }
  }
);
export const addProductInCart = createAsyncThunk(
  "updateBasket/addProductInCart",
  async ({
    id,
    quantity,
    _id,
    discountedPrice,
    offer,
    originalPrice,
  }) => {
    try {
      await axios.patch("/api/users/addProductInCart", {
        id: id,
        quantity: quantity,
        _id: _id,
        discountedPrice: discountedPrice,
        originalPrice: originalPrice,
        offer: offer,
      });
      return { id };
    } catch (error) {
      console.error("error while adding item", error);
    } finally {
      removeCategory();
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
    builder.addCase(UpdateCard.pending, (state, action) => {
      const { id } = action.meta.arg;
      state.status = "pending";
      state.productId[id] = true;
    });
    builder.addCase(UpdateCard.fulfilled, (state, action) => {
      const { id } = action.payload;
      state.status = "success";
      state.productId[id] = false;
    });
    builder.addCase(UpdateCard.rejected, (state, action) => {
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
