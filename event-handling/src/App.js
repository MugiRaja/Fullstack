import React from "react";
import { Stateandprops } from "./Pratice/Stateandprops";
import ParentProps from "./Pratice/ParentProps";
import ChildProps from "./Pratice/ChildProps";
import State from "./Pratice/State";
import UseEffect from "./Pratice/UseEffect";

const App = () => {
  return (
    <div>
      <Stateandprops />
      <ParentProps/>
      <ChildProps/>
      <State/>
      <UseEffect/>
    </div>
  );
};

export default App;
