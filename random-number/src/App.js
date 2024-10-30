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
    <div class="w-full h-svh bg-pink-600 flex items-center justify-center flex-col">
      <p class="text-3xl pb-12 font-medium">Random Number: {randomNumber}</p>
      <button class="bg-zinc-950 text-fuchsia-50 w-28 h-7 rounded-xl" variant="primary" onClick={() => generateRandomNumber (1,6)}>
        Click me
      </button>
    </div>
  );
}

export default App;
