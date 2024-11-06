import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import State from "./Pratice/State";
import ParentProps from "./Pratice/ParentProps";
import { Stateandprops } from "./Pratice/Stateandprops";
import UseEffect from "./Pratice/UseEffect";
import ConditionalRendering from "./Pratice/ConditionalRendering";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" flex justify-between items-center px-10">
        <div className=" overflow-auto">
          <h3 className="font-extrabold text-3xl w-full flex justify-center">
            React Pratices
          </h3>
          <ul>
            <li>
              <Link to="/state" className="text-blue-600 underline">
                01 State
              </Link>
            </li>
            <li>
              <Link className="text-blue-600 underline" to="/parentProps">
                props
              </Link>
            </li>
            <li>
              <Link className="text-blue-600 underline" to="/stateAndProps">
                State & Props
              </Link>
            </li>
            <li>
              <Link className="text-blue-600 underline" to="/useEffect"></Link>
            </li>
            <li>
              <Link
                className="text-blue-600 underline"
                to="/conditionalRendering"
              >
                ConditionalRendering
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/state" element={<State />} />
          <Route path="/parentProps" element={<ParentProps />} />
          <Route path="/stateAndProps" element={<Stateandprops />} />
          <Route path="/useEffect" element={<UseEffect />} />
          <Route
            path="/conditionalRendering"
            element={<ConditionalRendering />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
