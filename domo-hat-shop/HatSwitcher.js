import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Button,
  Animated
} from "react-native";
import Domo from "./Domo";
import { LinearGradient } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  }
});

export default class HatSwitcher extends Component {
  render() {
    const { index, hats } = this.props;
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <Domo index={index} hats={hats} />
      </LinearGradient>
    );
  }
}
