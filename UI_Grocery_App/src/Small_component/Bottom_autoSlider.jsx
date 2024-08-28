import React from 'react'
import {useEffect ,useState} from "react"
import cakes from "../assets/images/cakes.png"
import pet_food from "../assets/images/pet_food.png"
import suppliments from "../assets/images/suppliments.png"
import baby_cosmetics from "../assets/images/baby_cosmetics.png"
function Bottom_autoSlider() {

    const [imagesIndex,setImageIndex]=useState(0)
    const slides =[
    {id:1,
        url:cakes,
        href:"./"
    },
    {id:2,
        url:baby_cosmetics,
        href:"./"
    },
    {id:3,
        url:pet_food,
        href:"./"
    },
    {id:4,
        url:suppliments,
        href:"./"
    },

    ]
    useEffect(() => {
      const interval=setInterval(() => {
        setImageIndex((prev)=>{
          if (prev === slides?.length-1) return 1
          return  prev +1
        })
      }, 3000);
    
      return () => {
     clearInterval(interval)
      }
    }, [slides.length])
    


  return (
    
    <div className=" w-full relative overflow-hidden rounded-xl">
        <div className="flex transition-transform duration-1000 rounded" style={{ transform: `translateX(-${imagesIndex * 100}%)`}}> 
         {
           slides.map((slide)=>(
           <div key={slide.id}className="flex-shrink-0 w-full">
             <a href={slide.href}>
                <img src={slide.url} className="w-full h-full object-cover"/>
            </a>
            </div>
           ))
         }
        </div>
    </div>
    
  )
}

export default Bottom_autoSlider