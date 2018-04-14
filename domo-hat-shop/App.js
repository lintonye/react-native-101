import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";

// const App = () => <HatList hats={manyHats} />;
// const App = () => <HatGrid hats={manyHats} />;

class App extends React.Component {
  state = {
    currentHat: null,
    currentScreen: "list"
  };
  onItemPress = hat =>
    this.setState({ currentHat: hat, currentScreen: "detail" });
  render() {
    if (this.state.currentScreen === "list") {
      return <HatList hats={manyHats} onItemPress={this.onItemPress} />;
    } else {
      return <HatDetail hat={this.state.currentHat} />;
    }
  }
}

export default App;
