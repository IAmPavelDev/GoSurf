import styles from "./General.module.scss";
import "./GeneralStyles.scss";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

import rightArrow from "./../../images/arrows/rightArrow.svg";
import downArrow from "./../../images/arrows/downArrow.svg";
import { Component, createEffect } from "solid-js";
import Asside from "./Asside/Asside";
import Map from "./Map/Map";
import { controllTypes } from "../../slider/Vertical/Slider";

const titlesArr = ["North Shore", "South Shore", "West Shore", "East Shore"];

const FirstSlide: Component<{
  sliderController: () => controllTypes;
}> = ({ sliderController }) => {
  console.log(sliderController);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `
      <div 
        class='${styles.pagination__bullet + " " + className}'
      >
        <div class='${styles.pagination__bullet__content}'>
          <div class='${styles.pagination__bullet__index}'>0${index + 1}</div>
          <div class='${styles.pagination__bullet__title}'>
            ${titlesArr[index]}
          </div>
        </div>
      </div>`;
    },
  };

  createEffect(() => {
    document
      .getElementsByClassName("swiper-button-prev")[0]
      .classList.add(styles.slide__nav__prev);
    document
      .getElementsByClassName("swiper-button-next")[0]
      .classList.add(styles.slide__nav__next);
    document
      .getElementsByClassName("swiper")[0]
      .classList.add("swiper__container");
  });

  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__asside}>
        <Asside sliderController={sliderController} />
      </div>
      <div
        class={
          styles.wrapper__downArrow + " animate__animated animate__fadeInDown"
        }
      >
        <a href="#">
          <img src={downArrow} alt="down arrow" />
        </a>
      </div>
      <div class={styles.wrapper__map}>
        <Map />
      </div>
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        pagination={pagination}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        effect="fade"
        class={styles.wrapper__slider}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide class={styles.wrapper__slider__slide}>
          <div class={styles.slide__info}>
            <div
              class={styles.slide__info__suptitle + " " + styles.suptitle__left}
            >
              Surf
            </div>
            <div class={styles.slide__info__title}>North Shore</div>
            <div
              class={styles.slide__info__suptext + " " + styles.suptitle__left}
            >
              Condition
            </div>
            <div class={styles.slide__info__text}>Radical</div>
            <a href="#" class={styles.slide__info__link}>
              <img src={rightArrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class={styles.wrapper__slider__slide}>
          <div class={styles.slide__info}>
            <div
              class={styles.slide__info__suptitle + " " + styles.suptitle__left}
            >
              Surf
            </div>
            <div class={styles.slide__info__title}>South Shore</div>
            <div
              class={styles.slide__info__suptext + " " + styles.suptitle__left}
            >
              Condition
            </div>
            <div class={styles.slide__info__text}>Radical</div>
            <a href="#" class={styles.slide__info__link}>
              <img src={rightArrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class={styles.wrapper__slider__slide}>
          <div class={styles.slide__info}>
            <div
              class={styles.slide__info__suptitle + " " + styles.suptitle__left}
            >
              Surf
            </div>
            <div class={styles.slide__info__title}>West Shore</div>
            <div
              class={styles.slide__info__suptext + " " + styles.suptitle__left}
            >
              Condition
            </div>
            <div class={styles.slide__info__text}>Radical</div>
            <a href="#" class={styles.slide__info__link}>
              <img src={rightArrow} />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide class={styles.wrapper__slider__slide}>
          <div class={styles.slide__info}>
            <div
              class={styles.slide__info__suptitle + " " + styles.suptitle__left}
            >
              Surf
            </div>
            <div class={styles.slide__info__title}>East Shore</div>
            <div
              class={styles.slide__info__suptext + " " + styles.suptitle__left}
            >
              Condition
            </div>
            <div class={styles.slide__info__text}>Radical</div>
            <a href="#" class={styles.slide__info__link}>
              <img src={rightArrow} />
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FirstSlide;
