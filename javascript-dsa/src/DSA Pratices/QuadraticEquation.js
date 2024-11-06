import React, { useState } from "react";

const QuadraticEquation = () => {
  const [quadraticEquationValue1, setQuadraticEquationValue1] = useState(0);
  const [quadraticEquationValue2, setQuadraticEquationValue2] = useState(0);
  const [quadraticEquationValue3, setQuadraticEquationValue3] = useState(0);
  const [ansQuadraticEquation, setAnsQuadraticEquation] = useState(0);
  const [ansQuadraticEquation1, setAnsQuadraticEquation1] = useState(0);
  const getValue1 = (event) => {
    setQuadraticEquationValue1(event.target.value);
  };
  const getValue2 = (event) => {
    setQuadraticEquationValue2(event.target.value);
  };
  const getValue3 = (event) => {
    setQuadraticEquationValue3(event.target.value);
  };
  const ans = () => {
    const a = quadraticEquationValue1;
    const b = quadraticEquationValue2;
    const c = quadraticEquationValue3;
    const discriminant = b * b - 4 * a * c;
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    setAnsQuadraticEquation(root1);
    setAnsQuadraticEquation1(root2);
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col items-center justify-center rounded-lg gap-2">
      <h1>Quadratic Equation</h1>
      <div className="flex flex-col gap-1">
        <input className="rounded-lg" type="number" onChange={getValue1} />
        <input className="rounded-lg" type="number" onChange={getValue2} />
        <input className="rounded-lg" type="number" onChange={getValue3} />
      </div>
      <button className='button' onClick={ans}>Click Me</button>
      <p>Root One: {ansQuadraticEquation}</p>
      <p>Root Two: {ansQuadraticEquation1}</p>
    </div>
  );
};

export default QuadraticEquation;
