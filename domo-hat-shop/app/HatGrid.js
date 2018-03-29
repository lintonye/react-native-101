import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
// import SafeAreaView from "react-native-safe-area-view";
import RatingBar from "./RatingBar";
import Price from "./Price";
import styled from "styled-components";
import _ from "lodash";
import { LinearGradient } from "expo";

import { connect } from "react-redux";
import { switchHat } from "./actions";

const ItemContainer = styled.View`
  flex: 1;
  margin: 0 8px 0 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
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
  ["#ffb75e", "#ed8f03", "#ed8f03", "#2d2f03"]
];

const HatGridItem = ({ ihat: { hat, index }, onPress }) => (
  <ItemContainer elevation={2}>
    <StyledTouchable onPress={onPress}>
      <CardTop colors={gradients[index % gradients.length]}>
        <Image source={hat.image} />
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
    </StyledTouchable>
  </ItemContainer>
);

const RowContainer = styled.View`
  flex-direction: row;
  margin-left: 8px;
`;

const HatRow = ({ hats, onItemPress }) => (
  <RowContainer>
    {hats.map(ihat => (
      <HatGridItem
        ihat={ihat}
        key={ihat.index}
        onPress={onItemPress(ihat.index)}
      />
    ))}
  </RowContainer>
);

class ListBasedHatGrid extends Component {
  _renderRow = ({ item }) => (
    <HatRow hats={item} onItemPress={this.props.onItemPress} />
  );
  _keyExtractor = (item, index) => index;
  render() {
    const { hats, columns } = this.props;
    const indexedHats = hats.map((hat, index) => ({ hat, index }));
    const hatRows = _.chunk(indexedHats, columns);
    return (
      <SafeAreaView forceInset={{ right: "always" }}>
        <StyledFlatList
          data={hatRows}
          renderItem={this._renderRow}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={() => <Spacer height={8} />}
          ListHeaderComponent={() => <Spacer height={8} />}
          ListFooterComponent={() => <Spacer height={8} />}
        />
      </SafeAreaView>
    );
  }
}

export default class HatGrid extends Component {
  state = {
    windowWidth: Dimensions.get("window").width
  };
  componentDidMount() {
    Dimensions.addEventListener("change", ({ window, screen }) => {
      this.setState({ windowWidth: window.width });
    });
  }
  render() {
    const { hats, onItemPress } = this.props;
    const cols = Math.floor(this.state.windowWidth / 170);
    return (
      <ListBasedHatGrid hats={hats} columns={cols} onItemPress={onItemPress} />
    );
  }
}

const InnerHatGridScreen = props => {
  return (
    <HatGrid
      onItemPress={index => () => {
        props.navigation.navigate("TryHat");
        props.dispatch(switchHat(index));
      }}
      {...props}
    />
  );
};

export const HatGridScreen = connect(state => ({ hats: state.core.hats }))(
  InnerHatGridScreen
);

HatGridScreen.navigationOptions = {
  title: "Domo's Hat Shop",
  tabBarLabel: "All Hats"
};
