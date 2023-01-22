import { Component, createSignal, lazy } from "solid-js";
import Slider, { controlTypes } from "./slider/Vertical/Slider";
import General from "./Slides/General/General";
const SurfMap = lazy(() => import("./Slides/SurfMap/SurfMap"));
const SurfSlider = lazy(() => import("./Slides/SurfSlider/SurfSlider"));
const Travel = lazy(() => import("./Slides/Travel/Travel"));
const Sleep = lazy(() => import("./Slides/Sleep/Sleep"));
const Shop = lazy(() => import("./Slides/Shop/Shop"));

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
