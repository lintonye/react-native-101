import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";
import SafeAreaView from "react-native-safe-area-view";
import { View, StyleSheet, Dimensions } from "react-native";

// const App = () => <HatList hats={manyHats} />;
// const App = () => <HatGrid hats={manyHats} />;

const styles = StyleSheet.create({
  listDetailContainer: {
    flexDirection: "row"
  }
});

class App extends React.Component {
  state = {
    currentScreen: "list",
    currentHatIndex: 0
  };
  onItemPress = (_, index) =>
    this.setState({ currentHatIndex: index, currentScreen: "detail" });
  returnToList = () => this.setState({ currentScreen: "list" });
  render() {
    const isBigScreen = Dimensions.get("window").width > 500;
    const hat = manyHats[this.state.currentHatIndex];
    if (isBigScreen) {
      return (
        <View style={styles.listDetailContainer}>
          <HatList
            hats={manyHats}
            onItemPress={this.onItemPress}
            hideNameAndRatings
            selectedHatIndex={this.state.currentHatIndex}
          />
          <HatDetail hat={hat} />
        </View>
      );
    } else {
      if (this.state.currentScreen === "list") {
        return <HatList hats={manyHats} onItemPress={this.onItemPress} />;
      } else {
        return <HatDetail hat={hat} onBack={this.returnToList} />;
      }
    }
  }
}

export default () => (
  <SafeAreaView forceInset={{ bottom: "never" }}>
    <App />
  </SafeAreaView>
);
