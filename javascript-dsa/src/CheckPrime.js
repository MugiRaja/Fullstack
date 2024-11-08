import React, { useState } from "react";

const CheckPrime = () => {
  const [checkPrimeNumber, setCheckPrimeNumber] = useState(0);
  const [ansCheckPrimeNumber, setAnsCheckPrimeNumber] = useState();
  const getValue = (event) => {
    setCheckPrimeNumber(event.target.value);
  };
  const ans = () => {
    const num = parseInt(checkPrimeNumber);
    if (num <= 1) {
      setAnsCheckPrimeNumber("Not a prime number");
      return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    setAnsCheckPrimeNumber(isPrime ? "Prime number" : "Not a prime number");
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-1 items-center justify-center rounded-lg">
      <input type="Number" onChange={getValue} />
      <button onClick={ans}>Check</button>
      <p>Answer: {ansCheckPrimeNumber}</p>
    </div>
  );
};

export default CheckPrime;
