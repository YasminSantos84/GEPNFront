// import React from 'react'
import "./Produtos.css";

const Produtos = () => {
  return <div className='produtos'>
    <h2>Inserir Novo Produto:</h2>
    <form>
      <div className="form-control">
        <label htmlFor="Desc">Descrição:</label>
        <input 
          type='text' 
          name='Desc' 
          id='Desc'
          // placeholder='Digite uma descrição'
          />
        <label htmlFor="Valid">Validade(em dias):</label>
        <input 
          type='number' 
          name='Valid' 
          id='Valid'/>
        <label htmlFor="Status">Status:</label>
        <input 
          type='text' 
          name='Status' 
          id='Status'/>      
        <label htmlFor="VComp">Valor de compra:</label>
        <input 
          type='number' 
          name='VComp' 
          id='VComp'/>    
        <label htmlFor="VVend">Valor de venda:</label>
        <input 
          type='number' 
          name='VVend' 
          id='VVend'/>                          
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
  </div>
}

export default Produtos