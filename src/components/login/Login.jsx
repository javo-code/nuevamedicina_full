import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="btn-login">
      <button type="submit">
        <Link to="/login">Ingresar</Link>
      </button>
    </div>
  );
}

export default Login;
