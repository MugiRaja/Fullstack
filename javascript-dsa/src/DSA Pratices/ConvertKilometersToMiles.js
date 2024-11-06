import React, { useState } from "react";

const ConvertKilometersToMiles = () => {
  const [kilometersToMiles, setKilometersToMiles] = useState(0);
  const [ansKilometersToMiles, setAnsKilometersToMiles] = useState(0);
  const getValue = (event) => {
    setKilometersToMiles(event.target.value);
  };
  const ans = () => {
    setAnsKilometersToMiles(Number(kilometersToMiles) * 0.621371);
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
      <h1>Convert Kilometers To Miles</h1>
      <input className="rounded-lg" type="number" onChange={getValue} />
      <button onClick={ans}>Click Me</button>
      <p>Answer: {ansKilometersToMiles}</p>
    </div>
  );
};

export default ConvertKilometersToMiles;
