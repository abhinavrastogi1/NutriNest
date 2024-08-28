import React  ,{useState,useEffect} from 'react'

import carrot from "../../assets/images/carrot.png"
import arrowdown from "../../assets/images/arrowdown.png"
import greenarrowdown from "../../assets/images/greenarrowdown.png"
import savelater from "../../assets/images/savelater.png"

function Card({images,imageAlt,title,content,weight,price,previousPrice,offer,url}) {

  images=carrot
  url="https://google.com"
  title="fesho!"
  content="Carrot-Orange(Loose}"
  weight="1kg"
price="98"
previousPrice="115"
  return (
   <div className="h-[551px] w-[270px] p-[10px] my-5 bg-white" key={Card.id}>
    <div className="image h-[250px] w-[250px] p-5 border-gray-300 border-[1px] rounded-md" >
        <div className="img h-fulll w-full">
          <a href={url}>
            <img src={images} alt={imageAlt}/>
            </a>
        </div>
    </div>
     <div>
       <div>
        <h6>{title}</h6>
        </div>
       <div className="h-[40px] ">
        <p>{content}</p>
        </div>
       <div >
            <button className="flex items-center h-[30px] w-full p-3 text-gray-600 text-sm border-gray-600 border-[1px] rounded-md" >
    <span  >{weight}</span>
    <img className="h-4 w-5 ml-2" src={arrowdown} alt="Arrow Down" />
                     </button>
        </div>
    </div>
      <div className="flex flex-row gap-2 h-5">
        <p className="font-semibold">{`₹${price}`}</p>
         <h6 className="line-through text-gray-600 text-sm pt-[2px] "> {`₹${previousPrice}`}</h6>
      </div> 

      <div>
          <div className="bg-gradient-to-l from-[rgb(228,241,204)] to-[rgba(255,255,255,1)] h-[30px] border-[1px] border-[#ADD566]">
            <button className="flex flex-row justify-around">
              <span className="text-[#476F00] mx-2"  > Har Din Sasta! </span>
              <span><img className="h-5"src={greenarrowdown}/></span>
              </button></div>
      </div>
    <div className="flex flex-row justify-around gap-4">
      <button className="h-[35px] w-[15%]   rounded-md border-[1px] border-gray-600"><img className="h-5 w-5 ml-[7px]"src={savelater}/></button>
      <button className="text-[#CC0000] text-center w-[80%] rounded-md border-[1px] font-semibold border-[#CC0000]">Add</button>
    </div>
   </div>
  )
}

export default Card