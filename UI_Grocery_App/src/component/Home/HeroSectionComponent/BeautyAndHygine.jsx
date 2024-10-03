import React from 'react'
import CardSm from '../../../Small_component/Cards/CardSm'


function BeautyAndHygiene() {
    return (
        <section className="mt-8">
    
       <div className="h-[46px]">
              <h1 className="text-2xl  font-bold">Beauty & Hygiene</h1>
            </div>
          <div className='flex gap-7 '>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
          </div>
        </section>
      )
}

export default BeautyAndHygiene