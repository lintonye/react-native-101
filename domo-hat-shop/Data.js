import hatWinter from "./images/hat_ball.png";
import hatCap from "./images/hat_cap.png";
import hatHarry from "./images/hat_harry.png";
import hatChef from "./images/hat_chef.png";
import hatPirate from "./images/hat_pirate.png";
import hatElegant from "./images/hat_elegant.png";

export const hats = [
  {
    key: "hatWinter",
    image: hatWinter,
    name: "Winter"
  },
  {
    key: "hatCap",
    image: hatCap,
    name: "Cap"
  },
  {
    key: "hatHarry",
    image: hatHarry,
    name: "Harry Potter"
  },
  {
    key: "hatChef",
    image: hatChef,
    name: "Chef"
  },
  {
    key: "hatPirate",
    image: hatPirate,
    name: "Pirate"
  },
  {
    key: "hatElegant",
    image: hatElegant,
    name: "Elegant"
  }
];

export const manyHats = hats
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .map((h, idx) => ({ ...h, key: idx }));
