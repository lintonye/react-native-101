import React, { PureComponent } from "react";
import { View, Image } from "react-native";
import DomoImg from "./images/domo.png";
import styled from "styled-components";

const hats = {
  cap: require("./images/hat_cap.png"),
  harry: require("./images/hat_harry.png"),
  pirate: require("./images/hat_pirate.png")
};

const Hat = styled.Image`
  position: absolute;
  left: 120px;
  top: -10px;
`;

export default class Domo extends PureComponent {
  render() {
    const { hat } = this.props;
    const hatImg = hats[hat];
    return (
      <View>
        <Image source={DomoImg} />
        <Hat source={hatImg} />
      </View>
    );
  }
}
