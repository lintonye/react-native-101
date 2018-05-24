import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatDetail from "./HatDetail";
import { manyHats } from "./Data";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native";

const HatListWithData = ({ navigation }) => (
  <HatList
    hats={manyHats}
    onItemPress={() => {
      // navigate to HatDetail
      navigation.navigate("hatDetail");
    }}
  />
);

const HatDetailWithData = () => <HatDetail hat={manyHats[0]} />;

const App = createStackNavigator({
  hatList: {
    screen: HatListWithData,
    navigationOptions: {
      headerTitle: "Domo's Hat List"
    }
  },
  hatDetail: {
    screen: HatDetailWithData
  }
});

export default App;
