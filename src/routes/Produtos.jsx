// import React from 'react'
import "./Cruds.css";
import blogFetch from "../axios/config";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/Prod";

function Produtos () {
  const navigate = useNavigate()
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [Prod, setProds] = useState([])
  const [Desc, setDesc] = useState()
  const [Valid, SetValid] = useState()
  const [Status, setStatus] = useState()
  const [VComp, setVComp] = useState()
  const [VVend, setVVend] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      Desc,
      Valid,
      Status,
      VComp,
      VVend,
    };
    httpConfig(product, "POST");
    setDesc("");
    SetValid("");
    setStatus("");
    setVComp("");
    setVVend("");
  };  

  const handleRemove = (id) =>{
    httpConfig(id,"DELETE");
  }



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
      <br></br>
      <Link to={`/ProdTab`} className="link2">
        Visualizar em Tabela
      </Link>
    </form>
    <h1>Lista de produtos</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.CODIGO}
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul>
  </div>
}

export default Produtos