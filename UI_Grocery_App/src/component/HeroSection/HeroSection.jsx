import React from 'react'
import SmartBasket from '../HeroSectionComponent/SmartBasket'
import BestSeller from '../HeroSectionComponent/BestSeller'
import Buttons from '../HeroSectionComponent/Buttons'
import TopOfferCards from '../../Small_component/Cards/TopOfferCards'

function HeroSection() {
  return (
    <>
    <Buttons/>
    <SmartBasket/>
    <BestSeller/>
    < TopOfferCards />
    </>
  )
}

export default HeroSection