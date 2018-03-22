import React, { Component } from "react";
import HatDetail from "./HatDetail";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import SwipeIndicator from "./SwipeIndicator";
import styled from "styled-components";
import { withViewBounds } from "./withViewBounds";

import { connect } from "react-redux";
import { switchHat, switchPose } from "./actions";

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
      position: new Animated.Value(props.index),
      posePosition: new Animated.Value(props.poseIndex)
    };
  }
  // componentWillReceiveProps = nextProps => {
  //   if (nextProps.index !== this.props.index) {
  //     const direction = Math.sign(this.props.index - nextProps.index);
  //     this.switchHat(
  //       direction,
  //       nextProps.index + 0.5 * direction,
  //       nextProps.index
  //     );
  //   }
  // };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.index !== this.props.index) {
      this.state.position.setValue(this.props.index);
    }
  };

  switchHat = (
    direction,
    startPosition = this.props.index,
    targetIndex = this.props.index + direction
  ) => {
    if (targetIndex >= 0 && targetIndex < this.props.hats.length) {
      // this.setState({ index: targetIndex });
      this.state.position.setValue(startPosition);
      Animated.spring(this.state.position, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start(() => {
        this.props.dispatch(switchHat(targetIndex));
      });
    } else {
      Animated.spring(this.state.position, {
        toValue: this.props.index
        // useNativeDriver: true
      }).start();
    }
  };
  switchPose = (
    direction,
    startPosition = this.props.poseIndex,
    targetIndex = this.props.poseIndex + direction
  ) => {
    if (targetIndex >= 0 && targetIndex < this.props.poses.length) {
      this.state.posePosition.setValue(startPosition);
      Animated.spring(this.state.posePosition, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start(() => {
        this.props.dispatch(switchPose(targetIndex));
      });
    } else {
      Animated.spring(this.state.posePosition, {
        toValue: this.props.poseIndex
        // useNativeDriver: true
      }).start();
    }
  };
  // onPreviousClicked = () => this.switchHat(-1);
  // onNextClicked = () => this.switchHat(1);
  initPanResponder = () => {
    const positionFromGesture = gestureState =>
      -gestureState.dx / this.props.viewBounds.width * 1.5;
    const isHorizontalScrolling = (evt, gestureState) =>
      Math.abs(gestureState.dx) > this.props.viewBounds.width / 20 &&
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 1.5);
    const isScrollingHat = gestureState =>
      gestureState.y0 - this.props.viewBounds.top <
      this.props.viewBounds.height / 2.5;
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
          this.switchHat(direction, this.props.index + delta);
        } else {
          this.switchPose(direction, this.props.poseIndex + delta);
        }
        // }
      },
      onPanResponderMove: (e, gestureState) => {
        if (isHorizontalScrolling(e, gestureState)) {
          const delta = positionFromGesture(gestureState);
          if (isScrollingHat(gestureState)) {
            this.state.position.setValue(this.props.index + delta);
          } else {
            this.state.posePosition.setValue(this.props.poseIndex + delta);
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
    const hasPrevious = this.props.index > 0;
    const hasNext = this.props.index < hats.length - 1;
    return (
      <View {...this._panResponder.panHandlers} {...this.props}>
        <HatDetail
          hats={hats}
          index={this.props.index}
          transitionDirection={-1}
          position={this.state.position}
          poses={poses}
          poseIndex={this.props.poseIndex}
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

export const HatSwitcherScreen = connect(
  ({ hats, index, poses, poseIndex }) => ({ hats, index, poses, poseIndex })
)(withViewBounds(HatSwitcher));

HatSwitcherScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "Try Hat"
};
