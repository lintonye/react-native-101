import React, { Component } from "react";
import HatDetail from "./HatDetail";
import { View } from "react-native";
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
    index: 0
  };
  onPreviousClicked = () => {
    this.setState(prev => ({ index: prev.index - 1 }));
  };
  onNextClicked = () => {
    this.setState(prev => ({ index: prev.index + 1 }));
  };
  render() {
    const { hats } = this.props;
    const hasPrevious = this.state.index > 0;
    const hasNext = this.state.index < hats.length - 1;
    return (
      <View>
        <HatDetail hat={hats[this.state.index]} />
        <StyledSwipeIndicator
          onPreviousClicked={hasPrevious ? this.onPreviousClicked : null}
          onNextClicked={hasNext ? this.onNextClicked : null}
        />
      </View>
    );
  }
}
