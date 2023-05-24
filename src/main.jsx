import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, Router} from "react-router-dom";

//Páginas
import Home from "./routes/Home";
import Produtos from "./routes/Produtos";
import Localizacao from "./routes/Localizacao";
import TpMovimentacao from "./routes/TipoMovimento";
import Movimentacao from "./routes/Movimentacao";
import Login from "./routes/Login";
import { ProdutosTable } from './routes/ProdutosTable.jsx';

import "./index.css";

const router = createBrowserRouter([
  {
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/Prod",
        element:<Produtos/>,
      },
      {
        path:"/Loc",
        element:<Localizacao/>,
      },
      {
        path:"/TpMov",
        element:<TpMovimentacao/>,
      },
      {
        path:"/Mov",
        element:<Movimentacao/>,
      },
      {
        path:"/Login",
        element:<Login/>
      },
      {
        path:"/ProdTab",
        element:<ProdutosTable/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
