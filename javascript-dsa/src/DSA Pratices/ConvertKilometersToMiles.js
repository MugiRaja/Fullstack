import React, { useState } from 'react'

const ConvertKilometersToMiles = () => {
    const [kilometersToMiles,setKilometersToMiles] = useState(0);
    const [ansKilometersToMiles,setAnsKilometersToMiles] = useState(0);
    const getValue = (event) =>{
        setKilometersToMiles(event.target.value);
    }
  return (
    <div>
        <input type="number" onChange={getValue} />
    </div>
  )
}

export default ConvertKilometersToMiles