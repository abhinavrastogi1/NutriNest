import BeautyAndHygiene from "../HeroSectionComponent/BeautyAndHygine";
import BestSeller from "../HeroSectionComponent/BestSeller";
import Buttons from "../HeroSectionComponent/Buttons";
import CleaningAndHoushold from "../HeroSectionComponent/CleaningAndHoushold";
import FruitsAndVegetable from "../HeroSectionComponent/FruitsAndVegetable";
import SmartBasket from "../HeroSectionComponent/SmartBasket";
import SnackStore from "../HeroSectionComponent/SnackStore";
import TopOfferCards from "../HeroSectionComponent/TopOfferCards";
import Beverages from "../HeroSectionComponent/Beverages";
import YourDailyStaples from "../HeroSectionComponent/YourDailyStaples";

function HeroSection() {
  return (
    <>
      <Buttons />
      <SmartBasket />
      <BestSeller />
      <TopOfferCards />
      <FruitsAndVegetable />
      <YourDailyStaples/>
      <Beverages />
      <SnackStore />
      <CleaningAndHoushold />
      <BeautyAndHygiene />
    </>
  );
}

export default HeroSection;
