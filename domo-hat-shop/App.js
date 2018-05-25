import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatDetail from "./HatDetail";
import MyAccount from "./MyAccount";
import { manyHats } from "./Data";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { Button, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

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

const Hats = createStackNavigator({
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

const App = createBottomTabNavigator({
  hats: {
    screen: Hats,
    navigationOptions: {
      tabBarLabel: "Hats",
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={`ios-list${focused ? "" : "-outline"}`}
          size={25}
          color={tintColor}
        />
      )
    }
  },
  myAccount: {
    screen: MyAccount,
    navigationOptions: {
      tabBarLabel: "My Account",
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicons
          name={`ios-person${focused ? "" : "-outline"}`}
          size={25}
          color={tintColor}
        />
      )
    }
  }
});

export default App;
