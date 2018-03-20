import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button, Animated } from "react-native";
import Domo from "./Domo";

const Container = styled.View`
  padding: 16px;
  align-items: center;
`;

const NameContainer = styled(Animated.View)`
  margin: 16px;
`;

const Name = styled.Text`
  font-size: 25px;
  margin-right: 16px;
`;

const TryItOnMe = () => (
  <Button title="Try it on me" onPress={() => alert("say cheese")} />
);

export default class HatDetail extends Component {
  _afterUpdateAnimatedValue = new Animated.Value(0);
  componentDidUpdate() {
    this._afterUpdateAnimatedValue.setValue(
      -2 * this.props.transitionDirection
    );
    Animated.spring(this._afterUpdateAnimatedValue, {
      toValue: 0
      // useNativeDriver: true
    }).start(() => this._afterUpdateAnimatedValue.setValue(0));
  }
  render() {
    const { hatLeft, hat, hatRight, transitionProgress } = this.props;
    const {
      price,
      hatKey,
      hatIndex,
      rating,
      ratingCount,
      soldCount,
      description,
      name
    } = this.props.hat;
    const transitionPosition = transitionProgress
      ? Animated.add(transitionProgress, this._afterUpdateAnimatedValue)
      : this._afterUpdateAnimatedValue;
    const opacity = transitionPosition.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [0, 1, 0]
    });
    const translateX = transitionPosition.interpolate({
      inputRange: [-1, 0, 1],
      outputRange: [100, 0, -100]
    });
    const animatedStyle = { opacity, transform: [{ translateX }] };
    return (
      <Container>
        <NameContainer style={animatedStyle}>
          <Name>{name}</Name>
        </NameContainer>
        <Domo
          hatLeft={hatLeft && hatLeft.hatKey}
          hat={hatKey}
          hatRight={hatRight && hatRight.hatKey}
          transitionProgress={
            transitionProgress || this._afterUpdateAnimatedValue
          }
        />
        <TryItOnMe />
      </Container>
    );
  }
}
