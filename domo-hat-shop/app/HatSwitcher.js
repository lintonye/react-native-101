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
      position: new Animated.Value(props.index),
      poseIndex: props.poseIndex,
      posePosition: new Animated.Value(props.poseIndex)
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.index !== this.props.index) {
      const direction = Math.sign(this.props.index - nextProps.index);
      this.switchHat(
        direction,
        nextProps.index + 0.5 * direction,
        nextProps.index
      );
    }
  };

  switchHat = (
    direction,
    startPosition = this.state.index,
    targetIndex = this.state.index + direction
  ) => {
    if (targetIndex >= 0 && targetIndex < this.props.hats.length) {
      this.setState({ index: targetIndex });
      this.state.position.setValue(startPosition);
      Animated.spring(this.state.position, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start();
    } else {
      Animated.spring(this.state.position, {
        toValue: this.state.index
        // useNativeDriver: true
      }).start();
    }
  };
  switchPose = (
    direction,
    startPosition = this.state.poseIndex,
    targetIndex = this.state.poseIndex + direction
  ) => {
    if (targetIndex >= 0 && targetIndex < this.props.poses.length) {
      this.setState({ poseIndex: targetIndex });
      this.state.posePosition.setValue(startPosition);
      Animated.spring(this.state.posePosition, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start();
    } else {
      Animated.spring(this.state.posePosition, {
        toValue: this.state.poseIndex
        // useNativeDriver: true
      }).start();
    }
  };
  // onPreviousClicked = () => this.switchHat(-1);
  // onNextClicked = () => this.switchHat(1);
  initPanResponder = () => {
    const positionFromGesture = gestureState =>
      -gestureState.dx / Dimensions.get("window").width * 1.5;
    const isHorizontalScrolling = (evt, gestureState) =>
      Math.abs(gestureState.dx) > Dimensions.get("window").width / 20 &&
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 1.5);
    const isScrollingHat = gestureState =>
      gestureState.y0 < Dimensions.get("window").height / 3;
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
        if (isScrollingHat(gestureState)) {
          this.switchHat(direction, this.state.index + delta);
        } else {
          this.switchPose(direction, this.state.poseIndex + delta);
        }
        // }
      },
      onPanResponderMove: (e, gestureState) => {
        if (isHorizontalScrolling(e, gestureState)) {
          const delta = positionFromGesture(gestureState);
          if (isScrollingHat(gestureState)) {
            this.state.position.setValue(this.state.index + delta);
          } else {
            this.state.posePosition.setValue(this.state.poseIndex + delta);
          }
        }
      }
    });
  };
  componentWillMount() {
    this.initPanResponder();
  }
  componentDidMount = () => {
    const { position, posePosition } = this.state;
    const { index, poseIndex } = this.props;
    posePosition.setValue(poseIndex - 0.7);
    position.setValue(index - 0.9);
    Animated.stagger(400, [
      Animated.spring(posePosition, { toValue: poseIndex }),
      Animated.spring(position, { toValue: index })
    ]).start();
  };

  render() {
    const { hats, poses } = this.props;
    const hasPrevious = this.state.index > 0;
    const hasNext = this.state.index < hats.length - 1;
    return (
      <View {...this._panResponder.panHandlers}>
        <HatDetail
          hats={hats}
          index={this.state.index}
          transitionDirection={this.state.direction}
          position={this.state.position}
          poses={poses}
          poseIndex={this.state.poseIndex}
          posePosition={this.state.posePosition}
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
  const { hats, index, poses, poseIndex } = params || {
    hats: [],
    index: 0,
    poses: [],
    poseIndex: 0
  };
  return (
    <HatSwitcher
      hats={hats}
      index={index}
      poses={poses}
      poseIndex={poseIndex}
    />
  );
};

HatSwitcherScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "Try Hat"
};
