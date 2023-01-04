import styles from "./Travel.module.scss";
import TravelLogoTitle from "./../../images/TravelLogoTitle.svg";
import { Swiper, SwiperSlide } from "swiper/solid";
import BeachDataArray, { TBeachInfo } from "../../BeachDataArray";
import { createEffect, For } from "solid-js";
import { Autoplay, EffectFade, Navigation } from "swiper";
import "./styles.scss";
import Airplane from "./../../images/airplane.png";
import RightArrow from "./../../images/arrows/rightArrow.svg";

const Travel = () => {
  let buffer: Element;

  createEffect(() => {
    document
      .getElementsByClassName("swiper-button-prev")[2]
      .classList.add(styles.slide__nav__prev);
    document
      .getElementsByClassName("swiper-button-next")[2]
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
            <img src={TravelLogoTitle} alt={"travel logo"} />
            <div class={styles.small}>Travel</div>
          </div>
        </div>
      </div>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        spaceBetween={50}
        speed={2000}
        slidesPerView={1}
        class={styles.wrapper__slider}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        effect="fade"
        onSlideChange={(e) => {
          const airplanes = Array.from(
            document.getElementsByClassName(styles.airplane)
          );
          airplanes[e.activeIndex].classList.remove(styles.airplane__active);
          airplanes[e.activeIndex].classList.remove(styles.airplane__out);
          if (buffer) {
            buffer.classList.remove(styles.airplane__out);
            buffer.classList.remove(styles.airplane__active);
            buffer.classList.add(styles.airplane__out);
          }

          airplanes[e.activeIndex].classList.add(styles.airplane__active);
          buffer = airplanes[e.activeIndex];
        }}
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
                    <div>
                      <div class={styles.label}>Shore</div>
                      <div class={styles.location}>
                        {data.beach} <span>|</span> {data.country}
                      </div>
                    </div>

                    <div id="airplane" class={styles.airplane}>
                      <img src={Airplane} />
                    </div>
                  </div>
                </div>
                <div class={styles.slide__bottom}>
                  <div class={styles.slide__bottom__data}>
                    <div
                      class={
                        styles.data__destination + " " + styles.data__container
                      }
                    >
                      <div
                        class={
                          styles.destination__label + " " + styles.data__label
                        }
                      >
                        Destination
                      </div>
                      {data.country}
                    </div>
                    <div
                      class={
                        styles.data__distance + " " + styles.data__container
                      }
                    >
                      <div
                        class={
                          styles.distance__label + " " + styles.data__label
                        }
                      >
                        Distance
                      </div>
                      {data.distance}
                    </div>
                    <div
                      class={styles.data__time + " " + styles.data__container}
                    >
                      <div
                        class={styles.time__label + " " + styles.data__label}
                      >
                        Travel time
                      </div>
                      {data.time}
                    </div>
                    <div
                      class={
                        styles.data__pricing + " " + styles.data__container
                      }
                    >
                      <div
                        class={styles.pricing__label + " " + styles.data__label}
                      >
                        Pricing
                      </div>
                      {data.planePricing}
                    </div>
                  </div>
                  <div class={styles.slide__bottom__btn}>
                    <div class={styles.book}>Book</div>
                    <span class={styles.stick}></span>
                    <div class={styles.flight}>
                      Flight
                      <img src={RightArrow} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }}
        </For>
      </Swiper>
      <div class={styles.wrapper__airplane}></div>
    </div>
  );
};

export default Travel;
