import React from "react";
import {
  Image,
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import hatWinter from "./images/hat-winter.png";
import RatingBar from "./RatingBar";
import Price from "./Price";
import { withNavigation } from "react-navigation";

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
    fontSize: 28
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

class HatDetail extends React.Component {
  navigateBack = () => this.props.navigation.goBack();
  render() {
    const { hat } = this.props;
    const { price, rating, ratingCount, name, image, description } = hat;
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <TouchableOpacity onPress={this.navigateBack} style={{ flex: 1 }}>
            <Text style={styles.name}>{name}</Text>
          </TouchableOpacity>
          <Price amount={price} style={styles.price} />
        </View>
        <Image source={image} style={styles.hat} />
        <RatingBar rating={rating} ratingCount={ratingCount} />
        <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

export default withNavigation(HatDetail);
