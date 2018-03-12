import React, { Component } from "react";
import HatDetail from "./HatDetail";
import { View, Animated } from "react-native";
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
    previousIndex: 0,
    index: 0,
    transitionProgress: new Animated.Value(0)
  };
  onPreviousClicked = () => {
    this.setState(
      prev => ({
        index: prev.index - 1,
        previousIndex: prev.index,
      }),
      () => {
        this.state.transitionProgress.setValue(0);
        Animated.timing(this.state.transitionProgress, {
          toValue: -1,
          duration: 1000
        }).start();
      }
    );
  };
  onNextClicked = () => {
    this.setState(
      prev => ({
        index: prev.index + 1,
        previousIndex: prev.index
      }),
      () => {
        this.state.transitionProgress.setValue(0);
        Animated.timing(this.state.transitionProgress, {
          toValue: 1,
          duration: 1000
        }).start();
      }
    );
  };
  render() {
    const { hats } = this.props;
    const hasPrevious = this.state.index > 0;
    const hasNext = this.state.index < hats.length - 1;
    return (
      <View>
        <HatDetail
          hat={hats[this.state.index]}
          previousHat={hats[this.state.previousIndex]}
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
