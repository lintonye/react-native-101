import React from "react";
import { Image, View, StyleSheet } from "react-native";

import domoImage from "./images/tree_point.png";
import hatHarry from "./images/hat-harry.png";
import hatPirate from "./images/hat-pirate.png";

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  domo: {
    width: 350,
    height: 350,
    marginTop: 60
  },
  hat: {
    position: "absolute",
    left: 130,
    top: 38,
    width: 120,
    height: 120
  }
});

class App extends React.Component {
  state = {
    hat: "harry"
  };
  changeHat = () => {
    this.setState({ hat: this.state.hat === "harry" ? "pirate" : "harry" });
  };
  render() {
    const hatImg = this.state.hat === "harry" ? hatHarry : hatPirate;
    return (
      <View style={styles.container}>
        <Image source={domoImage} style={styles.domo} />
        <Image source={hatImg} style={styles.hat} />
      </View>
    );
  }
}

export default App;
