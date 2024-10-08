import React from "react";
import ReactDOM from "react-dom";
function SaveLaterbtn({ SaveLaterbtnLocation,saveforLater }) {
  let top = 0;
  let left = 0;
  if (SaveLaterbtnLocation.current) {
    const buttonLocation = SaveLaterbtnLocation.current.getBoundingClientRect();
    top = buttonLocation.top + 35 + window.scrollY;
  }
  return ReactDOM.createPortal(
    <div
      className={` absolute flex flex-col `}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
     { saveforLater?(<> <div
        className="w-0 h-0 border-l-[4px] ml-3 border-r-[4px] border-b-[8px] 
    border-l-transparent border-r-transparent border-[#303030]"
      ></div><div className="bg-[#303030] rounded-md p-2 text-xs fomt text-white">
        Remove Product
      </div> </>) :(<><div
        className="w-0 h-0 border-l-[4px] ml-3 border-r-[4px] border-b-[8px] 
    border-l-transparent border-r-transparent border-[#303030]"
      ></div>
      <div className="bg-[#303030] rounded-md p-2 text-xs fomt text-white">
        Save For Later
      </div></>)}
    </div>,
    document.body
  );
}

export default SaveLaterbtn;
