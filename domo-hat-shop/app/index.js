import React from "react";
import HomeScreen from "./HomeScreen";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={configureStore()}>
    <HomeScreen />
  </Provider>
);

export default App;
