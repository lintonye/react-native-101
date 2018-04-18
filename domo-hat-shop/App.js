import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";
import SafeAreaView from "react-native-safe-area-view";
import { View, StyleSheet, Dimensions, LayoutAnimation } from "react-native";

class App extends React.Component {
  handleDimChange = () => {
    this.forceUpdate();
  };
  componentDidMount = () => {
    Dimensions.addEventListener("change", this.handleDimChange);
  };
  componentWillUnmount = () => {
    Dimensions.removeEventListener("change", this.handleDimChange);
  };

  render() {
    const cardWidth = 170;
    const columns = Math.max(
      1,
      Math.floor(Dimensions.get("window").width / cardWidth)
    );
    return <HatGrid hats={manyHats} columns={columns} />;
  }
}

export default () => (
  <SafeAreaView forceInset={{ bottom: "never" }}>
    <App />
  </SafeAreaView>
);
