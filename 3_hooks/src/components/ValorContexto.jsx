import {useContext} from 'react'
import { MeuContexto } from '../contexts/MeuContexto'

const ValorContexto = () => {

    const {msg} = useContext(MeuContexto)

  return (
    <div>
        <p>Valor do Contexto: {msg}</p>
    </div>
  )
}

export default ValorContexto