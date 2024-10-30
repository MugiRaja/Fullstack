import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [randomNumber, setRandomNumber] = useState(0); 
  const generateRandomNumber = () => { 
    const number = Math.random(); 
    setRandomNumber(number); };
  return (

    

    <div>
<p>Random Number: {randomNumber}</p>
<button variant="primary" onClick={generateRandomNumber}>Click me</button>

    </div>

  );
}

export default App;
