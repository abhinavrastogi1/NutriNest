import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: { login: false },
  reducers: {
    isloggedin: (state, action) => {
      state.login = action.payload;
    },
  },
});
export const { isloggedin } = loginSlice.actions;
export default loginSlice.reducer;
