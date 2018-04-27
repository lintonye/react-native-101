import React, { Component } from "react";
import { StyleSheet, View, Image, SafeAreaView, Button } from "react-native";
import DomoImg from "./images/domo-thinker.png";
import { LinearGradient } from "expo";
import harryPotterHat from "./images/hat_harry.png";
import pirateHat from "./images/hat_pirate.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center"
  },
  domoContainer: {
    paddingTop: 50,
    alignSelf: "center"
  },
  domo: {
    width: 350,
    height: 240,
    alignSelf: "center"
  },
  hat: {
    position: "absolute",
    width: 100,
    height: 100
  }
});

export default class HatSwitcher extends Component {
  state = {
    hatLeft: 130,
    hatTop: 0
  };
  changeHat = () => {
    this.setState({ hatLeft: -50, hatTop: -50 });
  };
  render() {
    const { currentHat } = this.state;
    const hatPositionStyle = {
      left: this.state.hatLeft,
      top: this.state.hatTop
    };
    return (
      <LinearGradient
        colors={["#6ea849", "#c2dfc2", "#f2fff2"]}
        style={styles.container}
      >
        <SafeAreaView>
          <View style={styles.domoContainer}>
            <Image source={DomoImg} style={styles.domo} />
            <Image
              source={harryPotterHat}
              style={[styles.hat, hatPositionStyle]}
            />
          </View>
          <Button title="Change Hat" onPress={this.changeHat} />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
