import styles from "./SecondSlide.module.scss";

import LocationDots from "./../../images/locationDots";
import SurfLogoTitle from "./../../images/SurfLogoTitle.svg";
import Location from "./../../images/location.svg";
import PopUp from "./LocationPopUp/PopUp";
import { createUniqueId, For } from "solid-js";
import { TBeachInfo } from "./types";

const BeachDataArray: TBeachInfo[] = [
  {
    beach: "Airlie beach",
    country: "Australia",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "Hawai",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "USA",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "Cuba",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "Brazil",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "UK",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "South Africa",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
  {
    beach: "Airlie beach",
    country: "India",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
  },
];

let displayed: HTMLElement;
const hidePopUp = (e: MouseEvent) => {
  if (displayed) {
    const [x, y] = [e.clientX, e.clientY];
    const popUpRect = displayed.getBoundingClientRect();
    if (
      x < popUpRect.x ||
      x > popUpRect.x + popUpRect.width ||
      y < popUpRect.y ||
      y > popUpRect.y + popUpRect.height
    ) {
      displayed.classList.remove(styles.popUp__displayed);
      displayed.classList.add(styles.popUp__hidden);
    }
  }
};

const passLocation = (location: string, e: MouseEvent) => {
  for (const data of BeachDataArray) {
    if (data.country === location) {
      const target = document.getElementById(data.id);

      document.removeEventListener("click", hidePopUp);
      if (displayed) {
        displayed.classList.remove(styles.popUp__displayed);
        displayed.classList.add(styles.popUp__hidden);
      }

      if (target) {
        const y = document
          .getElementsByClassName(styles.wrapper__locationDots)[0]
          .getBoundingClientRect().y;

        target.classList.remove(styles.popUp);
        target.classList.remove(styles.popUp__hidden);
        target.classList.add(styles.popUp__displayed);

        target.style.left = `${e.clientX - 100}px`;
        target.style.top = `${e.clientY - y - target.offsetHeight - 20}px`;
        displayed = target;
        document.addEventListener("click", hidePopUp);
      }
    }
  }
};

const SecondSlide = () => {
  return (
    <div class={styles.wrapper}>
      <div class={styles.wrapper__title}>
        <div class={styles.wrapper__title__left}>
          <div class={styles.big}>
            <img src={SurfLogoTitle} />
            <div class={styles.small}>Surf</div>
          </div>
        </div>
        <div class={styles.wrapper__title__right}>
          <div class={styles.label}>Current Location</div>
          <div class={styles.location}>
            California <span>|</span> USA
          </div>
          <img class={styles.locationLogo} src={Location} />
        </div>
      </div>
      <div class={styles.wrapper__locationDots}>
        <LocationDots passLocation={passLocation} />
        <For each={BeachDataArray}>
          {(beachData) => {
            return (
              <div id={beachData.id} class={styles.popUp}>
                <PopUp data={beachData} />
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};

export default SecondSlide;
