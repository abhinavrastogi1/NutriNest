import React from 'react'
import CardSm from '../../../Small_component/Cards/CardSm'

function Beverages() {
    return (
        <div className="mt-8">
    
       <div className="h-[46px]">
              <h1 className="text-2xl  font-bold">Beverages</h1>
            </div>
          <div className='flex gap-7 '>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
            <CardSm/>
          </div>
        </div>
      )
}

export default Beverages