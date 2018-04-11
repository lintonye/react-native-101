import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import { manyHats } from "./Data";

const App = () => <HatList hats={manyHats} />;
// const App = () => <HatGrid hats={manyHats} />;

export default App;
