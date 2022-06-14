import React from 'react'

export default function (){
    const {info, voltar} = this.props.name;
    const [carro, setCarro] = useState();
    const handleEdit=(e)=>{
        voltar();
        setCarro(true)
    };
    return (
        <div className={styles.Edit}>menu
        <img onClick={handleEdit} src={pencil} />
        <carro carro={carro} setCarro={setCarro} />
        </div>
      )
    

}



export default menu