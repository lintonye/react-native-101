import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated,
  PanResponder
} from "react-native";
import Domo from "./Domo";
import { LinearGradient } from "expo";
import { withViewBounds } from "./withViewBounds";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  }
});

class HatSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.index
    };
    this.position = new Animated.Value(props.index);
  }
  positionFromGesture = gestureState =>
    -gestureState.dx / this.props.viewBounds.width * 1.5;
  isHorizontalScrolling = (evt, gestureState) =>
    Math.abs(gestureState.dx) > this.props.viewBounds.width / 20 &&
    Math.abs(gestureState.dx) > Math.abs(gestureState.dy * 1.5);
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: this.isHorizontalScrolling,
    onMoveShouldSetPanResponder: this.isHorizontalScrolling,
    onPanResponderRelease: (e, gestureState) => {
      const delta = this.positionFromGesture(gestureState);
      const direction = Math.sign(delta);
      this.switchHat(direction, this.state.index + delta);
    },
    onPanResponderMove: (e, gestureState) => {
      if (this.isHorizontalScrolling(e, gestureState)) {
        const delta = this.positionFromGesture(gestureState);
        this.position.setValue(this.state.index + delta);
      }
    }
  });
  switchHat = (
    direction,
    startPosition = this.state.index,
    targetIndex = this.state.index + direction
  ) => {
    if (targetIndex >= 0 && targetIndex < this.props.hats.length) {
      // this.setState({ index: targetIndex });
      this.position.setValue(startPosition);
      Animated.spring(this.position, {
        toValue: targetIndex
        // useNativeDriver: true
      }).start(() => {
        this.setState({ index: targetIndex });
      });
    } else {
      Animated.spring(this.position, {
        toValue: this.state.index
        // useNativeDriver: true
      }).start();
    }
  };
  componentDidMount = () => {
    this.position.setValue(this.state.index - 1);
    Animated.spring(this.position, { toValue: this.state.index }).start();
  };
  render() {
    const { hats } = this.props;
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
        {...this.panResponder.panHandlers}
        {...this.props}
      >
        <Domo index={this.state.index} hats={hats} position={this.position} />
      </LinearGradient>
    );
  }
}

export default withViewBounds(HatSwitcher);
