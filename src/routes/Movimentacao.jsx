// import React from 'react'
import "./Cruds.css";

const Movimentacao = () => {
  return <div className='Cruds'>
    <h2>Inserir/Alterar Movimentação</h2>
    <form>
      <div className="form-control">
        <label  htmlFor="TpMov">Tipo de Lançamento:</label>
          <input 
          type='text' 
          name='TpMov' 
          id='TpMov'
          />        
        <label  htmlFor="Prod">Produto:</label>
          <input 
          type='text' 
          name='Prod' 
          id='Prod'
          /> 
        <label  htmlFor="Quant">Quantidade:</label>
          <input 
          type='number' 
          name='Quant' 
          id='Quant'
          />     
        <label  htmlFor="Observ">Observações:</label>
          <input 
          type='text' 
          name='Observ' 
          id='Observ'
          />              
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
  </div>
}

export default Movimentacao