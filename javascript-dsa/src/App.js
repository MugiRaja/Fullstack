import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import HelloWorld from './DSA Pratices/HelloWorld';

function App() {
  return (
   <BrowserRouter>
    <div>
      <div>
        <ul>
          <li>
          <Link to="/HelloWorld">Print Hello World</Link>
          </li>
        </ul>
      </div>
      <Routes>
      <Route path="/HelloWorld" element={<HelloWorld />} />
      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
