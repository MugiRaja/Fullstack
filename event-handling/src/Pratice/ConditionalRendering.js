import React, { useState } from "react";

const ConditionalRendering = () => {
  const [oddOrEven, setOddOrEven] = useState(0);
  const [checkValue, setCheckValue] = useState("");
  const getValueFromInput = (event) => {
    setOddOrEven(event.target.value);
  };
  const reset = () => {
    document.getElementById("numberInput").value = "";
    setOddOrEven("");
    setCheckValue("");
  };
  const check = () => {
    oddOrEven % 2 == 0 ? setCheckValue("even") : setCheckValue("odd");
  };
  return (
    <div>
      <h1>Odd or Even</h1>
      <input
        type="number"
        id="numberInput"
        onChange={getValueFromInput}
        className="border-2 border-black"
      />
      <button onClick={check}>Check</button>
      <button onClick={reset}>Reset</button>
      <p>{checkValue}</p>
    </div>
  );
};

export default ConditionalRendering;
