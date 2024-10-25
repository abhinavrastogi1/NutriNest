import { createSlice } from "@reduxjs/toolkit";

const loading = createSlice({
  name: "loading",
  initialState: { updatingCartstatus: false },
  reducers: {
    cartUpdate: (state, action) => {
        console.log(action.payload)
      state.updatingCartstatus = action.payload;
    },
  },
});
export const { cartUpdate } = loading.actions;
export default loading.reducer;
