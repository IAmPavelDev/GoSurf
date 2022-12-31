import { createUniqueId } from "solid-js";

import Australia from "./images/Travel/Australia.jpeg";
import Malibu from "./images/Travel/Malibu.jpg";
import Hawai from "./images/Travel/Hawai.jpg";
import Cuba from "./images/Travel/Cuba.jpeg";
import UK from "./images/Travel/UK.jpg";
import Brazil from "./images/Travel/Brazil.jpg";
import SouthAfrica from "./images/Travel/SouthAfrica.jpg";
import India from "./images/Travel/India.jpeg";

export type TBeachInfo = {
  beach: string;
  country: string;
  surf: string;
  tide: string;
  wind: string;
  id: string;
  landscape: string;
};

const BeachDataArray: TBeachInfo[] = [
  {
    beach: "Australia beach",
    country: "Australia",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Australia,
  },
  {
    beach: "Hawai beach",
    country: "Hawai",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Hawai,
  },
  {
    beach: "Malibu beach",
    country: "USA",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Malibu,
  },
  {
    beach: "Cuba beach",
    country: "Cuba",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Cuba,
  },
  {
    beach: "Brazil beach",
    country: "Brazil",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Brazil,
  },
  {
    beach: "England beach",
    country: "UK",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: UK,
  },
  {
    beach: "South Africa beach",
    country: "South Africa",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: SouthAfrica,
  },
  {
    beach: "India beach",
    country: "India",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: India,
  },
];
export default BeachDataArray;
