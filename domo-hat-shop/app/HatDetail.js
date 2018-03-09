import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";
import RatingBar from "./RatingBar";
import Price from "./Price";
import Domo from "./Domo";

const Container = styled.View`
  padding: 5px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Info = styled.View``;

const MoreInfo = styled.View``;

const TryItOnMe = () => <Button title="Try it on me" />;

export default class HatDetail extends Component {
  render() {
    const {
      price,
      hat,
      rating,
      ratingCount,
      soldCount,
      description
    } = this.props;
    return (
      <Container>
        <Info>
          <RatingBar
            count={ratingCount}
            rating={rating}
            soldCount={soldCount}
          />
          <Price amount={price} />
          <Domo hat={hat} />
        </Info>
        <MoreInfo>
          <TryItOnMe />
          <Text>{description}</Text>
        </MoreInfo>
      </Container>
    );
  }
}
