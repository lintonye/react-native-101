import React, { PureComponent } from "react";
import { View, Image, Animated, Dimensions } from "react-native";
import DomoPng from "./images/tree_point.png";
import styled from "styled-components";

const HatContainer = styled(Animated.View)`
  position: absolute;
  left: 90px;
  top: -40px;
  /* background: red; */
`;

const DomoImage = styled(Animated.Image)`
  position: absolute;
  width: ${props => props.size || 200}px;
  height: ${props => props.size || 200}px;
`;

const Container = styled.View`
  width: ${props => props.size || 200}px;
  height: ${props => props.size || 200}px;
`;

const AnimatedHat = ({ position, hatImage, size, index, editedStyle }) => {
  const rotate = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: ["360deg", `0deg`, `-360deg`]
  });
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [250, 0, -250]
  });
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-100, 0, -100]
  });
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.6, index, index + 0.6, index + 1],
    outputRange: [0, 1, 1, 1, 0]
  });
  const innerStyle = editedStyle && {
    transform: [{ rotate: editedStyle.rotate }]
  };
  const scaledSize = editedStyle
    ? Animated.multiply(size, editedStyle.scale)
    : size;
  const halfSizeDelta = Animated.multiply(
    Animated.divide(Animated.add(scaledSize, -size), 2),
    -1
  );
  return (
    <HatContainer
      style={{
        opacity,
        transform: [{ translateX }, { translateY }, { rotate }]
      }}
    >
      <Animated.Image
        source={hatImage}
        style={[
          {
            width: scaledSize,
            height: scaledSize
          },
          innerStyle
        ]}
      />
    </HatContainer>
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
    const { hats, index, position = new Animated.Value(0) } = this.props;
    const domoSize = this.state.windowSmallerSide * 0.8;
    const hatScale = 1;
    const hatSize = this.state.windowSmallerSide * 0.3;
    const containerSize = domoSize * 1.1;
    const domoLeft = (containerSize - domoSize) / 2;
    const domoTop = domoLeft;
    return (
      <Container size={containerSize}>
        <DomoImage source={DomoPng} size={domoSize} />
        {hats.map(
          (hat, hatIdx) =>
            Math.abs(index - hatIdx) > 1 ? null : (
              <AnimatedHat
                index={hatIdx}
                key={hatIdx}
                hatImage={hat.image}
                position={position}
                size={hatSize}
              />
            )
        )}
      </Container>
    );
  }
}
