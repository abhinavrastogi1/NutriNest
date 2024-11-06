import React from 'react'
import CardMd from '../../../Small_component/Cards/CardMd'

function CleaningAndHoushold() {
    return (
        <section className="mt-8">
    
       <div className="h-[46px]">
              <h1 className="text-2xl  font-bold">Cleaning & Household</h1>
            </div>
          <div className='flex gap-7'>
          <div>
          <CardMd
            type="Cleaners & Disinfectants"
            offer="MIN 40% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730919463/oi3r1calp70akyaovi3k.png"
          />
        </div>
        <div>
          <CardMd
            type="Detergents & Fabric Care"
            offer="MIN 50% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730919464/tj482nliplocv27p2u2c.png"
          />
        </div>
        <div>
          <CardMd
            type="Garbage Bags"
            offer="MIN 25% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730919464/olxiuatgujbwhqduzmri.png"
          />
        </div>
        <div>
          <CardMd
            type="Freshners & Repellents"
            offer="MIN 40% OFF"
            img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730919464/cfeh4jkya8goiaamv8ml.png"
          />
        </div>
          </div>
        </section>
      )
}

export default CleaningAndHoushold