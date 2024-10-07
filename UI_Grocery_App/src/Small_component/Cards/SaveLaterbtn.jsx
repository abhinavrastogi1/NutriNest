import React from "react";
import ReactDOM from "react-dom";

function SaveLaterbtn({ SaveLaterbtnLocation }) {
  let top = 0;
  let left = 0;
  if (SaveLaterbtnLocation.current) {
    const buttonLocation = SaveLaterbtnLocation.current.getBoundingClientRect();
    top = buttonLocation.top + 32 + window.scrollY;
    left = buttonLocation.left;
    console.log(top, left);
  }
  return ReactDOM.createPortal(
    <div
      className={` absolute flex flex-col `}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div
        class="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[10px] 
    border-l-transparent border-r-transparent border-black"
      ></div>
      <div className="">hello</div>
    </div>,
    document.body
  );
}

export default SaveLaterbtn;
