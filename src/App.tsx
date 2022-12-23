import { Component, createEffect } from "solid-js";
import "solid-devtools"; //devtools
import styles from "./App.module.scss";
import firstSlideBackground from "./images/firstSlideBack.png";
import Slider from "./slider/Vertical/Slider";
import FirstSlide from "./Slides/FirstSlide/FirstSlide";

const App: Component = () => {
  createEffect(() => {});
  return (
    <Slider>
      <div class={styles.slide}>
        <FirstSlide />
      </div>
      <div class={styles.slide}>
        <img src={firstSlideBackground} alt="first slide background" />
      </div>
      <div class={styles.slide}>
        <img src={firstSlideBackground} alt="first slide background" />
      </div>
      <div class={styles.slide}>
        <img src={firstSlideBackground} alt="first slide background" />
      </div>
      <div class={styles.slide}>
        <img src={firstSlideBackground} alt="first slide background" />
      </div>
    </Slider>
  );
};

export default App;
