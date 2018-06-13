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
    name: "Winter Hat With Ear Cover",
    price: 50
  },
  {
    key: "hatCap",
    image: hatCap,
    name: "Cap",
    price: 30
  },
  {
    key: "hatHarry",
    image: hatHarry,
    name: "Harry Potter",
    price: 29
  },
  {
    key: "hatChef",
    image: hatChef,
    name: "Chef",
    price: 70
  },
  {
    key: "hatPirate",
    image: hatPirate,
    name: "Pirate",
    price: 150
  },
  {
    key: "hatElegant",
    image: hatElegant,
    name: "Elegant",
    price: 250
  }
];

export const manyHats = hats
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .map((h, idx) => ({ ...h, key: idx }));
