import styles from "./Asside.module.scss";
import surfIcon from "./../../../images/Surf.svg";
import campIcon from "./../../../images/Camp.svg";
import surfboardIcon from "./../../../images/surfboard.svg";
import travelIcon from "./../../../images/Travel.svg";
import searchIcon from "./../../../images/search.svg";
import locationIcon from "./../../../images/location.svg";
import { Component } from "solid-js";
import { controlTypes } from "../../../slider/Vertical/Slider";

const Asside: Component<{
  sliderController: () => controlTypes | undefined;
}> = ({ sliderController }) => {
  const currentDate: Date = new Date();
  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__title}>
        GO
        <br />
        SURF
      </div>
      <div class={styles.wrapper__panel}>
        <div class={styles.panel__title}>
          <span></span>
          <span class={styles.title__text}>
            GO<span class={styles.title__text__dash}></span>SURF
          </span>
          <span></span>
        </div>
        <div class={styles.panel__bottom}>
          <div class={styles.panel__links}>
            <div
              class={styles.panel__links__link}
              onClick={() => sliderController()?.scrollToSlide(2)}
            >
              <img src={surfIcon} alt={"surf icon"} />
              Surf
            </div>
            <div
              class={styles.panel__links__link}
              onClick={() => sliderController()?.scrollToSlide(4)}
            >
              <img src={travelIcon} alt={"travel icon"} />
              Travel
            </div>
            <div
              class={styles.panel__links__link}
              onClick={() => sliderController()?.scrollToSlide(5)}
            >
              <img src={campIcon} alt={"camp icon"} />
              Sleep
            </div>
            <div
              class={styles.panel__links__link}
              onClick={() => sliderController()?.scrollToSlide(6)}
            >
              <img src={surfboardIcon} alt={"surfboard icon"} />
              Shop
            </div>
            <div class={styles.panel__links__link}>
              <img src={searchIcon} alt={"search icon"} />
            </div>
          </div>
          <div class={styles.panel__info}>
            <div class={styles.panel__info__date}>
              <div class={styles.date__day}>{currentDate.getDate()}</div>
              <div class={styles.date__row}>
                <div class={styles.date__row__month}>
                  {currentDate.getMonth() + 1}
                </div>
                <span>|</span>
                <div class={styles.date__row__year}>
                  {currentDate.getFullYear()}
                </div>
              </div>
            </div>
            <div class={styles.panel__info__location}>
              <img src={locationIcon} alt={"location icon"} />
              California
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asside;
