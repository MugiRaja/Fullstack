import React, { useState } from "react";

export const Stateandprops = () => {
  const [valueIncrease, valueDecrease] = useState(0);
  const increment = () => {
    valueDecrease(valueIncrease + 1);
  };
  const decrement = () => {
    valueDecrease(valueIncrease - 1);
  };
  const reset = () => {
    valueDecrease(0);
  };

  return (
    <div>
      <span>{valueIncrease}</span>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
