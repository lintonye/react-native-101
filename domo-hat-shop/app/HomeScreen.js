import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { HatListScreen } from "./HatList";
import { HatGridScreen } from "./HatGrid";
import { HatSwitcherScreen } from "./HatSwitcher";
import ShopMap from "./ShopMap";
import ShoppingCart from "./ShoppingCart";
import { manyHats } from "../Data";

const HomeTabs = TabNavigator(
  {
    Hats: {
      screen: HatGridScreen
      // screen: HatListScreen,
    },
    Map: {
      screen: ShopMap
    },
    ShoppingCart: {
      screen: ShoppingCart
    }
  },
  {
    initialRouteName: "Hats",
    initialRouteParams: { hats: manyHats }
  }
);

export default StackNavigator({
  HomeTabs: {
    screen: HomeTabs
  },
  HatDetail: {
    screen: HatSwitcherScreen
  }
});
