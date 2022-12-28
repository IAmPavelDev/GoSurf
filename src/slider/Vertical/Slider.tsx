import { Component, createEffect, createSignal, JSX } from "solid-js";

import styles from "./Slider.module.scss";

import clearDraggable from "../clearDraggable";

const Slider: Component<{
  children: JSX.Element[];
  slidesToDisplay?: number;
  useDragToSwipe?: boolean;
}> = ({ children, slidesToDisplay = 1, useDragToSwipe = false }) => {
  const [slides, setSlides] = createSignal(children);

  let isMouseDown: boolean = false; //is mouse key pressed flag
  let slideHeightArray: Array<number> = []; //contain height of every single slide by index from 0 to children.length
  let currentSlide = 1; //number of currently displaying slide, from 1 to children.length + 1

  const getHeightToShift = (direction: "prev" | "next"): number => {
    return slideHeightArray
      .slice(0, direction === "prev" ? currentSlide - 2 : currentSlide)
      .reduce((acc, h) => acc + h, 0);
  };

  const next = () => {
    const track = document.getElementById("slides__track");
    if (track) {
      track.style.transition = "all 0.6s";
    }
    if (track && currentSlide < children.length) {
      track.style.transform = `translateY(${-getHeightToShift("next")}px)`;
      currentSlide++;
    }
  };
  const prev = () => {
    const track = document.getElementById("slides__track");
    track && (track.style.transition = "all 0.6s");
    if (track && currentSlide >= 2) {
      track.style.transform = `translateY(${-getHeightToShift("prev")}px)`;
      currentSlide--;
    }
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
        // (slide as HTMLElement).style.height = `${
        //   window.innerHeight / slidesToDisplay
        // }px`;
        slideHeightArray.push(
          Number(window.getComputedStyle(slideH).height.slice(0, -2))
        );
        clearDraggable(slide as ChildNode);
        return slide;
      })
    );

    useDragToSwipe &&
      document
        ?.getElementById("slides__track")
        ?.addEventListener("mousedown", (e: MouseEvent) => {
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
    document
      ?.getElementById("slides__track")
      ?.addEventListener("wheel", (e: WheelEvent) => {
        e.deltaY > 0 ? next() : prev();
      });
  });
  return (
    <div class={styles.wrapper}>
      <div id="slides__track">{slides()}</div>
    </div>
  );
};

export default Slider;
