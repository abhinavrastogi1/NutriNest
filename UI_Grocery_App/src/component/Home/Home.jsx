import react from "react";
import HeroSection from "./HeroSection/HeroSection";
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider";
import AutoSlider from "../../Small_component/AutoSlider";
import About from "./HeroSectionComponent/About";

function Home() {
  return (
    <>
      <main className="flex justify-center">
        <div className="w-[1135px]">
        <AutoSlider />
        <HeroSection />
        <Bottom_autoSlider />
        <About />
        </div>
      </main>
    </>
  );
}
export default Home;
