import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";

const StarContainer = styled.View`
  flex-direction: row;
  margin-top: -10px; /* offset the top margin of the star chars */
`;

const Star = styled.Text`
  color: limegreen;
  font-size: 30px;
`;

const stars = (type, count) =>
  Array(count)
    .fill(0)
    .map((_, idx) => (
      <Star key={`${type}_${idx}`}>{type === "solid" ? "✦" : "✧"}</Star>
    ));

const RatingStars = ({ rating }) => {
  const solidStars = Math.round(rating);
  return (
    <StarContainer>
      {stars("solid", solidStars)}
      {stars("empty", 5 - solidStars)}
    </StarContainer>
  );
};

export default ({ rating, ratingCount, soldCount }) => {
  return (
    <View>
      <RatingStars rating={rating} />
      <Text>
        {ratingCount} ratings | {soldCount} sold
      </Text>
    </View>
  );
};
