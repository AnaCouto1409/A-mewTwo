import React from 'react'
import App from '../../App'

function components() {
    const [data, setData] = useState('')
 
    const [object,setObject] = useState([])
   
    const api = ()=> {
      const url =`https://acessocidadao.es.gov.br/is/date=${data}`
      fetch (url)
      .then((res) => res.json())
      .then((dados) =>{
        setObject(dados)
      });
    }
  
   return (
  <div >
    <label htmlFor='date'>Selecione</label>
  
    <input type='date'id='date'onChange={(e) => setData(e.target.value)}/>
    <button type='button' onClick={api}>buscar</button>
    <img src={object.hdurl} />
   
         
  </div>
    )
}

export default components