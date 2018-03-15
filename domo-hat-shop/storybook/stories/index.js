import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import HatDetail from "../../app/HatDetail";
import HatSwitcher from '../../app/HatSwitcher';
import HatList from '../../app/HatList';

const hatDescription = `
Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.

Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.
`;

const hats = [
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
  },
];

storiesOf("Hat Shop", module)
  .add("Hat switcher", () => <HatSwitcher hats={hats} />)
  .add("Hat list", () => <HatList hats={hats} />)
  .add("Hat details", () => <HatDetail hat={hats[0]} />)
  .add("Hat details - Jack", () => <HatDetail hat={hats[1]} />);
