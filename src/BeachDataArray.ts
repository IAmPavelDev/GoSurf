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
  distance: string;
  time: string;
  planePricing: string;
  nights: number;
  guests: number;
  nightPrice: string;
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
    distance: "7,065",
    time: "23 hours 10 minutes",
    planePricing: "1,976 USD",
    guests: 1,
    nights: 1,
    nightPrice: "220 USD",
  },
  {
    beach: "Hawai beach",
    country: "Hawai",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Hawai,
    distance: "6,265",
    time: "21 hours 14 minutes",
    planePricing: "5,373 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
  {
    beach: "Malibu beach",
    country: "USA",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Malibu,
    distance: "2,365",
    time: "20 hours 13 minutes",
    planePricing: "1,976 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
  {
    beach: "Cuba beach",
    country: "Cuba",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Cuba,
    distance: "8,043",
    time: "23 hours 10 minutes",
    planePricing: "6,331 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
  {
    beach: "Brazil beach",
    country: "Brazil",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: Brazil,
    distance: "9,065",
    time: "26 hours 10 minutes",
    planePricing: "1,332 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
  {
    beach: "England beach",
    country: "UK",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: UK,
    distance: "3,065",
    time: "5 hours 40 minutes",
    planePricing: "7,736 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
  {
    beach: "South Africa beach",
    country: "South Africa",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: SouthAfrica,
    distance: "5,065",
    time: "2 hours 50 minutes",
    planePricing: "4,976 USD",
    nights: 1,
    nightPrice: "220 USD",
    guests: 1,
  },
  {
    beach: "India beach",
    country: "India",
    surf: "9-13",
    tide: "+2.3",
    wind: "4 SE",
    id: createUniqueId(),
    landscape: India,
    distance: "3,065",
    time: "12 hours 14 minutes",
    planePricing: "1,575 USD",
    guests: 1,
    nightPrice: "220 USD",
    nights: 1,
  },
];
export default BeachDataArray;
