import { createSlice } from "@reduxjs/toolkit";

const CategoriesActiveState=createSlice({
    name:"CategoriesActiveState",
    initialState:{
        mainCategory:"",
        subCategory:"",
        subSubCategroy:""
    },
    reducers:{
      mainCategoryReducer:(state,action)=>{
 state.mainCategory=action.payload
      },
      subCategoryReducer:(state,action)=>{
 state.mainCategory=action.payload
 state.subCategory=action.payload
      },
      subSubCategoryReducer:(state,action)=>{
 state.mainCategory=action.payload
 state.subCategory=action.payload
 state.subSubCategroy=action.payload
      }
    }
})
export const {mainCategoryReducer,subCategoryReducer,subSubCategoryReducer}=CategoriesActiveState.actions
export default  CategoriesActiveState.reducer