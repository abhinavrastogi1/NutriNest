import React from "react";
import search from "../../../assets/images/search.png";
import { useDispatch } from "react-redux";
import { SearchApi } from "../../../store/Api/SearchSlice";
import { useNavigate } from "react-router-dom";

function SearchButton() {
 const dispatch =useDispatch()
 const navigate=useNavigate()
  function onEnter(e) {
    if (e.key == "Enter") {
        dispatch(SearchApi(e.target.value))
        navigate(`/search?q=${e.target.value}`)
    }   
  }
  return (
    <div className="flex flex-row border-[1px] border-border-color rounded-md w-[60%]">
      <img src={search} className="h-5 m-2" alt="search" />
      <input
        type="text"
        size={50}
        placeholder="Search for Products ..."
        className="outline-none col-span-full text-[12px]"
        onKeyDown={onEnter}
      />
    </div>
  );
}
export default SearchButton;
