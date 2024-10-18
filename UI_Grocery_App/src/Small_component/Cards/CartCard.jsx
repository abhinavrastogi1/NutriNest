import React from 'react'

function CartCard({productData}) {
  const  image =productData?.[0].productId.images
  return (
    <div className="h-[170px] flex flex-row justify-between border-b-[1px] ">
        <div className="flex gap-7">
        <div className="h-full w-[168px] flex justify-center items-center ">
            <img src={image} className="h-24 w-24 "/>
        </div>
        <div className="h-full w-[457px] "></div>
        </div>
       <div className="flex gap-7">
       <div className="h-full w-[168px]"> </div>
       <div className="h-full w-[168px]" ></div>
       </div>
    </div> 
  )
}

export default CartCard