import React from 'react'

const pages = () => {
  return (
   <header>
    <button onClick={handleClick}>Cadastre!</button>
        <input type="name" id='name' placeholder='escreva seu nome completo'>
        </input>
        <input type="email" id='email' placeholder='escreva seu melhor email'>
        </input>
        <input type="text" id='text' placeholder='escreva seu bairro'>
        </input>
        <input type="number" id='number' placeholder='escreva seu numero'>
        </input>
        <input type="number" id='number' placeholder='habilitação'>
        </input>
        <input type="datetime" id='datetime' placeholder='digite o periodo'>
        </input>
   </header>
   
  )
}

export default pages