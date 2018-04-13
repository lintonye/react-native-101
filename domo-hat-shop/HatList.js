import React, { Component } from "react";
import { View, Text, FlatList, TouchableHighlight, Image } from "react-native";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  background-color: white;
`;

const HatImage = styled.Image`
  width: 120px;
  height: 120px;
`;

const NameContainer = styled.View`
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
`;

const Name = styled.Text`
  font-size: 18px;
  max-width: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledPrice = styled(Price)`
  justify-content: center;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const HatListItem = ({ hat, onPress }) => (
  <TouchableHighlight onPress={onPress}>
    <ItemContainer elevation={2}>
      <HatImage source={hat.image} />
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
  </TouchableHighlight>
);

export default class HatList extends Component {
  _renderItem = ({ item, index }) => (
    <HatListItem
      hat={item}
      onPress={() => this.props.onItemPress && this.props.onItemPress(index)}
    />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats } = this.props;
    return (
      <StyledFlatList
        data={hats}
        ItemSeparatorComponent={() => <Spacer height={1} />}
        ListHeaderComponent={() => <Spacer height={1} />}
        ListFooterComponent={() => <Spacer height={1} />}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
