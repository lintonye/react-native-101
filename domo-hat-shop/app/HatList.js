import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Hat from "./Hat";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const NameContainer = styled.View`
  align-items: flex-start;
`;

const Name = styled.Text`
  font-size: 20px;
`

const StyledPrice = styled(Price)`
  font-size: 35px;
`

const HatListItem = ({ hat }) => (
  <ItemContainer>
    <Hat type={hat.hatKey} />
    <NameContainer>
      <Name>{hat.name}</Name>
      <RatingBar
        rating={hat.rating}
        ratingCount={hat.ratingCount}
        soldCount={hat.soldCount}
      />
    </NameContainer>
    <StyledPrice amount={hat.price} />
  </ItemContainer>
);

export default class HatList extends Component {
  _renderItem = ({ item }) => <HatListItem hat={item} />;
  _keyExtractor = (item, index) => item.hatKey;
  render() {
    const { hats } = this.props;
    return (
      <FlatList
        data={hats}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
