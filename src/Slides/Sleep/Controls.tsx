import styles from "./Sleep.module.scss";
import Minus from "../../images/Minus.svg";
import Plus from "../../images/Plus.svg";
import { createEffect } from "solid-js";

type Props = {
  incr: () => void;
  decr: () => void;
  ctlBlockId: number;
};

export function Controls({ incr, decr, ctlBlockId }: Props) {
  createEffect(() => {
    const nightsCtl: Element =
      document.getElementsByClassName("nightCtl")[ctlBlockId];
    const guestsCtl: Element | null =
      document.getElementsByClassName("guestCtl")[ctlBlockId];
    if (nightsCtl) {
      Array.from(document.getElementsByClassName("nights"))[
        ctlBlockId
      ].appendChild(nightsCtl);
    }
    if (guestsCtl) {
      Array.from(document.getElementsByClassName("guests"))[
        ctlBlockId
      ].appendChild(guestsCtl);
    }
  });
  return (
    <div class={styles.controls}>
      <div
        onClick={() => {
          decr();
        }}
      >
        <img src={Minus} alt={"minus btn"} />
      </div>
      <div
        onClick={() => {
          incr();
        }}
      >
        <img src={Plus} alt={"plus btn"} />
      </div>
    </div>
  );
}
