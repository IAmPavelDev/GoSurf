import { Component, createEffect, createSignal } from "solid-js";
import "solid-devtools"; //devtools
import styles from "./App.module.scss";
import firstSlideBackground from "./images/firstSlideBack.png";
import Slider, { controllTypes } from "./slider/Vertical/Slider";
import General from "./Slides/General/General";
import SurfMap from "./Slides/SurfMap/SurfMap";
import SurfSlider from "./Slides/SurfSlider/SurfSlider";
import Travel from "./Slides/Travel/Travel";
import Sleep from "./Slides/Sleep/Sleep";

const App: Component = () => {
  const [sliderController, setSliderController] = createSignal<controllTypes>();
  return (
    <Slider
      controller={(e) => {
        setSliderController(e);
        console.log(e);
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
    </Slider>
  );
};

export default App;
