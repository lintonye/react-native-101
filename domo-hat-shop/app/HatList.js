import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import Hat from "./Hat";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 16px 0 16px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  padding: 16px;
  background-color: white;
`;

const NameContainer = styled.View`
  align-items: flex-start;
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
`;

const StyledPrice = styled(Price)`
  font-size: 25px;
`;

const StyledFlatList = styled(FlatList)`
  background-color: #eee;
`;

const Spacer = styled.View`
  height: ${props => props.height}px;
`;

const HatListItem = ({ hat, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <ItemContainer elevation={2}>
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
  </TouchableOpacity>
);

export default class HatList extends Component {
  _renderItem = ({ item, index }) => (
    <HatListItem hat={item} onPress={this.props.onItemPress(index)} />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats } = this.props;
    return (
      <StyledFlatList
        data={hats}
        ItemSeparatorComponent={() => <Spacer height={16} />}
        ListHeaderComponent={() => <Spacer height={16} />}
        ListFooterComponent={() => <Spacer height={16} />}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export const HatListScreen = ({ navigation }) => {
  const { params } = navigation.state;
  const hats = params ? params.hats : [];
  return (
    <HatList
      hats={hats}
      onItemPress={index => () =>
        navigation.navigate("HatDetail", { hats, index })}
    />
  );
};

HatListScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "Hats"
};
