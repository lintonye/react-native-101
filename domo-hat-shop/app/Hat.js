import React, { PureComponent } from "react";
import { Image } from "react-native";

const hats = {
  cap: require("./images/hat-cap.png"),
  harry: require("./images/hat-harry.png"),
  pirate: require("./images/hat-pirate.png"),
  lepricon: require("./images/hat-lepricon.png"),
  propeller: require("./images/hat-propeller.png")
};

export default class Hat extends PureComponent {
  render() {
    const { props } = this;
    const hatImg = hats[props.type];
    return <Image {...props} source={hatImg} />;
  }
}
