import './App.css'
import ExemploUseEffect from './components/ExemploUseEffect'
import Timer from './components/Timer'
import Filho from './components/Filho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorContexto from './components/ValorContexto'

function App() {

  return (
    <>
      {/* useEffect */}
      <ExemploUseEffect />
      <Timer />
      {/* useContext */}
      <MeuContextoProvider>
        <ValorContexto />
        <Filho />
      </MeuContextoProvider>
      
    </>
  )
}

export default App
