import React from "react";
import { View, Text } from "react-native";

const RatingStars = ({ rating }) => <Text>{rating} stars</Text>;

export default ({ rating, ratingCount, soldCount }) => {
  return (
    <View>
      <RatingStars rating={rating} />
      <Text>{ratingCount} ratings</Text>
      <Text>{soldCount} sold</Text>
    </View>
  );
};
