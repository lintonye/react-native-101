import React from "react";
import styled from "styled-components";

const Text = styled.Text`
  font-size: 30px;
`;

export default ({ amount, style }) => {
  return <Text style={style}>${amount}</Text>;
};
