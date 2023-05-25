// import React from 'react'
import "./Cruds.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/api/movimentacao";

function Movimentacao() {
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
    const moviment = {
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

      setMoviments(data);
    }, []);
    const res = await fetch("http://localhost:3000/movimentacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(moviment),
    });
    const addedmoviment = await res.json();
    // setMoviments((prevmoviments) => [...prevmoviments, addedmoviment]);
    httpConfig(moviment, "POST");
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
    <h1>Lista de Movimentações</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <table class="bordered striped centered" className="tabela">
        <thead>
          <tr>
            <th class="conteudo">Código Lançamento</th>
            <th class="conteudo">Data de Modificação</th>
            <th class="conteudo">Tipo de Lançamento</th>
            <th class="conteudo">Produto</th>
            <th class="conteudo">Usuário Modif.</th>
            <th class="conteudo">Quantidade</th>
            <th class="conteudo">Observação</th>
            <th class="acoes">Ação</th>
          </tr>
        </thead>
        <tbody>
          {items.result &&
            items.result.map((moviment) => (
              <tr key={moviment.id}>
                <td class="conteudo">{moviment.codigo}</td>
                <td class="conteudo">{moviment.descricao}</td>
                <td class="conteudo">{moviment.dataat}</td>
                <td class="conteudo">{moviment.userat}</td>
                <td class="conteudo">{moviment.validade}</td>
                <td class="conteudo">{moviment.status}</td>
                <td class="conteudo">{moviment.valorcompra}</td>
                <td class="acoes">
                  <button onClick={() => handleRemove(moviment.id)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
}

export default Movimentacao