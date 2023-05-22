import axios from "axios";
import blogFetch from "../axios/config";

import LogoTg from "../imagens/LogoTg.png";
import React from 'react'
import { useState, useEffect } from 'react'

import {Link} from "react-router-dom"

import "./Home.css"

const Home = () => {
  const [Movs, setMovs] = useState([])

  const getMovs = async() => {
    try {
      const response = await blogFetch.get("/posts");
      //ponto a validar com o back -- link vem das bibliotecas do axios
      const data = response.data;
      
      setMovs(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    getMovs()


  }, [])


  return <div className="home">
    <img src={LogoTg} alt="LOGO" />
    <h1>Últimas Movimentações</h1>
    {Movs.length ===0?(<p>Carregando...</p>
    ):(
      Movs.map((Movs)=>(
        <div className="Movs" key={Movs.id}>
          <h2>{Movs.title}</h2>
          <p>{Movs.body}</p>
        </div>
      ))
    )}
  </div>  
}

export default Home