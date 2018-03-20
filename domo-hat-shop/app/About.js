import React, { Component } from "react";
import { Text } from "react-native";

export default class About extends Component {
  render() {
    return <Text>About</Text>;
  }
}

export const AboutScreen = () => <About />;

AboutScreen.navigationOptions = {
  title: "About"
};
