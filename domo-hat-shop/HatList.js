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
  background-color: ${props => (props.selected ? "#eee" : "white")};
`;

const HatImage = styled.Image`
  width: 120px;
  height: 120px;
`;

const NameContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
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

const HatListItem = ({ hat, onPress, hideNameAndRatings, selected }) => (
  <TouchableHighlight onPress={onPress}>
    <ItemContainer elevation={2} selected={selected}>
      <HatImage source={hat.image} />
      {!!!hideNameAndRatings && (
        <NameContainer>
          <Name>{hat.name}</Name>
          <RatingBar
            rating={hat.rating}
            ratingCount={hat.ratingCount}
            soldCount={hat.soldCount}
          />
        </NameContainer>
      )}
      <StyledPrice amount={hat.price} />
    </ItemContainer>
  </TouchableHighlight>
);

export default class HatList extends Component {
  _renderItem = ({ item, index }) => (
    <HatListItem
      hat={item}
      hideNameAndRatings={this.props.hideNameAndRatings}
      selected={index === this.props.selectedHatIndex}
      onPress={() =>
        this.props.onItemPress && this.props.onItemPress(item, index)
      }
    />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats } = this.props;
    return (
      // Wrap the FlatList with a View to make it to measure its width properly.
      <View>
        <StyledFlatList
          data={hats}
          ItemSeparatorComponent={() => <Spacer height={1} />}
          ListHeaderComponent={() => <Spacer height={1} />}
          ListFooterComponent={() => <Spacer height={1} />}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
