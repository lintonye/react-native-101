import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated
} from "react-native";
import { LinearGradient } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  animContainer: {
    alignSelf: "center"
  }
});

export default class HatSwitcher extends Component {
  startAnimation = () => {
    // TODO start the animation
  };
  progress = new Animated.Value(0);
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.animContainer} />
          <Button title="Start" onPress={this.startAnimation} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
