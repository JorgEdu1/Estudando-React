import {useContext}from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const Filho = () => {

  const {setMsg} = useContext(MeuContexto)

  return (
    <div>
        <button onClick={() => setMsg('Mensagem do filho')}>Mudar</button>
    </div>
  )
}

export default Filho