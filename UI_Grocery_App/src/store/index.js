import { configureStore } from "@reduxjs/toolkit";
import ToggleVisibility from "./Feature/Ui_component/ToggleVisibility.js";

const store = configureStore({
  reducer: {
    toggleVisibility:ToggleVisibility
  },
});
export default store;
