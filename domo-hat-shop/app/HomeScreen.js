import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { HatListScreen } from "./HatList";
import { HatGridScreen } from "./HatGrid";
import { HatSwitcherScreen } from "./HatSwitcher";
import { MyShotsScreen } from "./MyShots";
import About from "./About";
import { manyHats } from "../Data";

const HomeTabs = TabNavigator(
  {
    TryHat: {
      screen: HatSwitcherScreen
    },
    AllHats: {
      screen: HatGridScreen
      // screen: HatListScreen,
    },
    MyShots: {
      screen: MyShotsScreen
    },
    About: {
      screen: About
    }
  },
  {
    initialRouteName: "TryHat",
    initialRouteParams: { hats: manyHats, index: 0 },
    swipeEnabled: false,
    animationEnabled: false
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
