import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  Platform
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";
import Touchable from "./Touchable";

const isAndroid = Platform.OS === "android";

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 16px;
  margin: ${isAndroid ? "0 8px 0 8px" : 0};
  elevation: 2;
  background-color: white;
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

const HatListItem = ({ hat, onPress }) => (
  <Touchable onPress={onPress}>
    <ItemContainer>
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
  </Touchable>
);

export default class HatList extends Component {
  _renderItem = ({ item, index }) => (
    <HatListItem
      hat={item}
      onPress={() =>
        this.props.onItemPress && this.props.onItemPress(item, index)
      }
    />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats } = this.props;
    return (
      <StyledFlatList
        data={hats}
        ItemSeparatorComponent={() => <Spacer height={isAndroid ? 8 : 1} />}
        ListHeaderComponent={() => <Spacer height={isAndroid ? 8 : 1} />}
        ListFooterComponent={() => <Spacer height={isAndroid ? 8 : 1} />}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
