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
  KeyboardAvoidingView
} from "react-native";
import DomoImg from "./images/domo-thinker.png";
import HatImg from "./images/hat_harry.png";
import { LinearGradient } from "expo";

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
    alignSelf: "center"
  },
  domo: {
    width: 350,
    height: 240,
    alignSelf: "center"
  },
  hat: {
    width: 100,
    height: 100,
    position: "absolute",
    left: 130,
    top: -52
  }
});

const Domo = () => (
  <View style={styles.domoContainer}>
    <Image source={DomoImg} style={styles.domo} />
    <Image source={HatImg} style={styles.hat} />
  </View>
);

export default class Login extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <Domo />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
