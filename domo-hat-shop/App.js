import React from "react";
import { Image, View } from "react-native";

import domoImage from "./images/domo.png";

const App = () => (
  <View style={{ padding: 16 }}>
    <Image source={domoImage} />
  </View>
);

export default App;
