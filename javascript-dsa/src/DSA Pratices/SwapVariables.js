import React, { useState } from "react";

const SwapVariables = () => {
  const [swapVariable, setSwapVariable] = useState(0);
  const [swapVariable1, setSwapVariable1] = useState(0);    
  const [swap,setSwap] = useState(0)
  const getValueOne = (event) => {
    setSwapVariable(event.target.value);
  };
  const getValueTwo = (event) => {
    setSwapVariable1(event.target.value);
  };
  const swap1 = () =>{
    const temp = swapVariable;
    setSwapVariable(swapVariable1);
    setSwapVariable1(temp);
  }
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col items-center justify-center rounded-lg gap-2">
      <h1>Swap Variables</h1>
      <div className="flex flex-col  items-center justify-center">
        <h1>Enter The Value for A</h1>
        <input className="rounded-lg" type="number" onChange={getValueOne} />
        <h1>Enter The Value for B </h1>
        <input className="rounded-lg" type="number" onChange={getValueTwo} />
      </div>
      <button className='button' onClick={swap1}>Click Me</button>
      <div>
        <p>Variable One: {swapVariable}</p>
        <p>Variable Two: {swapVariable1}</p>
      </div>
    </div>
  );
};

export default SwapVariables;
