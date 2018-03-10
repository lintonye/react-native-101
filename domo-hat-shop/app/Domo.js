import React, { PureComponent } from "react";
import { View, Image, Animated } from "react-native";
import DomoImg from "./images/domo.png";
import styled from "styled-components";

const hats = {
  cap: require("./images/hat_cap.png"),
  harry: require("./images/hat_harry.png"),
  pirate: require("./images/hat_pirate.png")
};

const Hat = styled(Animated.Image)`
  position: absolute;
  left: 120px;
  top: -10px;
`;

const AnimatedHat = ({ progress, source, fromLeft }) => {
  const direction = fromLeft ? -1 : 1;
  const rotate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["-180deg", "0deg"]
  });
  const translateX = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [200 * direction, 0]
  });
  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0]
  });
  const opacity = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });
  return (
    <Hat
      source={source}
      style={{
        opacity,
        transform: [{ translateX }, { translateY }, { rotate }]
      }}
    />
  );
};

export default class Domo extends PureComponent {
  state = {
    progress: new Animated.Value(0)
  };
  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1000
    }).start();
  }
  render() {
    const { hat } = this.props;
    const hatImg = hats[hat];
    return (
      <View>
        <Image source={DomoImg} />
        <AnimatedHat source={hatImg} progress={this.state.progress} />
      </View>
    );
  }
}
