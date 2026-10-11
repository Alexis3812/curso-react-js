import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Nav.css';

const Nav = ({ brandName, cartCount }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="nav-logo-link"><h2>{brandName}</h2></Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Inicio</Link></li>
        
        {/*  */}
        <li className="dropdown">
          <span className="nav-link dropdown-toggle">Juegos ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/categoria/RPG" className="dropdown-item">RPG</Link></li>
            <li><Link to="/categoria/Survival Horror" className="dropdown-item">Survival Horror</Link></li>
            <li><Link to="/categoria/Shooter" className="dropdown-item">Shooter</Link></li>
          </ul>
        </li>

        <li><Link to="/categoria/Periféricos" className="nav-link">Hardware</Link></li>
      </ul>

      <CartWidget cantidad={cartCount} />
    </nav>
  );
};

export default Nav;