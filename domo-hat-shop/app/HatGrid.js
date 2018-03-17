import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import Hat from "./Hat";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";
import _ from "lodash";

const ItemContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  padding: 16px;
  background-color: white;
`;

const NameContainer = styled.View`
  align-items: flex-start;
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

const Name = styled.Text`
  flex: 1;
  font-size: 15px;
  max-width: 200px;
`;

const StyledPrice = styled(Price)`
  font-size: 15px;
`;

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const HatGridItem = ({ hat }) => (
  <ItemContainer elevation={2}>
    <NameContainer>
      <Name numberOfLines={1}>{hat.name}</Name>
      <StyledPrice amount={hat.price} />
    </NameContainer>
    <Hat type={hat.hatKey} />
    <RatingBar
        rating={hat.rating}
        ratingCount={hat.ratingCount}
        soldCount={hat.soldCount}
      />
  </ItemContainer>
);

const RowContainer = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;

const HatRow = ({ hats }) => (
  <RowContainer>
    {hats.map((hat, index) => <HatGridItem hat={hat} key={index} />)}
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
    const cols = 2;
    return <ListBasedHatGrid hats={hats} columns={cols} />;
  }
}
