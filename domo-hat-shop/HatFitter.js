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

export default class HatFitter extends Component {
  state = {
    x0: 0,
    y0: 0,
    translateX: 0,
    translateY: 0
  };
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // set the state according to the touch position
      this.setState({
        translateX: this.state.x0 + gestureState.dx,
        translateY: this.state.y0 + gestureState.dy
      });
    },
    onPanResponderEnd: () => {
      // record the current translateX and Y
      this.setState({
        x0: this.state.translateX,
        y0: this.state.translateY
      });
    }
  });
  render() {
    const dragStyle = {
      transform: [
        { translateX: this.state.translateX },
        { translateY: this.state.translateY }
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
