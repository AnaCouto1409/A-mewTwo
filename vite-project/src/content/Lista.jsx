import React, { useEffect,useState } from 'react'
import api from '../../../pages/api'
import funcionarios from '../pages/funcionarios';

const Lista = () => {
    const [alunos, setAlunos] = useState([]);
    useEffect(() =>{
        api.get('/funcionarios')
        .then((response) => setAlunos(response.data))
         .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  async  function deletarFuncionario(id){
    await api.delete(`/funcionarios/${id}`) 
   } 
   async function editarFuncionarios(id){
    await api.put(`/funcionarios/${id}`, {
      "nome_completo": "Hud",
    "email": "helio@gmail.com",
    "celular": 123,
    "cargo": "professor",
    "bairro": "teste",
    "periodo": "teste",
    "admissao": "1000/02/20"})
   }
  return (
    <div>
        <h1>Conheça nossos funcionários!!!</h1>
        {alunos.map((F,index)=>{
          return(
          <div>
          <p key={index}>{F.nome_completo}</p>
          <p key={index}>{F.email}</p> 
          <p key={index}>{F.cargo}</p>
          <button  onClick={()=> editarFuncionarios(F.id_funcionario)} key={index}>Editar</button>
          <input type="text" name ="nome_completo" placeholder={F.nome_completo} key={index}/>
          <button onClick={()=>deletarFuncionario(F.id_funcionario)} key={index} >Deletar</button>{
            console.log(F)
          }
          </div>
          )
        })}
    </div>
  )
}

export default Lista