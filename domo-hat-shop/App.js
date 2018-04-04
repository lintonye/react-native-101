import React from "react";
import {
  Image,
  View,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";

import domoImage from "./images/tree_point.png";
import hatHarry from "./images/hat-harry.png";
import hatPirate from "./images/hat-pirate.png";

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
      <View style={{ padding: 16 }}>
        <Image
          source={domoImage}
          style={{ width: 350, height: 350, marginTop: 60 }}
        />
        <Image
          source={hatImg}
          style={{
            position: "absolute",
            left: 130,
            top: 38,
            width: 120,
            height: 120
          }}
        />
        <Button
          title="Change to pirate hat"
          onPress={() => this.setState({ hat: "pirate" })}
          color="purple"
        />
      </View>
    );
  }
}

export default App;
