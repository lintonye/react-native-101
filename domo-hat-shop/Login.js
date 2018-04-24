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
  textInput: {
    padding: 4,
    height: 40,
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
          <KeyboardAvoidingView behavior="position">
            <Text style={styles.title}>Domo's Hat Shop</Text>
            <Domo />
            <Text style={styles.instruction}>Please login</Text>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="joe@email.com"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              value={this.state.email}
              onSubmitEditing={() => {
                // move the cursor to the password text input
                this.passwordInput.focus();
              }}
              onChangeText={text => this.setState({ email: text })}
              style={styles.textInput}
              underlineColorAndroid="#7eb859"
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry
              ref={textInput => (this.passwordInput = textInput)}
              returnKeyType="go"
              onSubmitEditing={this.login}
              style={styles.textInput}
            />
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={this.login} />
              <Button
                title="Reset"
                onPress={() => this.setState({ email: "" })}
              />
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
