import React from "react";
import {
  Image,
  View,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import domoImage from "./images/tree_point.png";
import hatHarry from "./images/hat-harry.png";
import hatCap from "./images/hat-cap.png";

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
  render() {
    return (
      <View style={styles.container}>
        <Image source={domoImage} style={styles.domo} />
        <Image source={hatHarry} style={styles.hat} />
        <Image source={hatCap} />
      </View>
    );
  }
}

export default App;
