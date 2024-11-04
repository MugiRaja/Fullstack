import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import State from "./Pratice/State";
import ParentProps from "./Pratice/ParentProps";
import { Stateandprops } from "./Pratice/Stateandprops";
import UseEffect from "./Pratice/UseEffect";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h3>React Pratices</h3>
        <ul>
          <li>
            <Link to="/state">01 State</Link>
          </li>
          <li>
            <Link to="/parentProps">props</Link>
          </li>
          <li>
            <Link to="/stateAndProps">State & Props</Link>
          </li>
          <li>
            <Link to="/useEffect"> useeffect</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/state" element={<State />} />
        <Route path="/parentProps" element={<ParentProps />} />
        <Route path="/stateAndProps" element={<Stateandprops />} />
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
