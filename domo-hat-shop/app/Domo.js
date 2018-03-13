import React, { PureComponent } from "react";
import { View, Image, Animated } from "react-native";
import DomoImg from "./images/domo.png";
import styled from "styled-components";

const hats = {
  cap: require("./images/hat-cap.png"),
  harry: require("./images/hat-harry.png"),
  pirate: require("./images/hat-pirate.png"),
  lepricon: require("./images/hat-lepricon.png"),
  propeller: require("./images/hat-propeller.png")
};

const Hat = styled(Animated.Image)`
  position: absolute;
  left: 120px;
  top: -260px;
`;

const AnimatedHat = ({ progress, source }) => {
  const rotate = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-360deg", `0deg`, `360deg`]
  });
  const translateX = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-200, 0, 200]
  });
  const translateY = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-50, 0, -50]
  });
  const opacity = progress.interpolate({
    inputRange: [-1, -0.6, 0, 0.6, 1],
    outputRange: [0, 1, 1, 1, 0]
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
  render() {
    const { hatLeft, hat, hatRight, transitionProgress } = this.props;
    const hatLeftImg = hats[hatLeft];
    const hatImg = hats[hat];
    const hatRightImg = hats[hatRight];
    const hatLeftProgress = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, -1, -1]
    });
    const thisProgress = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0, -1]
    });
    const hatRightProgress = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 1, 0]
    });
    return (
      <View>
        <Image source={DomoImg} />
        <View>
          <AnimatedHat source={hatLeftImg} progress={hatLeftProgress} />
          <AnimatedHat source={hatRightImg} progress={hatRightProgress} />
          <AnimatedHat source={hatImg} progress={thisProgress} />
        </View>
      </View>
    );
  }
}
