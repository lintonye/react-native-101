import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
import DomoImg from "./images/domo-thinker.png";
import { LinearGradient } from "expo";
import harryPotterHat from "./images/hat_harry.png";
import pirateHat from "./images/hat_pirate.png";

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
    position: "absolute",
    width: 100,
    height: 100,
    left: 130,
    top: 0
  }
});

export default class HatSwitcher extends Component {
  hatIndex = new Animated.Value(0);
  hat0X = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -150]
  });
  hat0Y = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50]
  });
  hat0Opacity = this.hatIndex.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [1, 1, 0]
  });
  hat0Rotate = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"]
  });
  hat1X = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [150, 0]
  });
  hat1Y = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: [-50, 0]
  });
  hat1Opacity = this.hatIndex.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 1, 1]
  });
  hat1Rotate = this.hatIndex.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"]
  });
  changeHat = () => {
    Animated.timing(this.hatIndex, { toValue: 1 }).start();
  };
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      // update hatIndex based on how far the finger has moved
      const screenWidth = Dimensions.get("window").width;
      const index = -gestureState.dx / screenWidth;
      this.hatIndex.setValue(index);
    }
  });
  render() {
    const hat0PositionStyle = {
      opacity: this.hat0Opacity,
      transform: [
        { translateX: this.hat0X },
        { translateY: this.hat0Y },
        { rotate: this.hat0Rotate }
      ]
    };
    const hat1PositionStyle = {
      opacity: this.hat1Opacity,
      transform: [
        { translateX: this.hat1X },
        { translateY: this.hat1Y },
        { rotate: this.hat1Rotate }
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
            <Animated.Image
              source={harryPotterHat}
              style={[styles.hat, hat0PositionStyle]}
            />
            <Animated.Image
              source={pirateHat}
              style={[styles.hat, hat1PositionStyle]}
            />
          </View>
          <Button title="Change Hat" onPress={this.changeHat} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
