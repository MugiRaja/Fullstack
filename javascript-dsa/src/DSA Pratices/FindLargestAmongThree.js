import React,{useState} from 'react'

const FindLargestAmongThree = () => {
    const [findLargestAmongThreeValue1, setFindLargestAmongThreeValue1] = useState(0);
    const [findLargestAmongThreeValue2, setFindLargestAmongThreeValue2] = useState(0);
    const [findLargestAmongThreeValue3, setFindLargestAmongThreeValue3] = useState(0);
    const [ansFindLargestAmongThree, setAnsFindLargestAmongThree] = useState(0);
    const getValue1 = (event) => {
        findLargestAmongThreeValue1(event.target.value);
    };
    const getValue2 = (event) => {
        findLargestAmongThreeValue2(event.target.value);
    };
    const getValue3 = (event) => {
        findLargestAmongThreeValue3(event.target.value);
    };
    const ans = () => {
       if () {
        
       }
    }
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
        <h1>Find The Largest of Three</h1>
        <input onChange={getValue1} type="number" />
        <input onChange={getValue2} type="number" />
        <input onChange={getValue3} type="number" />
        <button onClick={ans}>Click Me</button>
    </div>
  )
}

export default FindLargestAmongThree