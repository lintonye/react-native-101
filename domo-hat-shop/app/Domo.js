import React, { PureComponent } from "react";
import { View, Image, Animated, Dimensions } from "react-native";
import DomoPng from "./images/domo.png";
import styled from "styled-components";
import Hat from "./Hat";

const StyledHat = styled(Animated.createAnimatedComponent(Hat))`
  position: absolute;
  left: ${props => props.size * 1.4}px;
  top: 0;
  width: ${props => props.size || 120}px;
  height: ${props => props.size || 120}px;
`;

const DomoImage = styled.Image`
  width: ${props => props.size || 200}px;
  height: ${props => props.size || 200}px;
`;

const AnimatedHat = ({ position, type, size, index }) => {
  const rotate = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: ["360deg", `0deg`, `-360deg`]
  });
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [2 * size, 0, -2 * size]
  });
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-0.8 * size, 0, -0.8 * size]
  });
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.6, index, index + 0.6, index + 1],
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
    const { hats, index, position } = this.props;
    const domoSize = this.state.windowSmallerSide * 0.8;
    const hatSize = this.state.windowSmallerSide * 0.3;
    return (
      <View>
        <DomoImage source={DomoPng} size={domoSize} />
        {hats.map(
          (hat, hatIdx) =>
            Math.abs(index - hatIdx) > 1 ? null : (
              <AnimatedHat
                index={hatIdx}
                key={hatIdx}
                type={hat.hatKey}
                position={position}
                size={hatSize}
              />
            )
        )}
      </View>
    );
  }
}
