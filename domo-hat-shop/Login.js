import React, { Component } from "react";
import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  Platform,
  KeyboardAvoidingView,
  LayoutAnimation,
  UIManager
} from "react-native";
import DomoImg from "./images/domo-thinker.png";
import HatImg from "./images/hat_harry.png";
import { LinearGradient } from "expo";
import * as Animatable from "react-native-animatable";
import { manyHats, hats } from "./Data";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    marginTop: 24,
    marginBottom: 24,
    color: "white", //"#6f9400",
    textAlign: "center",
    fontWeight: "bold"
  },
  domoContainer: {
    marginLeft: 60,
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
  },
  hatSwitcherContainer: {
    flexDirection: "row"
  }
});

const Domo = () => (
  <View style={styles.domoContainer}>
    <Image source={DomoImg} style={styles.domo} />
    <Animatable.View animation="slideOutUp" style={styles.hatPos}>
      <Animatable.Image
        animation={{
          0: {
            rotate: "10deg"
          },
          0.5: {
            rotate: "-30deg"
          },
          1: {
            rotate: "10deg"
          }
        }}
        duration={400}
        source={HatImg}
        style={styles.hat}
        iterationCount="infinite"
      />
    </Animatable.View>
  </View>
);

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class HatSwitcher extends Component {
  state = {
    hats: hats.slice(5)
  };
  removeFirstHat = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ hats: this.state.hats.slice(1, this.state.hats.length) });
  };
  insertHat = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ hats: [hats[0], ...this.state.hats] });
  };
  render() {
    return (
      <View>
        <View style={styles.hatSwitcherContainer}>
          {this.state.hats.map((h, idx) => (
            <Image source={h.image} key={idx} style={styles.hat} />
          ))}
        </View>
        <Button title="Remove" onPress={this.removeFirstHat} />
        <Button title="Add" onPress={this.insertHat} />
      </View>
    );
  }
}

export default class Login extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <Domo />
          <HatSwitcher />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
