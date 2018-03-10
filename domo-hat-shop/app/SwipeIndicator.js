import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const View = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  font-size: 40px;
`

export default ({style}) => {
  return (
    <View style={style}>
      <TouchableOpacity>
        <Text>👈</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>👉</Text>
      </TouchableOpacity>
    </View>
  )
};
