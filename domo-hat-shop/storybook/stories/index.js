import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import HatDetail from "../../app/HatDetail";
import HatSwitcher from "../../app/HatSwitcher";
import HatList from "../../app/HatList";
import HatGrid from "../../app/HatGrid";
import HomeScreen from "../../app/HomeScreen";
import { hats, manyHats } from "../../Data.js";

storiesOf("Hat Shop", module)
  .add("Home", () => <HomeScreen hats={hats} />)
  .add("Hat switcher", () => <HatSwitcher hats={hats} index={0} />)
  .add("Hat switcher long name", () => <HatSwitcher hats={hats} index={2} />)
  .add("Hat List", () => <HatList hats={manyHats} />)
  .add("Hat Grid", () => <HatGrid hats={manyHats} />)
  .add("Hat details", () => <HatDetail hat={hats[0]} />)
  .add("Hat details - Jack", () => <HatDetail hat={hats[1]} />);
