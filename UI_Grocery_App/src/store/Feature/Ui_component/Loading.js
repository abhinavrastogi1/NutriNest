import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: { loading: false },
  reducers: {
    loadingBar: (state, action) => {
      state.loading = action.payload;
    },
  },
});
export const { loadingBar } = loading.actions;
export default loading.reducer;
