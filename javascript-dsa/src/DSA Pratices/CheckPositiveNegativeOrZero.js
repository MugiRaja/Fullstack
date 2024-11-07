import React, { useState } from "react";

const CheckPositiveNegativeOrZero = () => {
  const [checkPositiveNegativeOrZero, setCheckPositiveNegativeOrZero] =
    useState(0);
    const [ansCheckPositiveNegativeOrZero,setAnsCheckPositiveNegativeOrZero] = useState(0);
    const ans = () =>{
        if ((Number(checkPositiveNegativeOrZero))> 0) {
            setAnsCheckPositiveNegativeOrZero(checkPositiveNegativeOrZero+"is Positive")
        }
        else if ((Number(checkPositiveNegativeOrZero))< 0){
            setAnsCheckPositiveNegativeOrZero(checkPositiveNegativeOrZero+"is Negative")
        }
        else{
            alert("Invalid Input")
        }
    }
  const getValue = (event) => {
    setCheckPositiveNegativeOrZero(event.target.value);
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
        <h1>Check Positive And Nagative</h1>
      <input type="number" onChange={getValue} />
      <button onClick={ans}>Click Me</button>
      <p>{ansCheckPositiveNegativeOrZero}</p>
    </div>
  );
};

export default CheckPositiveNegativeOrZero;
