import { Component } from "solid-js";
import { TSlideData } from "../types";
import styles from "./Slide.module.scss";

const Slide: Component<{ data: TSlideData }> = ({ data }) => {
  return (
    <div class={styles.wrapper}>
      <img src={data.img} alt="slide" class={styles.wrapper__backImg} />
      <div class={styles.wrapper__data}>
        <div class={styles.wrapper__data__title}>{data.title}</div>
        <div class={styles.wrapper__data__place}>{data.place}</div>
      </div>
      <div class={styles.wrapper__mask}></div>
    </div>
  );
};

export default Slide;
