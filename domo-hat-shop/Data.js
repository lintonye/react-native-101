import _ from "lodash";
import hatCap from "./images/hat-cap.png";
import hatHarry from "./images/hat-harry.png";
import hatLeprechaun from "./images/hat-leprechaun.png";
import hatPirate from "./images/hat-pirate.png";
import hatPropeller from "./images/hat-propeller.png";

export const hats = [
  {
    key: "hatCap",
    image: hatCap
  },
  {
    key: "hatHarry",
    image: hatHarry
  },
  {
    key: "hatLeprechaun",
    image: hatLeprechaun
  },
  {
    key: "hatPirate",
    image: hatPirate
  },
  {
    key: "hatPropeller",
    image: hatPropeller
  }
];

const hatsByCount = count =>
  _.flatten(
    Array(count / hats.length)
      .fill(0)
      .map(_ => hats)
  ).map((h, idx) => ({ ...h, key: idx }));

export const manyHats = hatsByCount(1000);
