import React from 'react'

const Button = () => {

    const handleClick = () => {
        console.log('Clicou')
    }

  return (
    <button onClick={handleClick}>Button</button>
  )
}

export default Button