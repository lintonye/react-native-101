import React from "react";
import {
  TabNavigator,
  StackNavigator,
  SwitchNavigator
} from "react-navigation";
import { HatListScreen } from "./HatList";
import { HatGridScreen } from "./HatGrid";
import { HatSwitcherScreen } from "./HatSwitcher";
import { MyShotsScreen } from "./MyShots";
import HatFitter from "./HatFitter";
import About from "./About";
// import { manyHats, poses } from "../Data";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import NavigationService from "./NavigationService";

const TryHat = SwitchNavigator({
  HatSwitcher: {
    screen: HatSwitcherScreen
  },
  HatFitter: {
    screen: HatFitter
  }
});

const HomeTabs = TabNavigator(
  {
    TryHat: {
      screen: TryHat
    },
    AllHats: {
      // screen: HatGridScreen
      screen: HatListScreen
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
    // initialRouteParams: { hats: manyHats, index: 0, poses, poseIndex: 0 },
    swipeEnabled: false,
    animationEnabled: false
  }
);

const Route = StackNavigator({
  HomeTabs: {
    screen: HomeTabs
  },
  HatDetail: {
    screen: HatSwitcherScreen
  }
});

export default props => (
  <ActionSheetProvider>
    <Route
      {...props}
      ref={ref => NavigationService.setTopLevelNavigator(ref)}
    />
  </ActionSheetProvider>
);
