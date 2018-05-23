import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatDetail from "./HatDetail";
import { manyHats, hats } from "./Data";
import Login from "./Login";
import { StackNavigator } from "react-navigation";

const HatListNav = ({ navigation }) => (
  <HatList
    hats={manyHats}
    onItemPress={hat => navigation.navigate("hatDetail", { hat })}
  />
);

const HatDetailNav = ({ navigation }) => {
  const { params } = navigation.state;
  const { hat } = params;
  return <HatDetail hat={hat} />;
};

const App = StackNavigator({
  hatList: {
    screen: HatListNav,
    navigationOptions: {
      headerTitle: "Domo's Hat Shop"
    }
  },
  hatDetail: {
    screen: HatDetailNav
  }
});

export default App;
