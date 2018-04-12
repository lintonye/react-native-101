import React from "react";
import styled from "styled-components";
import treeDollar from "./images/tree-dollar-above.png";
import treeDollarWhite from "./images/tree-dollar-above-white.png";

const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: ${props => (props.small ? 15 : 30)}px;
  color: ${props => (props.white ? "white" : "green")};
`;

const Image = styled.Image`
  width: ${props => (props.small ? 11 : 18)}px;
  height: ${props => (props.small ? 14 : 20)}px;
  margin-right: 4px;
`;

export default ({ amount, white, small, style }) => {
  return (
    <View style={style}>
      <Image source={white ? treeDollarWhite : treeDollar} small={small} />
      <Text white={white} small={small}>
        {amount}
      </Text>
    </View>
  );
};
