import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
  return (
    <div>
        <p>Voce apertou {count} vezes!</p>
        <button onClick={(e) => setCount(count+1)}>Aperte</button>
    </div>
  )
}

export default Counter