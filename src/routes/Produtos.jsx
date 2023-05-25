// import React from 'react'
import "./Cruds.css";
import blogFetch from "../axios/config";
import {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/api/produtos";

function Produtos () {
  const navigate = useNavigate()
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [CODIGO, setCod] = useState([])
  const [DESCRICAO, setDesc] = useState()
  const [VALIDADE, SetValid] = useState()
  const [STATUS, setStatus] = useState()
  const [VALORCOMPRA, setVComp] = useState()
  const [VALORVENDA, setVVend] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      CODIGO,
      DESCRICAO,
      VALIDADE,
      STATUS,
      VALORCOMPRA,
      VALORVENDA,
    };
    useEffect(async () => {
      const res = await fetch(url);

      const data = await res.json();

      setProducts(data);
    }, []);
    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);
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
      {/* <br></br>
      <Link to={`/ProdTab`} className="link2">
        Visualizar em Tabela
      </Link> */}
    </form>
    {/* <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((product) => (
            <li key={product.id}>
              {product.CODIGO}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
      </ul> */}
      <h1>Lista de produtos</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <table class="bordered striped centered" className="tabela">
        <thead>
          <tr>
            <th class="conteudo">Código</th>
            <th class="conteudo">Descrição</th>
            <th class="conteudo">Data Alt.</th>
            <th class="conteudo">Usuário Alt</th>
            <th class="conteudo">Validade</th>
            <th class="conteudo">Status</th>
            <th class="conteudo">V.Compra</th>
            <th class="conteudo">V.Venda</th>
            <th class="acoes">Ação</th>
          </tr>
        </thead>
        <tbody>
          {items.result &&
            items.result.map((product) => (
              <tr key={product.id}>
                <td class="conteudo">{product.codigo}</td>
                <td class="conteudo">{product.descricao}</td>
                <td class="conteudo">{product.dataat}</td>
                <td class="conteudo">{product.userat}</td>
                <td class="conteudo">{product.validade}</td>
                <td class="conteudo">{product.status}</td>
                <td class="conteudo">{product.valorcompra}</td>
                <td class="conteudo">{product.valorvenda}</td>
                <td class="acoes">
                  <button onClick={() => handleRemove(product.id)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
}

export default Produtos