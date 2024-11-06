import React, { useState } from "react";

const AreaOfTriangle = () => {
  const [areaOfTriangleBase, setAreaOfTriangleBase] = useState(0);
  const [areaOfTriangleHeight, setAreaOfTriangleHeight] = useState(0);
  const [ansAreaOfTriangle, setAnsAreaOfTriangle] = useState(0);
  const getValueBase = (event) => {
    setAreaOfTriangleBase(event.target.value);
  };
  const getValueHeight = (event) => {
    setAreaOfTriangleHeight(event.target.value);
  };
  const ans = () => {
    if ( areaOfTriangleBase == 0 || areaOfTriangleHeight == 0) {
      alert("Please enter the valid input");
    } else {
      const area = 0.5;
      setAnsAreaOfTriangle(area * Number(areaOfTriangleBase) * Number(areaOfTriangleHeight));
    }
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col items-center justify-center rounded-lg gap-2">
      <h1>Find the Area Of Triangle</h1>
      <div className="flex flex-col  items-center justify-center">
        <h1>Enter The Value for Base</h1>
        <input className="rounded-lg" type="number" onChange={getValueBase} />
        <h1>Enter The Value for Height </h1>
        <input className="rounded-lg" type="number" onChange={getValueHeight} />
      </div>
      <button className='button' onClick={ans}>Click Me</button>
      <p>Answer: {ansAreaOfTriangle}</p>
    </div>
  );
};

export default AreaOfTriangle;
