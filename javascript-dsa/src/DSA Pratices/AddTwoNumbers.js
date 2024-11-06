import React, { useState } from 'react'

const AddTwoNumbers = () => {
    const [sum,setSum] = useState(0);
    const[sum1,setSum1] = useState(0);
    const[sumAns,setSumAns] = useState(0)
    const getValue1 = (event) =>{
        setSum(event.target.value)
    }
    const getValue2 = (event) =>{
        setSum1(event.target.value)
    }
    const ans = () =>{
        setSumAns(Number(sum)+Number(sum1))
    }
  return (
    <div className='w-96 h-52 bg-orange-500 flex flex-col items-center justify-center rounded-lg gap-5'>
        <h1>Add Two Numbers</h1>
      <input type="number" onChange={getValue1}  className='border-2 rounded-lg' />
      <input type="number" onChange={getValue2} className='border-2 rounded-lg' />
      <button onClick={ans}>Click Me</button>
      <p>Answer: {sumAns}</p>
    </div>
  )
}

export default AddTwoNumbers