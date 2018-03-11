import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const View = styled.View`
  flex-direction: row;
  justify-content: ${({ controls }) =>
    controls === "both"
      ? "space-between"
      : controls === "left" ? "flex-start" : "flex-end"};
  padding: 10px;
  align-self: stretch;
`;

const Text = styled.Text`
  font-size: 40px;
`;

export default ({ style, onPreviousClicked, onNextClicked }) => {
  const controls =
    onPreviousClicked && onNextClicked
      ? "both"
      : onPreviousClicked ? "left" : "right";
  return (
    <View style={style} controls={controls}>
      {onPreviousClicked && (
        <TouchableOpacity onPress={onPreviousClicked}>
          <Text>⟨</Text>
        </TouchableOpacity>
      )}
      {onNextClicked && (
        <TouchableOpacity onPress={onNextClicked}>
          <Text>⟩</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
