import './App.css'
import Greeting from './components/Greeting'
import Counter from './components/Counter'
import TaskList from './components/TaskList'

const tasks = [
  {
    id: 1,
    text: 'Estudar programação',
  },
  {
    id: 2,
    text: 'Ler livros',
  },
  {
    id: 3,
    text: 'Estudar inglês',
  },
]
  
function App() {
  return (
    <>
      <Greeting name="João" />    
      <Counter />
      <TaskList tasks={tasks} />  
    </>
  )
}

export default App
