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
  TouchableHighlight,
  TouchableNativeFeedback
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
    marginBottom: 48,
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
  textInput: {
    height: 40,
    padding: 4,
    ...Platform.select({
      ios: {
        borderWidth: 1,
        borderColor: "#7eb859",
        borderRadius: 4
      }
    })
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16
  },
  button: {
    backgroundColor: "#509552",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    ...Platform.select({
      ios: {
        borderRadius: 4
      }
    })
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18
  }
});

const Domo = () => (
  <View style={styles.domoContainer}>
    <Image source={DomoImg} style={styles.domo} />
    <Image source={HatImg} style={styles.hat} />
  </View>
);

const LoginButtonIos = ({ title, onPress }) => (
  <TouchableHighlight onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableHighlight>
);

const LoginButtonAndroid = ({ title, onPress }) => (
  <TouchableNativeFeedback onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableNativeFeedback>
);

const LoginButton =
  Platform.OS === "android" ? LoginButtonAndroid : LoginButtonIos;

export default class Login extends Component {
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
          <TextInput
            placeholder="joe@email.com"
            keyboardType="email-address"
            style={styles.textInput}
            returnKeyType="next"
            onSubmitEditing={() => this.passwdText.focus()}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            returnKeyType="go"
            ref={ref => (this.passwdText = ref)}
          />
          <View style={styles.buttonContainer}>
            <LoginButton title="Login" onPress={() => {}} />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
