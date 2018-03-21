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
  constructor(props) {
    super(props);
    this.state = {
      index: props.index,
      direction: 1,
      position: new Animated.Value(props.index)
    };
  }
  switchHat = (direction, startPosition = this.state.index) => {
    const index = this.state.index + direction;
    if (index >= 0 && index < this.props.hats.length) {
      this.state.position.setValue(startPosition);
      Animated.spring(this.state.position, {
        toValue: index
        // useNativeDriver: true
      }).start(() =>
        this.setState({
          index,
          direction
        })
      );
    } else {
      Animated.spring(this.state.position, {
        toValue: this.state.index
        // useNativeDriver: true
      }).start();
    }
  };
  // onPreviousClicked = () => this.switchHat(-1);
  // onNextClicked = () => this.switchHat(1);
  componentWillMount() {
    const positionFromGesture = gestureState =>
      -gestureState.dx / Dimensions.get("window").width * 1.5;
    const isHorizontalScrolling = (evt, gestureState) =>
      Math.abs(gestureState.dx) > Dimensions.get("window").width / 20 &&
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 1.5);
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: isHorizontalScrolling,
      onStartShouldSetPanResponderCapture: isHorizontalScrolling,
      onMoveShouldSetPanResponder: isHorizontalScrolling,
      onMoveShouldSetPanResponderCapture: isHorizontalScrolling,
      onPanResponderGrant: () => {
        // this.state.position.setValue(0.05);
      },
      onPanResponderRelease: (e, gestureState) => {
        // if (isHorizontalScrolling(e, gestureState)) {
        // console.log("dx", gestureState.dx, "dy", gestureState.dy);

        const delta = positionFromGesture(gestureState);
        const direction = Math.sign(delta);
        this.switchHat(direction, this.state.index + delta);
        // }
      },
      onPanResponderMove: (e, gestureState) => {
        if (isHorizontalScrolling(e, gestureState)) {
          const delta = positionFromGesture(gestureState);
          this.state.position.setValue(this.state.index + delta);
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
          hats={hats}
          index={this.state.index}
          transitionDirection={this.state.direction}
          position={this.state.position}
        />
        {/* <StyledSwipeIndicator
          onPreviousClicked={hasPrevious ? this.onPreviousClicked : null}
          onNextClicked={hasNext ? this.onNextClicked : null}
        /> */}
      </View>
    );
  }
}

export const HatSwitcherScreen = ({ navigation }) => {
  const { params } = navigation.state;
  const { hats, index } = params || { hats: [], index: 0 };
  return <HatSwitcher hats={hats} index={index} />;
};

HatSwitcherScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "Try Hat"
};
