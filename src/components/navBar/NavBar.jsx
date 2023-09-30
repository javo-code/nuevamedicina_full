import logo from '../../img/logo.png';
import './navBar.css';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import BtnLogin from '../btnLogin/BtnLogin';

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
          <NavLink to='/nutricion' className="BtnCard">Nutricion</NavLink>
        </div>
        <div className="category">
          <NavLink to='/bombas' className="BtnCard">Bombas de Infusión</NavLink>
        </div>
        <div className="category">
          <NavLink to='/descartables' className="BtnCard">Descartables</NavLink>
        </div>
        <div className="category">
          <NavLink to='/servicios' className="BtnCard">Servicios Profesionales</NavLink>
        </div>
      </div>
      <div className="btn-cart">
        <CartWidget />
      </div>
      <div className="LogIn">
        <BtnLogin />
      </div>
    </nav>
  );
};

export default NavBar;
