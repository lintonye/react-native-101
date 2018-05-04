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
  hatX = new Animated.Value(0);
  hatY = new Animated.Value(0);
  hatOpacity = new Animated.Value(1);
  hatRotate = this.hatX.interpolate({
    inputRange: [-150, 0],
    outputRange: ["-360deg", "0deg"]
  });
  changeHat = () => {
    const animX = Animated.timing(this.hatX, {
      toValue: -150
    });
    const animY = Animated.timing(this.hatY, {
      toValue: -60
    });
    const animOpacity = Animated.timing(this.hatOpacity, {
      toValue: 0
    });
    Animated.parallel([animX, animY, animOpacity]).start();
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
