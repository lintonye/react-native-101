import React, { PureComponent } from "react";
import { View, Image, Animated, Dimensions } from "react-native";
import DomoPng from "./images/domo.png";
import styled from "styled-components";
import Hat from "./Hat";

const StyledHat = styled(Animated.createAnimatedComponent(Hat))`
  position: absolute;
  left: 50%;
  top: -610px;
  width: ${props => props.size || 120}px;
  height: ${props => props.size || 120}px;
`;

const DomoImage = styled.Image`
  width: ${props => props.size || 200}px;
  height: ${props => props.size || 200}px;
`;

/**
 * -1 - 0: hat moving to the left
 * 0  - 1: hat moving to the right
 */
const AnimatedHat = ({ position, type, size }) => {
  const rotate = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ["-360deg", `0deg`, `360deg`]
  });
  const translateX = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-2 * size, 0, 2 * size]
  });
  const translateY = position.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-0.8 * size, 0, -0.8 * size]
  });
  const opacity = position.interpolate({
    inputRange: [-1, -0.6, 0, 0.6, 1],
    outputRange: [0, 1, 1, 1, 0]
  });
  return (
    <StyledHat
      type={type}
      size={size}
      style={{
        opacity,
        transform: [{ translateX }, { translateY }, { rotate }]
      }}
    />
  );
};

export default class Domo extends PureComponent {
  state = {
    windowSmallerSide: Math.min(
      Dimensions.get("window").width,
      Dimensions.get("window").height
    )
  };
  dimensionHandler = ({ window, screen }) =>
    this.setState({ windowSmallerSide: Math.min(window.width, window.height) });
  componentDidMount = () => {
    Dimensions.addEventListener("change", this.dimensionHandler);
  };
  componentWillUnmount = () => {
    Dimensions.removeEventListener("change", this.dimensionHandler);
  };
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
    const domoSize = this.state.windowSmallerSide * 0.8;
    const hatSize = this.state.windowSmallerSide * 0.3;
    return (
      <View>
        <DomoImage source={DomoPng} size={domoSize} />
        <View>
          <AnimatedHat
            type={hatLeft}
            position={hatLeftPosition}
            size={hatSize}
          />
          <AnimatedHat
            type={hatRight}
            position={hatRightPosition}
            size={hatSize}
          />
          <AnimatedHat type={hat} position={thisPosition} size={hatSize} />
        </View>
      </View>
    );
  }
}
