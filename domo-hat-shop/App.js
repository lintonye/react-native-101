import React from "react";
import { Image, View, StyleSheet } from "react-native";

import domoImage from "./images/tree_point.png";
import hatHarry from "./images/hat-harry.png";
import hatPirate from "./images/hat-pirate.png";
import styled from "styled-components";

const Container = styled.View`
  padding: 16px;
`;

const Domo = styled.Image`
  width: 350px;
  height: 350px;
  margin-top: 60px;
  background: ${props => props.background};
`;

const Hat = styled.Image`
  position: absolute;
  left: 130px;
  top: 38px;
  width: 120px;
  height: 120px;
`;

class App extends React.Component {
  state = {
    hat: "harry"
  };
  changeHat = () => {
    this.setState({ hat: this.state.hat === "harry" ? "pirate" : "harry" });
  };
  render() {
    const hatImg = this.state.hat === "harry" ? hatHarry : hatPirate;
    return (
      <Container>
        <Domo source={domoImage} background="orange" />
        <Hat source={hatImg} />
      </Container>
    );
  }
}

export default App;
