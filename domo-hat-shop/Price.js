import React from "react";
import styled from "styled-components";
import treeDollar from "./images/tree-dollar-above.png";

const View = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 30px;
  color: green;
`;

const Image = styled.Image`
  width: 18px;
  height: 20px;
  margin-right: 4px;
`;

export default ({ amount, style }) => {
  return (
    <View style={style}>
      <Image source={treeDollar} />
      <Text>{amount}</Text>
    </View>
  );
};
