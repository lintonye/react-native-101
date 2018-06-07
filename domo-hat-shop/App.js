import React from "react";
import { Image, View, StyleSheet } from "react-native";

import domoImage from "./images/tree_point.png";
import domoImage2 from "./images/tree_hold.png";
import hatHarry from "./images/hat-harry.png";
import hatPirate from "./images/hat-pirate.png";

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  domo: {
    width: 350,
    height: 350,
    marginTop: 60,
    backgroundColor: "orange"
  },
  hat: {
    width: 120,
    height: 120
  },
  hatOnTree: {
    position: "absolute",
    left: 130,
    top: 38
  }
});

const Hat = ({ image, style }) => (
  <Image source={image} style={[styles.hat, style]} />
);

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={domoImage} style={styles.domo} />
        <Hat image={hatHarry} style={styles.hatOnTree} />
        <Image source={domoImage2} />
        <Hat image={hatPirate} style={styles.hatOnTree} />
      </View>
    );
  }
}

export default App;
