import { Component, createEffect } from "solid-js";
import "solid-devtools"; //devtools
import styles from "./App.module.scss";
import firstSlideBackground from "./images/firstSlideBack.png";
import Slider from "./slider/Vertical/Slider";
import General from "./Slides/General/General";
import SurfMap from "./Slides/SurfMap/SurfMap";
import SurfSlider from "./Slides/SurfSlider/SurfSlider";
import Travel from "./Slides/Travel/Travel";

const App: Component = () => {
  createEffect(() => {});
  return (
    <Slider>
      <div class={styles.slide}>
        <General />
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
        <img src={firstSlideBackground} alt="first slide background" />
      </div>
    </Slider>
  );
};

export default App;
