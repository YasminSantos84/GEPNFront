// import React from 'react'
import "./Cruds.css";

const TpMovimentacao = () => {
  return <div className='Cruds'>
    <h2>Inserir/Alterar Tipo de Movimento</h2>
    <form>
      <div className="form-control">
        <label htmlFor="Desc">Descrição:</label>
        <input 
          type="text"
          name="Desc"
          id="Desc"/>
        <label htmlFor="Op">Operação:</label>
        <select id="Status">
          <option value="E">Entrada</option>
          <option value="S">Saida</option>
          <option value="I">Interno</option>
        </select>       
        <label htmlFor="Status">Status:</label>
        <input 
          type="text"
          name="Status"
          id="Status"/>   
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
  </div>
}

export default TpMovimentacao