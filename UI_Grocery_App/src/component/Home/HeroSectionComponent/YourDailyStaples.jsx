import React from 'react'
import CardSm from '../../../Small_component/Cards/CardSm'

function YourDailyStaples() {
    return (
        <section className="mt-8">
    
       <div className="h-[46px]">
              <h1 className="text-2xl  font-bold">Your Daily Staples</h1>
            </div>
          <div className='flex gap-7 '>
            <CardSm type="Atta & Flour" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920035/k8qrtqkpzpwmrs2h3tlj.png"/>
            <CardSm type="Rice & Rice Products" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920156/arqsegcqihiybuorwnpc.png"/>
            <CardSm type="Dals & Pulses" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920156/x2wsj0defe5kbtlqvxcn.png"/>
            <CardSm type="Cooking Oil & Ghee" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920156/ufb1toixufruf0eftqcc.png"/>
            <CardSm type="Dry Fruits" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920156/pv82itbnxseod5pb8qg2.png"/>
            <CardSm type="Salt, Sugar & Jaggery" img="https://res.cloudinary.com/dpgaqghmr/image/upload/v1730920156/tnmxjhtshkrl3q1j2xsw.png"/>
           
          </div>
        </section>
      )
}

export default YourDailyStaples