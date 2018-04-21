import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatSwitcher from "./HatSwitcher";
import { manyHats, hats } from "./Data";
import Login from "./Login";
import { View, Button, LayoutAnimation, UIManager } from "react-native";

// const App = () => <Login />;
// const App = () => <HatGrid hats={manyHats} />;
const App = () => <HatSwitcher />;

// class App extends React.Component {
//   state = {
//     hats: hats.slice(0, 6)
//   };
//   constructor(props) {
//     super(props);
//     UIManager.setLayoutAnimationEnabledExperimental &&
//       UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
//   removeHat = (_, index) => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//     const newHats = [
//       ...this.state.hats.slice(0, index),
//       ...this.state.hats.slice(index + 1)
//     ];
//     this.setState({ hats: newHats });
//   };
//   addHat = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
//     this.setState({
//       hats: [...this.state.hats, hats[Math.floor(Math.random() * hats.length)]]
//     });
//   };
//   render() {
//     return (
//       <View style={{ marginTop: 50 }}>
//         <Button title="Add hat" onPress={this.addHat} />
//         <HatList
//           hats={this.state.hats}
//           columns={2}
//           onItemPress={this.removeHat}
//         />
//       </View>
//     );
//   }
// }

export default App;
