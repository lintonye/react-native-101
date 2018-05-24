import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatSwitcher from "./HatSwitcher";
import HatDetail from "./HatDetail";
import { manyHats } from "./Data";
import { createStackNavigator } from "react-navigation";
import { Button } from "react-native";

const HatListWithData = ({ navigation }) => (
  <HatList
    hats={manyHats}
    onItemPress={(item, index) => {
      // navigate to HatDetail
      navigation.navigate("hatDetail", { hat: item, index });
    }}
  />
);

const HatDetailWithData = ({ navigation }) => {
  const { hat, index } = navigation.state.params;
  return (
    <HatDetail
      hat={hat}
      onTryHat={() => navigation.navigate("hatSwitcher", { index })}
    />
  );
};

const HatSwitcherWithData = ({ navigation }) => (
  <HatSwitcher hats={manyHats} index={navigation.state.params.index} />
);

const App = createStackNavigator({
  hatList: {
    screen: HatListWithData,
    navigationOptions: {
      headerTitle: "Domo's Hat List"
    }
  },
  hatDetail: {
    screen: HatDetailWithData
  },
  hatSwitcher: {
    screen: HatSwitcherWithData,
    navigationOptions: {
      header: null
    }
  }
});

export default App;
