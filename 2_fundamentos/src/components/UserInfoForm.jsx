import React from 'react'
import { useState } from 'react'

const UserInfoForm = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, age, email)
    }

  return (
    <div>
        <h1>Formulário:</h1>
        <form 

        onSubmit={handleSubmit}
        
        style={
            {
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                margin: 'auto',
                justifyContent: 'center',
                alignItems: 'center'
            }
        
        }>
            <label>Nome:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Idade:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="submit" value="Enviar"></input>
        </form>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Email: {email}</p>
    </div>
  )
}

export default UserInfoForm