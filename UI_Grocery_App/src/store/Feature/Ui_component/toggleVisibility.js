import { createSlice } from "@reduxjs/toolkit";

const toggleVisibility = createSlice({
  name: "toggleVisibility",
  initialState: { toggle: false },
  reducers: {
    toggleSwitch: (state) => {
      state.toggle = !state.toggle;
    },
    scrolltoggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
});
export const { toggleSwitch, scrolltoggle } = toggleVisibility.actions;
export default toggleVisibility.reducer;
