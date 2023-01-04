import styles from "./Sleep.module.scss";
import { Component, createEffect, createSignal } from "solid-js";
import BeachDataArray, { TBeachInfo } from "../../BeachDataArray";
import Minus from "./../../images/Minus.svg";
import Plus from "./../../images/Plus.svg";

const SleepSlide: Component<{
  data: TBeachInfo;
  updateCallbackPass: (
    callBack: (type: "+" | "-", field: "nights" | "guests") => void
  ) => void;
}> = ({ data, updateCallbackPass }) => {
  const [localData, setLocalData] = createSignal<TBeachInfo>(data);
  const updateCallback = (type: "+" | "-", field: "nights" | "guests") => {
    if (type === "-" && localData()[field] < 2) return;

    const newData: TBeachInfo = {
      ...localData(),
      [field]: localData()[field] + (type === "+" ? 1 : -1),
      nightPrice:
        (
          parseInt(data.nightPrice.slice(0, -4)) *
          (localData()[field] + (type === "+" ? 1 : -1)) *
          (field === "nights" ? localData()["guests"] : localData()["nights"])
        )
          .toFixed(0)
          .toString() + " USD",
    };

    setLocalData(newData);
  };

  updateCallbackPass(updateCallback);

  return (
    <>
      <div class={styles.data__destination + " " + styles.data__container}>
        <div class={styles.destination__label + " " + styles.data__label}>
          Resort
        </div>
        {data.country}
      </div>
      <div
        class={styles.data__distance + " " + styles.data__container + " nights"}
      >
        <div class={styles.distance__label + " " + styles.data__label}>
          # of nights
        </div>
        {localData().nights}
      </div>
      <div class={styles.data__time + " " + styles.data__container + " guests"}>
        <div class={styles.time__label + " " + styles.data__label}>
          # of guests
        </div>
        {localData().guests}
      </div>
      <div class={styles.data__pricing + " " + styles.data__container}>
        <div class={styles.pricing__label + " " + styles.data__label}>
          Pricing
        </div>
        {localData().nightPrice}
      </div>
    </>
  );
};

export default SleepSlide;
