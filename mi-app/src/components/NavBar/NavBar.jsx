import logo from "../../assets/img/Logo.webp";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>

      <ul className="categories">
        <li>
          <Link to="/category/proteinas" >Proteina</Link>
        </li>
        <li>
          <Link to="/category/creatinas" >Creatina</Link>
        </li>
        <li>
          <Link to="/category/pancakes">Pancakes</Link>
        </li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default NavBar