import React, { Component } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import Hat from "./Hat";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";
import _ from "lodash";
import { LinearGradient } from "expo";

const ItemContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  background-color: white;
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

const StyledPrice = styled(Price)`
  font-size: 15px;
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

const gradients = [
  ["#ad5389", "#3c1053"],
  ["#4c669f", "#3b5998", "#192f6a"],
  ["#a8c0ff", "#3f2b96"],
  ["#dd1818", "#333333"],
  ["#ffb75e", "#ed8f03", "#ed8f03","#2d2f03"]
];

const HatGridItem = ({ hat, index }) => (
  <ItemContainer elevation={2}>
    <CardTop colors={gradients[Math.floor(Math.random() * gradients.length)]}>
      <Hat type={hat.hatKey} />
      <NameContainer>
        <Name numberOfLines={1}>{hat.name}</Name>
        <StyledPrice amount={hat.price} />
      </NameContainer>
    </CardTop>
    <CardBottom>
      <RatingBar
        rating={hat.rating}
        ratingCount={hat.ratingCount}
        soldCount={hat.soldCount}
      />
    </CardBottom>
  </ItemContainer>
);

const RowContainer = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;

const HatRow = ({ hats }) => (
  <RowContainer>
    {hats.map((hat, index) => (
      <HatGridItem hat={hat} key={index} index={index} />
    ))}
  </RowContainer>
);

class ListBasedHatGrid extends Component {
  _renderRow = ({ item }) => <HatRow hats={item} />;
  _keyExtractor = (item, index) => index;
  render() {
    const { hats, columns } = this.props;
    const hatRows = _.chunk(hats, columns);
    return (
      <StyledFlatList
        data={hatRows}
        renderItem={this._renderRow}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={() => <Spacer height={8} />}
        ListHeaderComponent={() => <Spacer height={8} />}
        ListFooterComponent={() => <Spacer height={8} />}
      />
    );
  }
}

export default class HatGrid extends Component {
  render() {
    const { hats } = this.props;
    const cols = Math.floor(Dimensions.get("window").width / 170);
    return <ListBasedHatGrid hats={hats} columns={cols} />;
  }
}
