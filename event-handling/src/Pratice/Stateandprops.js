import React, { useState } from "react";
import ChildProps from "./ChildProps";

export const Stateandprops = () => {
  const [username, setUserName] = useState("");
  const printUserName = (event) => {
    setUserName(event.target.value)
  };
  return (
    <div>
      <input type="text" onChange={printUserName} className="border-2 border-black" />
      <ChildProps name={username}/>
    </div>
  );
};
