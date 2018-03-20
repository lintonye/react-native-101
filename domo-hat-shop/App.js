import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  Image,
  TouchableOpacity
} from "react-native";

const Hat = ({ type, style }) => {
  let url = "";
  switch (type) {
    case "cap":
      url =
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fcap.png?1518712935783";
      break;
    case "pirate":
      url =
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fpirate.png?1518712936051";
      break;
    case "harry-potter":
      url =
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fharry-potter.png?1518712935951";
      break;
    case "propeller":
      url =
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fpropeller.png?1518712935957";
      break;
    case "leprecon":
      url =
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fleprecon.png?1518712935850";
      break;
  }
  return <Image source={{ uri: url }} style={[styles.hat, style]} />;
};

const Domo = () => (
  <Image
    source={{
      uri:
        "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fthinker.png?1518712935862"
    }}
    style={styles.Domo}
  />
);

const DomoWithHat = ({ hat }) => (
  <View>
    <Domo />
    <Hat type={hat} style={styles.hatOnDomo} />
  </View>
);

const TouchableHat = ({ type, onPress }) => (
  <TouchableOpacity style={styles.hatTouchable} onPress={() => onPress(type)}>
    <Hat type={type} />
  </TouchableOpacity>
);

const HatSwitcher = ({ onHatPressed }) => (
  <View style={styles.hatSwitcher}>
    <TouchableHat type="cap" onPress={onHatPressed} />
    <TouchableHat type="harry-potter" onPress={onHatPressed} />
    <TouchableHat type="pirate" onPress={onHatPressed} />
    <TouchableHat type="leprecon" onPress={onHatPressed} />
  </View>
);

export default class App extends Component {
  state = {
    hat: "cap"
  };
  onHatPressed = hat => this.setState({ hat });
  render() {
    const onHatChanged = hat => {
      this.setState({ hat });
    };
    return (
      <View style={styles.app}>
        <DomoWithHat hat={this.state.hat} />
        <Text style={styles.text}>Choose a hat:</Text>
        <HatSwitcher onHatPressed={this.onHatPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },
  Domo: {
    height: 200,
    width: 200
  },
  hat: {
    height: 70,
    width: 80
  },
  hatOnDomo: {
    position: "absolute",
    top: 0,
    left: 100
  },
  hatTouchable: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#eee"
  },
  hatSwitcher: {
    flexDirection: "row",
    margin: 20
  },
  text: {
    fontSize: 25,
    margin: 10
  }
});
