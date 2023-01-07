import { Component } from "solid-js";
import { TBeachInfo } from "../../../BeachDataArray";
import styles from "./PopUp.module.scss";
import rightArrow from "./../../../images/arrows/rightArrow.svg";
import SurfIcon from "./../../../images/SurfIcon.svg";
import Wind from "./../../../images/Wind.svg";
import Water from "./../../../images/Water.svg";

const PopUp: Component<{ data: TBeachInfo }> = ({ data }) => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__top}>
        <div class={styles.wrapper__top__beachInfo}>
          <div class={styles.beachInfo__title}>{data.beach}</div>
          <span></span>
          <div class={styles.beachInfo__country}>{data.country}</div>
        </div>
        <a href="#">
          <img src={rightArrow} alt={"right arrow"} />
        </a>
      </div>
      <div class={styles.wrapper__bottom__weatherInfo}>
        <div class={styles.weatherInfo__surf}>
          <img src={SurfIcon} alt="surf icon" />
          {data.surf}
          <div class={styles.label}>Surf (FT)</div>
        </div>
        <div class={styles.weatherInfo__tidy}>
          <img src={Water} alt="water icon" />
          {data.tide}
          <div class={styles.label}>Tide (FT)</div>
        </div>
        <div class={styles.weatherInfo__wind}>
          <img src={Wind} alt="wind icon" />
          {data.wind}
          <div class={styles.label}>Wind (KTS)</div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
