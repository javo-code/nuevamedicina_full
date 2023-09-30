import { NavLink } from 'react-router-dom';
import "./btnLogin.css";



function BtnLogin() {
  return (
    <div className="main-btnLogIn">
      <button type="submit" className="btn-logIn">
        <NavLink to="/login">Ingresar</NavLink>
      </button> 
    </div>
  );
}

export default BtnLogin;