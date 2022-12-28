import styles from "./SurfSlider.module.scss";
import "./SurfSlider.scss";

import Slide from "./Slide/Slide";
import Malibu from "./../../images/SurfSlider/Malibu.png";
import Airlie from "./../../images/SurfSlider/Airlie.png";
import Cloud from "./../../images/SurfSlider/Cloud.png";
import Vieux from "./../../images/SurfSlider/Vieux.png";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Autoplay, EffectCards, Navigation } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { TSlideData } from "./types";
import { Accessor, createEffect, For } from "solid-js";

const SliderDataArray: TSlideData[] = [
  {
    title: "Malibu \n Beach",
    place: "California | USA",
    img: Malibu,
  },
  {
    title: "Airlie Beach",
    place: "Queensland | Australia",
    img: Airlie,
  },
  {
    title: "Cloud nine",
    place: "Siargao | Philippines",
    img: Cloud,
  },
  {
    title: "Vieux Boucau",
    place: "Hossegor | France",
    img: Vieux,
  },
];

const SurfSlider = () => {
  createEffect(() => {
    document
      .getElementsByClassName("swiper-button-prev")[1]
      .classList.add(styles.slide__nav__prev);

    document
      .getElementsByClassName("swiper-button-next")[1]
      .classList.add(styles.slide__nav__next);
  });

  return (
    <div class={styles.wrapper}>
      <Swiper
        modules={[Autoplay, Navigation]}
        loop
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        class={styles.wrapper__slider}
      >
        <For each={SliderDataArray}>
          {(data: TSlideData, index: Accessor<number>) => {
            const shift =
              index() === 0
                ? 50
                : index() === 1 || index() === 3
                ? 0
                : index() === 2
                ? 100
                : 0;

            return (
              <SwiperSlide
                class={styles.wrapper__slider__slide}
                style={{ transform: `translateY(${shift}px)` }}
              >
                <Slide data={data} />
              </SwiperSlide>
            );
          }}
        </For>
      </Swiper>
    </div>
  );
};

export default SurfSlider;
