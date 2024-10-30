import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(number);
  };
  return (
    <div>
      <p>Random Number: {randomNumber}</p>
      <button variant="primary" onClick={() => generateRandomNumber (1,6)}>
        Click me
      </button>
    </div>
  );
}

export default App;
