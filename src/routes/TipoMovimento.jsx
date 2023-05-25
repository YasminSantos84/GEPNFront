// import React from 'react'
import "./Cruds.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/api/tipomovimentacao";

function TpMovimentacao () {
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
    const tpMovto = {
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

      setTpMovto(data);
    }, []);
    const res = await fetch("http://localhost:3000/tpMovto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tpMovto),
    });
    const addedtpMovto = await res.json();
    // setTpMovto((prevtpMovtos) => [...prevtpMovtos, addedtpMovto]);
    httpConfig(tpMovto, "POST");
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
    <h1>Lista de Tipo de movimentações</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <table class="bordered striped centered" className="tabela">
        <thead>
          <tr>
            <th class="conteudo">Código Tipo Movimento</th>
            <th class="conteudo">Descrição Tipo Movimento</th>
            <th class="conteudo">Data Alt.</th>
            <th class="conteudo">Usuário Alt</th>
            <th class="conteudo">Operação</th>
            <th class="conteudo">Status</th>
            <th class="acoes">Ação</th>
          </tr>
        </thead>
        <tbody>
          {items.result &&
            items.result.map((tpMovto) => (
              <tr key={tpMovto.id}>
                <td class="conteudo">{tpMovto.codigo}</td>
                <td class="conteudo">{tpMovto.descricao}</td>
                <td class="conteudo">{tpMovto.dataat}</td>
                <td class="conteudo">{tpMovto.userat}</td>
                <td class="conteudo">{tpMovto.validade}</td>
                <td class="conteudo">{tpMovto.status}</td>
                <td class="acoes">
                  <button onClick={() => handleRemove(tpMovto.id)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
}

export default TpMovimentacao