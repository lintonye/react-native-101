import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  UIManager,
  Platform,
  LayoutAnimation
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
    left: 130,
    top: 0
  }
});

Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class HatSwitcher extends Component {
  state = {
    currentHat: 0
  };
  changeHat = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ currentHat: this.state.currentHat === 1 ? 0 : 1 });
  };
  render() {
    const { currentHat } = this.state;
    const hat0Style = {
      left: currentHat === 0 ? 130 : -170,
      top: currentHat === 0 ? 0 : -100
      // transform: [
      //   { translateX: currentHat === 0 ? 0 : -200 },
      //   { translateY: currentHat === 0 ? 0 : -100 },
      //   { rotate: currentHat === 0 ? "0deg" : "90deg" }
      // ]
    };
    const hat1Style = {
      left: currentHat === 1 ? 130 : 330,
      top: currentHat === 1 ? 0 : -100
      // transform: [
      //   { translateX: !even ? 200 : 0 },
      //   { translateY: !even ? -100 : 0 }
      // ]
    };
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer}>
            <Image source={DomoImg} style={styles.domo} />
            <Image
              source={hats[0].image}
              style={[styles.hat, styles.hatPos, hat0Style]}
            />
            <Image
              source={hats[1].image}
              style={[styles.hat, styles.hatPos, hat1Style]}
            />
          </View>
          <Button title="Change Hat" onPress={this.changeHat} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
