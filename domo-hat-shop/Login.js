import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  Button,
  Platform
} from "react-native";
import DomoImg from "./images/domo-thinker.png";
import HatImg from "./images/hat_harry.png";
import { LinearGradient } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
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
  },
  instruction: {
    textAlign: "center",
    fontSize: 20,
    margin: 8
  },
  label: {
    marginTop: 16,
    marginBottom: 8
  },
  textInput: {},
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16
  }
});

const Domo = () => (
  <View style={styles.domoContainer}>
    <Image source={DomoImg} style={styles.domo} />
    <Image source={HatImg} style={styles.hat} />
  </View>
);

export default class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  login = () =>
    alert(`Login: email=${this.state.email} password=${this.state.password}`);
  render() {
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <Text style={styles.title}>Domo's Hat Shop</Text>
          <Domo />
          <Text style={styles.instruction}>Please login</Text>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.label}>Password</Text>
          <View style={styles.buttonContainer}>
            <Button title="Login" onPress={this.login} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
