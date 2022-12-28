import { Component } from "solid-js";
import { TSlideData } from "../types";
import styles from "./Slide.module.scss";

const ChangeMaskOpacity = (e: any) => {
  console.log("hi");
  (
    document.getElementsByClassName(styles.wrapper__mask)[0] as HTMLElement
  ).style.opacity = "0.3";
};

const Slide: Component<{ data: TSlideData }> = ({ data }) => {
  return (
    <div
      class={styles.wrapper}
      onMouseEnter={ChangeMaskOpacity}
      style={{ "background-image": `url(${data.img})` }}
    >
      <div class={styles.wrapper__data__title} onMouseEnter={ChangeMaskOpacity}>
        {data.title}
      </div>
      <div class={styles.wrapper__data__place} onMouseEnter={ChangeMaskOpacity}>
        {data.place}
      </div>
      <div class={styles.wrapper__mask}></div>
    </div>
  );
};

export default Slide;
