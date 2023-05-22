import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="NavBar"> 
        <h2>
            <Link to={`/`}>GEPN</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/Prod`} className="new-btn">
                  Produtos
                </Link>
            </li>
            <li>
                <Link to={`/Loc`} className="new-btn">
                  Localização
                </Link>
            </li>
            <li>
                <Link to={`/TpMov`} className="new-btn">
                  Tipo de Movimento
                </Link>
            </li>
            <li>
                <Link to={`/Mov`} className="new-btn">
                  Movimentação
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar