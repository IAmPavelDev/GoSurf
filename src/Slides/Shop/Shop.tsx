import styles from "./Shop.module.scss";
import ShopLogoTitle from "./../../images/ShopLogoTitle.png";
import RightArrow from "./../../images/arrows/rightArrow.svg";
import Stars from "./../../images/Star.svg";
import WaveBack from "./../../images/ShopWaveBack.png";
import { Swiper, SwiperSlide } from "swiper/solid";
import { EffectFade, Navigation } from "swiper";
import BeachDataArray, { TBeachInfo } from "../../BeachDataArray";
import { createEffect } from "solid-js";
const Shop = () => {
  createEffect(() => {
    document
      .getElementsByClassName("swiper-button-prev")[4]
      .classList.add(styles.slide__nav__prev);
    document
      .getElementsByClassName("swiper-button-next")[4]
      .classList.add(styles.slide__nav__next);
    document
      .getElementsByClassName("swiper")[0]
      .classList.add("swiper__container");
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__title}>
        <div class={styles.wrapper__title__left}>
          <div class={styles.big}>
            <img src={ShopLogoTitle} alt={"sleep title text logo"} />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        speed={800}
        slidesPerView={3}
        class={styles.wrapper__slider}
        navigation={true}
        loop={true}
        // effect="fade"
        // onSlideChange={(e) => {
        //
        // }}
      >
        {BeachDataArray.map((data: TBeachInfo) => {
          return (
            <SwiperSlide>
              <div class={styles.wrapper__slider__slide}>
                <div class={styles.slide__data}>
                  <div class={styles.slide__data__title}>
                    <div class={styles.title__lable}></div>
                    <div class={styles.title__data}></div>
                  </div>
                  <div class={styles.slide__data__rate}></div>
                  <div class={styles.slide__data__price}></div>
                </div>
                <div class={styles.slide__image}></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div class={styles.slide__bottom}>
        <div class={styles.slide__bottom__btn}>
          <div class={styles.go}>Go</div>
          <span class={styles.stick}></span>
          <div class={styles.surf}>
            Surf
            <img src={RightArrow} alt={"right arrow"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
