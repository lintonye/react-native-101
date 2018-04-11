import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  Platform,
  SafeAreaView
} from "react-native";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${Platform.OS === "android" ? "0 16px 0 16px" : 0};
  padding: 8px 16px 8px 16px;
  background-color: white;
`;

const NameContainer = styled.View`
  align-items: center;
  flex: 2;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 16px;
  margin-right: 16px;
`;

const Name = styled.Text`
  font-size: 18px;
  max-width: 200px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const HatImage = styled.Image`
  width: 120px;
  height: 120px;
`;

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableHighlight;

const HatListItem = ({ hat, onPress }) => (
  <Touchable onPress={onPress}>
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
      <Price amount={hat.price} />
    </ItemContainer>
  </Touchable>
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
      <SafeAreaView>
        <StyledFlatList
          data={hats}
          ItemSeparatorComponent={() => (
            <Spacer height={Platform.OS === "android" ? 16 : 1} />
          )}
          ListHeaderComponent={() => (
            <Spacer height={Platform.OS === "android" ? 16 : 1} />
          )}
          ListFooterComponent={() => (
            <Spacer height={Platform.OS === "android" ? 16 : 1} />
          )}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </SafeAreaView>
    );
  }
}
