import react from "react"
import AutoSlider from "../../Small_component/AutoSlider"
import Bottom_autoSlider from "../../Small_component/Bottom_autoSlider"
import Card from "../../Small_component/card/Card"
import About from "./about"

function Home(){
    return (<>
<section className="mx-48 my-10 ">

<AutoSlider />
< Card />
<Bottom_autoSlider  />
<About />
</section>
    </>)
}
export default Home