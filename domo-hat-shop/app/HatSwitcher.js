import React, { Component } from "react";
import HatDetail from "./HatDetail";
import { View, Animated, PanResponder, Dimensions } from "react-native";
import SwipeIndicator from "./SwipeIndicator";
import styled from "styled-components";
import { withViewBounds } from "./withViewBounds";

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
        this.props.setIndices({ index: targetIndex });
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
      // this.setState({ poseIndex: targetIndex });
      this.state.posePosition.setValue(startPosition);
      Animated.spring(this.state.posePosition, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start(() => {
        this.props.setIndices({ poseIndex: targetIndex });
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
    const { hats, poses, index, poseIndex } = this.props;
    return (
      <View {...this._panResponder.panHandlers} {...this.props}>
        <HatDetail
          hats={hats}
          index={index}
          transitionDirection={-1}
          position={this.state.position}
          poses={poses}
          poseIndex={poseIndex}
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

const HatSwitcherWithViewBounds = withViewBounds(HatSwitcher);

export const HatSwitcherScreen = ({ navigation, screenProps }) => {
  const {
    hats = [],
    poses = [],
    index = 0,
    poseIndex = 0,
    setIndices
  } = screenProps;
  return (
    <HatSwitcherWithViewBounds
      hats={hats}
      index={index}
      poses={poses}
      poseIndex={poseIndex}
      setIndices={setIndices}
    />
  );
};

HatSwitcherScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "Try Hat"
};
