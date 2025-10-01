import"./navbar.css";
import logo from"../../assets/img/Logo.webp";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
    return (
        <div className="NavBar">
            <img src={logo} className="logo" alt="" />
            <ul className="menu">
                <li>Proteina</li>
                <li>Creatina</li>
                <li>Bcaa</li>
            </ul>
            <CardWidget />
        </div>
    )
}
export default NavBar