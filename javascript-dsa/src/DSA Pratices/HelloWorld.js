import React, { useState } from 'react'

const HelloWorld = () => {
    const [printHelloWorld,setPrintHelloWorld] = useState('');
    const print = (event) =>{
      setPrintHelloWorld(event.target.value)
    }
  return (
    <div className='w-96 h-52 bg-orange-500 flex flex-col gap-5 items-center justify-center rounded-lg'>
      <h1>Print the Hello World</h1>
      <input className='rounded-lg' type="text" onChange={print} />
<p>{printHelloWorld}</p>
    </div>
  )
}

export default HelloWorld