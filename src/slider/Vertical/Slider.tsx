import { Component, createEffect, createSignal, JSX } from "solid-js";

import styles from "./Slider.module.scss";

import clearDraggable from "../clearDraggable";

export type controlTypes = {
  scrollToSlide: (numberOfSlide: number) => void;
  nextSlide: () => void;
  prevSlide: () => void;
};
const Slider: Component<{
  children: JSX.Element[];
  slidesToDisplay?: number;
  useDragToSwipe?: boolean;
  controller?: (controller: controlTypes) => void;
}> = ({
  children,
  slidesToDisplay = 1,
  useDragToSwipe = false,
  controller,
}) => {
  const [slides, setSlides] = createSignal(children);
  let slideTrack: HTMLDivElement | undefined;
  let isMouseDown: boolean = false; //is mouse key pressed flag
  const slideHeightArray: Array<number> = []; //contain height of every single slide by index from 0 to children.length
  let currentSlide = 1; //number of currently displaying slide, from 1 to children.length + 1
  let slideBlock: boolean = false;
  const getHeightToShift = (direction: "prev" | "next"): number => {
    // const height = slideHeightArray
    //   .slice(0, direction === "prev" ? currentSlide - 2 : currentSlide)
    //   .reduce((acc, h) => acc + h, 0);
    // return direction === "prev"
    //   ? height
    //   : height - (slideHeightArray[currentSlide - 1] - window.innerHeight);
    return slideHeightArray
      .slice(0, direction === "prev" ? currentSlide - 2 : currentSlide)
      .reduce((acc, h) => acc + h, 0);
  };

  const getPrevSlidesHeightsSum = () => {
    return slideHeightArray
      .slice(0, currentSlide - 1)
      .reduce((acc, h) => acc + h, 0);
  };
  const computeSlideHeight = () => {
    children.forEach((slide, index) => {
      slideHeightArray[index] = parseInt(
        window.getComputedStyle(slide as HTMLElement, null).height.slice(0, -2)
      );
    });
  };

  const isBottom = (): boolean =>
    !!(
      slideTrack &&
      Math.abs(parseInt(slideTrack.getBoundingClientRect().y.toFixed(0))) +
        window.innerHeight -
        getPrevSlidesHeightsSum() >=
        parseInt(slideTrack.getBoundingClientRect().height.toFixed(0))
    );
  const next = () => {
    slideTrack && (slideTrack.style.transition = `all 0.6s`);
    if (
      !(
        slideTrack &&
        currentSlide < children.length &&
        isBottom() &&
        !slideBlock
      )
    )
      return;
    slideTrack.style.transform = `translateY(${-getHeightToShift("next")}px)`;
    slideTrack.style.height = `${window.innerHeight}px`;
    setTimeout(() => {
      if (!slideTrack) return;
      slideTrack.style.height = `${slideHeightArray[currentSlide - 1]}px`;
      slideBlock = !slideBlock;
    }, 300);
    slideBlock = !slideBlock;
    currentSlide += 1;
  };
  const prev = () => {
    console.log(currentSlide);
    const isTop =
      slideTrack &&
      Math.abs(parseInt(slideTrack.getBoundingClientRect().y.toFixed(0))) <=
        getPrevSlidesHeightsSum();
    slideTrack &&
      (slideTrack.style.transition = `all ${
        slideHeightArray[currentSlide - 2] / 1800
      }s`);
    if (slideTrack && currentSlide >= 2 && isTop) {
      slideTrack.style.transform = `translateY(${-getHeightToShift("prev")}px)`;
      currentSlide--;
      slideTrack.style.height = `${slideHeightArray[currentSlide - 1]}px`;
    }
  };

  const scrollToSlide = (slide: number) => {
    computeSlideHeight();
    slideTrack &&
      (slideTrack.style.transition = `all ${Math.abs(slide - currentSlide)}s`);

    let shifter: number = slideHeightArray
      .slice(0, slide - 1)
      .reduce((acc, h) => acc + h, 0);

    if (slideTrack && slide - 1 < children.length && isBottom()) {
      slideTrack.style.transform = `translateY(${-shifter}px)`;
      const h = slideHeightArray[slide - 1];
      slideTrack.style.height = `${h}px`;
    }
    currentSlide = slide;
  };

  // const SliderFinalCorrector = (e: MouseEvent | WheelEvent) => {
  //   const target = e.currentTarget as HTMLElement;
  //   currentSlide = Number(
  //     (Number(target.style.transform.slice(12, -3)) / slideHeight + 1).toFixed(
  //       0
  //     )
  //   );
  //   slideHeight = Number(
  //     window
  //       .getComputedStyle(children[currentSlide - 1] as HTMLElement)
  //       .height.slice(0, -2)
  //   );
  //   const getCorrection = () => {
  //     if (currentSlide > children.length) {
  //       return (children.length - 1) * slideHeight;
  //     }
  //     return slideHeight * (currentSlide - 1);
  //   };
  //   target.style.transition = "all 0.6s";
  //   // target.style.transform = `translateY(${-getCorrection()}px)`;

  //   isMouseDown = false;
  // };
  createEffect(() => {
    setSlides(
      children.map((slide) => {
        const slideH: HTMLElement = slide as HTMLElement;

        slideH.classList.add(styles.slide);
        computeSlideHeight();
        clearDraggable(slide as ChildNode);
        return slide;
      })
    );
    if (controller) {
      controller({
        nextSlide: next,
        prevSlide: prev,
        scrollToSlide: (slide: number) => scrollToSlide(slide),
      });
    }
    slideTrack &&
      (slideTrack.style.height = `${slideHeightArray[currentSlide - 1]}px`);

    window.addEventListener("resize", () => {
      slideTrack &&
        (slideTrack.style.height = `${slideHeightArray[currentSlide - 1]}px`);
    });

    useDragToSwipe &&
      slideTrack?.addEventListener("mousedown", (e: MouseEvent) => {
        isMouseDown = true;
        const target = e.currentTarget as HTMLElement;
        target.style.transition = "transform 0s";
        // currentSlide = Number(
        //   (
        //     Number(target.style.transform.slice(12, -3)) / slideHeight +
        //     1
        //   ).toFixed(0)
        // );
      });

    // document
    //   ?.getElementById("slides__track")
    //   ?.addEventListener("mouseup", SliderFinalCorrector);
    // document
    //   ?.getElementById("slides__track")
    //   ?.addEventListener("mouseleave", SliderFinalCorrector);
    // document
    //   ?.getElementById("slides__track")
    //   ?.addEventListener("mouseout", SliderFinalCorrector);
    // document
    //   ?.getElementById("slides__track")
    //   ?.addEventListener("mousemove", (e: MouseEvent) => {
    //     const target = e.currentTarget as HTMLElement;
    //     const moveY =
    //       Number(target.style.transform.slice(11, -3)) + e.movementY;
    //     if (isMouseDown) target.style.transform = `translateY(${moveY}px)`;
    //   });
    slideTrack?.addEventListener("wheel", (e: WheelEvent) => {
      computeSlideHeight();
      e.deltaY > 0 ? next() : prev();
    });
  });
  return (
    <div class={styles.wrapper}>
      <div id="slides__track" ref={slideTrack}>
        {slides()}
      </div>
    </div>
  );
};

export default Slider;
