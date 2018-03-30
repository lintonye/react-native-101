const hatDescription = `
Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.

Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.
`;

export const hats = [
  {
    name: `Harry's hat`,
    price: 15,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_harry.png"),
    description: hatDescription
  },
  {
    name: `Jack's hat`,
    price: 25,
    rating: 4,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_pirate.png"),
    description: hatDescription
  },
  {
    name: `Propeller really long name long name`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_propeller.png"),
    description: hatDescription
  },
  {
    name: `Leprechaun`,
    price: 35,
    rating: 5,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_leprechaun.png"),
    description: hatDescription
  },
  {
    name: `Ball`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_ball.png"),
    description: hatDescription
  },
  {
    name: `Cap`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_cap.png"),
    description: hatDescription
  },
  {
    name: `Chef`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_chef.png"),
    description: hatDescription
  },
  {
    name: `Elegant`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_elegant.png"),
    description: hatDescription
  },
  {
    name: `Lady Flower`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_ladyFlower.png"),
    description: hatDescription
  },
  {
    name: `Police`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_police.png"),
    description: hatDescription
  },
  {
    name: `Wool`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_wool.png"),
    description: hatDescription
  },
  {
    name: `Christmas`,
    price: 45,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    image: require("./app/images/hat_xmas.png"),
    description: hatDescription
  }
];

export const poses = [
  {
    name: "0",
    image: require("./app/images/tree_thinker.png")
  },
  {
    name: "1",
    image: require("./app/images/tree_stand.png")
  },
  {
    name: "2",
    image: require("./app/images/tree_point.png")
  },
  {
    name: "3",
    image: require("./app/images/tree_pine.png")
  },
  {
    name: "3",
    image: require("./app/images/tree_little_girl.png")
  },
  {
    name: "3",
    image: require("./app/images/tree_hold.png")
  }
];

export const manyHats = hats
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats);
