import { createSlice } from "@reduxjs/toolkit";

const  toggleVisibility = createSlice({
    name: "toggleVisibility",
    initialState:{toggle:false},
    reducers:{
        toggleSwitch:(state)=>{
         state.toggle=!(state.toggle)
        }
    }
})
export const {toggleSwitch}=toggleVisibility.actions
export default toggleVisibility.reducer