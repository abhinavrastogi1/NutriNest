import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
import { toggleSwitch } from "../../store/Feature/Ui_component/ToggleVisibility";
import { useSelector ,useDispatch} from 'react-redux';
function CategoryButton() {
    const isVisible=useSelector((state)=>(state.toggleVisibility.toggle))
    const dispatch=useDispatch()
    const tooglebutton=()=>{
        dispatch(toggleSwitch())
        }
  return (
    <div className="p-1 ">
    <button
      className="bg-[#5E9400] py-2 rounded-[5px] w-[170px] flex flex-row  "
      onClick={tooglebutton}
    >
      <span className="text-white pl-3 text-[13px]">Shop by Category</span>
      <span
        className={`mt-[2px] ml-3 transition-transform ${isVisible ? "scale-y-[-1]" : "scale-y-100"}`}
      >
        <TiArrowSortedDown className=" w-4 h-4  text-white" />
      </span>
    </button>
  </div>
  )
}

export default CategoryButton