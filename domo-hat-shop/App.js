import React from "react";
import { Image, View, Text } from "react-native";

import domoImage from "./images/domo.png";

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
    <Text style={{ fontSize: 20, marginTop: 16 }}>
      When data change, your UI changes accordingly. You don’t need to worry
      about updating the DOM, React does it for you automatically. The idea of
      reactive UI greatly simplifies UI development.
    </Text>
  </View>
);

export default App;
