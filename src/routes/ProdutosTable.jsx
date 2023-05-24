import React from 'react';
import {useState,useEffect} from "react";

const url = "http://localhost:5173/Prod";//colocar get

export const ProdutosTable = () => {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        async function fetchdata(){
            const res = await fetch(url)
            const data = await res.json()
            setProducts(data)
        }
    },[])

    // "result": {
    //     "CODIGO": 1,
    //     "DESCRICAO": "CASCA DE MAÇA",
    //     "DATAAT": "2023-05-24T03:00:00.000Z",
    //     "USERAT": "ADMIN",
    //     "VALIDADE": 90,
    //     "STATUS": "ATIVO",
    //     "VALORCOMPRA": 5.01,
    //     "VALORVENDA": 8.97
    // }

    return (
    <div>
        <h1>Listagem de produtos</h1>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>{product.CODIGO}</li>
            ))}
        </ul>
    </div>
  )
}
