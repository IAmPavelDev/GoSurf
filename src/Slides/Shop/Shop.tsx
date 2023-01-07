import styles from "./Shop.module.scss";
import ShopLogoTitle from "./../../images/ShopLogoTitle.png";
import RightArrow from "./../../images/arrows/rightArrow.svg";
import Stars from "./../../images/Star.svg";
import { Swiper, SwiperSlide } from "swiper/solid";
import { Navigation } from "swiper";
import { createEffect } from "solid-js";
import { ShopDataArray, TShopData } from "../../ShopDataArray";
const Shop = () => {
  const displayedSlides: Element[] = [];

  const toggleActiveClass = (slides: Element[], activeIndex: number) => {
    for (const slide of slides) {
      slide.classList.remove(styles.slide__active);
      slide.classList.remove(styles.slide__next);
      slide.classList.remove(styles.slide__last);
      slide.classList.add(styles.slide__everyOne);
    }
    setTimeout(() => {
      for (const slide of slides) {
        (slide as HTMLElement).style.opacity = "0";
        slide.classList.remove(styles.slide__active);
        slide.classList.remove(styles.slide__next);
        slide.classList.remove(styles.slide__last);
        slide.classList.remove(styles.slide__everyOne);
      }
      slides[activeIndex].classList.add(styles.slide__active);
      slides[activeIndex + 1].classList.add(styles.slide__next);
      slides[activeIndex + 2].classList.add(styles.slide__last);
    }, 0);
  };

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
    [0, 1, 2].forEach((index) => {
      displayedSlides[index] = Array.from(
        (
          document.getElementsByClassName(
            styles.wrapper__slider
          )[0] as HTMLElement
        ).children[0].children
      )[index];
    });
    toggleActiveClass(
      Array.from(
        (
          document.getElementsByClassName(
            styles.wrapper__slider
          )[0] as HTMLElement
        ).children[0].children
      ),
      0
    );
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
        speed={0}
        slidesPerView={3}
        class={styles.wrapper__slider}
        navigation={true}
        loop={true}
        // effect="fade"
        onSlideChange={(e) => {
          displayedSlides[0] = e.slides[e.activeIndex];
          displayedSlides[1] = e.slides[e.activeIndex + 1];
          displayedSlides[2] = e.slides[e.activeIndex + 2];
          document
            .getElementsByClassName(styles.wrapper__slider)[0]
            .classList.add(styles.fadeInAni);
          setTimeout(() => {
            document
              .getElementsByClassName(styles.wrapper__slider)[0]
              .classList.remove(styles.fadeInAni);
          }, 1300);
          toggleActiveClass(Array.from(e.slides), e.activeIndex);
        }}
      >
        {ShopDataArray.map((data: TShopData) => {
          return (
            <SwiperSlide class={styles.swiper__slide}>
              <div class={styles.wrapper__slider__slide}>
                <div class={styles.slide__data}>
                  <div class={styles.slide__data__title}>
                    <div class={styles.title__label}>Style</div>
                    <div class={styles.title__data}>
                      {data.title.split("\n").map((s) => {
                        return (
                          <div>
                            {s}
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div class={styles.slide__data__rate}>
                    <img src={Stars} alt={"rate stars"} />
                  </div>
                  <div class={styles.slide__data__price}>${data.price}</div>
                  <div class={styles.slide__bottom}>
                    <div class={styles.slide__bottom__btn}>
                      <div class={styles.go}>Drop</div>
                      <span class={styles.stick}></span>
                      <div class={styles.surf}>
                        In
                        <img src={RightArrow} alt={"right arrow"} />
                      </div>
                    </div>
                  </div>
                </div>
                <div class={styles.slide__image}>
                  <img src={data.image} alt={"slide stuff picture"} />
                </div>
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
