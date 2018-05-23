import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";
import { LinearGradient } from "expo";

const ItemContainer = styled.View`
  flex: 1;
  margin: 0 8px 0 ${props => (props.leftEdge ? 8 : 0)}px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  elevation: 2;
  background-color: white;
`;

const StyledTouchable = styled(TouchableOpacity)`
  align-items: center;
`;

const NameContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 8px;
`;

const Name = styled.Text`
  flex: 1;
  font-size: 15px;
  max-width: 200px;
  color: white;
`;

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const CardTop = styled(LinearGradient)`
  background-color: #998899;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const CardBottom = styled.View`
  padding: 8px;
`;

const HatImage = styled.Image`
  width: 120px;
  height: 120px;
`;

const gradients = [
  ["#ad5389", "#3c1053"],
  ["#4c669f", "#3b5998", "#192f6a"],
  ["#a8c0ff", "#3f2b96"],
  ["#dd1818", "#333333"],
  ["#ffb75e", "#ed8f03", "#ed8f03", "#2d2f03"]
];

const HatGridItem = ({ hat, index, columns, onPress }) => (
  <ItemContainer leftEdge={index % columns === 0}>
    <StyledTouchable onPress={onPress}>
      <CardTop colors={gradients[index % gradients.length]}>
        <HatImage source={hat.image} />
        <NameContainer>
          <Name numberOfLines={1}>{hat.name}</Name>
          <Price amount={hat.price} white small />
        </NameContainer>
      </CardTop>
      <CardBottom>
        <RatingBar
          rating={hat.rating}
          ratingCount={hat.ratingCount}
          soldCount={hat.soldCount}
        />
      </CardBottom>
    </StyledTouchable>
  </ItemContainer>
);

const RowContainer = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;

export default class HatGrid extends Component {
  _renderItem = ({ item, index }) => (
    <HatGridItem
      hat={item}
      index={index}
      columns={this.props.columns}
      onPress={() => this.props.onItemPress(item, index)}
    />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats, columns } = this.props;
    return (
      <StyledFlatList
        key={columns}
        data={hats}
        numColumns={2}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={() => <Spacer height={8} />}
        ListHeaderComponent={() => <Spacer height={8} />}
        ListFooterComponent={() => <Spacer height={8} />}
      />
    );
  }
}
