import React, { useState } from "react";

const CheckPositiveNegativeOrZero = () => {
  const [checkPositiveNegativeOrZero, setCheckPositiveNegativeOrZero] =
    useState(0);
    const [ansCheckPositiveNegativeOrZero,setAnsCheckPositiveNegativeOrZero] = () =>{
        if ((Number(checkPositiveNegativeOrZero))> 0) {
            ansCheckPositiveNegativeOrZero(checkPositiveNegativeOrZero+"is Positive")
        }
        else if ((Number(checkPositiveNegativeOrZero))< 0){
           ansCheckPositiveNegativeOrZero(checkPositiveNegativeOrZero+"is Negative")
        }
        else{
            alert((Number(checkPositiveNegativeOrZero))==0)
        }
    }
  const getValue = (event) => {
    setCheckPositiveNegativeOrZero(event.target.value);
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
      <input type="number" onChange={getValue} />
    </div>
  );
};

export default CheckPositiveNegativeOrZero;
