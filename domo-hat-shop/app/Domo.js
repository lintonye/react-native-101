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
    outputRange: ['0deg', `-360deg`, `-720deg`]
  });
  const translateX = progress.interpolate({
    inputRange: [-1, -0.0001, 0, 1],
    outputRange: [0, -200, 200, 0]
  });
  const translateY = progress.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, -50, 0]
  });
  const opacity = progress.interpolate({
    inputRange: [-1, -0.7, 0, 0.7, 1],
    outputRange: [1, 1, 0, 1, 1]
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

// 0 => 1: prev: toLeft, hat: fromRight
// 1 => 0: prev: toRight, hat: fromLeft

export default class Domo extends PureComponent {
  render() {
    const { previousHat, hat, transitionProgress } = this.props;
    const previousHatImg = hats[previousHat];
    const hatImg = hats[hat];
    const prevProgress = transitionProgress.interpolate({
      inputRange: [-1, 0, 0.001, 1],
      outputRange: [0, 1, -1, 0]
    });
    const thisProgress = transitionProgress;
    return (
      <View>
        <Image source={DomoImg} />
        <View>
          <AnimatedHat source={previousHatImg} progress={prevProgress} />
          <AnimatedHat source={hatImg} progress={thisProgress} />
        </View>
      </View>
    );
  }
}
