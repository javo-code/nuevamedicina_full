import logo from '../../img/logo.png';
import './navBar.css';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import Login from '../login/Login';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <NavLink to={`/`} className="logo-link">
        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina' />
      </NavLink>
      <div className="menu">
        <div className="category">
          <NavLink to='/category/:categoryId' className="BtnCard">Nutricion</NavLink>
        </div>
        <div className="category">
          <NavLink to='/category/:categoryId' className="BtnCard">Bombas de Infusión</NavLink>
        </div>
        <div className="category">
          <NavLink to='/category/:categoryId' className="BtnCard">Descartables</NavLink>
        </div>
        <div className="category">
          <NavLink to='/category/:categoryId' className="BtnCard">Servicios Profesionales</NavLink>
        </div>
      </div>
      <CartWidget />
      <div className="btn-login">
        <Login />
      </div>
    </nav>
  );
};

export default NavBar;
