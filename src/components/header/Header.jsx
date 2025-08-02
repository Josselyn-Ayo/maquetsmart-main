import { NavLink } from "react-router-dom";
import Landing from '../../pages/Landing'; // Corrige el import

const Header = () => {
    return (
        <header className="container__menu">
            <NavLink to="/"><h1>Maquet<span className="container__site">Smart</span></h1></NavLink>

            <nav className="container__nav">
                <NavLink to="/">Nosotros</NavLink>
                <a href="#galeria">Galería</a>
                <a href="#faq">Preguntas Frecuentes</a>
                <NavLink to="/dashboard">Proforma</NavLink>
                <NavLink to="/contacto">Contacto</NavLink>
            </nav>

            <nav>
                <NavLink to="/login" className="button header__button-login">Ingresar</NavLink>
            </nav>
                
        </header>
    );
};

export default Header;
