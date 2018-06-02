import React from "react";
import { Image, View, Text } from "react-native";

import domoImage from "./images/domo.png";

const App = () => (
  <View style={{ padding: 16 }}>
    <Image source={domoImage} />
    <Text style={{ fontSize: 20 }}>
      The UI built with React is
      <Text style={{ color: "blue" }}> reactive</Text>. As a developer, you just
      need to write down what you want and React figures out how to do it. When
      data change, your UI changes accordingly. You don’t need to worry about
      updating the DOM, React does it for you automatically. The idea of
      reactive UI greatly simplifies UI development.
    </Text>
  </View>
);

export default App;
