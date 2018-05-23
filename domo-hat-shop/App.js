import React from "react";
import HatList from "./HatList";
import HatGrid from "./HatGrid";
import HatDetail from "./HatDetail";
import { manyHats } from "./Data";

const App = () => <HatList hats={manyHats} />;

export default App;
