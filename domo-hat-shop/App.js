import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatDetail from "./HatDetail";
import { manyHats } from "./Data";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native";

const HatListWithData = () => <HatList hats={manyHats} />;

const App = createStackNavigator({
  hatList: {
    screen: HatListWithData,
    navigationOptions: {
      headerTitle: "Domo's Hat Shop"
    }
  }
});

export default App;
