import { Component, createSignal } from "solid-js";
import Slider, { controlTypes } from "./slider/Vertical/Slider";
import General from "./Slides/General/General";
import SurfMap from "./Slides/SurfMap/SurfMap";
import SurfSlider from "./Slides/SurfSlider/SurfSlider";
import Travel from "./Slides/Travel/Travel";
import Sleep from "./Slides/Sleep/Sleep";
import Shop from "./Slides/Shop/Shop";

const App: Component = () => {
  const [sliderController, setSliderController] = createSignal<controlTypes>();
  return (
    <Slider
      controller={(e) => {
        setSliderController(e);
      }}
    >
      <div>
        <General sliderController={sliderController} />
      </div>
      <div>
        <SurfMap />
      </div>
      <div>
        <SurfSlider />
      </div>
      <div>
        <Travel />
      </div>
      <div>
        <Sleep />
      </div>
      <div>
        <Shop />
      </div>
    </Slider>
  );
};

export default App;
