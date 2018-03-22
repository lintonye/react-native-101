import React, { Component } from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { HatListScreen } from "./HatList";
import { HatGridScreen } from "./HatGrid";
import { HatSwitcherScreen } from "./HatSwitcher";
import { MyShotsScreen } from "./MyShots";
import About from "./About";
import { manyHats, poses } from "../Data";
import _ from "lodash";

const HomeTabs = TabNavigator(
  {
    TryHat: {
      screen: HatSwitcherScreen
    },
    AllHats: {
      // screen: props => <HatGridScreen hats={manyHats} {...props} />
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

export default class HomeScreen extends Component {
  state = {
    hats: manyHats,
    poses,
    index: 0,
    poseIndex: 0
  };
  setIndices = ({ index, poseIndex }) => {
    const stateDelta = {};
    if (!_.isUndefined(index)) stateDelta.index = index;
    if (!_.isUndefined(poseIndex)) stateDelta.poseIndex = poseIndex;
    //TODO optimize
    this.setState(stateDelta);
  };
  render() {
    return (
      <Route screenProps={{ ...this.state, setIndices: this.setIndices }} />
    );
  }
}
