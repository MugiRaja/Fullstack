import React, { useState } from "react";

const FindLargestAmongThree = () => {
  const [findLargestAmongThreeValue1, setFindLargestAmongThreeValue1] =
    useState(0);
  const [findLargestAmongThreeValue2, setFindLargestAmongThreeValue2] =
    useState(0);
  const [findLargestAmongThreeValue3, setFindLargestAmongThreeValue3] =
    useState(0);
  const [ansFindLargestAmongThree, setAnsFindLargestAmongThree] = useState(0);
  const getValue1 = (event) => {
    setFindLargestAmongThreeValue1(event.target.value);
  };
  const getValue2 = (event) => {
    setFindLargestAmongThreeValue2(event.target.value);
  };
  const getValue3 = (event) => {
    setFindLargestAmongThreeValue3(event.target.value);
  };
  const ans = () => {
    if (
      Number(findLargestAmongThreeValue1) >=
        Number(findLargestAmongThreeValue2) &&
      Number(findLargestAmongThreeValue1) >= Number(findLargestAmongThreeValue3)
    ) {
      setAnsFindLargestAmongThree(
        Number(findLargestAmongThreeValue1) +
          "Value One is the Biggest Among Three"
      );
    } else if (
      Number(findLargestAmongThreeValue2) >=
        Number(findLargestAmongThreeValue1) &&
      Number(findLargestAmongThreeValue2) >= Number(findLargestAmongThreeValue3)
    ) {
      setAnsFindLargestAmongThree(
        Number(findLargestAmongThreeValue2) + "Value Two is Biggest Among Three"
      );
    } else {
      setAnsFindLargestAmongThree(
        Number(findLargestAmongThreeValue3) +
          "Value Three is Biggest Among Three"
      );
    }
  };
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-1 items-center justify-center rounded-lg">
      <h1>Find The Largest of Three</h1>
      <div className="flex flex-col gap-1 ">
      <input className="rounded-lg"  onChange={getValue1} type="number" />
      <input className="rounded-lg" onChange={getValue2} type="number" />
      <input className="rounded-lg" onChange={getValue3} type="number" />
      </div>
      <button className="button" onClick={ans}>Click Me</button>
      <p>Answer: {ansFindLargestAmongThree}</p>
    </div>
  );
};

export default FindLargestAmongThree;
