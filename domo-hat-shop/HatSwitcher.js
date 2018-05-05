import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated
} from "react-native";
import DomoImg from "./images/domo-yoga.png";
import { LinearGradient } from "expo";
import ladyHat from "./images/hat_ladyFlower.png";
import pirateHat from "./images/hat_pirate.png";
import hanger from "./images/hanger.png";
import * as Animatable from "react-native-animatable";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  domoContainer: {
    paddingTop: 60,
    alignSelf: "center"
  },
  domo: {
    width: 120,
    height: 260,
    alignSelf: "center"
  },
  hanger: {
    position: "absolute",
    left: -140,
    top: -120,
    width: 180,
    height: 450
  },
  hat: {
    width: 100,
    height: 100
  },
  hatPosition: {
    position: "absolute",
    left: 20,
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
    const liftStyle = {
      transform: [{ translateY: this.state.lifted ? -100 : 0 }]
    };
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer}>
            <Image source={hanger} style={styles.hanger} />
            <Image source={DomoImg} style={styles.domo} />
            <Animatable.View
              transition="translateY"
              style={[styles.hatPosition, liftStyle]}
            >
              <Animatable.Image
                animation={
                  this.state.lifted
                    ? {
                        0: { rotate: "0deg" },
                        0.3: { rotate: "10deg" },
                        0.9: { rotate: "-10deg" },
                        1: { rotate: "0deg" }
                      }
                    : ""
                }
                iterationCount="infinite"
                source={ladyHat}
                style={[styles.hat]}
              />
            </Animatable.View>
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
