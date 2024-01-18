import React from 'react'
import { useState } from 'react'
//testando o git kraken
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