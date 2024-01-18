import React from 'react'

const TaskList = (props) => {
    const tasks = props.tasks
  return (
    <div>
        <h1>Lista de Tarefas: </h1>
         {props.tasks.length ? props.tasks.map((task) => {
            return (<p key={task.id}>{task.text}</p>)
        }) : <p>Não há tarefas!</p>}
    </div>
  )
}

export default TaskList