import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated,
  Slider
} from "react-native";
import { LinearGradient, DangerZone } from "expo";
import anim from "./images/lottie.json";

const { Lottie } = DangerZone;

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
    Animated.timing(this.progress, { toValue: 1, duration: 5000 }).start();
  };
  progress = new Animated.Value(0);
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.animContainer}>
            <Lottie
              source={anim}
              style={{ width: 400, height: 300 }}
              progress={this.progress}
            />
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            onValueChange={v => this.progress.setValue(v)}
          />
          <Button title="Start" onPress={this.startAnimation} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
