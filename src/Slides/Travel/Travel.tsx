import styles from "./Travel.module.scss";
import TravelLogoTitle from "./../../images/TravelLogoTitle.svg";
import { Swiper, SwiperSlide } from "swiper/solid";
import BeachDataArray, { TBeachInfo } from "../../BeachDataArray";
import { createEffect, For } from "solid-js";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "./styles.scss";
import Airplane from "./../../images/airplane.png";

const Travel = () => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__title}>
        <div class={styles.wrapper__title__left}>
          <div class={styles.big}>
            <img src={TravelLogoTitle} />
            <div class={styles.small}>Travel</div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        class={styles.wrapper__slider}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        effect="fade"
      >
        <For each={BeachDataArray}>
          {(data: TBeachInfo) => {
            return (
              <SwiperSlide>
                <div class={styles.wrapper__slider__slide}>
                  <div
                    class={styles.slide__back}
                    style={{ "background-image": `url(${data.landscape})` }}
                  ></div>
                  <div class={styles.slide__mask}></div>
                  <div class={styles.slide__data}>
                    <div class={styles.slide__data__label}>Airline</div>
                    <div class={styles.slide__data__title}>{data.beach}</div>
                  </div>
                  <div class={styles.slide__title__right}>
                    <div class={styles.label}>Shore</div>
                    <div class={styles.location}>
                      {data.beach} <span>|</span> {data.country}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }}
        </For>
      </Swiper>
      <div class={styles.wrapper__airplane}>
        <img src={Airplane} />
      </div>
    </div>
  );
};

export default Travel;
