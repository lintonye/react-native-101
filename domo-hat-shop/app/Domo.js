import React, { PureComponent } from "react";
import { View, Image, Animated } from "react-native";
import DomoPng from "./images/domo.png";
import styled from "styled-components";
import Hat from "./Hat";

const StyledHat = styled(Animated.createAnimatedComponent(Hat))`
  position: absolute;
  left: 150px;
  top: -305px;
  width: 120px;
  height: 120px;
`;

const DomoImage = styled.Image`
  width: 300px;
  height: 300px;
`;

/**
 * -1 - 0: hat moving to the left
 * 0  - 1: hat moving to the right
 */
const AnimatedHat = ({ position, type }) => {
  const rotate = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-360deg", `0deg`, `360deg`]
  });
  const translateX = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-200, 0, 200]
  });
  const translateY = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-50, 0, -50]
  });
  const opacity = position.interpolate({
    inputRange: [-1, -0.6, 0, 0.6, 1],
    outputRange: [0, 1, 1, 1, 0]
  });
  return (
    <StyledHat
      type={type}
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
    const hatLeftPosition = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, -1, -1]
    });
    const thisPosition = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 0, -1]
    });
    const hatRightPosition = transitionProgress.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [1, 1, 0]
    });
    return (
      <View>
        <DomoImage source={DomoPng} />
        <View>
          <AnimatedHat type={hatLeft} position={hatLeftPosition} />
          <AnimatedHat type={hatRight} position={hatRightPosition} />
          <AnimatedHat type={hat} position={thisPosition} />
        </View>
      </View>
    );
  }
}
