import react from "react";
import HeroSection from "./HeroSection/HeroSection";
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider";
import AutoSlider from "../../Small_component/AutoSlider";
import About from "./HeroSectionComponent/About";

function Home() {
  return (
    <>
      <main className="mx-48 lg:mx-36 md:mx-24 sm:mx-16 my-8 sideMargin">
        <AutoSlider />
        <HeroSection />
        <Bottom_autoSlider />
        <About />
      </main>
    </>
  );
}
export default Home;
