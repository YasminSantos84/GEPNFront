// import React from 'react'
import "./Cruds.css";
import blogFetch from "../axios/config";
import {useState} from "react"
import { useNavigate } from "react-router-dom";

const Produtos = () => {
  const navigate = useNavigate()

  const [Desc, setDesc] = useState()
  const [Valid, SetValid] = useState()
  const [Status, setStatus] = useState()
  const [VComp, setVComp] = useState()
  const [VVend, setVVend] = useState()

  const createProd = async(e) =>{
    e.preventDefault();
    console.log(Desc, Valid, Status, VComp,VVend);
    const Prod = {Desc, Valid, Status, VComp,VVend, UserId:1};
    await blogFetch.post("/posts", {
      body: post,
    });
  };  



  return <div className='Cruds'>
    <h2>Inserir/Alterar Produto:</h2>
    <form onSubmit={(e)=>createProd(e)}>
      <div className="form-control">
        <label htmlFor="Desc">Descrição:</label>
        <input 
          type='text' 
          name='Desc' 
          id='Desc'
          onChange={(e)=>setDesc(e.target.value)}
          />
        <label htmlFor="Valid">Validade(em dias):</label>
        <input 
          type='number' 
          name='Valid' 
          id='Valid'
          onChange={(e)=>SetValid(e.target.value)}/>
        <label htmlFor="Status">Status:</label>
        <select id="Status" onChange={(e)=>setStatus(e.target.value)}>
          <option value="A">Ativo</option>
          <option value="I">Inativo</option>
        </select>   
        <label htmlFor="VComp">Valor de compra:</label>
        <input 
          type='number' 
          name='VComp' 
          id='VComp'
          onChange={(e)=>setVComp(e.target.value)}/>    
        <label htmlFor="VVend">Valor de venda:</label>
        <input 
          type='number' 
          name='VVend' 
          id='VVend'
          onChange={(e)=>setVVend(e.target.value)}/>                          
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
  </div>
}

export default Produtos