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
    hatKey: `harry`,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    description: hatDescription
  },
  {
    name: `Jack's hat`,
    price: 25,
    hatKey: `pirate`,
    rating: 4,
    ratingCount: 42,
    soldCount: 42,
    description: hatDescription
  },
  {
    name: `Propeller really long name long name`,
    price: 45,
    hatKey: `propeller`,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    description: hatDescription
  },
  {
    name: `Lepricon`,
    price: 35,
    hatKey: `lepricon`,
    rating: 5,
    ratingCount: 42,
    soldCount: 42,
    description: hatDescription
  },
  {
    name: `Propeller`,
    price: 45,
    hatKey: `propeller`,
    rating: 3,
    ratingCount: 42,
    soldCount: 42,
    description: hatDescription
  }
];

export const manyHats = hats
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats)
  .concat(hats);
