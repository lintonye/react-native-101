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
    onItemPress={item => {
      // navigate to HatDetail
      navigation.navigate("hatDetail", { hat: item });
    }}
  />
);

const HatDetailWithData = ({ navigation }) => {
  const hatThatWasJustPressed = navigation.state.params.hat;
  return <HatDetail hat={hatThatWasJustPressed} />;
};

const App = createStackNavigator({
  hatList: {
    screen: HatListWithData,
    navigationOptions: {
      headerTitle: "Domo's Hat Shop"
    }
  },
  hatDetail: {
    screen: HatDetailWithData
  }
});

export default App;
