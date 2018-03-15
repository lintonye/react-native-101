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
  const hitSlop = {left: 10, top: 10, right: 10, bottom: 10};
  return (
    <View style={style} controls={controls}>
      {onPreviousClicked && (
        <TouchableOpacity onPress={onPreviousClicked} hitSlop={hitSlop}>
          <Text>⟨</Text>
        </TouchableOpacity>
      )}
      {onNextClicked && (
        <TouchableOpacity onPress={onNextClicked} hitSlop={hitSlop}>
          <Text>⟩</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
