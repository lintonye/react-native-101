import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  PanResponder
} from "react-native";
import DomoImg from "./images/domo-thinker.png";
import { LinearGradient } from "expo";
import { hats } from "./Data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  domoContainer: {
    paddingTop: 50,
    alignSelf: "center"
  },
  domo: {
    width: 350,
    height: 240,
    alignSelf: "center"
  },
  hat: {
    width: 100,
    height: 100
  },
  hatPos: {
    position: "absolute",
    left: 100,
    top: -30
  }
});

function computeDistance(touch0, touch1) {
  // distance = √((x0-x1)² + (y0-y1)²)
  const sq = x => x * x;
  return Math.sqrt(
    sq(touch0.pageX - touch1.pageX) + sq(touch0.pageY - touch1.pageY)
  );
}

export default class HatFitter extends Component {
  state = {
    translateX: 0,
    translateY: 0,
    scale: 1
  };
  x0 = 0;
  y0 = 0;
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (e, gestureState) => {
      const { touches } = e.nativeEvent;
      switch (touches.length) {
        case 1:
          // set the state according to the touch position
          this.setState({
            translateX: this.x0 + gestureState.dx,
            translateY: this.y0 + gestureState.dy
          });
          break;
        case 2:
          this.setState({
            scale:
              computeDistance(touches[0], touches[1]) / this.baselineDistance
          });
      }
    },
    onPanResponderStart: e => {
      const { touches } = e.nativeEvent;
      if (touches.length === 2) {
        // save the baseline distance
        this.baselineDistance = computeDistance(touches[0], touches[1]);
        console.log("baselineDistance", this.baselineDistance);
      }
    },
    onPanResponderEnd: () => {
      // record the current translateX and Y
      this.x0 = this.state.translateX;
      this.y0 = this.state.translateY;
    }
  });
  render() {
    const dragStyle = {
      transform: [
        { translateX: this.state.translateX },
        { translateY: this.state.translateY },
        { scale: this.state.scale }
      ]
    };
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer} {...this.panResponder.panHandlers}>
            <Image source={DomoImg} style={styles.domo} />
            <Image
              source={hats[0].image}
              style={[styles.hat, styles.hatPos, dragStyle]}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
