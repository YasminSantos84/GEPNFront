import "./Cruds.css";
import { Link } from "react-router-dom";
import LogoTg from "../imagens/LogoTg.png";
import React from 'react'

const Login = () => {
    return <div className="Cruds">
        <img src={LogoTg} width="300px" height="300px" alt="LOGO" />
        <h3>Login</h3>
        <form>
            <div className="form-control">
                <label htmlFor="User">Usuário</label>
                <input
                    type="text"
                    name="User"
                    id="User"
                />
                <label htmlFor="senha">Senha</label>
                <input
                    type="password"
                    name="senha"
                    id="senha"
                /> 
            </div>
            <Link to={`/`}>
                <input type='submit' value="Salvar" className='btn'/>
            </Link>            
        </form>
    </div>
}

export default Login