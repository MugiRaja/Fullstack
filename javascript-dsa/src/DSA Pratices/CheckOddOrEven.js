import React, { useState } from "react";

const CheckOddOrEven = () => {
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
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
      <h1>Check Odd Or Even</h1>
      <input
        className="rounded-lg"
        type="number"
        onChange={getValueFromInput}
      />
      <div className="flex gap-4">
        <button className="button" onClick={check}>
          Click Me
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <p>Answer: {checkValue}</p>
    </div>
  );
};

export default CheckOddOrEven;
