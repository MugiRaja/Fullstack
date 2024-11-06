import React, { useState } from "react";

const FindSquareRoot = () => {
  const [squareRoot, setSquareRoot] = useState(0);
  const [ansSquareRoot,setAnsSquareRoot] = useState(0);
  const getValue = (event) => {
    setSquareRoot(event.target.value);
  };
  const ans = () =>{
setAnsSquareRoot(Math.sqrt(Number(squareRoot)))
  }

  return (
    <div className='w-96 h-40 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg'>
      <h1>Find the Square Root</h1>
      <input type="number" onChange={getValue} />
      <button onClick={ans}>Click Me</button>
      <p>Answer: {ansSquareRoot}</p>
    </div>
  );
};

export default FindSquareRoot;
