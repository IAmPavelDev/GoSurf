import { Component, createEffect, createSignal } from "solid-js";
import "solid-devtools"; //devtools
import styles from "./App.module.scss";
import firstSlideBackground from "./images/firstSlideBack.png";
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
      <div class={styles.slide}>
        <General sliderController={sliderController} />
      </div>
      <div class={styles.slide}>
        <SurfMap />
      </div>
      <div class={styles.slide}>
        <SurfSlider />
      </div>
      <div class={styles.slide}>
        <Travel />
      </div>
      <div class={styles.slide}>
        <Sleep />
      </div>
      <div class={styles.slide}>
        <Shop />
      </div>
    </Slider>
  );
};

export default App;
