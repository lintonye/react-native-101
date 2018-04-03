import React from "react";
import {
  Image,
  View,
  Button,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";

import domoImage from "./images/tree_hold.png";
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
        <TouchableOpacity
          onPress={this.changeHat}
          style={{
            position: "absolute",
            left: 130,
            top: 38
          }}
        >
          <Image
            source={hatImg}
            style={{
              width: 120,
              height: 120
            }}
          />
        </TouchableOpacity>
        <Button
          title="Change to pirate hat"
          onPress={() => this.setState({ hat: "pirate" })}
          color="purple"
        />
        <TouchableNativeFeedback
          onPress={() => this.setState({ hat: "pirate" })}
        >
          <View>
            <Image
              source={hatPirate}
              style={{
                width: 120,
                height: 120
              }}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default App;
