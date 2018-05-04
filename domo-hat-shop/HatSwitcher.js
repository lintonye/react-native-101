import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated
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
  progress = new Animated.Value(0);
  hatX = this.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -150]
  });
  hatY = this.progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -50]
  });
  hatOpacity = this.progress.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [1, 1, 0]
  });
  hatRotate = this.progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-360deg"]
  });
  changeHat = () => {
    Animated.timing(this.progress, { toValue: 1 }).start();
  };
  render() {
    const hatPositionStyle = {
      opacity: this.hatOpacity,
      transform: [
        { translateX: this.hatX },
        { translateY: this.hatY },
        { rotate: this.hatRotate }
      ]
    };
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer}>
            <Image source={DomoImg} style={styles.domo} />
            <Animated.Image
              source={harryPotterHat}
              style={[styles.hat, hatPositionStyle]}
            />
          </View>
          <Button title="Change Hat" onPress={this.changeHat} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
