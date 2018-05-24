import React from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Button
} from "react-native";

import hatWinter from "./images/hat-winter.png";
import RatingBar from "./RatingBar";
import Price from "./Price";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center"
  },
  nameContainer: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 28,
    width: 50,
    flex: 1
  },
  price: {
    // flex: 1
  },
  hat: {
    width: 300,
    height: 300
  },
  description: {}
});

export default class HatDetail extends React.Component {
  render() {
    const { hat, onTryHat } = this.props;
    const { price, rating, ratingCount, name, image, description } = hat;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Price amount={price} style={styles.price} />
        </View>
        <Image source={image} style={styles.hat} />
        <RatingBar rating={rating} ratingCount={ratingCount} />
        <Button title="Try it!" onPress={onTryHat} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}
