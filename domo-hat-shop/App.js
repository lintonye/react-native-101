import React from "react";
import { Image, View, ScrollView, Text, StyleSheet } from "react-native";

import hatWinter from "./images/hat-winter.png";
import RatingBar from "./RatingBar";
import Price from "./Price";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 16,
    alignItems: "center"
  },
  name: {
    flex: 1,
    fontSize: 28
  },
  hat: {
    width: 300,
    height: 300
  },
  description: {}
});

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Winter</Text>
        <Image source={hatWinter} style={styles.hat} />
        <RatingBar rating={5} ratingCount={200} />
        <Text style={styles.description}>{hatDescription}</Text>
      </View>
    );
  }
}

export default App;

const hatDescription = `
Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.

Let’s give DOM a nickname… ummm what about Domo? Domo works as a model at the studio “Web Browser”. His job is to pose in front of the artist who paints a portrait (or perhaps millions of portraits).

The portraits are what we see in the web browser when visiting a website. A developer’s job is like that of a director who tells Domo what to wear and what pose to make. This determines what those portraits look like in the end. jQuery or React are known as libraries and they are the tools a developer uses to communicate with Domo.

<= The end
`;
