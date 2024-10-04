import React from 'react'

function noCategoryFound() {
  return (
    (
        <div className="w-full h-max bg-[#E6F0FF] pb-[100px]">
          <div className="w-full h-max bg-[#E6F0FF]  flex  justify-center">
            <img src={somethingwentwrong} />
          </div>
          <div className=" flex justify-center m-2">
            <button
              className="border-[#0052CC] border-[1px] py-2 px-6 text-[#0052CC] rounded-md
               hover:bg-[#0052CC] hover:text-white font-semibold text-[15px] "
              onClick={() => {
                navigate("/");
              }}
            >
              Go to Home
            </button>
          </div>
        </div>
      )
  )
}

export default noCategoryFound