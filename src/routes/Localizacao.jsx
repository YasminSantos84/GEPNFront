// import React from 'react'
import "./Cruds.css";

const Localizacao = () => {
  return <div className='Cruds'>
    <h2>Inserir/Alterar Localização</h2>
    <form>
      <div className="form-control">
        <label  htmlFor="Desc">Descrição:</label>
          <input 
          type='text' 
          name='Desc' 
          id='Desc'
          />
        <label  htmlFor="Det">Detalhes:</label>
          <input 
          type='text' 
          name='Det' 
          id='Det'
          />
        <label  htmlFor="Unid">Unidade:</label>
          <input 
          type='number' 
          name='Unid' 
          id='Unid'
          />      
        <label  htmlFor="EstMax">Estoque Máximo:</label>
          <input 
          type='number' 
          name='EstMax' 
          id='EstMax'
          />            
        <label  htmlFor="Bloq">Bloqueado:</label>
          <input
          type='text' 
          name='Bloq' 
          id='Bloq'
          />          
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
  </div>
}

export default Localizacao