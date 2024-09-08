import react from "react";
import AutoSlider from "../../Small_component/AutoSlider";
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider";
import About from "../HeroSectionComponent/About";
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  return (
    <>
      <section className="mx-48 my-10 ">
        <AutoSlider />
        <HeroSection/>
        <Bottom_autoSlider />
        <About />
      </section>
    </>
  );
}
export default Home;