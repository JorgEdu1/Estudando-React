import React from 'react'

const Cachorro = ({nome, raca}) => {
  return (
    <div>
        <h3>Cachorro</h3>
        <p>Nome: {nome}</p>
        <p>Raça: {raca}</p>
    </div>
  )
}

export default Cachorro