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
    <div className="bg-red-600 w-96 h-48 rounded-lg flex flex-col justify-center items-center">
      <h1 className="pb-3 font-extrabold text-2xl">Odd or Even</h1>
      <input
        type="number"
        id="numberInput"
        onChange={getValueFromInput}
        className=" h-20 rounded-lg border-2 border-black"
      />
      <div className="w-full flex justify-center pt-4 ">
      <p className=" w-20 h-7 bg-black text-white text-center rounded-lg">{checkValue}</p>
      </div>
      <div className="w-full h-full flex flex-row gap-7 justify-center items-center text-white"><button className="border-2 border-black w-28 h-10 rounded-lg bg-black hover:bg-white hover:text-black" onClick={check}>Check</button>
      <button className="border-2 border-black w-28 h-10 rounded-lg bg-black  hover:bg-white hover:text-black" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default ConditionalRendering;
