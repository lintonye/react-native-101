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
import ladyHat from "./images/hat_ladyFlower.png";
import pirateHat from "./images/hat_pirate.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  domoContainer: {
    paddingTop: 55,
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
  state = {
    lifted: false
  };
  toggleLiftHat = () => {
    this.setState({ lifted: !this.state.lifted });
  };
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer}>
            <Image source={DomoImg} style={styles.domo} />
            <Animated.Image source={ladyHat} style={styles.hat} />
          </View>
          <Button
            title={this.state.lifted ? "Unlift Hat" : "Lift Hat"}
            onPress={this.toggleLiftHat}
          />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
