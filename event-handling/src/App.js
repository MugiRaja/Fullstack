import React from "react";
import { Stateandprops } from "./Pratice/Stateandprops";
import ParentProps from "./Pratice/ParentProps";
import ChildProps from "./Pratice/ChildProps";
import State from "./Pratice/State";

const App = () => {
  return (
    <div>
      <Stateandprops />
      <ParentProps/>
      <ChildProps/>
      <State/>
    </div>
  );
};

export default App;
