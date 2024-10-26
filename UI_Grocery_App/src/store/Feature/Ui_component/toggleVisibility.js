import { createSlice } from "@reduxjs/toolkit";

const toggleVisibility = createSlice({
  name: "toggleVisibility",
  initialState: { toggle: false, loginToggle: false ,profileToggle:false},
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
    profileToggleSwitch: (state) => {
      state.profileToggle = !state.profileToggle;
    },
  },
});
export const { toggleSwitch, scrolltoggle,loginToggleSwitch,profileToggleSwitch } = toggleVisibility.actions;
export default toggleVisibility.reducer;
