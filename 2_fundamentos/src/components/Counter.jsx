import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(200)

    const add = (valor) => {
        setCount(valor + count)
    }


  return (
    <div>
        <h3>Counter</h3>
        <p>Valor: {count}</p>
        <button onClick={() => add(1000)}>+1000</button>
        <button onClick={() => add(100)}>+100</button>
        <button onClick={() => add(1)}>+1</button>
        <button onClick={() => add(-1)}>-1</button>
        <button onClick={() => add(-100)}>-100</button>
        <button onClick={() => add(-1000)}>-1000</button>

    </div>
  )
}

export default Counter