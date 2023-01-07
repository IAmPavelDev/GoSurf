import styles from "./Sleep.module.scss";
import { Accessor, createEffect, For } from "solid-js";
import SleepLogoTitle from "../../images/SleepLogoTitle.svg";
import { Swiper, SwiperSlide } from "swiper/solid";
import { EffectFade, Navigation } from "swiper";
import BeachDataArray, { TBeachInfo } from "../../BeachDataArray";
import Hammock from "../../images/Hammock.png";
import FrangipaniSmall from "../../images/Frangipani Copy.png";
import FrangipaniBig from "../../images/Frangipani.png";
import RightArrow from "../../images/arrows/rightArrow.svg";
import Stars from "./../../images/Star.svg";
import SleepSlide from "./SleepSlide";
import { Controls } from "./Controls";

const Sleep = () => {
  let buffer: Element;
  let currentSlide: number = 0;
  let updateCallbackArr: Array<
    (type: "+" | "-", field: "nights" | "guests") => void
  > = [];

  createEffect(() => {
    document
      .getElementsByClassName("swiper-button-prev")[3]
      .classList.add(styles.slide__nav__prev);
    document
      .getElementsByClassName("swiper-button-next")[3]
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
            <img src={SleepLogoTitle} alt={"sleep title text logo"} />
          </div>
        </div>
      </div>
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={50}
        speed={2000}
        slidesPerView={1}
        class={styles.wrapper__slider}
        navigation={true}
        effect="fade"
        onSlideChange={(e) => {
          const airplanes = Array.from(
            document.getElementsByClassName(styles.airplane)
          );
          currentSlide = e.activeIndex;
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
        {BeachDataArray.map((data: TBeachInfo, index: number) => {
          return (
            <SwiperSlide>
              <div class={styles.wrapper__slider__slide}>
                <div
                  class={styles.slide__back}
                  style={{ "background-image": `url(${data.landscape})` }}
                ></div>
                <div class={styles.slide__mask}></div>
                <div class={styles.slide__data}>
                  <div class={styles.slide__data__label}>Rating</div>
                  <div class={styles.slide__data__title}>
                    Excellent <img src={Stars} alt={"stars icons"} />
                  </div>
                </div>
                <div class={styles.slide__title__right}>
                  <div>
                    <div class={styles.label}>Resorts</div>
                    <div class={styles.location}>
                      {data.beach} <span>|</span> {data.country}
                    </div>
                  </div>

                  <div class={styles.images__container}>
                    <img class={styles.hammock} src={Hammock} alt={"hammock"} />
                    <img
                      class={styles.frangipani}
                      src={FrangipaniSmall}
                      alt={"FrangipaniSmall"}
                    />
                  </div>
                </div>
              </div>
              <div class={styles.slide__bottom}>
                <div class={styles.slide__bottom__data}>
                  <SleepSlide
                    data={data}
                    updateCallbackPass={(updateCallback) =>
                      (updateCallbackArr[index] = updateCallback)
                    }
                  />
                </div>
                <div class={styles.slide__bottom__btn}>
                  <div class={styles.book}>Book</div>
                  <span class={styles.stick}></span>
                  <div class={styles.flight}>
                    Stay
                    <img src={RightArrow} alt={"right arrow"} />
                  </div>
                  <img
                    class={styles.frangipaniBig}
                    src={FrangipaniBig}
                    alt={"FrangipaniBig"}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <For each={BeachDataArray}>
          {(data: TBeachInfo, index: Accessor<number>) => {
            return (
              <>
                <div class={"nightCtl"}>
                  <Controls
                    incr={() => updateCallbackArr[currentSlide]("+", "nights")}
                    decr={() => updateCallbackArr[currentSlide]("-", "nights")}
                    ctlBlockId={index()}
                  />
                </div>
                <div class={"guestCtl"}>
                  <Controls
                    incr={() => updateCallbackArr[currentSlide]("+", "guests")}
                    decr={() => updateCallbackArr[currentSlide]("-", "guests")}
                    ctlBlockId={index()}
                  />
                </div>
              </>
            );
          }}
        </For>
      </Swiper>
      <div class={styles.wrapper__airplane}></div>
    </div>
  );
};

export default Sleep;
