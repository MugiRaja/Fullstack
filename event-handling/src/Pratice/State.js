import React from 'react'

const State = () => {
    const [valueIncrease, valueDecrease] = React.useState(0);
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
      <button class="" onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default State