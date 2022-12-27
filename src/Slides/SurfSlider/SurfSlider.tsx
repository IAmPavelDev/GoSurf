import styles from "./SurfSlider.module.scss";

import Slide from "./Slide/Slide";
import Malibu from "./../../images/SurfSlider/Malibu.png";
import Airlie from "./../../images/SurfSlider/Airlie.png";
import Cloud from "./../../images/SurfSlider/Cloud.png";
import Vieux from "./../../images/SurfSlider/Vieux.png";

import { Swiper, SwiperSlide } from "swiper/solid";
import { Autoplay, EffectCards, Navigation } from "swiper";
// import "swiper/css/autoplay";
import "swiper/css/navigation";

import { TSlideData } from "./types";
import { For } from "solid-js";

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
  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__navi}></div>
      <Swiper
        modules={[Navigation]}
        loop
        navigation
        autoplay={{
          delay: 25000,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        class={styles.wrapper__slider}
      >
        <For each={SliderDataArray}>
          {(data: TSlideData) => {
            return (
              <SwiperSlide class={styles.wrapper__slider__slide}>
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
