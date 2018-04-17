import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";
import SafeAreaView from "react-native-safe-area-view";
import { View, StyleSheet, Dimensions, LayoutAnimation } from "react-native";

class App extends React.Component {
  render() {
    return <HatGrid hats={manyHats} />;
  }
}

export default () => (
  <SafeAreaView forceInset={{ bottom: "never" }}>
    <App />
  </SafeAreaView>
);
