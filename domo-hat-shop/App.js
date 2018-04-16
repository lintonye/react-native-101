import React from "react";
import HatList from "./HatList";
import HatDetail from "./HatDetail";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";

// const App = () => <HatList hats={manyHats} />;
// const App = () => <HatGrid hats={manyHats} />;

class App extends React.Component {
  state = {
    currentHatIndex: 0,
    currentScreen: "list"
  };
  onItemPress = (_, index) =>
    this.setState({ currentHatIndex: index, currentScreen: "detail" });
  returnToList = () => this.setState({ currentScreen: "list" });
  render() {
    if (this.state.currentScreen === "list") {
      return <HatList hats={manyHats} onItemPress={this.onItemPress} />;
    } else {
      const hat = manyHats[this.state.currentHatIndex];
      return <HatDetail hat={hat} onBack={this.returnToList} />;
    }
  }
}

export default App;
