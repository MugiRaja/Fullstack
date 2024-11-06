import React, { useState } from 'react'

const CreateRandomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(0);
  const generateRandomNumber = (min, max) => {
    const number = Math.floor(Math.random() * (max - min + 1) + min);
    setRandomNumber(number);
  }
  return (
    <div className="w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg gap-2">
        <p className='bg-white w-10 text-center rounded-lg'>{randomNumber}</p>
        <button className='button' onClick={() => generateRandomNumber (1,6)}>Click Me</button>
    </div>
  )
}

export default CreateRandomNumber