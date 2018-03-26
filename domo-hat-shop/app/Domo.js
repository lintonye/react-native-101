import React, { PureComponent } from "react";
import { View, Image, Animated, Dimensions } from "react-native";
import DomoPng from "./images/domo.png";
import styled from "styled-components";
import Hat from "./Hat";

const StyledHat = styled(Animated.createAnimatedComponent(Hat))``;

const HatContainer = styled(Animated.View)`
  position: absolute;
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

const AnimatedHat = ({ position, type, size, index, editedStyle }) => {
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
  const containerLeft = Animated.add(
    Animated.multiply(scaledSize, 1.4),
    editedStyle ? editedStyle.translateX : 0
  );
  const containerTop = Animated.add(
    20,
    editedStyle ? editedStyle.translateY : 0
  );
  return (
    <HatContainer
      style={{
        opacity,
        left: containerLeft,
        top: containerTop,
        transform: [{ translateX }, { translateY }, { rotate }]
      }}
    >
      <StyledHat
        type={type}
        size={size}
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

const AnimatedDomo = ({ position, source, size, index, style }) => {
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [2 * size, 0, -2 * size]
  });
  const opacity = position.interpolate({
    inputRange: [index - 1, index - 0.6, index, index + 0.6, index + 1],
    outputRange: [0, 1, 1, 1, 0]
  });
  return (
    <DomoImage
      source={source}
      size={size}
      style={[
        {
          opacity,
          transform: [{ translateX }]
        },
        style
      ]}
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
    const {
      hats,
      index,
      position = new Animated.Value(0),
      poses,
      poseIndex,
      posePosition = new Animated.Value(0),
      hatStyleInEdit
    } = this.props;
    const domoSize = this.state.windowSmallerSide * 0.8;
    const pose = poses[poseIndex];
    const hatScale =
      (pose && pose.hatStyle && pose.hatStyle.scale) ||
      (hatStyleInEdit && hatStyleInEdit.scale) ||
      1;
    const hatSize = this.state.windowSmallerSide * 0.3;
    const containerSize = domoSize * 1.1;
    const domoLeft = (containerSize - domoSize) / 2;
    const domoTop = domoLeft;
    return (
      <Container size={containerSize}>
        {poses.map((pose, idx) => {
          const source = pose.image || { uri: pose.uri };
          return Math.abs(poseIndex - idx) > 1 ? null : (
            <AnimatedDomo
              index={idx}
              key={idx}
              source={source}
              position={posePosition}
              size={domoSize}
              style={{ left: domoLeft, top: domoTop }}
            />
          );
        })}
        {hats.map(
          (hat, hatIdx) =>
            Math.abs(index - hatIdx) > 1 ? null : (
              <AnimatedHat
                index={hatIdx}
                key={hatIdx}
                type={hat.hatKey}
                position={position}
                size={hatSize}
                editedStyle={hatStyleInEdit || poses[poseIndex].hatStyle}
              />
            )
        )}
      </Container>
    );
  }
}
