import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HelloWorld from './DSA Pratices/HelloWorld';
import AddTwoNumbers from './DSA Pratices/AddTwoNumbers';
import FindSquareRoot from './DSA Pratices/FindSquareRoot';
import AreaOfTriangle from './DSA Pratices/AreaOfTriangle';
import SwapVariables from './DSA Pratices/SwapVariables';
import QuadraticEquation from './DSA Pratices/QuadraticEquation';

function App() {
  return (
   <BrowserRouter>
    <div className='  '>
      <h1 className='text-4xl text-center '>DSA Pratices</h1>
      <div className='flex'>
      <div className='text-blue-600 underline w-1/2 h-svh flex overflow-y-scroll border-r-2 border-black'>
        <ul >
          <li>
          <Link  to="/HelloWorld">Print Hello World</Link>
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
        </ul>
      </div>
      <div className=' w-1/2 h-svh flex justify-center items-center'>
      <Routes>
      <Route  path="/HelloWorld" element={<HelloWorld />} />
      <Route path='/AddTwoNumbers' element={<AddTwoNumbers/>}/>
      <Route path='/FindSquareRoot' element={ <FindSquareRoot/>}/>
      <Route path='/AreaOfTriangle' element={ <AreaOfTriangle/>}/>
      <Route path='/SwapVariables' element={ <SwapVariables/>}/>
      <Route path='/QuadraticEquation' element={ <QuadraticEquation/>}/>
      </Routes>
      </div>
      </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
