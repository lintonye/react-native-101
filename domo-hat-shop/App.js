import React from "react";
import { Image, View, Text, FlatList, StyleSheet } from "react-native";
import Price from "./Price";

import { manyHats } from "./Data";

const styles = StyleSheet.create({
  container: {
    padding: 8
  },
  name: {
    fontSize: 20
  },
  hat: {
    width: 120,
    height: 120
  },
  rating: {
    color: "brown"
  }
});

function renderItem(itemInfo) {
  return (
    <View style={styles.container}>
      <Image source={itemInfo.item.image} style={styles.hat} />
      <Text style={styles.rating}>4 stars</Text>

      <Text style={styles.name}>{itemInfo.item.name}</Text>
      <Price amount={itemInfo.item.price} />
    </View>
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

const Footer = () => (
  <View style={{ height: 150, backgroundColor: "#e3982b" }}>
    <Text
      style={{
        fontSize: 30,
        textAlign: "center",
        color: "white",
        marginTop: 60
      }}
    >
      This is the footer
    </Text>
  </View>
);

const App = () => (
  <FlatList
    data={manyHats}
    renderItem={renderItem}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={Header}
    ListFooterComponent={Footer}
  />
);

export default App;
