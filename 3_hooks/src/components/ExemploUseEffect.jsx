import { useEffect, useState } from 'react'

const ExemploUseEffect = () => {
    //executar algo baseado em algo
    //a mudanca de valor de um estado por exemplo

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = `Voce Clickou ${counter} vezes`
    }, [counter]) //array de dependencias

    
  return (
    <div>
        <p>Voce Clickou {counter} vezes</p>
        <button onClick={() => setCounter(counter + 1)}>Click aqui</button>
    </div>
  )
}

export default ExemploUseEffect