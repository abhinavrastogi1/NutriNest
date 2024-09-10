import react from "react";
import AutoSlider from "../../Small_component/AutoSlider";
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider";
import About from "../HeroSectionComponent/About";
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  return (
    <>
      <section className="mx-4 sm:mx-8 md:mx-16 lg:mx-48 my-8 ">
        <AutoSlider />
        <HeroSection/>
        <Bottom_autoSlider />
        <About />
      </section>
    </>
  );
}
export default Home;