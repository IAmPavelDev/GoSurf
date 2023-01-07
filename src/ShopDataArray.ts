import SurfBoard from "./images/Surfboard.png";
import Wax from "./images/Wax.png";
import Bracelet from "./images/Bracelet.png";
import { createUniqueId } from "solid-js";

export type TShopData = {
  title: string;
  price: string;
  rate: number;
  image: string;
  points: Array<{
    id: string;
    text: string;
  }>;
};

export const ShopDataArray: TShopData[] = [
  {
    title: "North Nugget TT\n" + "Surfboard",
    rate: 5,
    price: "799",
    image: SurfBoard,
    points: [
      {
        id: createUniqueId(),
        text: "Double Concave with\n" + "Vee Shape low point",
      },
    ],
  },
  {
    title: "Sex Wax",
    rate: 3,
    price: "24",
    image: Wax,
    points: [
      {
        id: createUniqueId(),
        text: "Double Concave with\n" + "Vee Shape low point",
      },
    ],
  },
  {
    title: "Pura Vida",
    rate: 4,
    price: "27",
    image: Bracelet,
    points: [
      {
        id: createUniqueId(),
        text: "Double Concave with\n" + "Vee Shape low point",
      },
    ],
  },
];
