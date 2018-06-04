import React from "react";
import { Image, View, Text, FlatList } from "react-native";

import { manyHats } from "./Data";

function renderItem(itemInfo) {
  return (
    <Image source={itemInfo.item.image} style={{ width: 120, height: 120 }} />
  );
}

const Separator = () => (
  <View style={{ width: "100%", height: 1, backgroundColor: "#eee" }} />
);

const Header = () => (
  <View style={{ height: 150, backgroundColor: "orange" }}>
    <Text
      style={{
        fontSize: 40,
        textAlign: "center",
        color: "white",
        marginTop: 60
      }}
    >
      Domo's Hats
    </Text>
  </View>
);

const App = () => (
  <FlatList
    data={manyHats}
    renderItem={renderItem}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={Header}
  />
);

export default App;
