// import React from 'react'
import "./Cruds.css";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3000/api/localizacao";

function Localizacao () {
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
    const localization = {
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

      setlocalizations(data);
    }, []);
    const res = await fetch("http://localhost:3000/localizacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localization),
    });
    const addedlocalization = await res.json();
    // setlocalizations((prevlocalizations) => [...prevlocalizations, addedlocalization]);
    httpConfig(localization, "POST");
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
        <select id="Bloq">
          <option value="S">S</option>
          <option value="N">N</option>
        </select>
            
      </div>
      <input type='submit' value="Salvar" className='btn'/>
    </form>
    <h1>Lista de Localizações</h1>
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <table class="bordered striped centered" className="tabela">
        <thead>
          <tr>
            <th class="conteudo">Código de Localizção</th>
            <th class="conteudo">Descrição de Localizção</th>
            <th class="conteudo">Detalhes</th>
            <th class="conteudo">Unidade Armazenada</th>
            <th class="conteudo">Estoque Máximo</th>
            <th class="conteudo">Bloqueado</th>
            <th class="acoes">Ação</th>
          </tr>
        </thead>
        <tbody>
          {items.result &&
            items.result.map((localization) => (
              <tr key={localization.id}>
                <td class="conteudo">{localization.codigo}</td>
                <td class="conteudo">{localization.descricao}</td>
                <td class="conteudo">{localization.dataat}</td>
                <td class="conteudo">{localization.userat}</td>
                <td class="conteudo">{localization.validade}</td>
                <td class="conteudo">{localization.status}</td>                
                <td class="acoes">
                  <button onClick={() => handleRemove(localization.id)}>Excluir</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
  </div>
}

export default Localizacao