import React, { Component } from "react";
import HatDetail from "./HatDetail";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import SwipeIndicator from "./SwipeIndicator";
import styled from "styled-components";

const StyledSwipeIndicator = styled(SwipeIndicator)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 40%;
`;

export default class HatSwitcher extends Component {
  state = {
    index: 0,
    transitionProgress: new Animated.Value(0)
  };
  switchHat = (direction, startProgress = 0) => {
    const index = this.state.index + direction;
    if (index >= 0 && index < this.props.hats.length) {
      this.state.transitionProgress.setValue(startProgress);
      Animated.spring(this.state.transitionProgress, {
        toValue: direction,
      }).start(() =>
        this.setState(
          {
            index
          },
          () => this.state.transitionProgress.setValue(0)
        )
      );
    } else {
      Animated.spring(this.state.transitionProgress, {
        toValue: 0
      }).start();
    }
  };
  onPreviousClicked = () => this.switchHat(-1);
  onNextClicked = () => this.switchHat(1);
  componentWillMount() {
    const transitionProgressFromGesture = gestureState =>
      -gestureState.dx / Dimensions.get("window").width * 1.5;
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) =>
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
      onPanResponderGrant: () => {
        this.state.transitionProgress.setValue(0.05);
      },
      onPanResponderRelease: (e, gestureState) => {
        const tp = transitionProgressFromGesture(gestureState);
        this.switchHat(Math.sign(tp), tp)
      },
      onPanResponderMove: (e, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
          const tp = transitionProgressFromGesture(gestureState);
          this.state.transitionProgress.setValue(tp);
        }
      }
    });
  }
  render() {
    const { hats } = this.props;
    const hasPrevious = this.state.index > 0;
    const hasNext = this.state.index < hats.length - 1;
    return (
      //{...this._panResponder.panHandlers}
      <View {...this._panResponder.panHandlers}>
        <HatDetail
          hatLeft={hats[this.state.index - 1]}
          hat={hats[this.state.index]}
          hatRight={hats[this.state.index + 1]}
          transitionProgress={this.state.transitionProgress}
        />
        <StyledSwipeIndicator
          onPreviousClicked={hasPrevious ? this.onPreviousClicked : null}
          onNextClicked={hasNext ? this.onNextClicked : null}
        />
      </View>
    );
  }
}
