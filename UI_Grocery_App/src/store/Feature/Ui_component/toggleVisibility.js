import { createSlice } from "@reduxjs/toolkit";

const toggleVisibility = createSlice({
  name: "toggleVisibility",
  initialState: { toggle: false, loginToggle: false },
  reducers: {
    toggleSwitch: (state) => {
      state.toggle = !state.toggle;
    },
    scrolltoggle: (state, action) => {
      state.toggle = action.payload;
    },
    loginToggleSwitch: (state) => {
      state.loginToggle = !state.loginToggle;
    },
  },
});
export const { toggleSwitch, scrolltoggle,loginToggleSwitch } = toggleVisibility.actions;
export default toggleVisibility.reducer;
