import React from 'react'
import SmartBasket from '../HeroSectionComponent/SmartBasket'
import BestSeller from '../HeroSectionComponent/BestSeller'
import Buttons from '../HeroSectionComponent/Buttons'
import TopOfferCards from '../HeroSectionComponent/TopOfferCards'
import CardSm from '../../Small_component/Cards/CardSm'
import FruitsAndVegetable from '../HeroSectionComponent/FruitsAndVegetable'
import YourDailyStaples from '../HeroSectionComponent/YourDailyStaples'
import Beverages from '../HeroSectionComponent/Beverages'
import SnackStore from '../HeroSectionComponent/SnackStore'
import CleaningAndHoushold from '../HeroSectionComponent/CleaningAndHoushold'
import BeautyAndHygiene from '../HeroSectionComponent/BeautyAndHygine'
import HomeAndKitchen from '../HeroSectionComponent/HomeAndKitchen'

function HeroSection() {
  return (
    <>
    <Buttons/>
    <SmartBasket/>
    <BestSeller/>
    < TopOfferCards />
   <FruitsAndVegetable />
    <YourDailyStaples />
    <Beverages/>
    <SnackStore/>
    <CleaningAndHoushold/>
    <BeautyAndHygiene/>
    <HomeAndKitchen/>
    </>
  )
}

export default HeroSection