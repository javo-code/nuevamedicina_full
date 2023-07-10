import logo from '../../img/logo.png';
import './navBar.css';
import CartWidget from '../cartWidget/CartWidget';
import CategoryMenu from '../categoryMenu/CategoryMenu';
import { NavLink, Link } from 'react-router-dom';
import Login from '../login/Login';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <img
          className='logo'
          src={logo}
          alt='logo nueva medicina' />
      </Link>
      <NavLink to={`/`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Inicio</NavLink>
      <div className="CategoryMenu">
        <CategoryMenu />
      </div>
      <CartWidget />
      <div className="btn-login">
        <Login />
      </div>
</nav>
  )
} 

export default NavBar;