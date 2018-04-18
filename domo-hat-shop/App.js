import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";
import SafeAreaView from "react-native-safe-area-view";
import { View, StyleSheet, Dimensions, LayoutAnimation } from "react-native";

class App extends React.Component {
  state = {
    appWidth: 0
  };
  updateAppWidth = ({
    nativeEvent: {
      layout: { x, y, width, height }
    }
  }) => {
    this.setState({ appWidth: width });
  };
  render() {
    const cardWidth = 170;
    const columns = Math.max(1, Math.floor(this.state.appWidth / cardWidth));
    return (
      <View onLayout={this.updateAppWidth}>
        <HatGrid hats={manyHats} columns={columns} />
      </View>
    );
  }
}

export default () => (
  <SafeAreaView
    forceInset={{ bottom: "never" }}
    style={{ flexDirection: "row" }}
  >
    <View style={{ flex: 1 }}>
      <App />
    </View>
    <View style={{ flex: 1 }}>
      <HatDetail hat={manyHats[0]} />
    </View>
  </SafeAreaView>
);
