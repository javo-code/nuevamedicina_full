import { Link } from 'react-router-dom';
import "./login.css";

function Login() {
  return (
    <div className="container-btn-login">
      <button type="submit" className="btn btn-success">
        <Link to="/login">Ingresar</Link>
      </button>
    </div>
  );
}

export default Login;
