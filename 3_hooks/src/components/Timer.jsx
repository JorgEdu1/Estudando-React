import { useEffect, useState } from 'react'

const Timer = () => {

    const [sec, setSec] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSec((prevSec)=> prevSec + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [sec]) //array de dependencias
    
  return (
    <div>
        <p>Se passou {sec}</p>
    </div>
  )
}

export default Timer