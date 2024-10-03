import React from 'react'
import CardMd from '../../../Small_component/Cards/CardMd'

function FruitsAndVegetable( ) {


  return (
    <section className="mt-8">

   <div className="h-[46px]">
          <h1 className="text-2xl  font-bold">Fruits and Vegetable</h1>
        </div>
      <div className='flex gap-7'>
        <CardMd/>
        <CardMd/>
        <CardMd/>
        <CardMd/>
      </div>
    </section>
  )
}

export default FruitsAndVegetable