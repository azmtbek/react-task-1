import React from 'react'

function Counter() {
  const [number, setNumber] = React.useState(0);

  return (
    <div><h1>The number is {number}</h1>
    <button onClick={()=>setNumber(prevN=>--prevN)}>-</button>
    <button onClick={()=>setNumber(prevN=>++prevN)}>+</button>
    </div>
  )
}

export default Counter