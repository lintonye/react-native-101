import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button } from "react-native";
import RatingBar from "./RatingBar";
import Price from "./Price";
import Domo from "./Domo";
import SwipeIndicator from './SwipeIndicator';

const Container = styled.View`
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`;

const Info = styled.View`
  flex-grow: 2;
  flex-shrink: 0;
  align-items: center;
  /* border-color: red;
  border-width: 1px; */
`;

const MoreInfo = styled.View`
  flex-grow: 1;
  flex-basis: 200px;
`;

const RatingContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSwipeIndicator = styled(SwipeIndicator)`
  position: absolute;
  width: 100%;
  left: 0;
  top: 50%;
`;

const TryItOnMe = () => (
  <Button title="Try it on me" onPress={() => alert("say cheese")} />
);

export default class HatDetail extends Component {
  render() {
    const {
      price,
      hatKey,
      rating,
      ratingCount,
      soldCount,
      description
    } = this.props.hat;
    return (
      <Container>
        <Info>
          <RatingContainer>
            <RatingBar
              ratingCount={ratingCount}
              rating={rating}
              soldCount={soldCount}
            />
            <Price amount={price} />
          </RatingContainer>
          <Domo hat={hatKey} />
          <StyledSwipeIndicator />
        </Info>
        <MoreInfo>
          <TryItOnMe />
          <Text>{description}</Text>
        </MoreInfo>
      </Container>
    );
  }
}
