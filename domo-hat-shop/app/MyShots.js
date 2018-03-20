import React, { Component } from "react";
import { Text } from "react-native";

export default class MyShots extends Component {
  render() {
    return <Text>My Shots</Text>;
  }
}

export const MyShotsScreen = () => <MyShots />;

MyShotsScreen.navigationOptions = {
  title: "My Shots"
};
