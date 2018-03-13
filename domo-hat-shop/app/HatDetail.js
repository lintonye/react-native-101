import React, { Component } from "react";
import styled from "styled-components";
import { Text, Button, ScrollView, Animated } from "react-native";
import RatingBar from "./RatingBar";
import Price from "./Price";
import Domo from "./Domo";

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

const RatingContainer = styled(Animated.View)`
  align-self: stretch;
  flex-direction: row;
  justify-content: space-between;
`;

const TryItOnMe = () => (
  <Button title="Try it on me" onPress={() => alert("say cheese")} />
);

export default class HatDetail extends Component {
  render() {
    const { hatLeft, hat, hatRight, transitionProgress } = this.props;
    const {
      price,
      hatKey,
      hatIndex,
      rating,
      ratingCount,
      soldCount,
      description
    } = this.props.hat;
    return (
      <ScrollView>
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
            <Domo
              hatLeft={hatLeft && hatLeft.hatKey}
              hat={hatKey}
              hatRight={hatRight && hatRight.hatKey}
              transitionProgress={transitionProgress}
            />
          </Info>
          <MoreInfo>
            {/* <TryItOnMe /> */}
            <Text>{description}</Text>
          </MoreInfo>
        </Container>
      </ScrollView>
    );
  }
}
