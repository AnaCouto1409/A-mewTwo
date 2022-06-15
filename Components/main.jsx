import React from 'react'

const main = () => {
    const url=``
    fetch(url)
    .then((res)=>res.json())
    .then((dados))
    console.log(dados)
  return (
    <form>
    <label htmlFor='date'>Selecione a label</label>
     <input type='date' id='date' onChange={(e)=> setData(e.target.value)} />
     <button type='button' onClick={api}>Enviar</button>
     <img src={objeto.hdurl} />
     <h1>{objeto.hdurl}</h1>
     </form>
    )
}

export default main