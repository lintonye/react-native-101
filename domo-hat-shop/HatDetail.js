import React from "react";
import { Image, View, ScrollView, Text, StyleSheet } from "react-native";

import hatWinter from "./images/hat-winter.png";
import RatingBar from "./RatingBar";
import Price from "./Price";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
    alignItems: "center"
  },
  nameContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 28
  },
  hat: {
    width: 300,
    height: 300
  },
  description: {}
});

class HatDetail extends React.Component {
  render() {
    const {
      name,
      image,
      price,
      rating,
      ratingCount,
      description
    } = this.props.hat;
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Price amount={price} />
          </View>
          <Image source={image} style={styles.hat} />
          <RatingBar rating={rating} ratingCount={ratingCount} />
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default HatDetail;
