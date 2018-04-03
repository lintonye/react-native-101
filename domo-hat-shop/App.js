import React from "react";
import { Image, View } from "react-native";

import domoImage from "./images/tree_hold.png";
import hatHarry from "./images/hat-harry.png";
import hatPirate from "./images/hat-pirate.png";

class App extends React.Component {
  state = {
    hat: "harry"
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
      </View>
    );
  }
}

export default App;
