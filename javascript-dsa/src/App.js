import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HelloWorld from "./DSA Pratices/HelloWorld";
import AddTwoNumbers from "./DSA Pratices/AddTwoNumbers";
import FindSquareRoot from "./DSA Pratices/FindSquareRoot";
import AreaOfTriangle from "./DSA Pratices/AreaOfTriangle";
import SwapVariables from "./DSA Pratices/SwapVariables";
import QuadraticEquation from "./DSA Pratices/QuadraticEquation";
import ConvertKilometersToMiles from "./DSA Pratices/ConvertKilometersToMiles";
import CreateRandomNumber from "./DSA Pratices/CreateRandomNumber";
import CheckOddOrEven from "./DSA Pratices/CheckOddOrEven";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-svh">
        <h1 className="text-4xl text-center ">DSA Pratices</h1>
        <div className="flex h-[94%]">
          <div className="text-blue-600 underline w-[30%] flex overflow-y-scroll border-r-2 border-black">
            <ul>
              <li>
                <Link to="/HelloWorld">Print Hello World</Link>
              </li>
              <li>
                <Link to="/AddTwoNumbers">Add Two Numbers</Link>
              </li>
              <li>
                <Link to="/FindSquareRoot">Find Square Root</Link>
              </li>
              <li>
                <Link to="/AreaOfTriangle">Find Area Of Triangle</Link>
              </li>
              <li>
                <Link to="/SwapVariables">Swap Variables</Link>
              </li>
              <li>
                <Link to="/QuadraticEquation">QuadraticEquation</Link>
              </li>
              <li>
                <Link to="/ConvertKilometersToMiles">
                  Convert Kilometers To Miles
                </Link>
              </li>
              <li>
                <Link to="/CreateRandomNumber">Create Random Number</Link>
              </li>
              <li>
                <Link to="/CheckOddOrEven">Check Odd Or Even</Link>
              </li>
            </ul>
          </div>
          <div className=" w-[70%]  flex justify-center items-center">
            <Routes>
              <Route path="/HelloWorld" element={<HelloWorld />} />
              <Route path="/AddTwoNumbers" element={<AddTwoNumbers />} />
              <Route path="/FindSquareRoot" element={<FindSquareRoot />} />
              <Route path="/AreaOfTriangle" element={<AreaOfTriangle />} />
              <Route path="/SwapVariables" element={<SwapVariables />} />
              <Route
                path="/QuadraticEquation"
                element={<QuadraticEquation />}
              />
              <Route
                path="/ConvertKilometersToMiles"
                element={<ConvertKilometersToMiles />}
              />
              <Route
                path="/CreateRandomNumber"
                element={<CreateRandomNumber />}
              />
              <Route path="/CheckOddOrEven" element={<CheckOddOrEven />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
