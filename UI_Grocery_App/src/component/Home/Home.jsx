import react from "react";
import HeroSection from "./HeroSection/HeroSection";
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider";
import AutoSlider from "../../Small_component/AutoSlider";
import About from "./HeroSectionComponent/About";

function Home() {
  return (
    <>
      <main className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 my-8 ">
        <AutoSlider />
        <HeroSection/>
        <Bottom_autoSlider />
        <About />
      </main>
    </>
  );
}
export default Home;