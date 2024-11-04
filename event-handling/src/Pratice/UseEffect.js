import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = "count -> " + count;
  }, [count]);
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default UseEffect;
