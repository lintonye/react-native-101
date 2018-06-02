import React from "react";
import { Image, View, Text } from "react-native";

import domoImage from "./images/domo.png";
import hatImage from "./images/hat-pirate.png";

const App = () => (
  <View style={{ padding: 16 }}>
    <Image source={domoImage} />
    <Text style={{ fontSize: 20 }}>
      The UI built with React is
      <Text style={{ fontStyle: "italic", color: "blue" }}> reactive</Text>. As
      a developer, you just need to write down{" "}
      <Text style={{ fontWeight: "900" }}>what you want</Text> and React figures
      out <Text style={{ fontWeight: "900" }}>how to do it</Text>.
    </Text>
    <Image source={hatImage} style={{ width: 200, height: 200 }} />
    <Image
      source={{
        uri:
          "https://cdn.glitch.com/1fb3273a-81cb-45bc-acbd-555546cb098f%2Fhat_chef.png?1527901868766"
      }}
      style={{ width: 100, height: 100 }}
    />
    <Text style={{ fontSize: 20, marginTop: 16 }}>
      When data change, your UI changes accordingly. You don’t need to worry
      about updating the DOM, React does it for you automatically. The idea of
      reactive UI greatly simplifies UI development.
    </Text>
  </View>
);

export default App;
